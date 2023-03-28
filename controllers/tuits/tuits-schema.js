import mongoose from 'mongoose';
const schema = mongoose.Schema({
  profile: String,
  handle: String,
  time: String,
  tuit: String,
  replies: Number,
  retuits: Number,
  likes: Number,
  liked: Boolean,
  image: String
}, {collection: 'tuits'});
export default schema;