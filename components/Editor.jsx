import React, { useRef, useState } from "react";
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const Editor = ({ initialValue, getValue }) => {

    const editor = useRef(null);

  return (
    <div>
      <JoditEditor
        theme="dark"
        ref={editor}
        value={initialValue}
        // config={config}
        // tabIndex={1}
        //   onBlur={(newContent) => getValue(newContent)}
        filebrowser='true'
        onChange={(newContent) => getValue(newContent)}
      />
    </div>
  );
};

export default Editor;
