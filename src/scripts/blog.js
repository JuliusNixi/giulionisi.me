var filterPosts = function(btnClicked) {
    const allPosts = document.querySelectorAll('.post');
    const allButtons = document.querySelectorAll('.btn-outline');
    const clickedButton = btnClicked;

    for (let button of allButtons) {
        button.classList.remove('btn-primary');
        if (button === clickedButton) {
            button.classList.add('btn-primary');
        }
    }
    for (let post of allPosts) {
        let tags = post.getAttribute('data-tags').split(',').map((tag) => tag.trim().toLowerCase());
        tags.push('all');
        if (!tags.includes(btnClicked.textContent.toLowerCase())) {
            post.classList.add('hidden');
        } else {
            post.classList.remove('hidden');
        }
    }
}

var setButtons = function() {
    // Initialize each button with the correct function call.
    document.querySelectorAll('.btn-outline').forEach((button) => {
        button.addEventListener('click', (e) => {
            const sender = e.target;
            const btnClicked = sender;
            filterPosts(btnClicked);
        });
    });
}

// First load.
setButtons();

// On swap.
document.addEventListener("astro:after-swap", function() {
    setButtons();
});
