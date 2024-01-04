"use client";
// the action is set as use serve in another file
import { useState } from "react";
import { addForm } from "./addForm";
import { FileInfo } from "@/lib/data";
import { error } from "console";

const WorkForm = () => {
  const [form, setForm] = useState({});
  // how to set it to be better
  const extractFileInfo = () => {
    let file = document.getElementById("file");
    if (!file) {
      throw Error("please upload the file first");
    }
    const path = file.value;
    const fileName = path
      .split(/(\\|\/)/g)
      .pop()
      .split(".");
    const info = fileName[0].split(",");
    setForm({
      name: info[0],
      addedYear: info[1],
      material: info[2],
      size: info[3],
    });
    console.log(form);
  };
  const changeFormValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setForm({ ...form, [inputName]: inputValue });
    console.log(form);
  };

  return (
    <form action={addForm}>
      <input type="file" name="file" id="file" required />
      <button onClick={extractFileInfo}>提取信息</button>
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

export default WorkForm;
