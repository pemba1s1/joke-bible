import React, { useState } from 'react';
import { Tags } from '../../Components/Tags';
import ArrowLeft from '../../assets/assets_Homework_Front-End_02/arrow-left-copy-2.png';
import ArrowRight from '../../assets/assets_Homework_Front-End_02/arrow-left-copy.png';
import Like from '../../assets/assets_Homework_Front-End_02/hand.png';
import Dislike from '../../assets/assets_Homework_Front-End_02/hand-copy.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Joke = () => {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  let navigate = useNavigate();

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
  return (
    <div className="home">
      <div>
        <button className="back-btn" onClick={() => navigate('/')}>
          <img src={ArrowLeft} alt="A"></img>
        </button>
      </div>
      <div className="joke-page-content">
        <div className="col-1">
          <div className="joke-detail">
            <div className="flex space-between">
              <Tags label="Social Jokes" />
              <p className="orange">Trending</p>
            </div>
            <div className="joke-desc">
              <h1>The Granny Joke</h1>
              <p>
                lorem lorem lorem v v v lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem
                lorem lorem
              </p>
            </div>
          </div>
          <div className="flex space-between">
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
              <button>
                <img src={ArrowLeft} alt="A"></img>PREV. JOKE
              </button>
              <button>
                NEXT JOKE
                <img src={ArrowRight} alt="A"></img>
              </button>
            </div>
          </div>
        </div>
        <div className="top-jokes">
          <h1>The Top 10 Jokes This Week</h1>
          <ul>
            <li>
              <Link to="#">Smoking Joke</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Smoking Joke</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Smoking Joke</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Smoking Joke</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Smoking Joke</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Smoking Joke</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Smoking Joke</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Smoking Joke</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Joke;
