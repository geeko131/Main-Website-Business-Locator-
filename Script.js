// File: category-redirect.js
// This script handles redirection when the "Food & Dining" category card is clicked.

/**
 * Finds the category card that contains the heading "Food & dining"
 * and attaches a click event listener to redirect to Restaurant.html.
 */
function setupFoodCategoryRedirect() {
  // Wait for the DOM to be fully loaded before accessing elements
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRedirect);
  } else {
    initRedirect();
  }

  function initRedirect() {
    // Select all category cards
    const categoryCards = document.querySelectorAll('.cat-card');
    if (!categoryCards.length) return;

    // Find the card whose <h3> text exactly matches "Food & dining"
    const foodCard = Array.from(categoryCards).find(card => {
      const heading = card.querySelector('h3');
      return heading && heading.textContent.trim() === 'Food & dining';
    });

    if (!foodCard) return;

    // Add click event listener to the card
    foodCard.addEventListener('click', function(event) {
      // Prevent any unintended side effects if the card contains nested links
      if (event.target.closest('a')) return; // let links behave normally
      
      // Redirect to the Restaurant.html page
      window.location.href = 'Restaurant.html';
    });

    // Improve UX: add pointer cursor to indicate clickable area
    foodCard.style.cursor = 'pointer';
  }
}

// Initialize the redirect functionality
setupFoodCategoryRedirect();
