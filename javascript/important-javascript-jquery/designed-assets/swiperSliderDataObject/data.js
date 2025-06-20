const imgLink = "file:///C:/Users/noman.na/Downloads/";
const datesWithDetails = [
  {
    date: "Friday, Jun 25 2025",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "14:22:30 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem1",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" },
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] }
        ]
      },
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "00:00:0 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem1",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" },
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] }
        ]
      }
    ]
  },
  {
    date: "Saturday, Jun 14 2026",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "18:50 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem1",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
        ]
      }
    ]
  },
  {
    date: "Saturday, Jan 14 2025",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "18:50 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem2",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
        ]
      }
    ]
  },
  {
    date: "Thursday, Jun 12 2026",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "English",
        time: "19:30 | AEDTaa",
        hd: "Portfolio de Inversion en Trading",
        shd: "Portfolio lorem3",
        analyst: [{ type: 'text', value: "Laura Solorzano, Market Analysis dolor" }],
      },
      {
        img: `${imgLink}uw.png`,
        language: "SPANISH",
        time: "21:40 | AEDTdd",
        hd: "Portfolio ipsum",
        shd: "Portfolio lorem4",
        analyst: [
          { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] }
        ]
      },
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "18:50 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem5",
        analyst: [
          { type: 'ol', items: ["Laura Solorzano", "Market Analysis opsum", "Lorem ipsum dolor", "Lorem dolor"] }
        ]
      }
    ]
  },
  {
    date: "Friday, July 13 2025",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "English",
        time: "19:30 | AEDTaa",
        hd: "Portfolio de Inversion en Trading",
        shd: "Portfolio lorem6",
        analyst: [{ type: 'text', value: "Laura Solorzano, Market Analysis dolor" }],
      },
      {
        img: `${imgLink}uw.png`,
        language: "SPANISH",
        time: "21:40 | AEDTdd",
        hd: "Portfolio ipsums",
        shd: "Portfolio lorem7",
        analyst: [
          { type: 'p', value: "Laura Solorzano, Market Analysis loremssss" },
          { type: 'p', value: "Laura Solorzano, Market Analysis loremccc" },
          { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] }
        ]
      }
    ]
  },
  {
    date: "Saturday, Aug 14 2025",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "18:50 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem8",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
        ]
      }
    ]
  },
  {
    date: "Saturday, Aug 16 2075",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "18:50 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem9",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
        ]
      }
    ]
  },
  {
    date: "Saturday, Aug 24 2084",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "18:50 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem10",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
        ]
      }
    ]
  },
  {
    date: "Saturday, Aug 30 2025",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "18:50 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem10",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
        ]
      }
    ]
  },
  {
    date: "Saturday, Aug 24 2026",
    details: [
      {
        img: `${imgLink}uw.png`,
        language: "French",
        time: "18:50 | AEDTs",
        hd: "Portfolio lorem",
        shd: "Portfolio lorem10",
        analyst: [
          { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
          { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
        ]
      }
    ]
  }
];

datesWithDetails.forEach(e => {
  e.details.sort((a, b) => {
    const parseTime = (timeStr) => {
      const [time] = timeStr.split('|').map(s => s.trim());
      const [hours, minutes] = time.split(':').map(Number);
      return new Date(0, 0, 0, hours, minutes);
    };
    return parseTime(a.time) - parseTime(b.time);
  });
});

datesWithDetails.sort((a, b) => new Date(a.date) - new Date(b.date));



