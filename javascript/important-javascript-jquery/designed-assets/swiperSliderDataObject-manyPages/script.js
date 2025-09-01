const main = document.querySelector("section.upcomingWebinars");
if (main) {
	let webinarPop = document.createElement("div");
	webinarPop.className = "webinarPop";
	webinarPop.innerHTML = `<div class="upcomingWebinars"></div>`;
	main.insertAdjacentElement("afterend", webinarPop);
}











const arabic = window.location.href.includes('/ar/');
const now = new Date();

// 🔹 Helper: extract parts of a date
function getDateParts(date, arabic) {
	return {
		dayName: date.toLocaleDateString(arabic ? 'ar' : 'en-US', { weekday: 'short' }).toUpperCase(),
		dayNum: date.getDate(),
		monthName: date.toLocaleDateString(arabic ? 'ar' : 'en-US', { month: 'short' }).toUpperCase(),
		yearNum: date.getFullYear(),
		enMonthName: date.toLocaleDateString('en-US', { month: 'short' })
	};
}

function normalizeTimeStr(time) {
	const match = time.match(/(\d{1,2}:\d{2}(?::\d{2})?\s*(AM|PM)?)/i);
	return match ? match[1] : null;
}

function buildDate(dateStr, timeStr) {
	const normalized = normalizeTimeStr(timeStr);
	if (!normalized) return null;
	return new Date(`${dateStr} ${normalized}`);
}

const filteredAndSorted = datesWithDetails
	.map(entry => {
		const filteredDetails = entry.details.filter(detail => {
			const dt = buildDate(entry.date, detail.time);
			return dt; // ✅ ab sirf valid date rakhega
		});
		return { ...entry, details: filteredDetails };
	})
	.filter(entry => entry.details.length > 0)
	.sort((a, b) => {
		const da = buildDate(a.date, a.details[0].time);
		const db = buildDate(b.date, b.details[0].time);
		return da - db;
	});

filteredAndSorted.forEach(e => {
	e.details.sort((a, b) => buildDate(e.date, a.time) - buildDate(e.date, b.time));
});

function createtextHtml(text) {
	return text.map(a => {
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
		const fullDate = `${dayNum} ${enMonthName} ${yearNum}, ${hours} Hours:${minutes} Minutes:${seconds} Seconds`;
		return `
		<div class="uwDetails">
			<div class="image">
				${d.img ? `<img src="${d.img}" width="155" height="194" alt="">` : ""}
				${d.hd1 ? `<span class="hd1">${d.hd1}</span>` : ""}
				${d.text ? `<div class="toggleText">${createtextHtml(d.text)}</div>` : ""}
			</div>
			<div class="text">
				<p class="fullDate">${dayName}, ${dayNum} ${monthName} ${yearNum}</p>
				<div class="tags">
					${d.language ? `<span class="clrd">${d.language}</span>` : ""}
					${d.time ? `<span>${d.time}</span>` : ""}
				</div>
				${d.hd ? `<p class="hd">${d.hd} <img src="" width="27" height="28" alt=""></p>` : ""}
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
				<a href=${d.link ? d.link : "#"} target="_blank">${arabic ? `شاهد من هنا` : `Watch Here`}</a>
			</div>
		</div>
	`;
	}).join('');
}

// Render slides
filteredAndSorted.forEach(e => {
	const eventDate = new Date(e.date);
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	if (eventDate >= today) {
		const { dayName, dayNum, monthName, yearNum, enMonthName } = getDateParts(eventDate, arabic);

		const dats = document.querySelector(".upcomingWebinars .dates");
		const dts = document.querySelector(".upcomingWebinars .details");
		if(dats){
			dats.innerHTML += `
				<div class="swiper-slide">
					<div class="uwTab">
						<span class="day">${dayName}</span>
						<span class="date">${dayNum}</span>
						<span class="month">${monthName}</span>
						<span class="year">${yearNum}</span>
					</div>
				</div>
			`;
		}
		if(dts){
			dts.innerHTML += `
				<div class="swiper-slide">${createDetailsHtml(e, dayName, dayNum, monthName, yearNum, enMonthName)}</div>
			`;
		}
	}
});

