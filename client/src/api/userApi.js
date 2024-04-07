// export async function handleLogin(e, name, password, setStatus, navigate) {
//   e.preventDefault();

//   const userData = {
//     username: name,
//     password: password,
//   };

//   try {
//     const response = await fetch("/v1/login", {
//       method: "POST",
//       withCredentials: true,
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     setStatus(response.status);
//     if (response.ok) {
//       console.log(response.status);
//       navigate(`/main/${name}`);
//     }
//   } catch (err) {
//     console.error("Error updating data:", err);
//   }
// }

export async function handleLogin(e, name, password, setStatus, navigate) {
  e.preventDefault();

  const userData = {
    username: name,
    password: password,
  };

  try {
    const response = await fetch("/v1/login", {
      method: "POST",
      withCredentials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    setStatus(response.status);

    if (response.status === 200) {
      // Successful login
      navigate(`/main/${name}`);
    } else if (response.status === 401) {
      // Unauthorized: Invalid credentials
      // Handle the error, e.g., display an error message
    } else {
      // Other errors
      // Handle them appropriately
    }
  } catch (err) {
    console.error("Error during login:", err);
    // Handle the error, e.g., display an error message
  }
}


export async function handleLogout(navigate) {
  const url = "/v1/logout";

  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      console.log("res STATUS: " + res.status);
      navigate("/");
    } else {
      alert("Failed to logout");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function handleCreateUser(
  e,
  name,
  password,
  navigate,
  handleLogin,
  setStatus,
  setDisplayError
) {
  const userData = {
    username: name,
    password: password,
  };

  try {
    const response = await fetch(
      "/v1/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.status === 409) {
      setDisplayError("username taken");
      return;
    }
    const json = await response.json();
    console.log("Data updated successfully:", json);
    handleLogin(e, name, password, setStatus, navigate);
  } catch (err) {
    console.error("Error updating data:", err);
  }
}
