import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import firebaseApp from "../../config/firebase";

const onClick = () => {
  const auth = getAuth(firebaseApp);
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      const { displayName, photoURL } = user;
      localStorage.setItem("token", token || "");
      localStorage.setItem("userName", displayName || "");
      localStorage.setItem("userPhoto", photoURL || "");
      if (token) {
        location.href = "index.html";
      }
    })
    .catch((error) => {
      const { errorCode, errorMessage } = error;
      console.log(errorCode, errorMessage);
    });
};

const renderLoginButtonGit = (container: HTMLElement) => {
  const htmlContent = `
    <button id="login-button-git" class="login-button">
      <i id="icon-login-button" class="fa-brands fa-github-alt"></i>
      <span>Entrar com Github</span>
    </button>
  `;

  container.innerHTML += htmlContent;
  const loginButton = <HTMLButtonElement>(
    document.getElementById("login-button-git")
  );
  loginButton.onclick = onClick;
};

export default renderLoginButtonGit;
