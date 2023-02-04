import React, { useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'

const SearchBar = () => {
    
  const [input, setInput] = useState('');
  
  const navigate = useNavigate();
  
  const searchBarInputHandler = (event) => {
    setInput(event.target.value);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    navigate('/searchresults/' + input)
  };
  
  
  return (
    <form className='wrapper' onSubmit={submitHandler}>
    <div className='wrap'>
    <input className='searchbar' placeholder='search recipes' onChange={searchBarInputHandler} type='text' value={input}/>
    <button className='search-button'>
        <IconContext.Provider value={{className: 'search-bar-icon'}}>
          <MdOutlineSearch />
        </IconContext.Provider>
      </button>
    </div>
    </form>
  )
}

export default SearchBar