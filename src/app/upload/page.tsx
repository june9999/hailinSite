import { rejects } from "assert";
import { addData } from "../../lib/works";
import { WorkInfo } from "../../lib/works";
import { cloudinary } from "../../lib/cloudinary";
interface FileInfo {
  size: number;
  type: string;
  name: string;
  lastModified: number;
  arrayBuffer: () => Promise<ArrayBuffer>;
}
interface hasUrl {
  url: string;
}

const WorkForm = async () => {
  async function action(formData: FormData) {
    "use server";
    // to check from the serve side if the value is empty, starting from the second value
    let loopNumber = 1;
    for (const pair of formData.entries()) {
      if (loopNumber > 1 && !pair[1]) {
        throw Error(`${pair[0]} value is ${pair[1]}`);
      }
      loopNumber++;
    }

    if (!formData.get("file")) {
      throw new Error("file is empty");
    } else {
      try {
        const file = formData.get("file") as FileInfo;
        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadResult: hasUrl = await new Promise((resolve) => {
          cloudinary.uploader
            .upload_stream((error: any, Result: any) => {
              return resolve(Result);
            })
            .end(buffer);
        });
        const WorkInfo: WorkInfo = {
          data: {
            name: formData.get("name") as string,
            material: formData.get("material") as string,
            addedYear: parseInt(formData.get("addedYear") as string),
            size: formData.get("size") as string,
            img: uploadResult.url as string,
          },
        };
        console.log(WorkInfo);
        addData(WorkInfo);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <form action={action}>
      <input type="file" name="file" id="file" required />
      <button>提取信息</button>
      <label htmlFor="name">作品名称:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="size">作品大小:</label>
      <input type="text" id="size" name="size" required />
      <label htmlFor="material">作品材料:</label>
      <input type="text" id="material" name="material" required />
      <label htmlFor="addedYear">上传年份:</label>
      <input type="number" id="addedYear" name="addedYear" required />
      <button>提交数据</button>
    </form>
  );
};

export default WorkForm;
