fetch("https://swapi.dev/api")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Work with the JSON data here
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch operation
    console.error("Fetch operation error:", error);
  });
