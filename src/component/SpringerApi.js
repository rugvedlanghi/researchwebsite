import Journal_component from './Journal_component';
import { useEffect, useState } from 'react';

const SpringerApiComponent=()=> {
    const APP_ID= "4cda16a8d96a74bed2bbd565aae6abec"
    // const url= `https://api.springernature.com/metadata/json?q=name:hughes%20year:2014&s=1&p=5&api_key=${APP_ID}`;
  
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
    <div>
        <form onSubmit={getSearch} >
            <h2>Springer</h2>
            <input value={search} onChange={updateSearch} type="text" />
            <button>Search</button>
        </form>
        <div className="p-5">
          {journals.map(journals =>(
                <Journal_component key={journals.title} title={journals.title} publisher={journals.publisher} abstract={journals.abstract}/>
        ))}
        </div>
    </div>
  )
}

export default SpringerApiComponent;