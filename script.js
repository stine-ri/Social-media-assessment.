
document.addEventListener("DOMContentLoaded", function() {
    // Initialize dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Fetch data from the JSON server
    fetchSocialMediaData();
});

function fetchSocialMediaData() {
    fetch('http://localhost:3000/socialMedia')
        .then(response => response.json())
        .then(data => {
            document.getElementById('facebook-followers').innerText = data.facebook.followers_count;
            document.getElementById('facebook-change').innerText = `${data.facebook.change} Today`;

            document.getElementById('twitter-followers').innerText = data.twitter.followers_count;
            document.getElementById('twitter-change').innerText = `${data.twitter.change} Today`;

            document.getElementById('instagram-followers').innerText = data.instagram.followers_count;
            document.getElementById('instagram-change').innerText = `${data.instagram.change} Today`;

            document.getElementById('youtube-followers').innerText = data.youtube.followers_count;
            document.getElementById('youtube-change').innerText = `${data.youtube.change} Today`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
