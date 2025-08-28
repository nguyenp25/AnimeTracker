import { AnimeList } from "../AnimeCardGrid/index"
import "./card.css"

export type CardProps = {
  animeListProps : AnimeList[];
}

export default function Card({animeListProps} : CardProps) {

  return (
    <div className="cardContainer">
      {animeListProps.map((a) => (
        <div key={a.id}>
            <h1>{a.title}</h1>
            <img src={a.main_picture.medium}></img>
        </div>
      ))}
    </div>
  );
}
