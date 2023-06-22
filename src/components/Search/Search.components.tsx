import { SearchField } from "./Search.styled";
import { Dispatch, SetStateAction } from "react";

interface searchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const Search = ({ query, setQuery }: searchProps) => {
  return <SearchField value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Enter the name of the country" />;
};

export default Search;
