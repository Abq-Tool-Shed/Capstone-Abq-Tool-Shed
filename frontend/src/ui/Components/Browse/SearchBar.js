import React, {useState} from "react"
import "./searchBar.css";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export function SearchBar({placeHolder, data}) {
    const [filteredData, setFilteredData] = useState([])
    // const [wordEntered, setWordEntered] = useState('')

    const handleFilter = (event) => {
        const searchWord = event.target.value
        console.log(searchWord)
        const newFilter = data.filter((value) => {
            return value.toolName.toLowerCase().includes(searchWord.toLowerCase())
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


    return (
        <div className={"search"}>
            <div className={"searchInputs"}>
                    <input
                        type={"text"}
                        placeholder={placeHolder}
                        // value={wordEntered}
                        onChange={handleFilter}
                    />
                <div className={'searchIcon'}>
                    {filteredData.length === 0 ? (<FontAwesomeIcon icon={'search'}/> ) : ( <FontAwesomeIcon id={'clearBtn'} onClick={clearInput} icon={'close'}/> )}
                </div>
            </div>
            { filteredData.length != 0 && (
                <div className={"dataResult"}>
                    {filteredData.slice(0,5).map((value, key) => {
                        return (
                            <a className={"dataItem"}>
                                <p>{value.toolName}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}