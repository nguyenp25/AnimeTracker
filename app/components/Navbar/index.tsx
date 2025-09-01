"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import "../../styles/navbar.css"
import Grid, { AnimeList } from "../AnimeCardGrid";

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
    const [yearDropdown, setYearDropDown] = useState(false);
    const [seasonDropdown, setSeasonDropDown] = useState(false);
    const [formatDropdown, setFormatDropDown] = useState(false);
    const [initialDisplay, setInitialDisplay] = useState(false);

    const genreRef = useRef<HTMLDivElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);
    const seasonRef = useRef<HTMLDivElement>(null);
    const formatRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
   
    function updateFilters(type: keyof Filters, value:string){
        if(type != "genre"){
            setFilters((prev) => {
                if(prev[type]?.[0] == value){
                    return { ...prev, [type]: []};
                }
                return { ...prev, [type]: [value]};
            });
        }else{
            // setFilters((prev) => ({...prev, [type]: prev[type] ? [...(prev[type] as string[]), value] : [value]}));
            setFilters((prev) => {
                const genreArray = prev.genre ?? [];

                return genreArray.includes(value) ? { ...prev, genre: genreArray.filter((genreValue) => genreValue != value)} : { ...prev, genre: [...genreArray, value]};
            });
        }
        
    }

    async function fetchFilteredAnime(){
        let filteredData = initialData;

        if(filters.genre){
            filteredData = filteredData.filter((anime: any) => (filters.genre as string[]).every(selectedGenre => anime.genres.some((genre:any) => genre.name === selectedGenre)));
        }
        if(filters.season && filters.season.length > 0) {
            filteredData = filteredData.filter((anime: any) => anime.start_season.season == filters.season);  
        }
        if(filters.year && filters.year.length > 0) {
            filteredData = filteredData.filter((anime: any) => anime.start_season.year == filters.year);
        }
        console.log("filteredDAta: ", filteredData);

        setAnimeList(filteredData);
    }

    useEffect(() => {
    const isEmpty =
        (!filters.genre || filters.genre.length === 0) &&
        (!filters.season || filters.season.length === 0) &&
        (!filters.year || filters.year.length === 0) &&
        (!filters.format || filters.format.length === 0) &&
        (!filters.name || filters.name.length === 0);

    setInitialDisplay(isEmpty);

    if (!isEmpty) {
        fetchFilteredAnime();
    } else {
        setAnimeList(initialData);
    }
    }, [filters, initialData]);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (genreRef.current && !genreRef.current.contains(event.target as Node)) {
                setGenreDropDown(false);
            }
            if (seasonRef.current && !seasonRef.current.contains(event.target as Node)) {
                setSeasonDropDown(false);
            }
            if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
                setYearDropDown(false);
            }

        }

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);


    return (
        <>
        <div className="navContainer">
            <div className="filterContainer">
                <label htmlFor="search">Search</label>
                <div>
                    <input className="filterInput" id="search"></input>
                </div>
            </div>
            <div ref={genreRef} className="filterContainer">
                <label htmlFor="genre">Genre</label>
                <div className="filterInput" onClick={() => setGenreDropDown(true)}>
                    <input id="genre" placeholder="Any"></input>
                    <svg className="dropDownArrow"
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
                {genreDropdown && <div className="dropDownMenu">
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
                </div>}
            </div>

            <div ref={yearRef} className="filterContainer">
                <label htmlFor="year">Year</label>
                <div className="filterInput" onClick={() => setYearDropDown(true)}>
                    <input id="year" placeholder="Any" ></input>
                    <svg className="dropDownArrow"
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
                {yearDropdown && <div className="dropDownMenu">
                    <div className="filterLabel">YEAR</div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("year", "2026")}>2026</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("year", "2025")}>2025</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("year", "2024")}>2024</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("year", "2023")}>2023</div>
                        </div>
                    </div>
                </div>}
            </div>

            <div ref={seasonRef} className="filterContainer">
                <label htmlFor="genre">Season</label>
                <div className="filterInput" onClick={() => setSeasonDropDown(true)}>
                    <input id="genre" placeholder="Any"></input>
                    <svg className="dropDownArrow"
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
                {seasonDropdown && <div className="dropDownMenu">
                    <div className="filterLabel">SEASON</div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("season", "winter")}>Winter</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("season", "spring")}>Spring</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("season", "summer")}>Summer</div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="tag">
                            <div onClick={() => updateFilters("season", "fall")}>Fall</div>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="filterContainer">
                <label htmlFor="season">Format</label>
                <div>
                    <input className="filterInput"id="season" placeholder="Any"></input>
                </div>
            </div>  
        </div>
        {/* {initialDisplay &&

        } */}




        <Grid animeList={animeList}></Grid>
        </>
    )
}