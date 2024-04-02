import React, { useState } from "react";
import SearchBarContainer from '../../containers/SearchBar/SearchBarContainer';
import { search } from '../../utils/yelp';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp }) => {
    const [term, setTerm] = useState("restaurants");
    const [location, setLocation] = useState("New york");
    const [sort, setSort] = useState("best_match");
    const [activeOption, setActiveOption] = useState(null);

    const handleTermChange = ({target}) => {
        setTerm(target.value);
    }

    const handleLocationChange = ({target}) => {
        setLocation(target.value);
    }

    const handleSortClick = (option) => {
        setSort(option);
        setActiveOption(option); // Update the active option state when an option is clicked
        // Trigger Yelp API request with updated sorting option
        searchYelp(term, location, option);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        searchYelp(term, location, sort);
    }

    //Statefull component olduguna gore JSX render etmirik. JSX ucun stateless componente gonderirik.
    return (
        <SearchBarContainer
            sortByOptions={sortByOptions}
            handleSortClick={handleSortClick}
            activeOption={activeOption}
            handleTermChange={handleTermChange}
            handleLocationChange={handleLocationChange}
            handleSearchSubmit={handleSearchSubmit}
        />
    );
};

export default SearchBar;
