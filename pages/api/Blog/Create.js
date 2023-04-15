import connect from "@/Backend/DataBase/conn";
import BlogPost from "@/Backend/DataBase/model/Blog";
import { Status } from "@/Data/StatusCodes";


export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      const db = await connect();
      const { title, content } = request.body;
      // Check if blog post with title already exists
      const existingPost = await BlogPost.findOne({ title });
      if (existingPost) {
        return response.status(400).json({
          message: "Blog post with this title already exists",
          status: 400,
        });
      }
      // Create new blog post
      const blogPost = new BlogPost({
        title,
        content,
      });
      // Save blog post to database
      await blogPost.save();
      return response.status(201).json({
        Blog: blogPost,
        status: 201,
      });
    } catch (error) {
      return response.status(Status.Internal_Server_Err).json({
        message: error,
      });
    }
  } else {
    return response.status(400).json({
      message: "invalid Api Call",
      status: 400,
    });
  }
}