import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { POST_URL } from "../../api/config";
import NewPost from "../../components/newpost/NewPost";
import PostCard from "../../components/postcard/PostCard";
import { BASE_COOKIE_ID } from "../../cookies/Cookies";
import Post from "../../model/Post";

const Home = () => {
  const [cookies] = useCookies([BASE_COOKIE_ID]);
  const emptyPosts: Post[] = [];
  const [posts, setPosts] = useState(emptyPosts);

  const { token } = cookies;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const fetchPosts = async () => {
      fetch(POST_URL, requestOptions)
        .then((response) => response.json())
        .then((postsResponse: Post[]) => {
          setPosts(postsResponse);
        });
    };

    fetchPosts();
  }, [token]);

  return (
    <div className="home">
      <NewPost />
      {posts.length > 0 &&
        posts.map((post: Post) => {
          return <PostCard post={post} />;
        })}
    </div>
  );
};

export default Home;
