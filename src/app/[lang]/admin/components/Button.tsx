import { WorkInfo } from "@/src/lib/interfaces";

async function callDelete(e: string) {
  const res = await fetch(`/api/works/${e}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    console.log("Delete successful");
  } else {
    console.error("Failed to delete:", res.status);
  }
}

const Button: React.FC<{ work: WorkInfo }> = ({ work }) => {
  return (
    <button
      onClick={() => {
        callDelete(work.id as string);
      }}
    >
      Delete
    </button>
  );
};

export default Button;
