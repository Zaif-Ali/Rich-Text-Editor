import EachBlogs from "@/components/EachBlogs";
import useFetchBlogs from "@/hooks/FetchBlogs";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const { loading, blogs } = useFetchBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <>
            <EachBlogs title={blog?.title} content={blog?.content} />
          </>
        ))}
    </div>
  );
};

export default Blogs;
