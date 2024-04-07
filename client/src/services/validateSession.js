// export async function validateSession(setStatus) {
//   const url = "/v1/session";
//   const res = await fetch(url, {
//     method: "GET",
//     withCredentials: true,
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json(); // Parse response body as JSON
//   console.log(res.status);
//   setStatus(res.status);
//   return { status: res.status, username: data.username }; // Return both status and username
// }
export async function validateSession(setStatus) {
  const url = "/v1/session";
  const res = await fetch(url, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json", // Specify that the client expects JSON response
    },
  });
  const data = await res.json(); // Parse response body as JSON
  console.log(res.status);
  setStatus(res.status);
  return { status: res.status, username: data.username }; // Return both status and username
}
