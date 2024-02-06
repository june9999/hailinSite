"use client";
import React, { Dispatch, SetStateAction } from "react";
import { WorksToDB } from "../action";
import { useFormState } from "@/src/lib/hooks";
import { WorkInfo } from "@/src/lib/interfaces";

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
    <div className=" py-[5rem]">
      <h2 className="text-3xl font-bold pb-[5rem]">
        Please check the following file infos.
      </h2>
      <form
        className="flex flex-col w-[80%] gap-[1rem]"
        onSubmit={submitHandler}
      >
        <div className="flex items-center justify-center ">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm lg:text-xl text-left text-gray-500 ">
                <thead className="text-xs lg:text-xl text-gray-700 uppercase bg-gray-500 ">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Added Year
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Material
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Size
                    </th>
                    <th scope="col" className="py-3 px-6">
                      URL
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {fileTodb.map((work: WorkInfo, index: number) => {
                    return (
                      <tr
                        key={`index+${work.imgUrl}`}
                        className="bg-gray-200 border-b "
                      >
                        {Object.entries(work).map(([name, value]) => (
                          <>
                            <td>
                              <input
                                name={name}
                                value={fileTodb[index][name]}
                                onChange={(e) => {
                                  changeFormValue(e, name, index);
                                }}
                                required
                              />
                            </td>
                          </>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button className="relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-500 text-lg font-bold text-white">
          提交数据
        </button>
      </form>
      {state.error && <div>{state.error}</div>}
    </div>
  );
};

export default Checkform;
