import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const getData = setTimeout(() => {
      if (searchKey !== '') {
        axios.get(`https://api.chucknorris.io/jokes/search?query=${searchKey}`).then((response) => {
          let tempData = response.data.result.splice(0, 6);
          setSearchList(tempData);
          console.log(response);
        });
      } else {
        setSearchList([]);
      }
    }, 500);
    return () => clearTimeout(getData);
  }, [searchKey]);

  return <SearchContext.Provider value={{ searchKey, setSearchKey, searchList }}>{children}</SearchContext.Provider>;
};
