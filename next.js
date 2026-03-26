const data = JSON.parse(localStorage.getItem("nextMovie"));

document.getElementById("app").innerHTML = `
  <div class="card">
    <img src="${data.poster_url}">
    <div class="title">${data.title}</div>
    <div class="date">${data.release_date} (${data.days_until} días)</div>
    <div class="overview">${data.overview}</div>
  </div>
`;

function goBack() {
  window.location.href = "index.html";
}