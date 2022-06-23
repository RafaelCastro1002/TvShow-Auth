import "./styles.css";

const renderHeader = (container: HTMLElement) => {
  const userPhoto = localStorage.getItem("userPhoto");
  const userName = localStorage.getItem("userName");
  const htmlContent = `
        <div class="header">
            <h1 id="logo" onclick="window.location.href='index.html'">TV Show</h1>

            <div id="items-menu">
              <li onclick="window.location.href='index.html'">home</li>
              <li onclick="window.location.href='favorites.html'">favoritos</li>
            </div>
            ${
              userPhoto
                ? `
                <img src="${userPhoto}" alt="Foto de ${userName}">
                <span>${userName}</span>
              `
                : '<i id="icon-user" class="fa-solid fa-circle-user"></i>'
            }
            <a href="logout.html">
              <i id="icon-logout" class="fa-solid fa-arrow-right-from-bracket"></i>
            </a>
        </div>
    `;

  container.innerHTML = htmlContent;
};

export default renderHeader;
