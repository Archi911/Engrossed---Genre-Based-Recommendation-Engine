const backgroundContainer = document.querySelector('main');
const images = [
    'http://www.pixelstalk.net/wp-content/uploads/2016/01/Anime-Background-Desktop.jpg',
    'https://www.designyourway.net/blog/wp-content/uploads/2017/03/Anime-Wallpaper-Desktop-Background-40.jpg',
    'http://www.pixelstalk.net/wp-content/uploads/2016/01/Anime-Wallpapers-HD-download-free.jpg',
    'http://getwallpapers.com/wallpaper/full/f/5/d/745886-amazing-anime-desktop-backgrounds-1920x1080-download-free.jpg',
    'https://cdna.artstation.com/p/assets/images/images/053/417/540/large/dante-leapman-final-1.jpg?1662145194',
    'https://wallpaperaccess.com/full/124499.jpg',
    'https://wallpaperaccess.com/full/1891954.jpg',
    'https://wallpapers.com/images/hd/harry-potter-all-characters-lvbwsigjt3yykg3n.jpg',
    'https://wallpapercave.com/wp/wp8013203.jpg',
    'https://wallpaperaccess.com/full/3281452.jpg',
    'https://images8.alphacoders.com/136/1367177.jpeg',
    'https://cdnb.artstation.com/p/assets/images/images/035/064/029/large/anubhav-goswami-ikigai-poster.jpg?1614013752',
    'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2014/06/fault_in_our_stars.jpg',
    'https://4kwallpapers.com/images/wallpapers/your-name-5k-3840x2160-14943.jpg',
    'https://images8.alphacoders.com/467/467488.jpg',
    

];

let currentImageIndex = 0;

