const apiData = {
  "days_until": 125,
  "following_production": {
    "days_until": 265,
    "id": 1003596,
    "overview": "The Avengers, Wakandans...",
    "poster_url": "https://image.tmdb.org/t/p/w300/s2Fkuq0tj7mjAHEdbfQkFkdbeRI.jpg",
    "release_date": "2026-12-16",
    "title": "Avengers: Doomsday",
    "type": "Movie"
  },
  "id": 969681,
  "overview": "Four years have passed since...",
  "poster_url": "https://image.tmdb.org/t/p/w300/ucQ0QBXXQPSxeUmWfh4YQenIuB9.jpg",
  "release_date": "2026-07-29",
  "title": "Spider-Man: Brand New Day",
  "type": "Movie"
};

// Guardar la siguiente película
localStorage.setItem("nextMovie", JSON.stringify(apiData.following_production));

// Render principal
document.getElementById("app").innerHTML = `
  <div class="card">
    <img 
      src="${apiData.poster_url}" 
      loading="lazy"
      width="300"
      height="450"
    >
    <div class="title">${apiData.title}</div>
    <div class="date">${apiData.release_date} (${apiData.days_until} días)</div>
    <div class="overview">${apiData.overview}</div>
  </div>
`;

function goNext() {
  window.location.href = "next.html";
}