import DogComp from "../Dog/Dog";
import { Container } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { Pagination } from "../Pagination";
import { Sort } from "../Sort";
import { SortTypes, getSortFunction } from "@/utils/sortUtils";
import { Dog } from "@/interfaces/dog";

interface DogsProps {
  dogs: Array<Dog>;
}

const Dogs = ({ dogs }: DogsProps) => {
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState<string>(SortTypes.CLEAR);

  /**
   * Sort the dogs based on the selected sort type
   */
  const sortedDogs = useMemo(() => {
    const sortFunction = getSortFunction(sortType);
    return sortFunction([...dogs]);
  }, [dogs, sortType]);

  const startRange = (page - 1) * itemsPerPage;
  const endRange = startRange + itemsPerPage;

  const visibleItems = sortedDogs.slice(startRange, endRange);

  /**
   * Display paginated dogs
   * @returns JSX.Element[]
   */
  const renderDogs = () => {
    return visibleItems.map((dog: Dog) => {
      return <DogComp key={dog.id} dog={dog} />;
    });
  };

  if (!dogs.length) return null;
  return (
    <Container mt={4} mb={4} p={0}>
      <Sort selectedSort={sortType} setSortType={setSortType} />
      {renderDogs()}
      <Pagination
        page={page}
        count={sortedDogs.length}
        pageSize={itemsPerPage}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </Container>
  );
};

export default Dogs;
