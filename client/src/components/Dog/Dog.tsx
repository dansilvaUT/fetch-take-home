import { Card, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface DogProps {
  dog: Dog;
}

const Dog = ({ dog }: DogProps) => {
  return (
    <Card.Root>
      <Avatar src={dog.img} />
      <Card.Title>{dog.name}</Card.Title>
      <Text>{dog.breed}</Text>
      <Text>{dog.age}</Text>
      <Text>{dog.zip_code}</Text>
    </Card.Root>
  );
};

export default Dog;
