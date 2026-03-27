const JSON_URL = "https://whenisthenextmcufilm.com/api";

fetch(JSON_URL)
  .then(res => res.json())
  .then(apiData => {
    // Guardar la siguiente película para next.html
    localStorage.setItem("nextMovie", JSON.stringify(apiData.following_production));

    // Mostrar la película actual
    renderMovie(apiData);
  })
  .catch(err => console.error(err));

function renderMovie(movieData) {
  document.getElementById("app").innerHTML = `
    <section class="flex-row">
      <article class="smart_shadow" style="background-image: url(${movieData.poster_url})"></article>
    </section>
    <div class="title">${movieData.title}</div>
    <div class="date">${movieData.release_date} (${movieData.days_until} días)</div>
    <div class="overview">${movieData.overview}</div>
  `;
}

function goNext() {
  window.location.href = "next.html";
}
