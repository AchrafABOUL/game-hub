import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputRightElement />
      <Input borderRadius={20} placeholder="Search games..." variant="filled"></Input>
    </InputGroup>
  );
};
export default SearchInput;
