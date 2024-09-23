import React from 'react';
import { BiSearch, BiCurrentLocation } from 'react-icons/bi';
import './SearchBar.css';
function SearchBar({city, setCity, handleSearch, getCurrentLocation}) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Enter city name" 
      value={city}
      onChange={(e) => setCity(e.target.value)} 
      className='city-input' />
      <button onClick={handleSearch}>
        <BiSearch />
      </button>
      <button onClick={getCurrentLocation}>
        <BiCurrentLocation />
      </button>
    </div>
  );
}

export default SearchBar;
