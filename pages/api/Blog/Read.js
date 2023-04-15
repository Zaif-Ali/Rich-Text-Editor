import connect from "@/Backend/DataBase/conn";
import BlogPost from "@/Backend/DataBase/model/Blog";
import { Status } from "@/Data/StatusCodes";


export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      const db = await connect();
      // Get all blog posts from database
      const blogPosts = await BlogPost.find();
      response.status(200).json(blogPosts);
    } catch (error) {
      response.status(Status.Internal_Server_Err).json({
        message: error,
        error:true
      });
    }  
  } else {
    response.status(Status.BadRequest).json({
      message: "Invalid API call",
      status: Status.BadRequest,
    });
  }
}