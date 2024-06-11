document.getElementById('love-button').addEventListener('click', function() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heart.style.left = `${Math.random() * window.innerWidth}px`;

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
