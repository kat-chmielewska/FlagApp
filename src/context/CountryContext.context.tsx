import { createContext, Dispatch, ReactNode, SetStateAction, useContext } from "react";
import useGeneralFetchData from "../hooks/useGeneralFetchData.hook";
import { countryProps } from "../components/CountryList/CountryList.component";

interface CountryContextState {
  data: countryProps[] | [];
  loading: boolean;
}

const initialState = {
  data: [],
  loading: false,
};

interface ProviderProps {
  children: ReactNode;
}

export const CountryDataContext = createContext<CountryContextState>(initialState);

export const CountryDataContextProvider = ({ children }: ProviderProps) => {
  return <CountryDataContext.Provider value={useGeneralFetchData()}>{children}</CountryDataContext.Provider>;
};

export const useData = () => useContext(CountryDataContext).data;
