const BASE_URL = import.meta.env.VITE_REACT_API_BASE_URL;

export async function addBook({ token, body }) {
  try {
    const response = await fetch(`${BASE_URL}admin/book/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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

export async function updateBook({ token, body }) {
  try {
    const response = await fetch(`${BASE_URL}admin/book/update`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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

export async function deleteBook({ token, bookId }) {
  try {
    const response = await fetch(`${BASE_URL}admin/book/remove`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId }),
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
