import TVShow from "../models/TVShow";

const imageNotFound = "/img/image_not_found.png";

const favoriteShow = (showId: number, reloadWhenFavorite: boolean) => `
  event.stopPropagation()
  const favoriteShows = localStorage.getItem('favoriteShows');

  const arrayFavorites = favoriteShows && JSON.parse(favoriteShows)

  console.log(arrayFavorites)
  if (arrayFavorites) {
    if (arrayFavorites.includes(${showId})) {
      const newArray = arrayFavorites.filter((favorite) => favorite !== ${showId});
      const listStringNewArray = JSON.stringify(newArray);
      localStorage.setItem('favoriteShows', listStringNewArray);
      ${changeStatusFavoriteIcon(showId, false)}
      ${reloadWhenFavorite && "document.location.reload(true)"}
      return;
    }
  }

  const list = arrayFavorites?.length ? arrayFavorites.concat([${showId}]) : [${showId}];

  const listString = JSON.stringify(list);

  localStorage.setItem('favoriteShows', listString);
  ${changeStatusFavoriteIcon(showId, true)}
`;

const changeStatusFavoriteIcon = (showId: number, isActiveIcon: boolean) => `
  const starIcon = document.getElementById('star-icon-${showId}')
  
  if (${isActiveIcon}) {
    starIcon.classList.add('active-icon-favorite');
  } else {
    starIcon.classList.remove('active-icon-favorite');
  }
`;

const checkIsActivate = (showId: number) => {
  const favoriteShows = localStorage.getItem("favoriteShows");

  const arrayFavorites = favoriteShows && JSON.parse(favoriteShows);

  return arrayFavorites?.includes(showId) && "active-icon-favorite";
};

const renderTVShowCard = (
  show: TVShow,
  container: HTMLElement,
  reloadWhenFavorite: boolean = false
) => {
  const htmlContent = `
    <div class="tv-card">
      <div class="modal-link" id="modal-${
        show.id
      }" onclick="window.location.href='tvshow.html?id=${show.id}'">
        <div class="show-banner">
            <img src="${show.imageUrl || imageNotFound}" alt="${show.name}">

            <div class="show-reactions">
              <button class="button-reaction" onclick="${favoriteShow(
                show.id,
                reloadWhenFavorite
              )}">
                <i id="star-icon-${
                  show.id
                }" class="fa-solid fa-star star-icon ${checkIsActivate(
    show.id
  )}"></i>
              </button>
            </div>
        </div>

        <h3>${show.name}</h3>
      </a>
    </div>
  `;

  container.innerHTML += htmlContent;
};

export default renderTVShowCard;
