// (Action) Login
// (Action) Logout
// (Action) No user profile pages allowed!

export function heyDjLogin(username) {
  return {
    type: "HeyDj Login",
    username
  };
}

export function spotifyLogin(spotifyToken) {
  return {
    type: "Spotify Login",
    spotifyToken
  };
}

export function logout() {
  return {
    type: "Logout"
  };
}
//spotify logout not needed? at least for now
