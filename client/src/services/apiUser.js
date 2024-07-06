const BASE_URL = import.meta.env.VITE_REACT_API_BASE_URL;

export async function getBooksList({
  token,
  searchedValue = "all",
  category = "",
}) {
  try {
    const response = await fetch(
      `${BASE_URL}admin/book/all?limit=5&page=1&search=${searchedValue}&categories=${category}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Request error, Please try sgain!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// export async function checkout({ token, body }) {
//   try {
//     const response = await fetch(`${BASE_URL}user/order/place`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       throw new Error("Request error, Please try sgain!");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }
