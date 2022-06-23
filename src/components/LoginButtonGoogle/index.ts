import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../../config/firebase";

const onClick = () => {
  const auth = getAuth(firebaseApp);
  auth.languageCode = "pt-br";
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      const { displayName } = user;
      localStorage.setItem("token", token || "");
      localStorage.setItem("userName", displayName || "");
      if (token) {
        location.href = "index.html";
      }
    })
    .catch((error) => {
      const { errorCode, errorMessage } = error;
      console.log(errorCode, errorMessage);
    });
};

const renderLoginButtonGoogle = (container: HTMLElement) => {
  const htmlContent = `
    <button id="login-button-google" class="login-button">
      <i id="icon-login-button" class="fa-brands fa-google"></i>
      <span>Entrar com Google</span>
    </button>
  `;

  container.innerHTML += htmlContent;

  const loginButton = <HTMLButtonElement>(
    document.getElementById("login-button-google")
  );
  loginButton.onclick = onClick;
};

export default renderLoginButtonGoogle;
