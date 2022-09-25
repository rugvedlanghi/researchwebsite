import Springer_JC from './Springer_JC';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SpringerApiComponent=()=> {
    const APP_ID= "4cda16a8d96a74bed2bbd565aae6abec";
    const [search,setSearch] =useState("");
    const [journals,setJournals] =useState([]);
    const [query,setQuery] =useState("");
  
    useEffect(() => {
      geturl();
    },[query]);
  
    const geturl = async () => {
      const response = await fetch(`https://api.springernature.com/metadata/json?q=name:${query}&api_key=${APP_ID}`);
      const data = await response.json();
      setJournals(data.records);
      // console.log(data.records);
    }
  
    const updateSearch = (e) => {
      setSearch(e.target.value);
      // console.log(search);
    };
  
    const getSearch = (e) => {
      e.preventDefault();
      setQuery(search);
    }
  return (
    <div className='er'>
        <form onSubmit={getSearch} >
            <h2>SPRINGER</h2>
            <input value={search} onChange={updateSearch} type="text" />
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
        <div>
          {journals.map(journals =>(
                <Springer_JC key={journals.title} title={journals.title} publisher={journals.publisher} abstract={journals.abstract}/>
        ))}
        </div>
    </div>
  )
}

export default SpringerApiComponent;