import "./styles/global.css"
import Header from "./components/Header"
import Intro from "./components/Intro";
import NavBar from "./components/Navbar";
import InitialCardGrid from "./components/InitialCardGrid";
import Grid from "./components/AnimeCardGrid";
import { getAnime } from "./components/AnimeCardGrid";
import SearchBar from "./components/SearchBar";


export default async function Page() {
  let initialDataFetch = await getAnime({ranking_type: "all", limit: 54});
  return (
    <>
        <Header></Header>
        <Intro></Intro>
        <NavBar initialData={initialDataFetch}></NavBar>
        {/* <InitialCardGrid></InitialCardGrid> */}
    </>
  )
}