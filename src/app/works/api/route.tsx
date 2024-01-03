import { getData } from "@/lib/works";

// route: works/api
export async function GET() {
  try {
    const res = await getData();
    console.log("getData has been called succssfully" + res);
    return Response.json(res);
  } catch (error) {
    // is it good to return error
    return error;
  }
}
