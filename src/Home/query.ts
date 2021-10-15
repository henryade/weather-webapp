import { useMutation, useQuery } from "react-query";
import axios from "axios";

axios.defaults.adapter = require('axios/lib/adapters/http');

const GetQuery = async (url: string) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/${url}`
  );
  return data;
}
const PostQuery = async (url: string) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/${url}`
  );
  return data;
}

const GetData = (url: string, fetchOnPageLoad:boolean = false) => {
  return useQuery<any, Error>(url, () => GetQuery(url), {
    refetchOnWindowFocus: fetchOnPageLoad,
    enabled: fetchOnPageLoad 
  });
};

const PostData = (): any => {
  return useMutation((url: string) => PostQuery(url));
};

export {
  GetData,
  PostData
};