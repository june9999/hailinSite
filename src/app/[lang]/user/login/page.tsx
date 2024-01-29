import Form from "../Form";
import { userLogin } from "../action";

const page = () => {
  return <Form method={userLogin} />;
};

export default page;
