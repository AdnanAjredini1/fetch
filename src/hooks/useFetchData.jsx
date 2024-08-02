import { useEffect } from "react";
import { useState } from "react"


export default function useFetchData(url) {
   const [data, setData] = useState();
   const [error, setError] = useState(false);
   const [isFetching, setIsFetching] = useState(true);
   useEffect(() => {
    const fetchFn = async () => {
        setIsFetching(true);
    try {
       const response = await fetch(url);

       if(!response.ok) {
          throw new Error('Error');
       }

       const fetchedData = await response.json();
       setData(fetchedData)
    } catch (error) {
        setError(true);
    } finally {
      setIsFetching(false)
    }
}
 fetchFn();
   },[url]);
  return {data, isFetching , error}
}

