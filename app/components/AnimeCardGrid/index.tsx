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
    // console.log(data);

    //'https://api.myanimelist.net/v2/anime/30230?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics' \


    // const test = await fetch(`https://api.myanimelist.net/v2/anime`, {
    //     headers: { "X-MAL-CLIENT-ID": clientId! }
    // });
    // const test1 = await fetch(`https://api.myanimelist.net/v2/anime?q=one&limit=10&fields=genres`, {
    //     headers: { "X-MAL-CLIENT-ID": clientId! }
    // });
    // const test2 = await fetch(`https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=20&fields=id,title,main_picture,start_season`, {
    //     headers: { "X-MAL-CLIENT-ID": clientId! }
    // });
    // const test3 = await fetch(`https://api.myanimelist.net/v2/anime/season/2018/winter?limit=4&fields=id,title,start_season`, {
    //     headers: { "X-MAL-CLIENT-ID": clientId! }
    // });
    // const test4 = await fetch(`https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=20&fields=id,title,main_picture,media_type`, {
    //     headers: { "X-MAL-CLIENT-ID": clientId! }
    // });

    // const testData = await test1.json();


    // console.log(testData)
    return data.data.map((item: any) => item.node);
}



export default async function Grid({ranking_type, limit} : AnimeGridProps) {
  const animeInfo = await getAnime({ranking_type, limit});


  return (
    <Card animeListProps={animeInfo}></Card>
  );
}


