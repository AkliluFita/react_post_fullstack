import mongoose from 'mongoose'

const PostUserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    position:{
        type: String,
        required:true
    },
    age:{
        type: String,
        default:""
    },
    phoneNum:{
      type: String,
      required:true
  },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true })

export default mongoose.model("PostUser", PostUserSchema)
