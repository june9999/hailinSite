"use client";
import { WorkInfo } from "@/lib/interfaces";
import { useFormState } from "@/lib/hooks";
import React from "react";
import { WorksToDB } from "../action";
//  where we got the value from the response

const Checkform = ({ FileTodb, setFileTodb }) => {
  const changeFormValue = (event) => {
    const cpFile = FileTodb;
    cpFile[event.currentTarget.key].value = event.target;
    setFileTodb(cpFile);
  };

  const { state, submitHandler } = useFormState(WorksToDB);

  //   [{name: , material: , ...},{name: , material: , ...},...]
  return (
    <form onSubmit={submitHandler}>
      {FileTodb.map((work: WorkInfo, index: number) => {
        return (
          <div key={index}>
            {Object.entries(work).map(([key, value]) => (
              <>
                <label htmlFor={key}>{key}:</label>
                <input
                  key={index}
                  value={value}
                  name={key}
                  onChange={changeFormValue}
                  required
                />
              </>
            ))}
          </div>
        );
      })}
      <button>提交数据</button>
      {state.error && <div>{state.error}</div>}
    </form>
  );
};

export default Checkform;
