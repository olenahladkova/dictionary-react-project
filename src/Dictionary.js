import axios from "axios";
import React, { useState } from "react";

import Results from "./Results";

export default function Dictionary () {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition)
    setResults(response.data[0])
  }

  function search(event) {
    event.preventDefault();
    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse)
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="input-group">
        <input type="search" className="form-control" onChange={handleKeywordChange}/>
        <input type="submit" value="SEARCH" className="btn button"/>
      </form>
      <Results results={results} />
    </div>
  )
}