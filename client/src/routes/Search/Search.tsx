import React, { useState, useEffect } from "react";
import {
  Heading,
  Container,
  Button,
  Field,
  Stack,
  Input,
} from "@chakra-ui/react";
import { Dogs } from "@/components/Dogs";
import API from "@/api";
import { Dog } from "@/interfaces/dog";
import Breeds from "@/components/Breeds/Breeds";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase().trim();
    setFilteredBreeds(
      searchValue
        ? breeds.filter((breed) => breed.toLowerCase().includes(searchValue))
        : []
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.dogsApi.getDogs({
        breeds: selectedUserBreeds,
      });
      setFilteredBreeds([]);
      setDogs(response || []);
    } catch (error) {
      console.error(error);
    }
  };

  const addBreed = (breed: string) => {
    setSelectedUserBreeds((prev) => {
      return [...prev, breed];
    });
  };

  const clearSearch = () => {
    setSelectedUserBreeds([]);
    setDogs([]);
  };

  console.log(selectedUserBreeds);

  return (
    <Container>
      <Container>
        <Heading size="5xl">Search for Pups</Heading>
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
            <Breeds breeds={filteredBreeds} onClick={addBreed} />
          </Stack>
          <Button type="submit">Search</Button>
          <Button onClick={clearSearch}>Clear Search</Button>
        </form>
      </Container>
      <Dogs dogs={dogs} />
    </Container>
  );
};

export default Search;
