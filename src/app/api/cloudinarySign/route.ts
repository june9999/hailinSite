import { v2 as cloudinary } from "cloudinary";

export async function POST(request: Request) {
  const body = await request.json();
  const { paramsToSign } = body;
  console.log(process.env.CLOUDINARY_API_SECRET);

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET as string,
  );

  console.log(signature);
  return Response.json({ signature });
}
