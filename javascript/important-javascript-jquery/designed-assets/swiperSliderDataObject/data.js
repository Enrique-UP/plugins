const imgLink = "../../../../images/2.jpg";
const datesWithDetails = [
    {
        date: "Friday, Aug 27 2025",
        details: [
            {
                img: `${imgLink}`,
                language: "French",
                time: "08:00 PM DUBAI TIME",
                hd: "Portfolio lorem",
                shd: "Portfolio lorem1",
                hd1: "<b>Laura Solorzano1</b><span>Market Analysis lorem</span>",
                text: [
                    { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] }
                ],
                analyst: [
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
                ],
                link:"#1"
            },
            {
                img: `${imgLink}`,
                language: "French",
                time: "22:00:00 | AEDTs",
                hd: "Portfolio lorem",
                shd: "Portfolio lorem1",
                hd1: "<b>Laura Solorzano1</b><span>Market Analysis lorem</span>",
                text: [
                    { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] }
                ],
                analyst: [
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
                ],
                link:"#2"
            }
        ]
    },
    {
        date: "Friday, Aug 28 2025",
        details: [
            {
                img: `${imgLink}`,
                language: "French",
                time: "18:50 | AEDTs",
                hd: "Portfolio lorem",
                shd: "Portfolio lorem1",
                hd1: "<b>Laura Solorzano1</b><span>Market Analysis lorem</span>",
                text: [
                    { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] }
                ],
                analyst: [
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
                ],
                link:"#3"
            }
        ]
    },
    {
        date: "Friday, Sep 1 2025",
        details: [
            {
                img: `${imgLink}`,
                language: "French",
                time: "18:50 | AEDTs",
                hd: "Portfolio lorem",
                shd: "Portfolio lorem2",
                hd1: "<b>Laura Solorzano1</b><span>Market Analysis lorem</span>",
                text: [
                    { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] }
                ],
                analyst: [
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
                ],
                link:"#4"
            }
        ]
    },
    {
        date: "Thursday, Jun 12 2026",
        details: [
            {
                img: `${imgLink}`,
                language: "English",
                time: "19:30 | AEDTaa",
                hd: "Portfolio de Inversion en Trading",
                shd: "Portfolio lorem3",
                hd1: "<b>Laura Solorzano1</b><span>Market Analysis lorem</span>",
                text: [
                    { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] }
                ],
                analyst: [{ type: 'text', value: "Laura Solorzano, Market Analysis dolor" }],
                link:"#5"
            },
            {
                img: `${imgLink}`,
                language: "SPANISH",
                time: "21:40 | AEDTdd",
                hd: "Portfolio ipsum",
                shd: "Portfolio lorem4",
                analyst: [
                    { type: 'p', items: ["<b>Laura Solorzano</b>", "Market Analysis lorem"] },
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] },
                    { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] }
                ],
                link:"#6"
            },
            {
                img: `${imgLink}`,
                language: "French",
                time: "18:50 | AEDTs",
                hd: "Portfolio lorem",
                shd: "Portfolio lorem5",
                analyst: [
                    { type: 'ol', items: ["Laura Solorzano", "Market Analysis opsum", "Lorem ipsum dolor", "Lorem dolor"] }
                ],
                link:"#7"
            }
        ]
    },
    {
        date: "Friday, July 13 2025",
        details: [
            {
                img: `${imgLink}`,
                language: "English",
                time: "19:30 | AEDTaa",
                hd: "Portfolio de Inversion en Trading",
                shd: "Portfolio lorem6",
                analyst: [{ type: 'text', value: "Laura Solorzano, Market Analysis dolor" }],
            },
            {
                img: `${imgLink}`,
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
                img: `${imgLink}`,
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
                img: `${imgLink}`,
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
                img: `${imgLink}`,
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
                img: `${imgLink}`,
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
                img: `${imgLink}`,
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
    // {
    //     date: "Friday, Aug 27 2025",
    //     details: [
    //         {
    //             img: `${imgLink}`,
    //             language: "French",
    //             time: "15:18:20 | AEDTs",
    //             hd: "Portfolio lorem",
    //             shd: "Portfolio lorem1",
    //             hd1: "<b>Laura Solorzano1</b><span>Market Analysis lorem</span>",
    //             text: [
    //                 { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] },
    //                 { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] },
    //                 { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] }
    //             ],
    //             analyst: [
    //                 { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
    //                 { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
    //             ],
    //             link:"#"
    //         },
    //         {
    //             img: `${imgLink}`,
    //             language: "French",
    //             time: "15:18:29 | AEDTs",
    //             hd: "Portfolio lorem",
    //             shd: "Portfolio lorem1",
    //             hd1: "<b>Laura Solorzano1</b><span>Market Analysis lorem</span>",
    //             text: [
    //                 { type: 'p', items: ["Laura Solorzano", "Market Analysis lorem"] },
    //                 { type: 'ol', items: ["Laura Solorzano", "Market Analysis lorem"] }
    //             ],
    //             analyst: [
    //                 { type: 'ul', items: ["Laura Solorzano", "Market Analysis lorem"] },
    //                 { type: 'p', value: "Laura Solorzano, Market Analysis lorem" }
    //             ],
    //             link:"#"
    //         }
    //     ]
    // },
];