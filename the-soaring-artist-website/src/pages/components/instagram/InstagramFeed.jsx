import { useState, useEffect } from "react";

function InstagramFeed() {
  const [instagramData, setInstagramData] = useState([]);

  useEffect(() => {
    fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=YOUR_ACCESS_TOKEN`
    )
      .then((response) => response.json())
      .then((data) => setInstagramData(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {instagramData.map((post) => (
        <div key={post.id}>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
          </a>
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default InstagramFeed;
