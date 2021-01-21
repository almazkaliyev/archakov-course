import React from 'react';

export const SearchContext = React.createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChange = (value) => {
    setSearchQuery(value.toLowerCase());
  }

  return (
    <SearchContext.Provider value={{ searchQuery, onChange }}>
      {children}
    </SearchContext.Provider>
  );
};
