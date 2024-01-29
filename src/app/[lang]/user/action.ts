// Where from the serve side, how do we deal with the form information
// the function using is wrapped at the lib
"use server";

import { Login, Register } from "@/src/lib/users";

// overall, serve side - 1. validation 2. call the db

export async function newUserCreate(formData: FormData) {
  if (!formData.get("name") || !formData.get("password")) {
    return { error: "Validation error" };
  }
  const result = await Register({
    name: formData.get("name") as string,
    password: formData.get("password") as string,
  });
  return result;
}

export async function userLogin(formData: FormData) {
  if (!formData.get("name") || !formData.get("password")) {
    return { error: "Validation error" };
  }
  const result = await Login({
    name: formData.get("name") as string,
    password: formData.get("password") as string,
  });
  return result;
}
