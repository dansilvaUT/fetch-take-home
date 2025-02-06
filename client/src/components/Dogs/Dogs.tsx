import React from "react";
import Dog from "../Dog/Dog";

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
  const renderDogs = () => {
    return dogs.map((dog: Dog) => {
      return <Dog key={dog.id} dog={dog} />;
    });
  };
  return <div>{renderDogs()}</div>;
};

export default Dogs;
