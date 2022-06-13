import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxiosHook = ({ url, method }) => {
  const [data, setData] = useState(null);

  //   useEffect(async () => {
  //     await axios({
  //       method: method,
  //       url: url,
  //     })
  //       .then((res) => {
  //         // console.log("data");
  //         await setData(res.data);
  //       })
  //       .catch((err) => {
  //         return err;
  //       });
  //   }, [url]);

  // ---------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        await axios({
          method: method,
          url: url,
        })
          .then((res) => {
            // console.log("data");
            setData(res.data);
          })
          .catch((err) => {
            return err;
          });
      } catch (error) {
        return error;
      }
    }

    fetchData();
  }, [url]); // Or [] if effect doesn't need props or state
  // ---------------------------------------------------------

  return data;
};

export default useAxiosHook;
