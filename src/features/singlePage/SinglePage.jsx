import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { useApi, useSinglePage } from '../../hooks/useApp';
import styles from './SinglePage.module.css';
import main from './../Home.module.css';
import Like from '../../components/like/Like';

function SinglePage() {
  const { id } = useParams();
  const { API } = useApi();
  const [game, setGame] = useState({});
  const { setIsSingle } = useSinglePage();
  const [listOfRatings, setListOfRatings] = useState([]);
  const [listOfScreenshots, setListOfScreenshots] = useState([]);
  const [dlc, setDlsc] = useState([]);
  const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
  const [fav, setFav] = useState(favorites[id]);
  const [goNew, setGoNew] = useState(false);

  function handleFavoriteToggle(id) {
    setGame({
      ...game,
      isFavorite: !fav
    });
    setFav(!fav);
    if (fav) {
      delete favorites[`${id}`];
    } else {
      favorites[`${id}`] = true;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  async function getDetails() {
    await axios
      .get(`https://api.rawg.io/api/games/${id}?key=${API}`)
      .then((res) => {
        setGame({
          ...res.data,
          isFavorite: fav
        });
        getScreenshots(res.data.slug);
        getDLC(res.data.slug);
        setIsSingle(res.data.background_image);
        setListOfRatings(res.data.ratings);
      })
      .catch((err) => console.log(err));
  }

  const getScreenshots = async (sl) => {
    await axios
      .get(`https://api.rawg.io/api/games/${sl}/screenshots?key=${API}`)
      .then((res) => {
        if (res.data.results) {
          let listScr = res.data.results.map((item) => {
            return item.image;
          });
          setListOfScreenshots(listScr);
        }
      })
      .catch((err) => console.log(err));
  };

  const getDLC = async (sl) => {
    await axios
      .get(`https://api.rawg.io/api/games/${sl}/additions?key=${API}`)
      .then((res) => {
        setDlsc(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const listOfColors = [
    '#b4ec51, #429321',
    '#649bff, #4354b9',
    '#fad961, #f76b1c',
    '#ff5764, #f11a2a'
  ];

  const inputDate = new Date(game.released);
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ];
  const month = months[inputDate.getMonth()];
  const day = inputDate.getDate();
  const year = inputDate.getFullYear();
  const outputDate = `${month} ${day}, ${year}`;

  useEffect(() => {
    if (window.scrollY > 0) {
      window.scroll(0, 0);
    }
    getDetails();
  }, [goNew]);

  return (
    <div className={main.content + ' ' + styles.content}>
      {listOfScreenshots.length !== 0 ? (
        <>
          <div className={styles.mainInfo}>
            <div className={styles.info}>
              <span className={styles.dateStyle}>{outputDate}</span>
              <span>AVERAGE PLAYTIME: {game.playtime} HOURS</span>
            </div>
            <h1>{game.name}</h1>
            <Like
              id={game.id}
              data={game}
              handleFavoriteToggle={handleFavoriteToggle}
            />
            <ul className={styles.ratings}>
              {listOfRatings.length !== 0
                ? listOfRatings.map((item, index) => {
                    return (
                      <li key={item.id}>
                        <div className={styles.smallInfo}>
                          <p>{item.title}</p>
                          <span>{item.count}</span>
                        </div>
                        <div
                          className={styles.widthPercent}
                          style={{
                            backgroundImage: `linear-gradient(to right, ${listOfColors[index]})`,
                            width: `${item.percent}%`
                          }}
                        />
                      </li>
                    );
                  })
                : null}
            </ul>
            <div className={styles.about}>
              <h2>About</h2>
              <p>{game.description_raw}</p>
              <ul>
                {dlc.length !== 0
                  ? dlc.map((item) => {
                      return (
                        <li
                          key={item.id}
                          onClick={() => setGoNew(!goNew)}
                        >
                          <Link to={`/game/${item.id}`}>{item.name}</Link>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
          <div className={styles.screenShoots}>
            <img
              src={listOfScreenshots[0]}
              className={styles.mainScreen}
              alt=""
            />
            <div className={styles.secondScreens}>
              {listOfScreenshots.length !== 0
                ? listOfScreenshots.map((item, index) => {
                    return (
                      <img
                        src={listOfScreenshots[index + 1]}
                        key={item}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default SinglePage;
