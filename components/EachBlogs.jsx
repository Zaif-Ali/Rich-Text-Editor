import React from "react";
import { sanitizeOptions } from "./ModulesFormat";
import sanitizeHtml from "sanitize-html";
const EachBlogs = ({ title, content }) => {
  const createMarkup = () => {
    return { __html: sanitizeHtml(content, sanitizeOptions) };
  };

  return (
    <>
      <div className="border border-purple-700 mb-4 p-4 bg-slate-200">
        <div className="font-bold text-4xl opacity-80">{title}</div>
        <div
          className="rendered-content opacity-90"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </>
  );
};

export default EachBlogs;
