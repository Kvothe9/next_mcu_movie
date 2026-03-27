// next.html
const nextMovie = JSON.parse(localStorage.getItem("nextMovie"));

document.getElementById("app").innerHTML = `
  <section class="flex-row">
      <article class="smart_shadow" style="background-image: url(${nextMovie.poster_url})"></article>
    </section>
    <div class="title">${nextMovie.title}</div>
    <div class="date">${nextMovie.release_date} (${nextMovie.days_until} días)</div>
    <div class="overview">${nextMovie.overview}</div>
`;

function goBack() {
  window.location.href = "index.html";
}
