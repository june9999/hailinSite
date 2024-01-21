"use client";
import { WorkInfo } from "@/lib/interfaces";
import { useFormState } from "@/lib/hooks";
import React, { Dispatch, SetStateAction } from "react";
import { WorksToDB } from "../action";

type Props = {
  fileTodb: WorkInfo[];
  setFileTodb: Dispatch<SetStateAction<WorkInfo[]>>;
};

const Checkform = ({ fileTodb, setFileTodb }: Props) => {
  const { state, submitHandler } = useFormState(WorksToDB, fileTodb);

  const changeFormValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    index: number,
  ) => {
    setFileTodb((prevFile) => {
      const cpFile = [...prevFile]; // Create a shallow copy to avoid mutating the state directly
      cpFile[index][key] = e.target.value;
      return cpFile;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {fileTodb.map((work: WorkInfo, index: number) => {
        return (
          <div key={`index+${work.imgUrl}`}>
            {Object.entries(work).map(([name, value]) => (
              <>
                <label htmlFor={name}>{name}:</label>
                <input
                  name={name}
                  value={fileTodb[index][name]}
                  onChange={(e) => {
                    changeFormValue(e, name, index);
                  }}
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
