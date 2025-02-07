import { Card, Text, Stack } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Dog as DogInterface } from "@/interfaces/dog";
import "./Dog.scss";
interface DogProps {
  dog: DogInterface;
}

const Dog = ({ dog }: DogProps) => {
  return (
    <Card.Root className="Dog-Card">
      <Avatar className="Dog-Image" src={dog.img} />
      <Card.Body className="Dog-Card-Body">
        <Card.Title className="Bold">{dog.name}</Card.Title>
        <Stack>
          <Text className="Bold">Breed</Text>
          <Text>{dog.breed}</Text>
        </Stack>
        <Stack>
          <Text className="Bold">Age</Text>
          <Text>{dog.age}</Text>
        </Stack>
        <Stack>
          <Text className="Bold">Zip Code</Text>
          <Text>{dog.zip_code}</Text>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default Dog;
