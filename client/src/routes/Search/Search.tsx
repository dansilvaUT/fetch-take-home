import React, { useState, useEffect } from "react";
import {
  Heading,
  Container,
  Button,
  Field,
  Stack,
  Input,
  Group,
  Text,
  Box,
} from "@chakra-ui/react";
import { Dogs } from "@/components/Dogs";
import API from "@/api";
import { Dog } from "@/interfaces/dog";
import Breeds from "@/components/Breeds/Breeds";
import "./Search.scss";

const Search = () => {
  const [dogs, setDogs] = useState([] as Array<Dog>);
  const [breeds, setBreeds] = useState([] as Array<string>);
  const [selectedUserBreeds, setSelectedUserBreeds] = useState<string[]>([]);

  const [filteredBreeds, setFilteredBreeds] = useState([] as Array<string>);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await API.dogsApi.getBreeds();
        setBreeds(response || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBreeds();
  }, []);

  /**
   * Set the filtered breeds based on the search value
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase().trim();
    setFilteredBreeds(
      searchValue
        ? breeds.filter((breed) => breed.toLowerCase().includes(searchValue))
        : []
    );
  };

  /**
   * Submit the form to get the dogs based on the selected breeds
   * @param e
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.dogsApi.getDogs({
        breeds: selectedUserBreeds,
      });
      setFilteredBreeds([]);
      setSelectedUserBreeds([]);
      setDogs(response || []);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Add a breed to the selected breeds to be searched
   * @param breed
   */
  const addBreed = (breed: string) => {
    setSelectedUserBreeds((prev) => {
      return [...prev, breed];
    });
  };

  /**
   * Clear the search and reset the selected breeds and dogs
   */
  const clearSearch = () => {
    setSelectedUserBreeds([]);
    setDogs([]);
  };

  /**
   * Used to display the selected breeds to search
   * @returns JSX.Element[] of the selected breeds to search
   */
  const renderBreedsToSearch = () => {
    const breedsToSearch = selectedUserBreeds.map((breed) => (
      <React.Fragment key={breed}>
        <Text className="BreedText">{breed},</Text>{" "}
      </React.Fragment>
    ));
    return (
      <Box borderBottom={"1px solid"} p={2} mb={4}>
        <Text>Breeds to Search:</Text>
        {breedsToSearch}
      </Box>
    );
  };

  return (
    <Container>
      <Container p={0}>
        <Heading size="5xl" className="Search-Heading">
          Search for Pups
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack gap="5" className="Search-Stack">
            <Field.Root>
              <Field.Label>Search for a specifc breed</Field.Label>
              <Input
                name="breed"
                className="Login-Input"
                placeholder="Search by breed name"
                onChange={handleChange}
              />
            </Field.Root>
            {selectedUserBreeds.length > 0 && <>{renderBreedsToSearch()}</>}
            <Breeds breeds={filteredBreeds} onClick={addBreed} />
          </Stack>
          <Group className="Search-Btns">
            <Button type="submit" colorPalette={"green"}>
              Search
            </Button>
            <Button onClick={clearSearch} colorPalette={"cyan"}>
              Clear Search
            </Button>
          </Group>
        </form>
      </Container>
      <Dogs dogs={dogs} />
    </Container>
  );
};

export default Search;
