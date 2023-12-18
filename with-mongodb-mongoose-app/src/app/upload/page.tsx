"use client";
import React, { useState } from "react";

interface Work{
  name:string
  type:string
  year:number
  size:string
  image_url: string
}

const Upload = () => {
  const [photoSave, setPhotoSave] = useState({});

  const changeHandler = (e: any) => {
    setPhotoSave({ ...photoSave, [e.target.name]: e.target.value });
  };
  
  const postData = async (form: Work) => {
    try {
      const res = await fetch('/api/pets', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error(res.status.toString())
      }

    } catch (error) {
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postData(photoSave) 
    } else {
      
    }
  }
  
  console.log(photoSave)
  return (
    <div>
      <form>
        <label htmlFor="createdYear">年份</label>
        <input
          type="number"
          maxLength={4}
          minLength={4}
          name="createdYear"
          onChange={changeHandler}
          required
        />
        <label htmlFor="name">名字</label>
        <input type="string" name="name" onChange={changeHandler} required />
        <label htmlFor="size">大小</label>
        <input type="string" name="size" onChange={changeHandler} required />
        <label htmlFor="type">材料</label>
        <input type="string" name="type" onChange={changeHandler} required />
      </form>
    </div>
  );
};

export default Upload;
