import React from "react";
import Meaning from "./Meaning"
import Phonetic from "./Phonetic";
import "./Results.css"

export default function Results(props) {
  if (props.results) {
    return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.phonetics.map(function(phonetic, index) {
        return (
          <div key={phonetic}>
            <Phonetic phonetic={phonetic} />
          </div>
        )
      })}
      {props.results.meanings.map(function(meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        )
        //return meaning.definitions[0].definition;
      })}
    </div>
    )
  } else {
    return null;
  }
}