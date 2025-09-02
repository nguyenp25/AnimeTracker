import Grid from "../AnimeCardGrid"
import { getAnime } from "../AnimeCardGrid"
import "@/app/styles/initialCard.css"
import Link from "next/link"

export default async function InitialCardGrid(){
    const [topAnime, airingAnime, favoriteAnime, movieAnime, popularAnime, upcomingAnime] = await Promise.all([
        getAnime({ ranking_type: "all", limit: 6 }),
        getAnime({ ranking_type: "airing", limit: 6 }),
        getAnime({ ranking_type: "favorite", limit: 6 }),
        getAnime({ ranking_type: "movie", limit: 6 }),
        getAnime({ ranking_type: "bypopularity", limit: 6 }),
        getAnime({ ranking_type: "upcoming", limit: 6 })
    ]);

    return(
        <>
            <div className="initialGrid">
                <div>
                    <h1>Top Anime</h1>
                    <Link href="/anime/category/all">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
                <Grid animeList={topAnime}></Grid>
            </div>
            <div className="initialGrid">
                <div>
                    <h1>Airing Anime</h1>
                    <Link href="/anime/category/airing">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
                <Grid animeList={airingAnime}></Grid>
            </div>
            <div className="initialGrid">
                <div>
                    <h1>Favorite Anime</h1>
                    <Link href="/anime/category/favorite">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
                <Grid animeList={favoriteAnime}></Grid>
            </div>
            <div className="initialGrid">
                <div>
                    <h1>Movie Anime</h1>
                    <Link href="/anime/category/movie">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
                <Grid animeList={movieAnime}></Grid>
            </div>
            <div className="initialGrid">
                <div>
                    <h1>Popular Anime</h1>
                    <Link href="/anime/category/bypopularity">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
                <Grid animeList={popularAnime}></Grid>
            </div>
            <div className="initialGrid">
                <div>
                    <h1>Upcoming Anime</h1>
                    <Link href="/anime/category/upcoming">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
                <Grid animeList={upcomingAnime}></Grid>
            </div>
        </>
    )
}