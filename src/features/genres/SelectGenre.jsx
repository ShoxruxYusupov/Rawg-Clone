import { useApi, useDisplayOptions } from '../../hooks/useApp';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameBox from '../../components/gameBox/GameBox';
import styles from './../Home.module.css';
import DisplayOption from '../../components/displayOption/DisplayOption';
import Loader from '../../components/loader/Loader';
import GoUp from '../../components/goUp/GoUp';

function SelectGenre() {
  const { genre } = useParams();
  const { API } = useApi();
  const { display } = useDisplayOptions();
  const [listOfGames, setListOfGames] = useState([]);
  let [listCount, setListCount] = useState(1);

  function getGames() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    axios
      .get(
        `https://api.rawg.io/api/games?key=${API}&genres=${genre}&page=${listCount}&page_size=20`
      )
      .then((res) => {
        if (res.data.results) {
          let newResults = res.data.results.map((game) => ({
            ...game,
            isFavorite: favorites[game.id] || false
          }));
          setListOfGames([...listOfGames, ...newResults]);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    listCount = 1;
    listOfGames.length = 0;
    setListOfGames([]);
  }, [genre]);

  useEffect(() => {
    getGames();
  }, [listCount, genre]);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
      setListCount(listCount + 1);
    }
  });

  return (
    <div className={styles.content}>
      <GoUp />
      <h1>{genre.toUpperCase()} Games</h1>
      <DisplayOption />
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
        {listOfGames.length
          ? listOfGames.map((item) => {
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
      <Loader />
    </div>
  );
}

export default SelectGenre;
