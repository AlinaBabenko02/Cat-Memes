import axios from "axios";
import { AddMemFormikValues } from "./types/AddMemFormikValues";
import { MemType } from "./types/MemType";

const url = "https://cat-memes-763e0-default-rtdb.firebaseio.com";

export const fetchMemes = async () => {
  const response = await axios.get(`${url}/memes.json`);
  const memes = [];
  for (const key in response.data) {
    const memeObj: MemType = {
      id: key,
      title: response.data[key].title,
      author: response.data[key].author,
      link: response.data[key].link,
      contentType: response.data[key].contentType,
    };
    memes.push(memeObj);
  }
  return memes;
};

export const createMeme = async (memeData: AddMemFormikValues) => {
  const response = await axios.post(`${url}/memes.json`, memeData);
  const id = response.data.name;
  return id;
};

export const updateMeme = (id: string, memeData: AddMemFormikValues) => {
  return axios.put(`${url}/memes/${id}.json`, memeData);
};

export const deleteMeme = (id: string) => {
  return axios.delete(`${url}/memes/${id}.json`);
};
