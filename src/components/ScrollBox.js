import React from 'react';
import './SearchBox.scss';

const SearchBox=({searchfield,searchChange})=>{
  return (
    <div className='searchBox'>
    <input 
      type="search" 
      placeholder='search robots'
      onChange={searchChange}
    />
    </div>
  )
};

export default SearchBox;