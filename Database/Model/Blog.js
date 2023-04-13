import { Schema, model, models } from "mongoose";

const blogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create blog post model
const BlogPost = models.BlogPost || model("BlogPost", blogPostSchema);

export default BlogPost;
