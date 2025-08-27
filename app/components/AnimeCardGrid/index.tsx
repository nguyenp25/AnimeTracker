import Card from "../AnimeCard";
import "./grid.css"

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
    }
};

async function getAnime({ranking_type, limit} : AnimeGridProps): Promise<AnimeList[]> {
    const res = await fetch(`https://api.myanimelist.net/v2/anime/ranking?ranking_type=${ranking_type}&limit=${limit}`, {
        headers: { "X-MAL-CLIENT-ID": "464c0989ff7c98416adea6d1978707e7"! }
    });

    if (!res.ok){
        throw new Error("Failed to fetch");
    } 
    const data = await res.json();
    console.log(data);
    return data.data.map((item: any) => item.node);
}

export default async function Grid({ranking_type, limit} : AnimeGridProps) {
  const animeInfo = await getAnime({ranking_type, limit});

  return (
    <Card animeListProps={animeInfo}></Card>
  );
}