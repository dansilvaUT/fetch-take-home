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
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dogs.length / itemsPerPage);

  const currentItems = dogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const renderDogs = () => {
    return currentItems.map((dog: Dog) => {
      return <DogComp key={dog.id} dog={dog} />;
    });
  };
  return (
    <Container>
      {renderDogs()}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </Container>
  );
};

export default Dogs;
