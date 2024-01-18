import Form from "../Form";
import { userLogin } from "@/app/user/action";

const page = () => {
  return <Form method={userLogin} />;
};

export default page;
