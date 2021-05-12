import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_BLOGS } from "../GraphQL/queries";
import { PaginationControl } from "./PaginationControl";

const MAX_PER_PAGE = 10;

function BlogList() {
  interface blog {
    id: string;
    title: string;
    body: string;
  }

  const { error, loading, data } = useQuery(GET_ALL_BLOGS);
  const [blogs, setBlogs] = useState<blog[]>([]);
  const [page, setPage] = useState(0);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(10);
  const [maxPage, setMaxPage] = useState(10);

  useEffect(() => {
    if (!loading) {
      const { posts } = data;
      setBlogs(posts.data);
    }
  }, [data]);

  useEffect(() => {
    const newMaxPage = blogs.length / MAX_PER_PAGE;
    newMaxPage === page && handlePageChange(page - 1);
    setMaxPage(newMaxPage);
  }, [blogs]);

  const handlePageChange = (newPage: number) => {
    if (newPage < maxPage && newPage >= 0) {
      setPageStart(newPage * MAX_PER_PAGE);
      setPageEnd(MAX_PER_PAGE + MAX_PER_PAGE * newPage);
      setPage(newPage);
    }
  };

  return (
    <div className="blog_list">
      {blogs.slice(pageStart, pageEnd).map(({ id, title, body }, index) => (
        <Blog id={id} title={title} body={body} key={id} setBlogs={setBlogs} />
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
