import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
                Listen. how to pronunce
            </a>
            <br />
            {props.phonetic.text}
        </div>
    )
}