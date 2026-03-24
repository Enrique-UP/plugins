const LifeStyleData = [
  {
    imgFn: "others",
    images: [
      { place: "Delhi", date: "1 jan 2025" },
      { place: "Mumbai", date: "1 feb 2025" },
      { place: "Jaipur", date: "1 mar 2025" },
      { place: "Goa", date: "1 apr 2025" },
    ],
  },
  { imgFn: "beach", place:"Lorem1", date: "2024-01-10", items: 34 },
  { imgFn: "bridge", place:"Lorem2", date: "2024-02-15", items: 4 },
  { imgFn: "building", place:"Lorem3", date: "2024-03-05", items: 21 },
  { imgFn: "forest", place:"Lorem4", date: "2024-04-12", items: 56 },
  {
    imgFn: "others",
    images: [
      { place: "Manali", date: "1 may 2025" },
      { place: "Agra", date: "1 jun 2025" },
      { place: "Lucknow", date: "1 jul 2025" },
      { place: "Uttrakhand", date: "1 aug 2025" },
      { place: "Kashmir", date: "1 sep 2025" },
    ],
  },
  { imgFn: "mountains", place:"Lorem5", date: "2024-05-20", items: 15 },
];

export default LifeStyleData;


/*
  src => images => lifeStyle =>
  	1.jpg, 2.jpg, 3.jpg, 4.jpg etc...
	
  src => images => lifeStyle => beach =>
  	1.jpg, 2.jpg, 3.jpg, 4.jpg etc...
  src => images => lifeStyle => bridge =>
  	1.jpg, 2.jpg, 3.jpg, 4.jpg etc...
  src => images => lifeStyle => building =>
  	1.jpg, 2.jpg, 3.jpg, 4.jpg etc...
  src => images => lifeStyle => forest =>
  	1.jpg, 2.jpg, 3.jpg, 4.jpg etc...
  src => images => lifeStyle => sadfsdaf =>
  	1.jpg, 2.jpg, 3.jpg, 4.jpg etc...
  src => images => lifeStyle => sadfsdaf =>
  	1.jpg, 2.jpg, 3.jpg, 4.jpg etc...
*/