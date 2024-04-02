import React, { useState } from "react";
import styles from "./App.module.css";
import '../../App.css';

import BusinessList from "../BusinessList/BusinessList";
import SearchBarContainer from "../../containers/SearchBar/SearchBarContainer";
import { search } from "../../utils/yelp";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
    const [businesses, setBusinesses] = useState([]);
    const searchYelp = (term, location, sortBy) => {
        search(term, location, sortBy).then(businesses => {
            setBusinesses(businesses);
        });
    }

    return (
        <div className={styles.App}>
            <h1>ravenous</h1>
            <SearchBar searchYelp={searchYelp} />
            <BusinessList businesses={businesses} />
        </div>
    );
};

export default App;