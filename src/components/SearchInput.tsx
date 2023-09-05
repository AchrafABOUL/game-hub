import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) onSearch(ref.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputRightElement />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};
export default SearchInput;
