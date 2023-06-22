import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BorderCountrField,
  BorderCountry,
  ButtonBack,
  InfoCountryField,
  InfoCountryFirstColumn,
  InfoCountrySecoundColumn,
  InfoWrapper,
  SectionWrapper,
  SingleFlag,
} from "../components/CountryCard/CountryCard.styled";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface CountryDetailsProps {
  name: string;
  borders: string[];
  flag: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
}

const CountryPage = () => {
  const [data, setData] = useState<CountryDetailsProps[] | []>([]);
  const params = useParams();

  useEffect(() => {
    const fetchSingleCountry = async () => {
      fetch(
        `https://restcountries.com/v2/name/${params.country}?fields=name,nativeName,capital,region,subregion,borders,flag,population,topLevelDomain,currencies,languages&fullText=true`
      )
        .then((response) => response.json())
        .then((response) => setData((prevData) => [...prevData, ...response]))
        .catch((error) => console.log(error));
    };
    fetchSingleCountry();
  }, []);

  const country = data && data.find((singleCountry) => singleCountry.name === params.country);
  const countryBorders = country && country.borders;

  return (
    <SectionWrapper>
      <Link to={`/`}>
        <ButtonBack>« Back to homepage</ButtonBack>
      </Link>
      <InfoWrapper>
        {country && (
          <>
            <SingleFlag src={country.flag} />
          </>
        )}
        <InfoCountryField>
          {country && (
            <>
              <h2>{country.name}</h2>
            </>
          )}
          <div className="infoCountryWrapper">
            <InfoCountryFirstColumn>
              {country && (
                <>
                  <p>
                    <span className="bold">Native Name:</span> {country.nativeName}
                  </p>
                  <p>
                    <span className="bold">Population:</span> {country.population}
                  </p>
                  <p>
                    <span className="bold">Region:</span> {country.region}
                  </p>
                  <p>
                    <span className="bold">Sub Region:</span> {country.subregion}
                  </p>
                  <p>
                    <span className="bold">Capital:</span> {country.capital}
                  </p>
                </>
              )}
            </InfoCountryFirstColumn>
            <InfoCountrySecoundColumn>
              {country && (
                <>
                  <p>
                    <span className="bold">Top Level Domain:</span> {country.topLevelDomain}
                  </p>
                  <p>
                    <span className="bold">Currencies:</span> {country.currencies[0].code}
                  </p>
                  <p>
                    <span className="bold">Languages:</span> {country.languages[0].name}
                  </p>
                </>
              )}
            </InfoCountrySecoundColumn>
          </div>
          <BorderCountrField>
            <p>
              <span className="bold">Border Countries:</span>
            </p>
            {countryBorders === undefined ? (
              <BorderCountry>No neighbors</BorderCountry>
            ) : (
              country && countryBorders.map((border) => <BorderCountry>{border}</BorderCountry>)
            )}
          </BorderCountrField>
        </InfoCountryField>
      </InfoWrapper>
    </SectionWrapper>
  );
};
export default CountryPage;
