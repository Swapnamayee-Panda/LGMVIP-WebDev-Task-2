import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2' >
                <input 
                className='pa2 ba b--black bg-white'
                 type="search" 
                 placeholder='Search user by name' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
