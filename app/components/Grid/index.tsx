type AnimeList = { 
    id: number,
    title: string, 
    main_picture: {
        medium: string,
        large: string
    }
};

async function getAnime(): Promise<AnimeList[]> {
const res = await fetch("https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=6", {
    headers: { "X-MAL-CLIENT-ID": "464c0989ff7c98416adea6d1978707e7"! }
});

if (!res.ok){
    throw new Error("Failed to fetch");
} 
const data = await res.json();
console.log(data);
return data.data.map((item: any) => item.node);
}

export default async function Grid() {
  const animeInfo = await getAnime();

  return (
    <div>
      {animeInfo.map((a) => (
        <div key={a.id}>
            <h1>{a.title}</h1>
            <img src={a.main_picture.medium}></img>
        </div>
      ))}
    </div>
  );
}
