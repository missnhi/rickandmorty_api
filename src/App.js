import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from '@chakra-ui/react'

import SearchBar from "./components/Searchbar/searchbar.components";
import Card from './components/Card/card.components';
function App() {
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;

    let [pageNumber, updatePageNumber] = useState(1);
    let [search, setSearch] = useState("");

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
    //when api change, reload the new data
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json());
            updateFetchedData(data)
        }) ();
    }, [api]);

    return (
        <ChakraProvider>
            <div className="App">
                <h1 className="text-center mb-3">Characters</h1>
                <SearchBar setSearch={setSearch} updatePageNumber={updatePageNumber} />
                <div className="container">
                    <div className="row">
                        Filter component will be placed heree
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <Card results={results}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ChakraProvider>

    );
}

export default App;
