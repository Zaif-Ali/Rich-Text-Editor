import Wrapper from "@/components/layout/Wrapper";
import { sanitizeOptions } from "@/components/ModulesFormat";
import TextEditor from "@/components/TextEditor";
import { useState } from "react";
import sanitizeHtml from "sanitize-html";
const BlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/Blogs/Create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const createMarkup = () => {
    return { __html: sanitizeHtml(content, sanitizeOptions) };
  };

  return (
    <Wrapper>
      <div className="mt-16">
        <div className="text-center font-semibold text-xl text-purple-800">
          Create a new blog post
        </div>
        <form onSubmit={handleSubmit}>
          <div className="py-12">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
              placeholder="Add Title here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <TextEditor content={content} setContent={setContent} />
          <div className="mt-12 text-center">
            <button
              type="submit"
              class="inline-block rounded bg-purple-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <div
          className="rendered-content"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </Wrapper>
  );
};

export default BlogPage;
