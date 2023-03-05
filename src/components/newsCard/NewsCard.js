import React from "react";
import { getDate, getDecodedStr } from "../../utils";
import "./NewsCard.css";

function NewsCard(props) {
  const { item } = props;
  const handleCardClick = () => {
    window.open(item?.link, "_blank", "noreferrer");
  };
  return (
    <div className="card" onClick={handleCardClick}>
      <section className="img-section">
        <img className="img" src={item?.jetpack_featured_media_url} alt="" />
      </section>

      <section className="details-section">
        <h3 className="title">{item?.title?.rendered}</h3>
        <div className="date">{getDate(item?.date)}</div>
        <div className="author">{item?.parselyMeta["parsely-author"]}</div>
        <p className="excerpt">{getDecodedStr(item?.excerpt?.rendered)}</p>
        <a
          className="link"
          href={item?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </section>
    </div>
  );
}

export default NewsCard;
