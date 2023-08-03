import { useState } from "react";
import { TextInput } from "../../TextInput";
import { IconsEnum } from "@/common/constants";
import { Button } from "@/components/Button";
import styles from "./Login.module.scss";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validationSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isPasswordVisible, setPasswordVisible] = useState({
    type: "password",
    icon: IconsEnum.visibilityoff,
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePasswordVisibility = () => {
    if (isPasswordVisible.type === "password") {
      setPasswordVisible({ type: "text", icon: IconsEnum.visibility });
    } else {
      setPasswordVisible({
        type: "password",
        icon: IconsEnum.visibilityoff,
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const signInResponse = await signIn("credentials", {
          ...values,
          redirect: false,
        });

        if (signInResponse?.error) {
          setError(signInResponse.error);
        }

        if (!signInResponse?.error) {
          router.push("/");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <TextInput
        placeholder="Email"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <TextInput
        placeholder="Password"
        type={isPasswordVisible.type}
        icon={isPasswordVisible.icon}
        onIconClick={handlePasswordVisibility}
        name="password"
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      {error && <span className={styles.error_message}>{error}</span>}
      <Button
        className={styles.login_button}
        variant="default"
        type="submit"
        isLoading={isLoading}
      >
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
