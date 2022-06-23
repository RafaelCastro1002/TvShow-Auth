import { getTvShow } from "./models/TVShow";
import axios from "axios";

import { SINGLE_SHOW_API_URL } from "./config";
import "./style.css";
import renderTVShowCard from "./components/TVShowCard";
import renderHeader from "./components/Header";

const $ = document.querySelector.bind(document);

const header = <HTMLDivElement>$("#header");
renderHeader(header);

const searchTVShow = async (id: number) => {
  const http = axios.create({
    baseURL: SINGLE_SHOW_API_URL,
  });

  const response = await http.get(`/${id}`);

  if (response.status == 200) {
    const { data } = response;
    const tvShow = getTvShow(data);
    const container = <HTMLDivElement>$("#result-area");
    renderTVShowCard(tvShow, container, true);
  }
};

const favoriteShows = localStorage.getItem("favoriteShows");

const arrayFavorites = favoriteShows && JSON.parse(favoriteShows);

if (arrayFavorites.length) {
  arrayFavorites.forEach((showId: number) => searchTVShow(showId));
}
