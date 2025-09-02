import { AnimeList } from "../AnimeCardGrid/index"
import "../../styles/card.css"
import Link from "next/link"

export type CardProps = {
  animeListItem : AnimeList;
}

export default function Card({animeListItem} : CardProps) {

  return (
    <div className="cardContainer" key={animeListItem.id}>
      <Link href={`/anime/${animeListItem.id}`}>
        <img className="cardImage" src={animeListItem.main_picture.large}></img>
      </Link>
        <h1 className="cardTitle">{animeListItem.title}</h1>
    </div>
  );
}
