import { useEffect, useState } from 'react';
import Journal_component from '../component/Journal_component';


const Test=() => {
    const APP_ID= "c6846a894fb40ed2d83fd39ade4c1572"
    // const url= `https://api.springernature.com/metadata/json?q=name:hughes%20year:2014&s=1&p=5&api_key=${APP_ID}`;
  
    const [search,setSearch] =useState("");
    const [journals,setJournals] =useState([]);
    const [query,setQuery] =useState("");
  
    useEffect(() => {
      geturl();
    },[query]);
  
    const geturl = async () => {
      const response = await fetch(`https://api.elsevier.com/content/abstract/citation-count?doi=${query}&apiKey=${APP_ID}`);
      const data = await response.json();
      setJournals(data);
      console.log(data);
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
          <input value={search} onChange={updateSearch} type="text" />
          <button>Search</button>
        </form>
        {/* <div className="navbar"> 
           <ul>
              <h1 className="text-light">Don Bosco Institute Of Technology,Kurla</h1>
              <h1>Research and Devlopment</h1> */}
             {/* <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>   */}
           {/* <li><button>Login</button></li>
          <a>
          <img src="resource\dbit_logo-removebg-preview.png" height="90" width="120" alt=""></img></a>
          </ul>
  
        {journals.map(journals =>(
          <Journal_component key={journals.title} title2={journals.title} title={journals.publisher} abstract={journals.abstract}/>
        ))}  
      </div> */}
      </div>
    );
}

export default Test;
