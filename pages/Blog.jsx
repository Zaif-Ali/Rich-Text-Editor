import useFetchBlogs from "@/Hook/FetchBlog";
import React from "react";

const Blog = () => {
  const { loading, blogs } = useFetchBlogs();
  console.log(blogs);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h1>{blog.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Blog;
