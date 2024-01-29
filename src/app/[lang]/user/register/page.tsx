import Form from "../Form";
import { newUserCreate } from "../action";

const page = () => {
  return <Form method={newUserCreate} />;
};

export default page;
