// Where I deal with User Collection from db
import prisma from "./db";
import { hashCompare, hashPassword } from "./passwords";
import { User } from "./interfaces";

export async function Register({ name, password }: User) {
  try {
    password = await hashPassword(password);
    const newUser = { data: { name: name, password: password } };
    const res = await prisma.user.create(newUser);
    console.log(res);
    return Response.json({ message: "user sucssfully created", error: "" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "register failed" });
  }
}

export async function Login({ name, password }: User) {
  console.log("login invoke");
  try {
    const res = await prisma.user.findFirst({
      where: {
        name: name,
      },
    });
    if (res && res.password.length > 0) {
      const result = await hashCompare(password, res.password);
      console.log(result);
      return Response.json({
        message: "user sucssfully logined in",
        error: "",
      });
    } else {
      return Response.json({ error: "Can't find User" });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ error: "login in failed" });
  }
}

// export async function Logout() {
//   try {
//     const res = await prisma.work.create(data);
//     console.log("new User has been called succssfully" + res);
//     return Response.json(res);
//   } catch (error) {
//     // is it good to return error
//     return error;
//   }
// }
