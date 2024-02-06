import { deleteData } from "@/src/lib/works";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  console.log("involing delete");
  console.log(id);
  const res = await deleteData(id);
  const data = await res.json();
  return Response.json(data);
}
