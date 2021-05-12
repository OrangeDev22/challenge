import React from "react";

interface BlogProps {
  title: string;
  body: string;
}

export const Blog: React.FC<BlogProps> = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <div>
        <input type="submit" value="Edit" />
        <input type="submit" value="Delete" />
      </div>
    </div>
  );
};
