"use client";
import { useState } from "react";
import { TextInput } from "../../TextInput";
import { IconsEnum } from "@/common/constants";
import { Button } from "@/components/Button";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validationSchema";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { update } = useSession();
  const [isPasswordVisible, setPasswordVisible] = useState({
    type: "password",
    icon: IconsEnum.visibilityoff,
  });
  const [isLoading, setLoading] = useState(false);
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
        const res = await signIn("credentials", {
          ...values,
          redirect: false,
        });

        if (res?.error) {
          formik.setErrors({ email: res.error, password: res.error });
        }

        if (!res?.error) {
          update();
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
    <form
      className="flex flex-col items-center gap-6 w-10/12"
      onSubmit={formik.handleSubmit}
    >
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
        className="mt-12 min-w-[15rem] rounded-3xl text-xl"
        variant="default"
        type="submit"
        isLoading={isLoading}
      >
        Sign in
      </Button>
    </form>
  );
};
