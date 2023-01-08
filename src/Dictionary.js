import axios from "axios";
import React, { useState } from "react";

export default function Dictionary () {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data)
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`)
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
    </div>
  )
}