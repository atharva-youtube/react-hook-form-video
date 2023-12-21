"use client";

import { useForm } from "react-hook-form";
import { registerInputSchema } from "@/types/inputs";
import type { RegisterInput } from "@/types/inputs";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RFH() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerInputSchema),
  });

  function onSubmit(data: RegisterInput) {
    console.log(data);
    alert("User created successfully!");
  }

  return (
    <div className="p-10">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
          <input
            className="border border-black px-5 py-3"
            placeholder="Email"
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
          <input
            className="border border-black px-5 py-3"
            placeholder="Password"
            type="password"
            {...register("password")}
          />
        </div>
        <div>
          {errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message}</p>
          )}
          <input
            className="border border-black px-5 py-3"
            placeholder="Confirm Password"
            type="password"
            {...register("confirmPassword")}
          />
        </div>
        <div>
          {errors.firstName && (
            <p className="text-red-600">{errors.firstName.message}</p>
          )}
          <input
            className="border border-black px-5 py-3"
            placeholder="First Name"
            type="text"
            {...register("firstName")}
          />
        </div>
        <div>
          {errors.lastName && (
            <p className="text-red-600">{errors.lastName.message}</p>
          )}
          <input
            className="border border-black px-5 py-3"
            placeholder="Last Name"
            type="text"
            {...register("lastName")}
          />
        </div>
        <button type="submit" className="bg-black text-white px-5 py-3">
          Submit
        </button>
      </form>
    </div>
  );
}
