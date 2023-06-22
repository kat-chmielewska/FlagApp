import Search from "../components/Search/Search.components";
import Sort from "../components/Sort/Sort.components";
import CountryList from "../components/CountryList/CountryList.component";

import { useState, useContext } from "react";
import { HashLoader } from "react-spinners";
import { ClipLoaderStyle } from "../components/UI/Loader/ClipLoader.styled";
import { CountryDataContext } from "../context/CountryContext.context";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");

  /* -------------------- Extract props from general fetch data via Context API -------------------- */

  const { data, loading } = useContext(CountryDataContext);

  /* -------------------- Searcher and Sort -------------------- */

  const searchSortData = data.filter((info) => {
    return info.name.toLowerCase().includes(query.toLowerCase()) && info.region.toLowerCase().includes(sort.toLowerCase());
  });

  return (
    <>
      <div className="App">
        <Search query={query} setQuery={setQuery} />
        <Sort sort={sort} setSort={setSort} />
        {loading ? (
          <ClipLoaderStyle>
            <HashLoader color={"#1C1C1C"} size={50} />
          </ClipLoaderStyle>
        ) : (
          <CountryList infos={searchSortData} />
        )}
      </div>
    </>
  );
};

export default HomePage;
