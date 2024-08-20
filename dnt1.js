

document.querySelectorAll('.place-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000);

    document.getElementById("placeBtn").onclick = function () {
        document.getElementById("places").classList.toggle("active");
    };
    
}



 
function getWeather() {
    const apiKey = 'a83e69ef64716b24b799240f8a8e810e'; 
    const city = 'Dantewada';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;
            document.getElementById('condition').textContent = data.weather[0].description;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Call the getWeather function when the page loads
document.addEventListener('DOMContentLoaded', getWeather);




document.addEventListener("DOMContentLoaded", function() {
    fetchLatestNews();
});



document.addEventListener("DOMContentLoaded", function() {
    fetchLatestNews();
});



document.addEventListener("DOMContentLoaded", function() {
    fetchLatestNews();
});

function fetchLatestNews() {
    const apiKey = 'eb24d414fc8e4d46b60858c76140efa1'; // Replace this with your actual API key
    const country = 'in'; // Replace with the country code you're interested in (e.g., 'us' for the United States)
    const query = 'delhi'; // Replace with your specific area or keyword
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&q=${query}&apiKey=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "ok" && data.articles.length > 0) {
                const article = data.articles[0]; // Get the latest article
                const newsArticleElement = document.getElementById('news-article');
                
                // Create HTML content
                const articleHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                
                // Insert HTML content into the placeholder
                newsArticleElement.innerHTML = articleHTML;
            } else {
                document.getElementById('news-article').innerHTML = '<p>No latest news available.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            document.getElementById('news-article').innerHTML = '<p>Failed to load latest news.</p>';
        });
}



document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('homeBtn');
    const placeBtn = document.getElementById('placeBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const festivalBtn = document.getElementById('festivalBtn')
    const homeSection = document.getElementById('homeSection');
    const placeSection = document.getElementById('placeSection');
    const newsSection = document.getElementById('newsSection');
    const foodSection = document.getElementById('foodSection');
    const festivalSection = document.getElementById('festivalSection');
    const aboutSection = document.getElementById('aboutSection');

    homeBtn.addEventListener('click', () => {
        homeSection.style.display = 'block';
        newsSection.style.display = 'block';
        placeSection.style.display = 'none';
        foodSection.style.display = 'none';
        festivalSection.style.display = 'none';
        aboutSection.style.display = 'none';
    });

    placeBtn.addEventListener('click', () => {
        homeSection.style.display = 'none';
        newsSection.style.display = 'none';
        foodSection.style.display = 'none';
        festivalSection.style.display = 'none';
        placeSection.style.display = 'block';
        aboutSection.style.display = 'none';
    });

    foodBtn.addEventListener('click', () => {
        homeSection.style.display = 'none';
        newsSection.style.display = 'none';
        placeSection.style.display = 'none';
        festivalSection.style.display = 'none';
        foodSection.style.display = 'block';
        aboutSection.style.display = 'none';
    });

    festivalBtn.addEventListener('click', () => {
        homeSection.style.display = 'none';
        newsSection.style.display = 'none';
        placeSection.style.display = 'none';
        foodSection.style.display = 'none';
        aboutSection.style.display = 'none';
        festivalSection.style.display = 'block';
    });

    aboutBtn.addEventListener('click', () => {
        homeSection.style.display = 'none';
        newsSection.style.display = 'none';
        placeSection.style.display = 'none';
        foodSection.style.display = 'none';
        festivalSection.style.display = 'none';
        aboutSection.style.display = 'block';
    })
});
