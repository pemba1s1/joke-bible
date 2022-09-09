import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button';
import ArrowDown from '../../assets/assets_Homework_Front-End_01/path-copy-7.png';
import { Tags } from '../../Components/Tags';
import { JokeCard } from '../../Components/JokeCard';
import axios from 'axios';
import Spinner from '../../Components/Spinner';

const Home = () => {
  const [cata, setCata] = useState(null);
  const [noOfCata, setNoOfCata] = useState(7);
  const [tag, setTag] = useState({ tag: '', idx: '' });
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCatagory();
  }, []);

  useEffect(() => {
    setJokes([]);
    if (tag.tag !== '') {
      getJokes(tag.tag);
    }
  }, [tag.tag]);

  const fetchCatagory = async () => {
    await axios.get('https://api.chucknorris.io/jokes/categories').then((res) => {
      setCata(res.data);
      setTag({ tag: res.data[0], idx: 0 });
    });
  };

  const getJokes = async (category) => {
    let tempJoke = [];
    let i = 0;
    while (i < 6) {
      await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then((res) => {
        tempJoke.push(res.data);
      });
      i = i + 1;
    }
    setJokes((prevValue) => [...prevValue, ...tempJoke]);
    setLoading(false);
  };

  const onClickViewMoreCata = () => {
    if (noOfCata === 7) {
      setNoOfCata(cata.length);
    } else {
      setNoOfCata(7);
    }
  };

  const colors = [
    'bg-red',
    'bg-paleorange',
    'bg-pastelorange',
    'bg-lightgold',
    'bg-kiwigreen',
    'bg-weirdgreen',
    'bg-blue',
  ];

  const onCataClick = (val, idx) => {
    setTag({ tag: val, idx });
    console.log(val);
  };

  return (
    <div className="home">
      <div className="btn-container">
        {cata &&
          cata.map(
            (cat, index) =>
              index < noOfCata && (
                <Button onClick={() => onCataClick(cat, index % 7)} color={colors[index % 7]}>
                  {cat}
                </Button>
              ),
          )}
        <Button color="view-more">
          <div className="inner-view" onClick={onClickViewMoreCata}>
            {noOfCata === 7 ? (
              <>
                View All<img src={ArrowDown} alt="down"></img>
              </>
            ) : (
              <>View Less</>
            )}
          </div>
        </Button>
      </div>
      <div className="joke-list">
        {tag && <Tags color={colors[tag.idx]} label={tag.tag} />}
        <div className="joke-container">
          {jokes && jokes.length >= 6 ? (
            jokes.map((joke) => <JokeCard title={`${tag.tag} Joke`} content={joke.value} />)
          ) : (
            <Spinner />
          )}
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="view-more-joke">
            <Button color="view-more">
              <div
                className="inner-view"
                onClick={() => {
                  setLoading(true);
                  getJokes(tag.tag);
                }}
              >
                View More<img src={ArrowDown} alt="down"></img>
              </div>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
