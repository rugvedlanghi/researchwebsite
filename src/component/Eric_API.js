import { useEffect, useState } from "react";
import Eric_JC from "./Eric_JC";
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faClose } from "@fortawesome/free-solid-svg-icons";

const Eric_API = () => {
  const [search, setSearch] = useState("");
  const [journals, setJournals] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    geturl();
  }, [query]);

  const geturl = async () => {
    const response = await fetch(
      `https://api.ies.ed.gov/eric/?search=${query}&format=json&start=10&rows=10`
    );
    const data = await response.json();
    setJournals(data.response.docs);
    // console.log(data.response.docs);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  const searchClose= async() => {
    const response = await fetch(
      `https://api.ies.ed.gov/eric/?search=""&format=json&start=10&rows=10`
    );
    const data = await response.json();
    setJournals(data.response.docs);
    // console.log(data.response.docs);
  }
  return (
    <div className="er">
      <form onSubmit={getSearch}>
        <h2>ERIC</h2>
        <input value={search} onChange={updateSearch} type="text" />
        <button onClick={searchClose}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="journals">
        {journals.map((journals) => (
          <Eric_JC
            key={journals.id}
            title={journals.title}
            author={journals.author}
            publicationyear={journals.publicationdateyear}
            description={journals.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Eric_API;
