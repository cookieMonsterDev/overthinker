"use client";
import { useState } from "react";
import { TextInput } from "../../TextInput";
import { IconsEnum } from "@/common/constants";
import { Button } from "@/components/Button";
import styles from "./Register.module.scss";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validationSchema";
import { useRouter } from "next/navigation";
import { registerUserServise } from "@/services";
import { getAxiosError } from "@/utils/getAxiosError";
import { signIn, useSession } from "next-auth/react";
import { successToast } from "@/common/toastNotifications";

export const RegisterForm = () => {
  const [isPasswordVisible, setPasswordVisible] = useState({
    type: "password",
    icon: IconsEnum.visibilityoff,
  });
  const [isLoading, setLoading] = useState(false);
  const { data: session, update } = useSession();
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

        const res = await registerUserServise(values);

        if (res) {
          const { username, ...rest } = values; 
          successToast("User is created!");
          await signIn('credentials', {
            ...rest,
            redirect:false
          })
          router.push("/");
        }
      } catch (error) {
        const er = getAxiosError(error);
        const field = er.message[0].split(" ")[0];
        formik.setErrors({ [field]: er.message[0] });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <TextInput
        placeholder="Username"
        name="username"
        id="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
      />
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
      <Button
        className={styles.register_button}
        variant="default"
        type="submit"
        isLoading={isLoading}
      >
        Sign up
      </Button>
    </form>
  );
};
