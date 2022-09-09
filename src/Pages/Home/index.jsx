import React from 'react';
import Button from '../../Components/Button';
import ArrowDown from '../../assets/assets_Homework_Front-End_01/path-copy-7.png';
import { Tags } from '../../Components/Tags';
import { JokeCard } from '../../Components/JokeCard';

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
          <div className="inner-view">
            View All<img src={ArrowDown} alt="down"></img>
          </div>
        </Button>
      </div>
      <div className="joke-list">
        <Tags label="Social Jokes" />
        <div className="joke-container">
          <JokeCard
            title="Lawyer Joke"
            content="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <JokeCard
            title="Lawyer Joke"
            content="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <JokeCard
            title="Lawyer Joke"
            content="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <JokeCard
            title="Lawyer Joke"
            content="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <JokeCard
            title="Lawyer Joke"
            content="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <JokeCard
            title="Lawyer Joke"
            content="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
        </div>
        <div className="view-more-joke">
          <Button color="view-more">
            <div className="inner-view">
              View All<img src={ArrowDown} alt="down"></img>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
