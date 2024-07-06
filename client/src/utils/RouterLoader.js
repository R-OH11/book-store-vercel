import { redirect } from "react-router-dom";

export function userLoader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }

  // Decode the token and check the role
  const currentRole = localStorage.getItem("role");
  if (currentRole !== "user") {
    return redirect("/");
  }

  return null;
}

export function adminLoader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }

  // Decode the token and check the role
  const currentRole = localStorage.getItem("role");
  if (currentRole !== "admin") {
    return redirect("/");
  }

  return null;
}
