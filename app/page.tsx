import "./styles/global.css"
import Header from "./components/Header"
import Intro from "./components/Intro";
import NavBar from "./components/Navbar";
import Grid from "./components/Grid";

export default function Page() {
  return (
    <>
        <Header></Header>
        <Intro></Intro>
        <NavBar></NavBar>
        <Grid></Grid>
    </>
  )
}