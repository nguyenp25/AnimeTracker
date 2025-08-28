import "./styles/global.css"
import Header from "./components/Header"
import Intro from "./components/Intro";
import NavBar from "./components/Navbar";
import Grid from "./components/AnimeCardGrid";

export default function Page() {
  return (
    <>
        <Header></Header>
        <Intro></Intro>
        <div>ALL TIME</div>
        <Grid ranking_type="all" limit={6}></Grid>
        <div>MOVIES</div>
        <Grid ranking_type="movie" limit={6}></Grid>
    </>
  )
}