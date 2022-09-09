import { useEffect, useState } from 'react';
import { Tags } from '../../Components/Tags';
import ArrowLeft from '../../assets/assets_Homework_Front-End_02/arrow-left-copy-2.png';
import ArrowRight from '../../assets/assets_Homework_Front-End_02/arrow-left-copy.png';
import Like from '../../assets/assets_Homework_Front-End_02/hand.png';
import Dislike from '../../assets/assets_Homework_Front-End_02/hand-copy.png';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Components/Spinner';
import { colors } from '../../Constants/colors';
import { Label } from '../../Components/Label';

const Joke = () => {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  let navigate = useNavigate();
  let param = useParams();
  let [joke, setJoke] = useState(null);
  let [topTen, setTopTen] = useState(null);

  useEffect(() => {
    setDislike(0);
    setLike(0);
    axios.get(`https://api.chucknorris.io/jokes/${param.id}`).then((res) => {
      setJoke(res.data);
    });
  }, [param.id]);

  useEffect(() => {
    fetchTopTen();
  }, []);

  const fetchTopTen = async () => {
    let tempTen = [];
    let i = 0;
    while (i < 10) {
      await axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
        tempTen.push(res.data);
      });
      i = i + 1;
    }
    setTopTen(tempTen);
  };

  const incrementLike = () => {
    setLike(like + 1);
  };
  const incrementDislike = () => {
    setDislike(dislike + 1);
  };
  const decrementLike = () => {
    setLike(like--);
  };
  const decrementDislike = () => {
    setDislike(dislike--);
  };

  const getNextJoke = async (category) => {
    setDislike(0);
    setLike(0);
    if (category) {
      await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then((res) => {
        setJoke(res.data);
      });
    } else {
      await axios.get(`https://api.chucknorris.io/jokes/random`).then((res) => {
        setJoke(res.data);
      });
    }
  };
  return (
    <div className="home">
      <div>
        <button className="back-btn" onClick={() => navigate('/')}>
          <img src={ArrowLeft} alt="A"></img>
        </button>
      </div>
      <div className="joke-page-content">
        <div className="col-1">
          {joke ? (
            <div className="joke-detail">
              <div className="flex space-between">
                <Tags
                  label={`${joke.categories.length > 0 ? joke.categories[0] : ''} Joke`}
                  color={colors[param.colorIdx]}
                />
                <Label like={like} />
              </div>
              <div className="joke-desc">
                <h1>{joke.categories[0]} joke</h1>
                <p>{joke.value}</p>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
          <div className="flex space-between joke-desc-btm-btn">
            <div className="flex gap-20">
              <div className="center">
                <button className="like-btn" onClick={incrementLike}>
                  <img src={Like} alt="like"></img>
                </button>
                <p>{like}</p>
              </div>
              <div className="center">
                <button className="dislike-btn" onClick={incrementDislike}>
                  <img src={Dislike} alt="dislike"></img>
                </button>
                <p>{dislike}</p>
              </div>
            </div>
            <div className="nav-btn">
              <button onClick={() => getNextJoke(joke && joke.categories.length > 0 && joke.categories[0])}>
                <img src={ArrowLeft} alt="A"></img>PREV. JOKE
              </button>
              <button onClick={() => getNextJoke(joke && joke.categories.length > 0 && joke.categories[0])}>
                NEXT JOKE
                <img src={ArrowRight} alt="A"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="top-jokes">
          <h1>The Top 10 Jokes This Week</h1>
          {topTen ? (
            <ul>
              {topTen.map((top) => (
                <li key={top.id}>
                  <Link to={`/joke/${top.id}&0`}>{top.categories[0]} Joke</Link>
                </li>
              ))}
            </ul>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Joke;
