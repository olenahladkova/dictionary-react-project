import React, { useState } from "react";

export default function Dictionary () {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`)
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