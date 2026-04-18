// File: Script.js
// Handles redirection from category cards on index.html to their respective pages.

/**
 * Defines the mapping between category heading text and destination page.
 * Add more mappings as needed (e.g., "Retail shops" → "retail.html").
 */
const categoryRedirectMap = {
  'Food & dining': 'Restaurant.html',
  'Local stores': 'Local%20Stores.html'   // URL-encoded space
};

/**
 * Finds all category cards and attaches click listeners based on the mapping.
 */
function setupCategoryRedirects() {
  // Wait for DOM to be fully loaded before accessing elements
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRedirects);
  } else {
    initRedirects();
  }

  function initRedirects() {
    const categoryCards = document.querySelectorAll('.cat-card');
    if (!categoryCards.length) return;

    categoryCards.forEach(card => {
      const heading = card.querySelector('h3');
      if (!heading) return;

      const headingText = heading.textContent.trim();
      const targetPage = categoryRedirectMap[headingText];

      if (targetPage) {
        // Make the card clickable
        card.style.cursor = 'pointer';
        card.addEventListener('click', (event) => {
          // If the click originated from a link inside the card, do nothing (let the link work normally)
          if (event.target.closest('a')) return;
          window.location.href = targetPage;
        });
      }
    });
  }
}

// Initialize the redirect functionality
setupCategoryRedirects();
