import Cookies from "universal-cookie";

// TODO: move auth functions out of components

export function isUserSignedIn() {
  const cookies = new Cookies();
  return cookies.get("authToken");
}

export function signIn(username, password) {
  if (username && password) {
    const cookies = new Cookies();
    cookies.set("authToken", username, { path: "/" });

    return true;
  }
  return false;
}

export function signOut() {
  const cookies = new Cookies();
  cookies.remove("authToken");

  return true;
}
