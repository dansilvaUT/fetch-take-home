import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";

interface PaginationProps {
  count: number;
  onPageChange: (page: number) => void;
  page: number;
  pageSize: number;
}

interface PageChangeDetails {
  page: number;
}
const Pagination = ({
  page,
  count,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  return (
    <PaginationRoot
      page={page}
      count={count}
      pageSize={pageSize}
      onPageChange={(details: PageChangeDetails) => onPageChange(details.page)}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};

export default Pagination;
