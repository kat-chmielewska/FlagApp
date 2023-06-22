import { CountryCard, Flag, CountryInfos, CountryNameHeadline, StyledLink } from "./SingleCard.styled";
import { countryProps } from "../CountryList/CountryList.component";

interface singleCardProps {
  info: countryProps;
}

export const SingleCard = ({ info }: singleCardProps) => {
  const { flag, name, population, region, capital } = info;
  return (
    <CountryCard>
      <Flag src={flag} alt="Country flag" />
      <CountryInfos>
        <StyledLink to={`${name}`}>
          <CountryNameHeadline>{name}</CountryNameHeadline>
        </StyledLink>
        <p>
          <span className="bold">Population:</span> {population}
        </p>
        <p>
          <span className="bold">Region:</span> {region}
        </p>
        <p>
          <span className="bold">Capital:</span> {capital}
        </p>
      </CountryInfos>
    </CountryCard>
  );
};
