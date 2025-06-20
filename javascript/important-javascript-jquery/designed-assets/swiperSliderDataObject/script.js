datesWithDetails.forEach(function(e) {
  const eventDate = new Date(e.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (eventDate >= today) {
    const dayName = eventDate.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = eventDate.getDate();
    const monthName = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const yearNum = eventDate.getFullYear();

    document.querySelector(".dates").innerHTML += `
      <div class="swiper-slide">
        <div class="uwTab">
          <span class="day">${dayName}</span>
          <span class="date">${dayNum}</span>
          <span class="month">${monthName}</span>
          <span class="year">${yearNum}</span>
        </div>
      </div>
    `;

    let detailsWrapper = `<div class="swiper-slide">`;

    e.details.forEach(function(d) {
      const [hours = "00", minutes = "00", seconds = "00"] = d.time?.match(/\d+/g) || [];
      const fullDate = `${dayNum} ${monthName} ${yearNum}, ${hours} Hours:${minutes} Minutes:${seconds} Seconds`;
      detailsWrapper += `
        <div class="uwDetails">
          <div class="image">
            ${d.img ? `<img src="${d.img}" width="155" height="194" alt="">` : ""}
          </div>
          <div class="text">
              <p class="fullDate">${dayName}, ${dayNum} ${monthName} ${yearNum}</p>
              <div class="tags">
                  ${d.language ? `<span class="clrd">${d.language}</span>` : ""}
                  ${d.time ? `<span>${d.time}</span>` : ""}
              </div>
              ${d.hd ? `<p class="hd">${d.hd}</p>` : ""}
              ${d.shd ? `<p class="shd">${d.shd}</p>` : ""}
              ${
                d.analyst ?
                  `<div class="toggleArea">${
                      d.analyst.map(a => {
                          if (a.type === 'ul') {
                            return '<ul>' + (a.items || []).map(item => `<li>${item}</li>`).join('') + '</ul>';
                          }
                          if (a.type === 'ol') {
                            return '<ol>' + (a.items || []).map(item => `<li>${item}</li>`).join('') + '</ol>';
                          }
                          if (a.type === 'p') {
                            if (a.items) {
                              return a.items.map(item => `<p>${item}</p>`).join('');
                            } else if (a.value) {
                              return `<p>${a.value}</p>`;
                            }
                          }
                          if (a.type === 'text') {
                            return `<p>${a.value || ""}</p>`;
                          }
                          return '';
                        })
                        .join('')
                  }</div>`
                  : ""
              }
          </div>
          <div class="timer">
            <ul data-date="${fullDate}">
                <li><b></b><span>DAYS</span></li>
                <li><b></b><span>HRS</span></li>
                <li><b></b><span>MINS</span></li>
                <li><b></b><span>SECS</span></li>
            </ul>
            <a href="#">Watch Here</a>
          </div>
        </div>`;
    });
    detailsWrapper += `</div>`;
    document.querySelector(".details").innerHTML += detailsWrapper;
  }
});

function startCountdown(ul) {
  const bTags = ul.querySelectorAll('li b');
  const dateStr = ul.getAttribute('data-date');

  const dateMatch = dateStr.match(/(\d{1,2}) (\w+) (\d{4}), (\d{1,2}) Hours:(\d{1,2}) Minutes:(\d{1,2}) Seconds/);
  if (!dateMatch) return;

  const [, day, monthName, year, hours, minutes, seconds] = dateMatch;
  const targetDate = new Date(`${day} ${monthName} ${year} ${hours}:${minutes}:${seconds}`);

  function update() {
    const now = new Date();
    let diff = Math.floor((targetDate - now) / 1000);
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / 86400);
    diff %= 86400;
    const hrs = Math.floor(diff / 3600);
    diff %= 3600;
    const mins = Math.floor(diff / 60);
    const secs = diff % 60;

    bTags[0].textContent = String(days).padStart(2, '0');
    bTags[1].textContent = String(hrs).padStart(2, '0');
    bTags[2].textContent = String(mins).padStart(2, '0');
    bTags[3].textContent = String(secs).padStart(2, '0');

    if (days === 0 && hrs === 0 && mins === 0 && secs === 0) {
      const uwDetails = ul.closest('.uwDetails');
      if (uwDetails) {
        uwDetails.remove();
      }
    }
    const gallerySwiper = document.querySelector('.gallery-big .details .swiper-slide');
    if (gallerySwiper && gallerySwiper.children.length === 0) {
      gallerySwiper.innerHTML = `
        <div class="uwDetails message">
          Today's all meetings have done before some time.
        </div>
      `;
      gallerySwiper.closest(".details").style.height = "";
    }
  }

  update();
  setInterval(update, 1000);
}

const dates = document.querySelector(".upcomingWebinars .gallery-thumbs .dates");
if(document.body.contains(dates)){
  if(dates.children.length === 0){
    const oldDiv = document.querySelector('.upcomingWebinars .slider');
    if (oldDiv) {
      oldDiv.outerHTML = `
        <div class="uwDetails message">
          Educational webinars will be launched very soon.
        </div>`;
    }
  }
}
  

document.querySelectorAll('.upcomingWebinars ul[data-date]').forEach(startCountdown);

document.querySelectorAll(".upcomingWebinars .swiper-slide *:not(img)").forEach((e) => {
  if (e.innerHTML.trim() === "") {
    e.remove();
  }
});

