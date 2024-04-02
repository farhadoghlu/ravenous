import React from 'react';
import styles from "../../components/SearchBar/SearchBar.module.css";

function SearchBarContainer(props) {
    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>
                    {Object.keys(props.sortByOptions).map(sortByOption => {
                        let sortByOptionValue = props.sortByOptions[sortByOption];
                        return (
                            <li
                                key={sortByOptionValue}
                                onClick={() => props.handleSortClick(sortByOptionValue)}
                                className={props.activeOption === sortByOptionValue ? styles.active : ''}
                            >
                                {sortByOption}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.SearchBarFields}>
                <input placeholder="Search Businesses" onChange={props.handleTermChange}/>
                <input placeholder="Where?" onChange={props.handleLocationChange}/>
            </div>
            <div className={styles.SearchBarSubmit}>
                <a onClick={props.handleSearchSubmit}>Let's Go</a>
            </div>
        </div>
    );
}

export default SearchBarContainer;