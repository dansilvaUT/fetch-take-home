interface PaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
}: PaginationProps) => {
  return (
    <div>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
