const { createContext, useState } = require('react');

export const AppContext = createContext();

export function AppProvider({ children }) {
  const API = '11dfd9775ee340d0b835a35429851591';

  const [display, setDisplay] = useState(1);

  const [isSingle, setIsSingle] = useState('');

  const [searchText, setSearchText] = useState('');

  return (
    <AppContext.Provider
      value={{
        API,
        display,
        setDisplay,
        isSingle,
        setIsSingle,
        searchText,
        setSearchText
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
