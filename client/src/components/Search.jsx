import React from 'react'
import { FaSearch } from "react-icons/fa";


function Search() {

  return (
    <div>
      <form className='relative'>
        <FaSearch className='absolute top-1 left-2 '/>
        <input placeholder="Search" className="searchInput rounded-xl " />
      </form>
    </div>
  )
}

export default Search
