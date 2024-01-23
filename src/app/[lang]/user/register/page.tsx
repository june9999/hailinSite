import Form from "../Form";
import { newUserCreate } from "@/app/[lang]/user/action";

const page = () => {
  return <Form method={newUserCreate} />;
};

export default page;
