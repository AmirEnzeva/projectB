// import { getuserData } from "../components/pages/mainPages/LeaderBoard";
// import { useUser } from '../context/userContext';

import axios from "axios";

let base = "https://arshiyashad.ir"

const apiURL = `${base}/api/accounts/verify`;


export const postAndGetUserData = (initData , startParams) => {
    const url = `${apiURL}/`
    return axios.post(url  , {
        initData,
        startParams
    } )
}


export function postInitData() {
  // const { setUser } = useUser();

  fetch(apiURL + "/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    //   initData: initData,
    //   startParams: startParams,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // setUser(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });

}

export function getData() {
  fetch(apiURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
