import { useState } from "react";
import { useSession } from "next-auth/react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validationSchema";
import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import styles from "./CreateArticle.module.scss";
import { useRouter } from "next/navigation";
import { MarkDownEditor } from "@/components/MarkDownEditor";
import { createArticleService } from "@/services/article";
import { successToast } from "@/common/toastNotifications";

export const CreateArticleForm = () => {
  const [isLoading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (body) => {
      try {
        setLoading(true);
        const articleId = await createArticleService({
          body,
          token: session?.user.token || "",
        });

        if (articleId) {
          successToast("Article is published!")
          router.push(`${session?.user.username}/${articleId}`);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        formik.resetForm();
      }
    },
  });

  const handleChange = (e: string | undefined) => {
    e && formik.setFieldValue("content", e);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <TextInput
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={formik.values.title}
        error={formik.errors.title}
        onChange={formik.handleChange}
        withAnimation={false}
      />
      <div data-color-mode="light" className={styles.editor}>
        <MarkDownEditor
          value={formik.values.content}
          onChange={handleChange}
          height={"calc(100vh - 4rem - 4.3rem - 13rem)"}
          error={formik.errors.content}
        />
      </div>
      <Button
        variant="success"
        type="submit"
        className={styles.submit_button}
        isLoading={isLoading}
      >
        Publish
      </Button>
    </form>
  );
};