// ✅ countdown with grace period
function startCountdown(ul) {
	const bTags = ul.querySelectorAll('li b');
	const dateStr = ul.getAttribute('data-date');
	const dateMatch = dateStr.match(/(\d{1,2}) (\w+) (\d{4}), (\d{1,2}) Hours:(\d{1,2}) Minutes:(\d{1,2}) Seconds/);
	if (!dateMatch) return;

	const [, day, monthName, year, hours, minutes, seconds] = dateMatch;
	const rawTime = ul.closest(".uwDetails").querySelector(".tags span:nth-child(2)")?.textContent || "";
	const normalized = normalizeTimeStr(rawTime) || `${hours}:${minutes}:${seconds}`;

	const targetDate = new Date(`${day} ${monthName} ${year} ${normalized}`);

	// const gracePeriodMs = 2 * 60 * 60 * 1000; // 2 hours grace
	// const gracePeriodMs = 10 * 60 * 1000; // 10 minutes
	const gracePeriodMs = 5 * 1000; // 10 seconds
	const finalRemoveDate = new Date(targetDate.getTime() + gracePeriodMs);

	function update() {
		const now = new Date();

		// countdown sirf start tak
		let diffSec = Math.floor((targetDate - now) / 1000);

		if (diffSec < 0) diffSec = 0; // countdown kabhi negative na ho

		let diff = diffSec;
		const days = Math.floor(diff / 86400); diff %= 86400;
		let hrs = Math.floor(diff / 3600); diff %= 3600;
		const mins = Math.floor(diff / 60); diff %= 60;
		let secs = diff;

		bTags[0].textContent = String(days).padStart(2, '0');
		bTags[1].textContent = String(hrs).padStart(2, '0');
		bTags[2].textContent = String(mins).padStart(2, '0');
		bTags[3].textContent = String(secs).padStart(2, '0');

		// ✅ 2 ghante baad remove
		if (now >= finalRemoveDate) {
			const parent = ul.closest('.uwDetails');
			if (parent) parent.remove();
			checkEmptySwiperSlide();
			updatewebinarPopFirstUpcoming();
			} else {
			const gallerySwiper = document.querySelector('.gallery-big .details');
			if (gallerySwiper) gallerySwiper.style.height = "";
		}
	}

	update();
	setInterval(update, 1000);
}

function todayEmptyMessage() {
	return arabic ?
		`<div class="uwDetails message">انتهت جميع ندوات اليوم التعليمية. يمكنك الاختيار من بين الندوات القادمة.</div>`
		:
		`<div class="uwDetails message">All of today's educational webinars are over. You can choose from the upcoming educational webinars.</div>`;
}

function checkEmptySwiperSlide() {
	const gallerySwiper = document.querySelector('.gallery-big .details .swiper-slide');
	if (gallerySwiper && gallerySwiper.children.length === 0) {
		gallerySwiper.innerHTML = todayEmptyMessage();
		gallerySwiper.closest(".details").style.height = "";
	}
}

function launchedVerySoonMessage() {
	return arabic ?
		`<div class="uwDetails message">سيتم إطلاق الندوات التعليمية عبر الإنترنت قريبًا جدًا.</div>`
		:
		`<div class="uwDetails message">Educational webinars will be launched very soon.</div>`;
}

function checkEmptyThumbs() {
	const dates = document.querySelector(".upcomingWebinars .gallery-thumbs .dates");
	if (dates && dates.children.length === 0) {
		const oldDiv = document.querySelector('.upcomingWebinars');
		if (oldDiv) oldDiv.innerHTML = launchedVerySoonMessage();
		const webinarPop = document.querySelector(".webinarPop");
		if (webinarPop) webinarPop.remove();
	}
}

document.querySelectorAll('.upcomingWebinars ul[data-date]').forEach(startCountdown);

// ✅ webinarPop update
function updatewebinarPopFirstUpcoming() {
	const first = document.querySelector(".details .uwDetails");
	const webinarPop = document.querySelector(".webinarPop .upcomingWebinars");

	if (!first) {
		if (webinarPop) webinarPop.innerHTML = "";
		return;
	}

	let real = first;
	if (real.classList.contains("message")) {
		real = document.querySelector(".details .uwDetails:not(.message)");
	}

	if (!real) {
		webinarPop.innerHTML = "";
		return;
	}

	// 🔹 check if webinarPop already has active class
	const isActive = webinarPop.querySelector(".uwDetails")?.classList.contains("active");

	// overwrite html
	let webinarPopHtml = real.outerHTML.replace(/<div class="timer">[\s\S]*?<\/div>/, "");
	webinarPop.innerHTML = webinarPopHtml;

	// 🔹 restore active if it was active before
	if (isActive) {
		webinarPop.querySelector(".uwDetails")?.classList.add("active");
	}

	// 🔹 re-bind image click after update
	webinarPop.querySelectorAll(".uwDetails .text .hd > img").forEach(img => {
		img.addEventListener("click", function () {
			this.closest(".uwDetails").classList.toggle("active");
		});
	});
}

checkEmptyThumbs();
updatewebinarPopFirstUpcoming();


document.querySelectorAll(".upcomingWebinars .uwDetails .text .hd > img").forEach(img => {
	img.addEventListener("click", function () {
		this.closest(".uwDetails").classList.toggle("active");

		// const upcomingWebinars = this.closest(".upcomingWebinars");
		// const swiperWrapper = upcomingWebinars.querySelector(".gallery-big .swiper-wrapper");
		// if (swiperWrapper) {
		//     swiperWrapper.style.height = "";
		// }
	});
});
document.querySelectorAll("section.upcomingWebinars ~ section.upcomingWebinars").forEach(e => e.remove());