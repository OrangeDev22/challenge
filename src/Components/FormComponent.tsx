import React, { useEffect, useState } from "react";
import { CREATE_BLOG, UPDATE_BLOG } from "../GraphQL/Mutations";

import { useMutation } from "@apollo/client";

interface blog {
  id: string;
  title: string;
  body: string;
}

interface FormComponentProps {
  id?: string;
  title: string;
  body: string;
  type: string;
  setBlogs: React.Dispatch<React.SetStateAction<blog[]>>;
}

export const FormComponent: React.FC<FormComponentProps> = ({
  id,
  title,
  body,
  type,
  setBlogs,
}) => {
  const [titleValue, setTitle] = useState<string>(title);
  const [bodyValue, setBody] = useState<string>(
    body.length > 150 ? body.slice(0, 150) : body
  );
  const [updateBlog] = useMutation(UPDATE_BLOG);
  const [createBlog, { error, data }] = useMutation(CREATE_BLOG);

  const createBlogHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (bodyValue && titleValue) {
      const input = {
        title: titleValue,
        body: bodyValue,
      };
      switch (type) {
        case "new_post":
          createBlog({
            variables: {
              input,
            },
          });
          break;
        case "update_post":
          updateBlog({
            variables: {
              id: id,
              input,
            },
          });
          break;
      }
    }
  };

  useEffect(() => {
    if (data) {
      setBlogs((prev) => [...prev, data.createPost]);
      setBody("");
      setTitle("");
    }
  }, [data]);

  return (
    <form className="mutate_blog_form" onSubmit={createBlogHandler}>
      <div className="input_wrapper">
        <input
          className="form_input"
          type="text"
          maxLength={15}
          placeholder="Title"
          value={titleValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setTitle(e.target.value);
          }}
        />
        <p className="input_length">{`${titleValue.length}/30`}</p>
      </div>
      <div className="input_wrapper">
        <input
          className="form_input"
          type="text"
          maxLength={150}
          placeholder="Body"
          value={bodyValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setBody(e.target.value);
          }}
        />
        <p className="input_length">{`${bodyValue.length}/150`}</p>
      </div>

      <div style={{ display: "flex" }}>
        <button style={{ marginLeft: "auto" }} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
