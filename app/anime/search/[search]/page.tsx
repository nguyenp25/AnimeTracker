
import Grid from "@/app/components/AnimeCardGrid";
import { AnimeList } from "@/app/components/AnimeCardGrid";

const clientId = process.env.MAL_CLIENT_ID;


async function getSearchedAnime(keyword: string): Promise<AnimeList[]> {
  const res = await fetch(`https://api.myanimelist.net/v2/anime?q=${keyword}&limit=50`, {
      headers: { "X-MAL-CLIENT-ID": clientId! }
  });

  if (!res.ok){
      throw new Error("Failed to fetch");
  } 
  const data = await res.json();
  console.log(data);

  return data.data.map((item: any) => item.node);
}

export default async function SearchPage({params}: { params: { search: string}}) {
  const { search: keyword } = await params;
  let initialDataFetch = await getSearchedAnime(keyword);

  return (
    <div>
      <h1>Searched Animes</h1>
      <Grid animeList={initialDataFetch}></Grid>
    </div>
  );
}