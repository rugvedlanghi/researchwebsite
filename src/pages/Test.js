import Eric_JC from '../component/Eric_JC';
import { useEffect, useState } from 'react';

const Test=() => {
    const APP_ID= "4cda16a8d96a74bed2bbd565aae6abec"
    
    // const url= `https://api.springernature.com/metadata/json?q=name:hughes%20year:2014&s=1&p=5&api_key=${APP_ID}`;
  
    const [search,setSearch] =useState("");
    const [journals,setJournals] =useState([]);
    const [query,setQuery] =useState("");
  
    useEffect(() => {
      geturl();
    },[query]);
  
    const geturl = async () => {
      const response = await fetch(`https://api.ies.ed.gov/eric/?search=${query}&format=json&start=10&rows=10`);
      const data = await response.json();
      setJournals(data.response.docs);
      console.log(data.response.docs);
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
                <Eric_JC key={journals.id} title={journals.title} author={journals.author} publicationyear={journals.publicationdateyear} description={journals.description }/>
        ))}
        </div>
    </div>
    
  )
}

export default Test;