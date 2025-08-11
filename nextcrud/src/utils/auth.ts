// src/utils/auth.ts
export function saveUser(email: string, password: string) {
  localStorage.setItem("mockUser", JSON.stringify({ email, password }));
}

export function getUser() {
  const data = localStorage.getItem("mockUser");
  return data ? JSON.parse(data) : null;
}

export function isLoggedIn() {
  return !!localStorage.getItem("loggedIn");
}

export function loginUser(email: string, password: string) {
  const user = getUser();
  if (user && user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    return true;
  }
  return false;
}

export function logoutUser() {
  localStorage.removeItem("loggedIn");
}
