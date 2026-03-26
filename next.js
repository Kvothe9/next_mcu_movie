const data = JSON.parse(localStorage.getItem("nextMovie"));

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

function goBack() {
  window.location.href = "index.html";
}