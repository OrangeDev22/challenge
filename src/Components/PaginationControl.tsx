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
    <div className="pagination_control">
      {page > 0 && (
        <input
          className="input_button"
          type="submit"
          value="Previous"
          onClick={() => handlePageChange(page - 1)}
        />
      )}
      {page < maxPage - 1 && (
        <input
          type="submit"
          className="input_button"
          value="Next"
          style={{ marginLeft: "auto" }}
          onClick={() => handlePageChange(page + 1)}
        />
      )}
    </div>
  );
};
