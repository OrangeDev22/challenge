import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_BLOGS } from "../GraphQL/queries";
import { PaginationControl } from "./PaginationControl";

const MAX_PER_PAGE = 10;

function BlogList() {
  const { error, loading, data } = useQuery(GET_ALL_BLOGS);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(10);
  const [maxPage, setMaxPage] = useState(10);

  useEffect(() => {
    if (!loading) {
      const { posts } = data;
      console.log(posts.data.length);
      setMaxPage(posts.data.length / MAX_PER_PAGE);
      setBlogs(posts.data);
    }
  }, [data]);

  const handlePageChange = (newPage: number) => {
    if (newPage < maxPage && newPage >= 0) {
      console.log(newPage);
      setPageStart(newPage * MAX_PER_PAGE);
      setPageEnd(MAX_PER_PAGE + MAX_PER_PAGE * newPage);
      setPage(newPage);
    }
  };

  return (
    <div>
      {blogs.slice(pageStart, pageEnd).map(({ id, title, body }) => (
        <Blog title={title} body={body} key={id} />
      ))}
      <PaginationControl
        page={page}
        maxPage={maxPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default BlogList;
