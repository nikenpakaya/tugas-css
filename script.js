// Get all the images in the gallery
const galleryImages = document.querySelectorAll('.gallery img');

// Add event listeners to each image for mouseover and mouseout events
galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        // Add a scale transformation and box shadow on mouseover
        image.style.transform = 'scale(1.1)';
        image.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    });

    image.addEventListener('mouseout', () => {
        // Remove the scale transformation and box shadow on mouseout
        image.style.transform = 'scale(1)';
        image.style.boxShadow = 'none';
    });
});
