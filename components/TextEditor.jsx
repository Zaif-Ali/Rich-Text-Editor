import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { formats, modules, sanitizeOptions } from "./ModulesFormat";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({content , setContent}) => {

  
  return (
    <>
      <QuillEditor
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder={"Write something awesome..."}
        modules={modules} 
        formats={formats}
      />
      
    </>
  );
};

export default TextEditor;
