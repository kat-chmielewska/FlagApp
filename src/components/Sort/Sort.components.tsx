import { SortField, SortElement } from "./Sort.styled";
import { Dispatch, SetStateAction } from "react";

interface sortProps {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}

const Sort = ({ sort, setSort }: sortProps) => {
  return (
    <SortField value={sort} onChange={(event) => setSort(event.target.value)}>
      <SortElement selected hidden>
        Filter by Region
      </SortElement>
      <SortElement value="africa">Africa</SortElement>
      <SortElement value="america">America</SortElement>
      <SortElement value="asia">Asia</SortElement>
      <SortElement value="europe">Europe</SortElement>
      <SortElement value="oceania">Oceania</SortElement>
    </SortField>
  );
};

export default Sort;
