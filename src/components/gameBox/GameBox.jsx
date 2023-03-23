import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../../hooks/useApp';
import Like from '../like/Like';
import styles from './GameBox.module.css';
import ImageCarousel from './ImageCarousel';

function GameBox({ data, options, setListOfGames, listOfGames }) {
  const { API } = useApi();
  const [listOfScreenshots, setListOfScreenshots] = useState([]);

  useEffect(() => {
    getScreenshots(data.slug);
  }, []);

  // Вот пример функции, которая принимает объект и возвращает новый объект,
  // содержащий только те свойства, у которых значение равно true:
  function filterObject(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => value === true)
    );
  }

  const handleFavoriteToggle = (id) => {
    const updatedGames = listOfGames.map((game) => {
      if (game.id === id) {
        return { ...game, isFavorite: !game.isFavorite };
      } else {
        return game;
      }
    });

    setListOfGames(updatedGames);

    // Сохраняем избранное состояние в localStorage
    const favorites = updatedGames.reduce((acc, game) => {
      acc[game.id] = game.isFavorite;
      return acc;
    }, {});
    const oldFav = JSON.parse(localStorage.getItem('favorites')) || {};
    const filteredObj = filterObject({ ...oldFav, ...favorites });
    localStorage.setItem('favorites', JSON.stringify(filteredObj));
  };

  const getScreenshots = (sl) => {
    axios
      .get(`https://api.rawg.io/api/games/${sl}/screenshots?key=${API}`)
      .then((res) => {
        if (res.data.results) {
          let listScr = res.data.results.map((item) => {
            return item.image;
          });
          setListOfScreenshots([data.background_image, ...listScr]);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.gameBox}>
      <ImageCarousel
        images={listOfScreenshots}
        options={options}
      />
      <Like
        data={data}
        id={data.id}
        handleFavoriteToggle={handleFavoriteToggle}
      />
      <div className={styles.info}>
        <div className={styles.text}>
          <Link to={`/game/${data.id}`}>
            <h2>{data.name}</h2>
          </Link>
          <p>
            <span>+</span> {data.added}
          </p>
        </div>
        <div
          className={styles.dropdown}
          style={
            options === 1 ? { height: 'min-content', position: 'static' } : null
          }
        >
          <li>
            <p>Release date:</p>
            <span>{data.released}</span>
          </li>
          <li>
            <p>Genres:</p>
            <span>
              {data.genres.map((item) => {
                return <p key={item.id}>{item.name}</p>;
              })}
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default GameBox;
