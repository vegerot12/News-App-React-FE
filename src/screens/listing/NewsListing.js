import React from "react";
import axios from "axios";
import "./NewsListing.css";
import NewsCard from "../../components/newsCard/NewsCard";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
function NewsListing() {
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState("");
  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    axios
      .get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
      )
      .then((response) => {
        setNews(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);

        setIsError(true);
      });
  }, []);

  const renderNews = (
    <div className="listing">
      {news &&
        news.map((news) => (
          <NewsCard key={`${news.id}`} item={news}></NewsCard>
        ))}
    </div>
  );
  return <div>{isLoading ? <Loader /> : isError ? <Error /> : renderNews}</div>;
}

export default NewsListing;
