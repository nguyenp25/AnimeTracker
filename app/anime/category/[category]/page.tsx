import Grid from "@/app/components/AnimeCardGrid";
import { AnimeList } from "@/app/components/AnimeCardGrid";

const clientId = process.env.MAL_CLIENT_ID;

async function getCategoryAnime(keyword: string): Promise<AnimeList[]> {
  const res = await fetch(`https://api.myanimelist.net/v2/anime/ranking?ranking_type=${keyword}&limit=50`, {
      headers: { "X-MAL-CLIENT-ID": clientId! }
  });

  if (!res.ok){
      throw new Error("Failed to fetch");
  } 
  const data = await res.json();
  console.log(data);

  return data.data.map((item: any) => item.node);
}

export default async function CategoryPage({params}: { params: { category: string}}) {
  const { category: keyword } = await params;
  let initialDataFetch = await getCategoryAnime(keyword);

  return (
    <div>
      <h1>Searched Animes</h1>
      <Grid animeList={initialDataFetch}></Grid>
    </div>
  );
}

// export default function CategoryPage() {
//   const params = useParams(); // returns an object
//   const category = params.category as string;

//   return (
//     <div>
//       <h1>Category: {category}</h1>
//     </div>
//   );
// }