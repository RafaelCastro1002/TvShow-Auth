import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";
import firebaseApp from "../../config/firebase";

const onClick = () => {
  const auth = getAuth(firebaseApp);
  const provider = new OAuthProvider("microsoft.com");
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = OAuthProvider.credentialFromResult(result);
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
      console.log(error);
    });
};

const renderLoginButtonMicrosoft = (container: HTMLElement) => {
  const htmlContent = `
    <button id="login-button-microsoft" class="login-button">
      <i id="icon-login-button" class="fa-brands fa-microsoft"></i>
      <span>Entrar com Microsoft</span>
    </button>
  `;

  container.innerHTML += htmlContent;
  const loginButton = <HTMLButtonElement>(
    document.getElementById("login-button-microsoft")
  );
  loginButton.onclick = onClick;
};

export default renderLoginButtonMicrosoft;
