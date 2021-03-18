import React from "react";
import Post from "../../model/Post";

interface PostCardProps {
  post: Post;
}

const PostCard = (props: PostCardProps) => {
  const { post } = props;
  // eslint-disable-next-line radix
  const date = Number.parseInt(post.postedAt);
  const postedAt = new Date(date).toLocaleString();

  return (
    <div className="card m-4">
      <div className="card-body">
        <h5 className="card-title">@{post.postedBy.username}</h5>
        <h6 className="card-subtitle text-muted">
          {post.postedBy.firstName} {post.postedBy.lastName}
        </h6>
        <blockquote className="blockquote">
          <p className="card-text mt-4">{post.text}</p>
        </blockquote>
        <p className="card-text text-muted">
          <small>
            <em>{postedAt}</em>
          </small>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
