const BASE_URL = import.meta.env.VITE_REACT_API_BASE_URL;

//Auth api calls
export async function signup({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) {
  try {
    const response = await fetch(`${BASE_URL}user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      }),
    });

    if (!response.ok) {
      throw new Error("Request error, Please try sgain!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function userLogin({ email, password }) {
  try {
    const response = await fetch(`${BASE_URL}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Request error, Please try sgain!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function adminLogin({ email, password }) {
  try {
    const response = await fetch(`${BASE_URL}admin/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Request error, Please try sgain!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
