import User from "./User";

interface Post {
  id: string;
  text: string;
  postedAt: string;
  isDeleted: boolean;
  postedBy: User;
}

export default Post;
