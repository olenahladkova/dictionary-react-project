import axios from "axios";
import React, { useState } from "react";

import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary () {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition)
    setResults(response.data[0])
  }

  function handlePexelsRespond(response) {
    setPhotos(response.data.photos)
  }

  function search(event) {
    event.preventDefault();
    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse)
    let pexelsApiKey = "baH82Fo8o5Zq8rN3srzg1PPtUU8mxqHZyOsRIez0NdCup2RvUT6hR61u";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
    let headers = { Authorisation: `Bearer ${pexelsApiKey}` }
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsRespond)
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
      <Photos photos={photos} alt={keyword} />
    </div>
  )
}