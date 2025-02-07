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
        <Text key={breed} onClick={() => onClick(breed)}>
          {breed}
        </Text>
      );
    });
  };
  return <Box>{renderBreeds()}</Box>;
};

export default Breeds;
