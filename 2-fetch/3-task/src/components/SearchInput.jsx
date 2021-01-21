import React from 'react';

import { SearchContext } from '../searchContext';

const SearchInput = () => {
  const { searchQuery, onChange } = React.useContext(SearchContext);
  
  return (
    <input
      className="input search-input"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Поиск пользователя..."
      type="text"
      value={searchQuery}
    />
  );
};

export default SearchInput;
