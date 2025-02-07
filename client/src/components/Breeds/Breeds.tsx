import { Box, Text } from "@chakra-ui/react";
import "./Breeds.scss";

interface BreedsProps {
  breeds: string[];
  onClick: (breed: string) => void;
}

const Breeds = ({ breeds, onClick }: BreedsProps) => {
  const renderBreeds = () => {
    return breeds.map((breed) => {
      return (
        <Text
          className="Breeds-Breed"
          key={breed}
          onClick={() => onClick(breed)}
        >
          {breed}
        </Text>
      );
    });
  };
  return <Box className="Breeds-Container">{renderBreeds()}</Box>;
};

export default Breeds;
