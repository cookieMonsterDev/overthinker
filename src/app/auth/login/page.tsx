"use client";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./config";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TextInput } from "@/components/TextInput";

const Login = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const signInResponse = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (signInResponse && !signInResponse.error) router.push("/");
    },
  });

  return (
    <div>
      <h1>Sign in to your account</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <TextInput
          placeholder="Email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextInput
          placeholder="password"
          name="password"
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">Sign in</button>
      </form>
      <p>
        Don’t have an account yet? <Link href="register">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
