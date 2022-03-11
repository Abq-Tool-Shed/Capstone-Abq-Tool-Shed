import React, {useState} from "react";
// import SearchBar from "SearchBar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export function SearchBar({placeHolder, data}) {
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState('')

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        });
        if(searchWord === "") {
            setFilteredData([])
        }else {
            setFilteredData(newFilter)
        }
    };

    const clearInput = () => {
    setFilteredData([])
    }
}

    return (
        <div className={"search"}>
            <div className={"searchInputs"}>
                    <input type={"text"} placeholder={placeHolder} value={wordEntered} onChange={handleFilter}/>
                <div className={'searchIcon'}>
                    {filteredData.length === 0 ? <FontAwsomeIcon icon={'search'}/> : <FontAwesomeIcon id={'clearBtn'} onClick={clearInput} icon={'close'/> }
                </div>
            </div>
            { filteredData.length != 0 && (
                <div className={"dataResult"}>
                    {filteredData.slice(0,5).map((value, key) => {
                        return (
                            <a className={"dataItem"}>
                                <p>{value.title}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}