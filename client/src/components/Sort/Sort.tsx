import { Button, Group, Heading, Container } from "@chakra-ui/react";
import { SortTypes } from "@/utils/sortUtils";

interface SortProps {
  selectedSort: string;
  setSortType: (sortType: string) => void;
}

const Sort = ({ selectedSort, setSortType }: SortProps) => {
  return (
    <Container p={0} mb={3}>
      <Heading size="md" mb={2}>
        Sort Results by Breed or Age
      </Heading>
      <Group>
        {Object.values(SortTypes).map((filter: string) => (
          <Button
            key={filter}
            {...(filter === SortTypes.CLEAR
              ? { variant: "outline" }
              : { variant: selectedSort === filter ? "solid" : "outline" })}
            onClick={() => setSortType(filter)}
            colorPalette={"cyan"}
          >
            {filter}
          </Button>
        ))}
      </Group>
    </Container>
  );
};

export default Sort;
