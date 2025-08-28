"use client"

import { useState, useEffect } from "react";
import "./navbar.css"
import { AnimeList } from "../AnimeCardGrid";

const clientId = process.env.MAL_CLIENT_ID;

type Filters = {
    genre?: string[];
    format?: string[];
    year?: string;
    season?: string;
    name?: string;
}

type NavBarProps = {
  initialData: AnimeList[];
};

export default function NavBar({initialData} : NavBarProps){
    const [filters, setFilters] = useState<Filters>({});
    const [animeList, setAnimeList] = useState<AnimeList[]>([])
    const [genreDropdown, setGenreDropDown] = useState(false);

    function updateFilters(type: keyof Filters, value:string){
        if(type == "genre"){
            setFilters((prev) => ({...prev, [type]: prev[type] ? [...(prev[type] as string[]), value] : [value]}));
        }else{
            setFilters((prev) => ({...prev, [type]:[value]}));
        }
        
    }

    async function fetchFilteredAnime(){
        let filteredData = initialData;

        if(filters.genre){
            filteredData = filteredData.filter((anime: any) => (filters.genre as string[]).every(selectedGenre => anime.genres.some((genre:any) => genre.name === selectedGenre)));
        }
        if(filters.season) {
            filteredData = filteredData.filter((anime: any) => anime.start_season.season == filters.season);  
            // filteredData = filteredData.filter((anime: any) => {
            //     console.log(anime.start_season.season, " ",anime.start_season.season == filters.season);
            //     return anime.start_season.season === filters.season;
            // });
            // console.log(filters.season);
            // console.log(filteredData[0].start_season.season);
        }
        console.log("filteredDAta: ", filteredData);

        setAnimeList(filteredData);
    }

    useEffect(() => {
        console.log("Filters: ", filters);
        fetchFilteredAnime();
    }, [filters]);




    return (
        <div className="navContainer">
            <div className="filterContainer">
                <label htmlFor="search">Search</label>
                <div>
                    <input className="filterInput" id="search"></input>
                </div>
            </div>
            <div className="filterContainer">
                <label htmlFor="genre">Genre</label>
                <div>
                    <input className="filterInput" id="genre" placeholder="Any" onClick={() => setGenreDropDown((prev) => !prev)}></input>
                    <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.727 30.727"
                    >
                        <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 
                        l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
                        />
                    </svg>
                </div>
                <div className="genreDropDownMenu">
                    <div className="filterLabel">GENRES</div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("genre", "Action")}>Action</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("genre", "Adventure")}>Adventure</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("genre", "Comedy")}>Comedy</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("genre", "Drama")}>Drama</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filterContainer">
                <label htmlFor="year">Year</label>
                <div>
                    <input className="filterInput" id="year" placeholder="Any"></input>
                </div>
            </div>
            <div className="filterContainer">
                <label htmlFor="season">Season</label>
                <div>
                    <input className="filterInput" id="season" placeholder="Any"></input>
                </div>
                {/* <div>
                    <div onClick={() => updateFilters("season", "winter")}>Winter</div>
                    <div onClick={() => updateFilters("season", "spring")}>Spring</div>
                    <div onClick={() => updateFilters("season", "summer")}>Summer</div>
                    <div onClick={() => updateFilters("season", "fall")}>Fall</div>
                </div> */}
            </div>
            <div className="filterContainer">
                <label htmlFor="season">Season</label>
                <div>
                    <input className="filterInput"id="season" placeholder="Any"></input>
                </div>
            </div>
            
        </div>
    )
}