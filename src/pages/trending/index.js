import React, { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: process.env.REACT_APP_GIPHY_KEY,
          limit: 15,
        },
      });
      console.log(result);
      setData(result.data.data);
    };
    fetchdata();
  }, []);

  const renderGif = () => {
    return data.map((i) => {
      return (
        <div key={i.id}>
          <img src={i.images.fixed_height.url} alt="gifs" />
        </div>
      );
    });
  };

  return (
    <div>
      <div>{renderGif()}</div>
    </div>
  );
};

export default Trending;
