import React from 'react';
import Button from '../../Components/Button';
import ArrowDown from '../../assets/assets_Homework_Front-End_01/path-copy-7.png';

const Home = () => {
  const colors = [
    'bg-red',
    'bg-paleorange',
    'bg-pastelorange',
    'bg-lightgold',
    'bg-kiwigreen',
    'bg-weirdgreen',
    'bg-blue',
  ];
  const cata = ['Adult Jokes', 'Dad Jokes', 'Christmas Jokes', 'Job Jokes', 'Birthday Jokes', 'Social Jokes', 'Puns'];
  return (
    <div className="home">
      <div className="btn-container">
        {cata.map((cat, index) => (
          <Button color={colors[index]}>{cat}</Button>
        ))}
        <Button color="view-more">
          <div className="flex">
            View All<img src={ArrowDown} alt="down"></img>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Home;
