if (!sessionStorage.isVisited) {
		sessionStorage.isVisited = 'true';
		$("img").delay(1500).fadeOut("slow");
	} else {
		$("img").hide();
}