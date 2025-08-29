import Card from "../AnimeCard";
import "../../styles/grid.css"

export type AnimeGridProps = {
    ranking_type?: string,
    limit?: number
};

export type AnimeList = { 
    id: number,
    title: string, 
    main_picture: {
        medium: string,
        large: string
    },
    start_season: {
        season: string,
        year: number
    }
};


const clientId = process.env.MAL_CLIENT_ID;

export async function getAnime({ranking_type, limit} : AnimeGridProps): Promise<AnimeList[]> {
    const res = await fetch(`https://api.myanimelist.net/v2/anime/ranking?ranking_type=${ranking_type}&limit=${limit}&fields=genres,start_season,media_type`, {
        headers: { "X-MAL-CLIENT-ID": clientId! }
    });

    if (!res.ok){
        throw new Error("Failed to fetch");
    } 
    const data = await res.json();

    return data.data.map((item: any) => item.node);
}

type GridProps = {
    animeList: AnimeList[];
}

export default function Grid({animeList}: GridProps) {


  return (
    <div className="gridContainer">
      {animeList.map((animeItem) => (
        <Card animeListItem={animeItem} />
      ))}
    </div>
  );
}


