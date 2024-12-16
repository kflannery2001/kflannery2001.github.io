// Ron Swanson Quotes API
const dataSource = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(dataSource)
  .then((res) => res.json())
  .then((data) => {
    const quoteElement = document.createElement("blockquote");
    quoteElement.textContent = `"${data[0]}"`;
    document.body.appendChild(quoteElement);
  })
  .catch((error) => {
    console.error("Error fetching the quote:", error);
    const errorElement = document.createElement("blockquote");
    errorElement.textContent = "Failed to load quote. Please try again.";
    document.body.appendChild(errorElement);
  });
