import mongoose from 'mongoose'

const postItemSchema = new mongoose.Schema(
  {
    img: { type: String, requored: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    title: { type: String, required: true },
    brief: { type: String, default: null },
    avatar: { type: String, default: null },
    author: { type: String, defaulot: null },
    top: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

const PostItem =
  mongoose.models.postitem || mongoose.model('postitem', postItemSchema)

export default PostItem
