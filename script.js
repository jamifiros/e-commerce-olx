function navigateToLink() {
    var selectedValue = document.getElementById("filterSelect").value;
    switch (selectedValue) {
        case "buy":
            window.location.href = "#"; // Change the URL accordingly
            break;
        case "rent":
            window.location.href = "#"; // Change the URL accordingly
            break;
        
    }
}

function navigateToButton() {
    navigateToLink();
}


// Get the current card's review stars element
const reviewStars = document.querySelector('.review-stars');
    
// Get the rating for the current product
const rating = parseInt(reviewStars.dataset.rating, 10);

// Generate the stars based on the rating
const stars = '\u2605'.repeat(rating) + '\u2606'.repeat(5 - rating);

// Set the generated stars as the content of the review stars element
reviewStars.innerHTML = stars;



    function openWhatsApp() {
      // Replace '1234567890' with the phone number
      var phoneNumber = '1234567890';

      var whatsappUrl = 'https://wa.me/' + phoneNumber;

      window.open(whatsappUrl, '_blank');
    }
 
    $('#carouselMultiItemExample').carousel();



   
    document.addEventListener('DOMContentLoaded', function () {
        // Get all product cards
        var productCards = document.querySelectorAll('.card');
    
        // Add click event listener to each card
        productCards.forEach(function (card) {
          card.addEventListener('click', function () {
    
            // Construct the URL with the product ID
            var detailsPageUrl = 'details.html';
    
            // Navigate to the details page
            window.location.href = detailsPageUrl;
          });
        });
      });