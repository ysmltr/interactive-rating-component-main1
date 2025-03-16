document.addEventListener('DOMContentLoaded', () => {
    const ratingCard = document.getElementById('rating-card');
    const thankYouCard = document.getElementById('thank-you-card');
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitBtn = document.getElementById('submit-btn');
    const selectedRatingSpan = document.getElementById('selected-rating');

    let selectedRating = null;

    // Add click event listeners to rating buttons
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Clear previously selected buttons
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Select current button
            button.classList.add('selected');
            selectedRating = button.textContent;
        });
    });

    // Add click event listener to submit button
    submitBtn.addEventListener('click', () => {
        if (selectedRating) {
            // Show thank you card if rating is selected
            selectedRatingSpan.textContent = selectedRating;
            ratingCard.classList.add('hidden');
            thankYouCard.classList.remove('hidden');
        } else {
            alert('Please select a rating before submitting');
        }
    });
});