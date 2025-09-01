const arabic = window.location.href.includes('/ar/');
const now = new Date();
// Filter and sort upcoming dates & details
const filteredAndSorted = datesWithDetails
  .map(entry => {
    const filteredDetails = entry.details.filter(detail => {
      const [timeStr] = detail.time.split('|').map(s => s.trim());
      return new Date(`${entry.date} ${timeStr}`) >= now;
    });
    return { ...entry, details: filteredDetails };
  })
  .filter(entry => entry.details.length > 0)
  .sort((a, b) => new Date(a.date) - new Date(b.date));

// Sort each entry's details by time
filteredAndSorted.forEach(e => {
  e.details.sort((a, b) => {
    const [timeA] = a.time.split('|').map(s => s.trim());
    const [timeB] = b.time.split('|').map(s => s.trim());
    return new Date(`1970-01-01 ${timeA}`) - new Date(`1970-01-01 ${timeB}`);
  });
});

function createAnalystHtml(analyst) {
  return analyst.map(a => {
    if (a.type === 'ul')
      return `<ul>${(a.items || []).map(item => `<li>${item}</li>`).join('')}</ul>`;
    if (a.type === 'ol')
      return `<ol>${(a.items || []).map(item => `<li>${item}</li>`).join('')}</ol>`;
    if (a.type === 'p')
      return a.items ? a.items.map(item => `<p>${item}</p>`).join('') : `<p>${a.value}</p>`;
    if (a.type === 'text')
      return `<p>${a.value || ""}</p>`;
    return '';
  }).join('');
}

function createDetailsHtml(e, dayName, dayNum, monthName, yearNum, enMonthName) {
  return e.details.map(d => {
    const [hours = "00", minutes = "00", seconds = "00"] = d.time?.match(/\d+/g) || [];
    // ✅ data-date will always use English month
    const fullDate = `${dayNum} ${enMonthName} ${yearNum}, ${hours} Hours:${minutes} Minutes:${seconds} Seconds`;
    return `
      <div class="uwDetails">
        <div class="image">${d.img ? `<img src="${d.img}" width="155" height="194" alt="">` : ""}</div>
        <div class="text">
          <p class="fullDate">${dayName}, ${dayNum} ${monthName} ${yearNum}</p>
          <div class="tags">
            ${d.language ? `<span class="clrd">${d.language}</span>` : ""}
            ${d.time ? `<span>${d.time}</span>` : ""}
          </div>
          ${d.hd ? `<p class="hd">${d.hd}</p>` : ""}
          ${d.shd ? `<p class="shd">${d.shd}</p>` : ""}
          ${d.analyst ? `<div class="toggleArea">${createAnalystHtml(d.analyst)}</div>` : ""}
        </div>
        <div class="timer">
          <ul data-date="${fullDate}">
            <li><b></b><span>${arabic ? `الأيام` : `DAYS`}</span></li>
            <li><b></b><span>${arabic ? `الساعات` : `HRS`}</span></li>
            <li><b></b><span>${arabic ? `الدقائق` : `MINS`}</span></li>
            <li><b></b><span>${arabic ? `الثواني` : `SECS`}</span></li>
          </ul>
          <a href="#">${arabic ? `شاهد من هنا` : `Watch Here`}</a>
        </div>
      </div>
    `;
  }).join('');
}

// Render filteredAndSorted
filteredAndSorted.forEach(e => {
  const eventDate = new Date(e.date),
    today = new Date();
  today.setHours(0, 0, 0, 0);

  if (eventDate >= today) {
    // Get names for both English and displayed language
    const dayName = eventDate.toLocaleDateString(arabic ? 'ar' : 'en-US', { weekday: 'short' }).toUpperCase(),
      dayNum = eventDate.getDate(),
      monthName = eventDate.toLocaleDateString(arabic ? 'ar' : 'en-US', { month: 'short' }).toUpperCase(),
      yearNum = eventDate.getFullYear(),
      enMonthName = eventDate.toLocaleDateString('en-US', { month: 'short' });

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
    document.querySelector(".details").innerHTML += `
      <div class="swiper-slide">${createDetailsHtml(e, dayName, dayNum, monthName, yearNum, enMonthName)}</div>
    `;
  }
});

function startCountdown(ul) {
  const bTags = ul.querySelectorAll('li b'),
    dateStr = ul.getAttribute('data-date'),
    dateMatch = dateStr.match(/(\d{1,2}) (\w+) (\d{4}), (\d{1,2}) Hours:(\d{1,2}) Minutes:(\d{1,2}) Seconds/);
  if (!dateMatch) return;

  const [, day, monthName, year, hours, minutes, seconds] = dateMatch;
  const targetDate = new Date(`${day} ${monthName} ${year} ${hours}:${minutes}:${seconds}`);

  function update() {
    const now = new Date(),
      diffSec = Math.max(0, Math.floor((targetDate - now) / 1000));
    let diff = diffSec;
    const days = Math.floor(diff / 86400); diff %= 86400;
    const hrs = Math.floor(diff / 3600); diff %= 3600;
    const mins = Math.floor(diff / 60); diff %= 60;
    const secs = diff;

    bTags[0].textContent = String(days).padStart(2, '0');
    bTags[1].textContent = String(hrs).padStart(2, '0');
    bTags[2].textContent = String(mins).padStart(2, '0');
    bTags[3].textContent = String(secs).padStart(2, '0');

    if (diffSec <= 0) {
      ul.closest('.uwDetails').remove();
      document.querySelector('.gallery-big .details').style.height = '';
    }
    checkEmptySwiperSlide();
  }

  update();
  setInterval(update, 1000);
}

// Check if empty, and set empty message
function checkEmptySwiperSlide() {
  const gallerySwiper = document.querySelector('.gallery-big .details .swiper-slide');
  if (gallerySwiper && gallerySwiper.children.length === 0) {
    gallerySwiper.innerHTML = generateEmptyMessage();
    gallerySwiper.closest(".details").style.height = "";
  }
}

// Empty message helper
function generateEmptyMessage() {
  return arabic ?
    `<div class="uwDetails message">انتهت جميع ندوات اليوم التعليمية. يمكنك الاختيار من بين الندوات القادمة.</div>` :
    `<div class="uwDetails message">All of today's educational webinars are over. You can choose from the upcoming educational webinars.</div>`;
}

// Empty thumbs check
function checkEmptyThumbs() {
  const dates = document.querySelector(".upcomingWebinars .gallery-thumbs .dates");
  if (dates && dates.children.length === 0) {
    const oldDiv = document.querySelector('.upcomingWebinars .slider');
    if (oldDiv) oldDiv.outerHTML = generateEmptyThumbsMessage();
  }
}

// Empty thumbs message helper
function generateEmptyThumbsMessage() {
  return arabic ? 
    `<div class="uwDetails message">سيتم إطلاق الندوات التعليمية عبر الإنترنت قريبًا جدًا.</div>` :
    `<div class="uwDetails message">Educational webinars will be launched very soon.</div>`;
}

// Run empty thumb check
checkEmptyThumbs();

// Start all countdowns
document.querySelectorAll('.upcomingWebinars ul[data-date]').forEach(startCountdown);

// Remove empty elements
document.querySelectorAll(".upcomingWebinars .swiper-slide *:not(img)").forEach(e => {
  if (e.innerHTML.trim() === "") e.remove();
});
