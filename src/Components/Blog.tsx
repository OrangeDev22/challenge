import React from "react";

interface BlogProps {
  title: string;
  body: string;
}

export const Blog: React.FC<BlogProps> = ({ title, body }) => {
  return (
    <div className="blog">
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="blog_buttons_container">
        <input type="submit" value="Edit" className="input_button" />
        <input type="submit" value="Delete" className="input_button delete" />
      </div>
    </div>
  );
};
