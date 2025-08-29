import { AnimeList } from "../AnimeCardGrid/index"
import "../../styles/card.css"

export type CardProps = {
  animeListItem : AnimeList;
}

export default function Card({animeListItem} : CardProps) {

  return (
    <div className="cardContainer" key={animeListItem.id}>
        <img className="cardImage" src={animeListItem.main_picture.medium}></img>
        <h1 className="cardTitle">{animeListItem.title}</h1>
    </div>
  );
}
