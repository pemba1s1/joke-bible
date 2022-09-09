import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../Context/useSearchContext';

export const SearchBar = () => {
  const { searchKey, setSearchKey, searchList } = useContext(SearchContext);
  return (
    <div className="relative">
      <div className="searchbar">
        <input
          type="text"
          placeholder="How can we make you laugh today?"
          name="search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
      {console.log(searchKey)}
      <div className={`search-list ${searchKey !== '' && searchList.length > 0 ? '' : 'display-none'}`}>
        {searchList.map((item) => (
          <Link to={`/joke/${item.id}&0`}>{item.categories.length > 0 && item.categories[0]} Joke</Link>
        ))}
      </div>
    </div>
  );
};
