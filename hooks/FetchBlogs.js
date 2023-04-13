import { useState, useEffect } from "react";

const useFetchBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/Blogs/Read");
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { loading, blogs };
};

export default useFetchBlogs;
