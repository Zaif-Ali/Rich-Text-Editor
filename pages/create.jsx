import Editor from "@/components/Editor";
import Wrapper from "@/components/layout/Wrapper";
import React, { useState } from "react";

const create = () => {
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <Wrapper>
      <Editor initialValue="Just do it" getValue={getValue} />
      <div className="p-8" dangerouslySetInnerHTML={{__html: value}}></div>
    </Wrapper>
  );
};

export default create;
