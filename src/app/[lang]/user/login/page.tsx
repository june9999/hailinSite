import Form from "../Form";
import { userLogin } from "@/app/[lang]/user/action";

const page = () => {
  return <Form method={userLogin} />;
};

export default page;
