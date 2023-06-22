import { CardGrid } from "./CountryList.styled";
import { SingleCard } from "../SingleCard/SingleCard.component";

export interface countryProps {
  id: number;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface countryListProps {
  infos: countryProps[];
}

const CountryList = ({ infos }: countryListProps) => {
  return (
    <CardGrid>
      {infos.map((info) => (
        <SingleCard key={info.id} info={info} />
      ))}
    </CardGrid>
  );
};

export default CountryList;
