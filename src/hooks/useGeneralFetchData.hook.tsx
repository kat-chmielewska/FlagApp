import { useEffect, useState } from "react";
import generalCountryURL from "../API/baseURL";

type FetchFn<T> = () => Promise<T[]>;

const useGeneralFetchData = <T,>() => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      fetch(`${generalCountryURL}/all`)
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    setLoading(false);
    fetchData();
  }, []);

  return {
    data,
    loading,
    setData,
    setLoading,
  };
};

export default useGeneralFetchData;
