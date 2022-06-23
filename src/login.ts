import renderLoginButtonGit from "./components/LoginButtonGit";
import renderLoginButtonGoogle from "./components/LoginButtonGoogle";
import renderLoginButtonMicrosoft from "./components/LoginButtonMicrosoft";
import "./style.css";

const token = localStorage.getItem("token");
if (token) {
  location.href = "index.html";
} else {
  const gitButton = <HTMLDivElement>document.getElementById("login-git");
  renderLoginButtonGit(gitButton);

  const googleButton = <HTMLDivElement>document.getElementById("login-google");
  renderLoginButtonGoogle(googleButton);

  const microsoftButton = <HTMLDivElement>(
    document.getElementById("login-microsoft")
  );
  renderLoginButtonMicrosoft(microsoftButton);
}
