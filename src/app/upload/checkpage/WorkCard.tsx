"use client";
// this is rendered as frontend, the action is set as use server in another file
import { useState } from "react";
import { addForm } from "../addForm";
import { formInfo } from "@/lib/data";

const WorkCard = () => {
  const [form, setForm] = useState<formInfo>({
    name: "",
    material: "",
    addedYear: 0,
    size: "",
    img: "",
  });
  // update the form with the extracted information from file
  const extractFileInfo = () => {
    let file = document.getElementById("file") as HTMLInputElement;
    if (file.value === undefined) {
      throw Error("please upload the file first");
    }
    const path = file.value;
    const fileName = path.split(/(\\|\/)/g).pop() as String;
    const fileOutEx = fileName.split(".");
    const info = fileOutEx[0].split(",");
    console.log(info);
    if (info.length < 4) {
      throw Error(
        "Please make sure your filename follows the construction rule. Example: name,addedYear,material,size.img",
      );
    }
    setForm({
      name: info[0],
      addedYear: Number(info[1]),
      material: info[2],
      size: info[3],
      img: "waiting",
    });
  };
  // update the form with the information from user change
  const changeFormValue = (e: {
    target: { name: string; value: string | number };
  }) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setForm({ ...form, [inputName]: inputValue });
  };

  return (
    // form information
    <form action={addForm}>
      <input type="file" name="file" id="file" required />
      <button type="button" onClick={extractFileInfo}>
        提取信息
      </button>
      <label htmlFor="name">作品名称:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={changeFormValue}
        required
      />
      <label htmlFor="material">作品材料:</label>
      <input
        type="text"
        id="material"
        name="material"
        value={form.material}
        onChange={changeFormValue}
        required
      />
      <label htmlFor="addedYear">上传年份:</label>
      <input
        type="number"
        id="addedYear"
        name="addedYear"
        value={form.addedYear}
        onChange={changeFormValue}
        required
      />
      <label htmlFor="size">作品大小:</label>
      <input
        type="text"
        id="size"
        name="size"
        value={form.size}
        onChange={changeFormValue}
        required
      />
      <button>提交数据</button>
    </form>
  );
};

export default WorkCard;
