// Manipulate the DOM
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const darkModeBtn = document.getElementById("drk-mode");
const loader = document.getElementById("loader");

// Dodavanje animacije na quote text kada se klikne na New Quote dugme
document.getElementById("new-quote").addEventListener("click", function () {
  const quoteText = document.getElementById("quote-text");
  quoteText.style.animation = "fadeIn 3s ease";

  // Ovo će resetovati animaciju nakon završetka
  quoteText.addEventListener("animationend", function () {
    quoteText.style.animation = ""; // Resetovanje animacije
  });
});

// Function to show loading spinner and hide quote container
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Function to hide loading spinner and show quote container
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Function to get a new random quote
function newQuote() {
  loading(); // Show loading spinner

  // Retrieve a random quote from the localQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  //   Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // Check if the quote text is long, add a class for styling quote text and author text if it is
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
    authorText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
    author.classList.remove("long-quote");
  }

  // Set the quote text and hide loading spinner
  quoteText.textContent = quote.text;
  complete();
}

// Function to tweet the current quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

  // Open Twitter intent in a new tab
  window.open(twitterUrl, "_blank");
}

// Function to like the current quote on Facebook
function likeQuoteOnFacebook() {
  // You can customize the URL and other parameters as needed
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;

  // Open Facebook share dialog in a new tab
  window.open(facebookUrl, "_blank");
}

// Add event listener to the Facebook like button
const likeFacebookBtn = document.getElementById("like-facebook");
likeFacebookBtn.addEventListener("click", likeQuoteOnFacebook);

// Dark Mode
function darkMode() {
  document.documentElement.classList.toggle("dark-mode");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
darkModeBtn.addEventListener("click", darkMode);
// darkModeBtn.addEventListener("touch", darkMode);

// On Load
newQuote();
