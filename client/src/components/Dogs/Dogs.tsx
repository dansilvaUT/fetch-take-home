import DogComp from "../Dog/Dog";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Pagination } from "../Pagination";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface DogsProps {
  dogs: Array<Dog>;
}

const Dogs = ({ dogs }: DogsProps) => {
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const startRange = (page - 1) * itemsPerPage;
  const endRange = startRange + itemsPerPage;

  const visibleItems = dogs.slice(startRange, endRange);

  const renderDogs = () => {
    return visibleItems.map((dog: Dog) => {
      return <DogComp key={dog.id} dog={dog} />;
    });
  };
  return (
    <Container>
      {renderDogs()}
      <Pagination
        page={page}
        count={dogs.length}
        pageSize={itemsPerPage}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </Container>
  );
};

export default Dogs;
