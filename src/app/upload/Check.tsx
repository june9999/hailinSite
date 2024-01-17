import React from "react";


  const Check = ((props: Props)) => {
    const [filesTodb, setFileTodb] = props.FileTodb ;
    
    // update the form with the information from user change
    const changeFormValue = ()=>{}
  
    return (
      // form information
      {file.map((e)=> {return 
       (
        <>
        <label htmlFor="name">作品名称:</label>
        <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={changeFormValue}
        required
        />
        <label htmlFor="material">作品材料:</label>
        <input
        type="text"
        id="material"
        name="material"
        value={material}
        onChange={changeFormValue}
        required
        />
        <label htmlFor="addedYear">上传年份:</label>
        <input
        type="number"
        id="addedYear"
        name="addedYear"
        value={addedYear}
        onChange={changeFormValue}
        required
        />
        <label htmlFor="size">作品大小:</label>
        <input
        type="text"
        id="size"
        name="size"
        value={size}
        onChange={changeFormValue}
        required
        />
        </>
        ) 
      })}
    );
  };
  
  export default Check;
  
