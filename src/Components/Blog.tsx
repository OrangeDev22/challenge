import React, { useState } from "react";
import { DELETE_BLOG } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { FormComponent } from "./FormComponent";

interface blog {
  id: string;
  title: string;
  body: string;
}

interface BlogProps {
  id: string;
  title: string;
  body: string;
  setBlogs: React.Dispatch<React.SetStateAction<blog[]>>;
}

export const Blog: React.FC<BlogProps> = ({ id, title, body, setBlogs }) => {
  const [deleteBlog, { error }] = useMutation(DELETE_BLOG);
  const [showForm, setShowForm] = useState(false);

  const deleteBlogHandler = (id: string) => {
    deleteBlog({
      variables: {
        id: id,
      },
    });

    if (error) {
      console.log(error);
    } else {
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    }
  };

  return (
    <div className="blog">
      <h3>{title}</h3>
      <p>{body.length > 150 ? `${body.slice(0, 150)}...` : body}</p>
      <div className="blog_buttons_container">
        <input
          type="submit"
          value="Edit"
          className="input_button"
          onClick={() => setShowForm((prev) => !prev)}
        />
        <input
          type="submit"
          value="Delete"
          className="input_button delete"
          onClick={() => deleteBlogHandler(id)}
        />
      </div>
      {showForm && (
        <FormComponent
          id={id}
          title={title}
          body={body}
          setBlogs={setBlogs}
          type={"update_post"}
        />
      )}
    </div>
  );
};
