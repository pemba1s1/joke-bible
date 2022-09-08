import React from 'react';
import Img from '../../assets/assets_Homework_Front-End_01/bitmap.png';
import { SearchBar } from '../Search';

const MainTitle = () => {
  return (
    <div className="relative">
      <img src={Img}></img>
      <div className="maintitle">
        <h1>The Joke Bible</h1>
        <h2>Daily Laughs for you and yours</h2>
        <SearchBar />
      </div>
    </div>
  );
};

export default MainTitle;