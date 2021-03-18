import React, { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { POST_URL } from "../../api/config";
import { BASE_COOKIE_ID } from "../../cookies/Cookies";

const NewPost = () => {
  const [cookies] = useCookies([BASE_COOKIE_ID]);
  const [text, setText] = useState("");

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const currentState = { text };
    const { token } = cookies;

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentState),
    };

    fetch(POST_URL, requestOptions).then(() =>
      window.location.replace("/home")
    );
  };

  return (
    <div className="card text-white bg-secondary m-4">
      <div className="card-body">
        <h5 className="card-title">New Post</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            id="postMessageInput"
            placeholder="Your message..."
            onChange={handleMessageChange}
          />
          <button type="submit" className="btn btn-light mt-3">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
