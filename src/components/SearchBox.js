import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='f6 f5-l input-reset bn black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;