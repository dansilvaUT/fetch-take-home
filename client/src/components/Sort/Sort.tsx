import { Button, Group, Heading, Container } from "@chakra-ui/react";
import { SortTypes } from "@/utils/sortUtils";

interface SortProps {
  selectedSort: string;
  setSortType: (sortType: string) => void;
}

const Sort = ({ selectedSort, setSortType }: SortProps) => {
  return (
    <Container>
      <Heading size="md">Sort Results by Breed or Age</Heading>
      <Group>
        {Object.values(SortTypes).map((filter: string) => (
          <Button
            key={filter}
            {...(filter === SortTypes.CLEAR
              ? { variant: "outline" }
              : { variant: selectedSort === filter ? "solid" : "outline" })}
            onClick={() => setSortType(filter)}
          >
            {filter}
          </Button>
        ))}
      </Group>
    </Container>
  );
};

export default Sort;
