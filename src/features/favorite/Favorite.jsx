import { useApi, useDisplayOptions } from '../../hooks/useApp';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GameBox from '../../components/gameBox/GameBox';
import styles from './../Home.module.css';
import DisplayOption from '../../components/displayOption/DisplayOption';
import Loader from '../../components/loader/Loader';
import GoUp from '../../components/goUp/GoUp';
import { Link } from 'react-router-dom';

function Favorite() {
  const { API } = useApi();
  const { display } = useDisplayOptions();
  const [listOfGames, setListOfGames] = useState([]);
  let newObj = [];

  const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
  const favoriteGames = Object.keys(favorites);
  function getGames() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    const favoriteGames = Object.keys(favorites);
    favoriteGames.map((item) => {
      axios
        .get(`https://api.rawg.io/api/games/${item}?key=${API}`)
        .then((res) => {
          newObj.push({
            ...res.data,
            isFavorite: true
          });
          setListOfGames(listOfGames.concat(newObj));
        })
        .catch((err) => console.log(err));
    });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className={styles.content}>
      <GoUp />
      <h1>My library</h1>
      <DisplayOption  />
      <div
        className={styles.gameContent}
        style={
          display === 1
            ? {
                gridTemplateColumns: `repeat(${display}, 1fr)`,
                width: '60%',
                margin: '0 auto'
              }
            : null
        }
      >
        {listOfGames.length !== 0
          ? listOfGames.reverse().map((item) => {
              return (
                <GameBox
                  key={item.id}
                  data={item}
                  options={display}
                  listOfGames={listOfGames}
                  setListOfGames={setListOfGames}
                />
              );
            })
          : null}
      </div>
      {favoriteGames.length === 0 && listOfGames.length === 0 ? (
        <>
          <h1 style={{ textAlign: 'center', padding: '20px 0', color: 'grey' }}>
            Library is Empty
          </h1>
          <Link
            to="/"
            className={styles.linkToHome}
          >
            Go to Home
          </Link>
        </>
      ) : listOfGames.length === 0 ? (
        <Loader />
      ) : null}
    </div>
  );
}

export default Favorite;
