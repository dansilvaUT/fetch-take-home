import React, { useState } from "react";
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

const Search = () => {
  interface Dog {
    id: string;
    img: string;
    name: string;
    age: number;
    zip_code: string;
    breed: string;
  }
  const [dogs, setDogs] = useState([] as Array<Dog>);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.dogsApi.getDogs();

      setDogs(response || []);
    } catch (error) {
      console.error(error);
    }
  };

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
              />
            </Field.Root>
          </Stack>
          <Button type="submit">Search</Button>
        </form>
      </Container>
      <Dogs dogs={dogs} />
    </Container>
  );
};

export default Search;
