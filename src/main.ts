import renderHeader from "./components/Header";
import renderSearchForm from "./components/SearchForm";
import "./style.css";

const $ = document.querySelector.bind(document);

const token = localStorage.getItem("token");

if (token) {
  const header = <HTMLDivElement>$("#header");
  renderHeader(header);

  const container = <HTMLDivElement>$("#container");
  renderSearchForm(container);

  const resultArea = document.createElement("div");
  resultArea.id = "result-area";
  container.insertAdjacentElement("beforeend", resultArea);
} else {
  location.href = "login.html";
}
