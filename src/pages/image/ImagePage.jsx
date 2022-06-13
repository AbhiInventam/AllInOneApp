import { height } from "@mui/system";
import React, { useEffect, useState } from "react";

const ImagePage = () => {
  const [bigImage, setBigImage] = useState();

  useEffect(() => {
    console.log("---------------------------");
    setTimeout(() => {
      setBigImage(
        "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
    }, [1000]);
  }, []);

  return (
    <div>
      <h1>Big Size Image Loading...</h1>
      {bigImage ? (
        <div>
          <img src={bigImage} alt="City Image1" width="700px" height="500px" />
        </div>
      ) : (
        <h1>Loading...........</h1>
        // console.log("sdsdsdsd")
      )}
    </div>
  );
};

export default ImagePage;
