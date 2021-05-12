import React from "react";

interface PaginationProps {
  page: number;
  maxPage: number;
  handlePageChange: (newPage: number) => void;
}

export const PaginationControl: React.FC<PaginationProps> = ({
  page,
  maxPage,
  handlePageChange,
}) => {
  return (
    <div>
      {page > 0 && (
        <input
          type="submit"
          value="Previous"
          onClick={() => handlePageChange(page - 1)}
        />
      )}
      {page < maxPage - 1 && (
        <input
          type="submit"
          value="Next"
          onClick={() => handlePageChange(page + 1)}
        />
      )}
    </div>
  );
};
