import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useSession } from "next-auth/react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validationSchema";
import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import styles from "./CreateArticle.module.scss";
import { createArticle } from "@/lib/services";
import { useRouter } from "next/navigation";

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
        const articleId = await createArticle({
          body,
          token: session?.user.token || "",
        });

        if (articleId) {
          router.push(`articles/${articleId}`);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
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
      />
      <div data-color-mode="light" className={styles.editor}>
        <MDEditor
          value={formik.values.content}
          onChange={handleChange}
          height={"calc(100vh - 4rem - 4.3rem - 13rem)"}
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
