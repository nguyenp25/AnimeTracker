import { getAnime } from "../AnimeCardGrid"
import NavBar from "../Navbar";
import "./intro.css"

export default async function Intro(){
    let initialDataFetch = await getAnime({ranking_type: "all", limit: 500});

    console.log(initialDataFetch);
    return (
        <>
            <img className="introBackground" src="/animeclouds.webp" alt="Home Page Picture"></img>
            <NavBar initialData={initialDataFetch}></NavBar>
        </>
    )
}