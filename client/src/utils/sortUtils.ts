import { Dog } from "../interfaces/dog";

export const SortTypes = {
  BREED: "Breed",
  AGE: "Age",
  CLEAR: "Clear Sort",
} as const;

const sortByBreed = (dogs: Dog[]): Dog[] => {
  return [...dogs].sort((a, b) => b.breed.localeCompare(a.breed));
};

const sortByAge = (dogs: Dog[]): Dog[] => {
  return [...dogs].sort((a, b) => a.age - b.age);
};

const clearSort = (dogs: Dog[]): Dog[] => {
  return dogs;
};

export const getSortFunction = (sortType: string) => {
  switch (sortType) {
    case SortTypes.BREED:
      return sortByBreed;
    case SortTypes.AGE:
      return sortByAge;
    case SortTypes.CLEAR:
    default:
      return clearSort;
  }
};
