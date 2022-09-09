import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Context/useSearchContext';
import Lightning from '../../assets/assets_Homework_Front-End_01/green-light-copy-2.png';

export const SearchBar = () => {
  const { searchKey, setSearchKey, searchList } = useContext(SearchContext);
  const navigate = useNavigate();

  const onlyOneResult = (searchList) => {
    setSearchKey('');
    navigate(`/joke/${searchList[0].id}&0`);
  };
  return (
    <div className="relative">
      <div className="searchbar">
        <input
          type="text"
          placeholder="How can we make you laugh today?"
          name="search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
      <div className={`search-list ${searchKey !== '' && searchList.length > 0 ? '' : 'display-none'}`}>
        {searchList.length === 1 && onlyOneResult(searchList)}
        {searchList.map((item) => (
          <Link to={`/joke/${item.id}&0`} key={item.id}>
            <img src={Lightning} alt="x"></img>
            {item.categories.length > 0 && item.categories[0]} Joke
          </Link>
        ))}
      </div>
    </div>
  );
};
