import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { useContext, useRef } from 'react';
import { AppContext } from '../../app/context';

function Header() {
  const searchQuery = useRef('');
  const { setSearchText } = useContext(AppContext);
  const navigation = useNavigate();
  return (
    <header>
      <Link
        className={styles.rawg}
        to="/"
      >
        RAWG CLONE
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchQuery.current.value.trim() !== '') {
            setSearchText(searchQuery.current.value.trim());
            navigation(`/search/${searchQuery.current.value.trim()}`);
            searchQuery.current.value = '';
          }
        }}
      >
        <input
          className={styles.search}
          ref={searchQuery}
          type="search"
          placeholder="Search more 800,000 games..."
        />
      </form>
    </header>
  );
}

export default Header;
