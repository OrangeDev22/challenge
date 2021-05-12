import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_BLOGS } from "../GraphQL/queries";

function BlogList() {
  const { error, loading, data } = useQuery(GET_ALL_BLOGS);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (!loading) {
      const { posts } = data;
      setBlogs(posts.data);
    }
  }, [data]);

  return (
    <div>
      {blogs.map(({ id, title, body }) => (
        <Blog title={title} body={body} key={id} />
      ))}
    </div>
  );
}

export default BlogList;
