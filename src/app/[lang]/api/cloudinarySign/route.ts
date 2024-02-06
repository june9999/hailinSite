import { cloudinary } from "@/src/lib/cloudinary";

console.log("??");
export async function POST(request: Request) {
  console.log(request);
  const body = await request.json();
  console.log(body);
  const { paramsToSign } = body;

  console.log(process.env.CLOUDINARY_API_SECRET);
  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET as string,
  );
  console.log(signature);
  return Response.json({ signature });
}
