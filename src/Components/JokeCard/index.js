import SubmitArrow from '../../assets/assets_Homework_Front-End_01/path-copy-2.png';
import Lightning from '../../assets/assets_Homework_Front-End_01/green-light-copy-2.png';
import { Link } from 'react-router-dom';

export const JokeCard = ({ title, joke, colorIdx }) => {
  return (
    <Link to={`/joke/${joke.id}&${colorIdx}`} className="joke-card">
      <p className="joke-title">
        <img src={Lightning} alt="x"></img>
        {title}
      </p>
      <p className="joke-content">{joke.value}</p>
      <div className="joke-end">
        <button className="btn-alt">
          See Stats<img src={SubmitArrow} alt="x"></img>
        </button>
      </div>
    </Link>
  );
};