function changeBackground() {
    backgroundContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

changeBackground();

setInterval(changeBackground, 5000);

function suggest() {
  const category = document.getElementById('category').value;
  const genre = document.getElementById('genre').value;
  const rating = parseInt(document.getElementById('rating').value);
  const results = recommend(category, genre, rating);
  let output = results.length ? results.map(item => `<p>${item.title} - ${item.genre} (Rating: ${item.rating})</p>`).join("") : "No recommendations found";
  document.getElementById('results').innerHTML = output;
}

const recommendations = {
    anime: [
        { title: "Attack on Titan", genre: "Action", rating: 9 },
        { title: "Your Name", genre: "Romance", rating: 8.5 },
        { title: "Death Note", genre: "Thriller", rating: 9 },
        { title: "Fullmetal Alchemist: Brotherhood", genre: "Adventure", rating: 9.2 },
        { title: "Demon Slayer: Kimetsu no Yaiba", genre: "Action", rating: 8.7 },
        { title: "Hunter x Hunter", genre: "Adventure", rating: 9 },
        { title: "Steins;Gate", genre: "Sci-Fi", rating: 9.1 },
        { title: "Cowboy Bebop", genre: "Sci-Fi", rating: 8.9 },
        { title: "One Piece", genre: "Adventure", rating: 8.6 },
        { title: "Jujutsu Kaisen", genre: "Action", rating: 8.8 },
        { title: "Violet Evergarden", genre: "Drama", rating: 8.7 },
        { title: "Spirited Away", genre: "Fantasy", rating: 9.3 },
        { title: "Clannad", genre: "Romance", rating: 8.3 },
        { title: "Code Geass: Lelouch of the Rebellion", genre: "Sci-Fi", rating: 8.8 },
        { title: "My Hero Academia", genre: "Action", rating: 8.4 },
        { title: "Haikyu!!", genre: "Drama", rating: 8.6 },
        { title: "Psycho-Pass", genre: "Sci-Fi", rating: 8.5 },
        { title: "Mob Psycho 100", genre: "Action", rating: 8.7 },
        { title: "Made in Abyss", genre: "Adventure", rating: 8.9 },
        { title: "March Comes in Like a Lion", genre: "Drama", rating: 8.6 },
        { title: "Another", genre: "Horror", rating: 7.8 },
        { title: "Tokyo Ghoul", genre: "Horror", rating: 8.2 },
        { title: "Erased", genre: "Thriller", rating: 8.5 },
        { title: "Fruits Basket", genre: "Romance", rating: 8.1 },
        { title: "Spice and Wolf", genre: "Romance", rating: 8.0 },
        { title: "Record of Ragnarok", genre: "Mythology", rating: 8.5 },
        { title: "Kamigami no Asobi", genre: "Mythology", rating: 7.5 },
        { title: "Fate/stay night", genre: "Mythology", rating: 8.8 },
        { title: "Noragami", genre: "Mythology", rating: 8.3 },
        { title: "Inuyasha", genre: "Mythology", rating: 8.2 },
    ],
    book: [
        { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", rating: 8.8 },
        { title: "The Fault in Our Stars", genre: "Romance", rating: 8.0 },
        { title: "1984", genre: "Thriller", rating: 9.1 },
        { title: "The Lord of the Rings", genre: "Fantasy", rating: 9.2 },
        { title: "Pride and Prejudice", genre: "Romance", rating: 8.7 },
        { title: "To Kill a Mockingbird", genre: "Drama", rating: 9.0 },
        { title: "The Hitchhiker's Guide to the Galaxy", genre: "Sci-Fi", rating: 8.5 },
        { title: "The Book Thief", genre: "Drama", rating: 8.9 },
        { title: "Dune", genre: "Sci-Fi", rating: 9.0 },
        { title: "The Chronicles of Narnia", genre: "Fantasy", rating: 8.4 },
        { title: "The Catcher in the Rye", genre: "Drama", rating: 8.2 },
        { title: "Little Women", genre: "Romance", rating: 8.3 },
        { title: "The Picture of Dorian Gray", genre: "Horror", rating: 8.1 },
        { title: "The Count of Monte Cristo", genre: "Adventure", rating: 8.8 },
        { title: "The Martian", genre: "Sci-Fi", rating: 8.6 },
        { title: "The Silent Patient", genre: "Thriller", rating: 8.4 },
        { title: "Circe", genre: "Fantasy", rating: 8.7 },
        { title: "Project Hail Mary", genre: "Sci-Fi", rating: 8.9 },
        { title: "The Invisible Life of Addie LaRue", genre: "Romance", rating: 8.5 },
        { title: "Where the Crawdads Sing", genre: "Mystery", rating: 8.3 },
        { title: "Dracula", genre: "Horror", rating: 8.0 },
        { title: "Frankenstein", genre: "Horror", rating: 8.2 },
        { title: "The Haunting of Hill House", genre: "Horror", rating: 8.6 },
        { title: "The Time Machine", genre: "Sci-Fi", rating: 8.1 },
        { title: "A Court of Thorns and Roses", genre: "Romance", rating: 8.4 },
        { title: "Circe", genre: "Mythology", rating: 8.7 },
        { title: "Mythos", genre: "Mythology", rating: 8.9 },
        { title: "American Gods", genre: "Mythology", rating: 8.6 },
        { title: "The Song of Achilles", genre: "Mythology", rating: 9.1 },
        { title: "Percy Jackson & the Olympians", genre: "Mythology", rating: 8.5 },
        { title: "Norse Mythology", genre: "Mythology", rating: 8.4 },
        { title: "Lavinia", genre: "Mythology", rating: 8.0 },
    ]
};

async function getBookRecommendations(genre, minRating) {
    try {
        let apiUrl = `https://openlibrary.org/search.json?genre=${genre}`;
        if (genre === "Mythology") {
            apiUrl = `https://openlibrary.org/search.json?q=mythology`;
        }
    } catch (error) {
        
    }
}

function recommend(type, genre, minRating) {
    let results = recommendations[type].filter(item => item.genre.includes(genre) && item.rating >= minRating
    );
    return results;
}