// TODO : remplacer par les vrais profils. Ces adresses sont des démonstrations.
const SOCIAL_LINKS = { instagram: "https://www.instagram.com/USERNAME/", youtube: "https://www.youtube.com/@USERNAME" };

// Natural Earth 50m + les 249 codes ISO 3166-1 (voir README).
const countries = [
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "aliases": [
      "Zimbabwe"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      696.51,
      368.01
    ]
  },
  {
    "code": "ZM",
    "name": "Zambie",
    "aliases": [
      "Zambia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      685.68,
      352.72
    ]
  },
  {
    "code": "YE",
    "name": "Yémen",
    "aliases": [
      "Yemen"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      748.79,
      244.88
    ]
  },
  {
    "code": "VN",
    "name": "Viêt Nam",
    "aliases": [
      "Vietnam"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      938.2,
      221.91
    ]
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "aliases": [
      "Venezuela"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      388.85,
      274.17
    ]
  },
  {
    "code": "VA",
    "name": "Cité du Vatican",
    "aliases": [
      "Vatican City",
      "Vatican",
      "Vatican"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      637.22,
      149.45
    ]
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "aliases": [
      "Vanuatu"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1141.3,
      355.28
    ]
  },
  {
    "code": "UZ",
    "name": "Ouzbékistan",
    "aliases": [
      "Uzbekistan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      791.54,
      150.2
    ]
  },
  {
    "code": "UY",
    "name": "Uruguay",
    "aliases": [
      "Uruguay"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      425.77,
      418.53
    ]
  },
  {
    "code": "FM",
    "name": "États fédérés de Micronésie",
    "aliases": [
      "Federated States of Micronesia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1117.3,
      275.23
    ]
  },
  {
    "code": "MH",
    "name": "Îles Marshall",
    "aliases": [
      "Marshall Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1159.6,
      274.53
    ]
  },
  {
    "code": "MP",
    "name": "îles Mariannes du Nord",
    "aliases": [
      "Northern Mariana Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1072.77,
      245.38
    ]
  },
  {
    "code": "VI",
    "name": "îles Vierges des États-Unis",
    "aliases": [
      "United States Virgin Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      390.7,
      236.18
    ]
  },
  {
    "code": "GU",
    "name": "Guam",
    "aliases": [
      "Guam"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1070.41,
      251.98
    ]
  },
  {
    "code": "AS",
    "name": "Samoa américaines",
    "aliases": [
      "American Samoa"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      45.52,
      351.52
    ]
  },
  {
    "code": "PR",
    "name": "Porto Rico",
    "aliases": [
      "Puerto Rico"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      385.37,
      234.43
    ]
  },
  {
    "code": "US",
    "name": "États-Unis",
    "aliases": [
      "United States of America",
      "United States",
      "USA",
      "Etats Unis"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      304.9,
      157.87
    ]
  },
  {
    "code": "GS",
    "name": "Géorgie du Sud-et-les Îles Sandwich du Sud",
    "aliases": [
      "South Georgia and the South Sandwich Islands",
      "South Georgia and the Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      515.49,
      498.59
    ]
  },
  {
    "code": "IO",
    "name": "Territoire britannique de l’océan Indien",
    "aliases": [
      "British Indian Ocean Territory"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      833.36,
      322.26
    ]
  },
  {
    "code": "SH",
    "name": "Sainte-Hélène",
    "aliases": [
      "Saint Helena"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      581.49,
      357.36
    ]
  },
  {
    "code": "PN",
    "name": "Iles Pitcairn",
    "aliases": [
      "Pitcairn Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      190.27,
      387.62
    ]
  },
  {
    "code": "AI",
    "name": "Anguilla",
    "aliases": [
      "Anguilla"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      396.52,
      234.4
    ]
  },
  {
    "code": "FK",
    "name": "îles Malouines",
    "aliases": [
      "Falkland Islands",
      "Falkland Islands / Malvinas"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      434.94,
      484.64
    ]
  },
  {
    "code": "KY",
    "name": "îles Caïmans",
    "aliases": [
      "Cayman Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      338.17,
      230.53
    ]
  },
  {
    "code": "BM",
    "name": "Bermudes",
    "aliases": [
      "Bermuda"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      397.9,
      183.86
    ]
  },
  {
    "code": "VG",
    "name": "îles Vierges britanniques",
    "aliases": [
      "British Virgin Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      391.39,
      233.74
    ]
  },
  {
    "code": "TC",
    "name": "îles Turques-et-Caïques",
    "aliases": [
      "Turks and Caicos Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      369.78,
      221.55
    ]
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "aliases": [
      "Montserrat"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      398.75,
      239.81
    ]
  },
  {
    "code": "JE",
    "name": "Jersey",
    "aliases": [
      "Jersey"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      594.02,
      123.63
    ]
  },
  {
    "code": "GG",
    "name": "Guernesey",
    "aliases": [
      "Guernsey"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      592.69,
      122.78
    ]
  },
  {
    "code": "IM",
    "name": "île de Man",
    "aliases": [
      "Isle of Man"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      587.53,
      106.38
    ]
  },
  {
    "code": "GB",
    "name": "Royaume-Uni",
    "aliases": [
      "United Kingdom",
      "Grande-Bretagne",
      "Angleterre",
      "UK"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      594.18,
      105.75
    ]
  },
  {
    "code": "AE",
    "name": "Émirats arabes unis",
    "aliases": [
      "United Arab Emirates"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      774.47,
      215.62
    ]
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "aliases": [
      "Ukraine"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      691.6,
      121.86
    ]
  },
  {
    "code": "UG",
    "name": "Ouganda",
    "aliases": [
      "Uganda"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      707.94,
      292.91
    ]
  },
  {
    "code": "TM",
    "name": "Turkménistan",
    "aliases": [
      "Turkmenistan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      777.37,
      156.74
    ]
  },
  {
    "code": "TR",
    "name": "Turquie",
    "aliases": [
      "Turkey"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      704.56,
      158.56
    ]
  },
  {
    "code": "TN",
    "name": "Tunisie",
    "aliases": [
      "Tunisia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      627.97,
      178.86
    ]
  },
  {
    "code": "TT",
    "name": "Trinité-et-Tobago",
    "aliases": [
      "Trinidad and Tobago"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      401.46,
      260.45
    ]
  },
  {
    "code": "TO",
    "name": "Tonga",
    "aliases": [
      "Tonga"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      37.35,
      376.27
    ]
  },
  {
    "code": "TG",
    "name": "Togo",
    "aliases": [
      "Togo"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      603.45,
      268.33
    ]
  },
  {
    "code": "TL",
    "name": "Timor oriental",
    "aliases": [
      "East Timor",
      "Timor-Leste"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1010.94,
      331.66
    ]
  },
  {
    "code": "TH",
    "name": "Thaïlande",
    "aliases": [
      "Thailand"
    ],
    "featured": true,
    "galleryUrl": "galeries/thailande.html",
    "position": [
      927.74,
      244.41
    ]
  },
  {
    "code": "TZ",
    "name": "Tanzanie",
    "aliases": [
      "Tanzania"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      714.35,
      321.76
    ]
  },
  {
    "code": "TJ",
    "name": "Tadjikistan",
    "aliases": [
      "Tajikistan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      821.08,
      162.67
    ]
  },
  {
    "code": "TW",
    "name": "Taïwan",
    "aliases": [
      "Taiwan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      986.46,
      214.95
    ]
  },
  {
    "code": "SY",
    "name": "Syrie",
    "aliases": [
      "Syria"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      718.27,
      174.12
    ]
  },
  {
    "code": "CH",
    "name": "Suisse",
    "aliases": [
      "Switzerland"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      621.69,
      132.41
    ]
  },
  {
    "code": "SE",
    "name": "Suède",
    "aliases": [
      "Sweden"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      646.91,
      68.16
    ]
  },
  {
    "code": "SZ",
    "name": "Eswatini",
    "aliases": [
      "Eswatini",
      "Kingdom of eSwatini"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      699.95,
      395.42
    ]
  },
  {
    "code": "SR",
    "name": "Suriname",
    "aliases": [
      "Suriname"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      416.95,
      285.1
    ]
  },
  {
    "code": "SS",
    "name": "Soudan du Sud",
    "aliases": [
      "South Sudan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      699.33,
      274.0
    ]
  },
  {
    "code": "SD",
    "name": "Soudan",
    "aliases": [
      "Sudan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      694.75,
      241.27
    ]
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "aliases": [
      "Sri Lanka"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      863.73,
      272.74
    ]
  },
  {
    "code": "ES",
    "name": "Espagne",
    "aliases": [
      "Spain"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      589.54,
      155.89
    ]
  },
  {
    "code": "KR",
    "name": "Corée du Sud",
    "aliases": [
      "South Korea",
      "Republic of Korea"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      993.46,
      169.18
    ]
  },
  {
    "code": "ZA",
    "name": "Afrique du Sud",
    "aliases": [
      "South Africa"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      674.53,
      406.83
    ]
  },
  {
    "code": "SO",
    "name": "Somalie",
    "aliases": [
      "Somalia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      747.98,
      287.17
    ]
  },
  {
    "code": "NE-SOL",
    "name": "Somaliland",
    "aliases": [
      "Somaliland"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      752.53,
      266.04
    ]
  },
  {
    "code": "SB",
    "name": "Îles Salomon",
    "aliases": [
      "Solomon Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1119.98,
      328.87
    ]
  },
  {
    "code": "SK",
    "name": "Slovaquie",
    "aliases": [
      "Slovakia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      654.64,
      125.34
    ]
  },
  {
    "code": "SI",
    "name": "Slovénie",
    "aliases": [
      "Slovenia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      643.52,
      134.72
    ]
  },
  {
    "code": "SG",
    "name": "Singapour",
    "aliases": [
      "Singapore"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      940.16,
      295.09
    ]
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "aliases": [
      "Sierra Leone"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      561.58,
      269.01
    ]
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "aliases": [
      "Seychelles"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      781.61,
      316.82
    ]
  },
  {
    "code": "RS",
    "name": "Serbie",
    "aliases": [
      "Serbia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      661.35,
      141.32
    ]
  },
  {
    "code": "SN",
    "name": "Sénégal",
    "aliases": [
      "Senegal"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      552.05,
      245.56
    ]
  },
  {
    "code": "SA",
    "name": "Arabie saoudite",
    "aliases": [
      "Saudi Arabia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      742.88,
      214.39
    ]
  },
  {
    "code": "ST",
    "name": "Sao Tomé-et-Principe",
    "aliases": [
      "São Tomé and Príncipe",
      "São Tomé and Principe"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      623.01,
      296.51
    ]
  },
  {
    "code": "SM",
    "name": "Saint-Marin",
    "aliases": [
      "San Marino"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      636.77,
      142.23
    ]
  },
  {
    "code": "WS",
    "name": "Samoa",
    "aliases": [
      "Samoa"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      39.61,
      349.05
    ]
  },
  {
    "code": "VC",
    "name": "Saint-Vincent-et-les-Grenadines",
    "aliases": [
      "Saint Vincent and the Grenadines"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      400.55,
      252.94
    ]
  },
  {
    "code": "LC",
    "name": "Sainte-Lucie",
    "aliases": [
      "Saint Lucia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      401.88,
      250.04
    ]
  },
  {
    "code": "KN",
    "name": "Saint-Christophe-et-Niévès",
    "aliases": [
      "Saint Kitts and Nevis"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      397.1,
      237.66
    ]
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "aliases": [
      "Rwanda"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      698.62,
      306.82
    ]
  },
  {
    "code": "RU",
    "name": "Russie",
    "aliases": [
      "Russia",
      "Russian Federation"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      718.84,
      92.82
    ]
  },
  {
    "code": "RO",
    "name": "Roumanie",
    "aliases": [
      "Romania"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      673.02,
      135.87
    ]
  },
  {
    "code": "QA",
    "name": "Qatar",
    "aliases": [
      "Qatar"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      763.01,
      209.25
    ]
  },
  {
    "code": "PT",
    "name": "Portugal",
    "aliases": [
      "Portugal"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      574.97,
      157.63
    ]
  },
  {
    "code": "PL",
    "name": "Pologne",
    "aliases": [
      "Poland"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      654.61,
      114.05
    ]
  },
  {
    "code": "PH",
    "name": "Philippines",
    "aliases": [
      "Philippines"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      999.05,
      259.73
    ]
  },
  {
    "code": "PE",
    "name": "Pérou",
    "aliases": [
      "Peru"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      362.92,
      346.66
    ]
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "aliases": [
      "Paraguay"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      406.97,
      377.94
    ]
  },
  {
    "code": "PG",
    "name": "Papouasie-Nouvelle-Guinée",
    "aliases": [
      "Papua New Guinea"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1070.84,
      320.48
    ]
  },
  {
    "code": "PA",
    "name": "Panama",
    "aliases": [
      "Panama"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      337.62,
      268.64
    ]
  },
  {
    "code": "PW",
    "name": "Palaos",
    "aliases": [
      "Palau"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1039.8,
      272.96
    ]
  },
  {
    "code": "PK",
    "name": "Pakistan",
    "aliases": [
      "Pakistan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      816.08,
      194.54
    ]
  },
  {
    "code": "OM",
    "name": "Oman",
    "aliases": [
      "Oman"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      783.86,
      220.45
    ]
  },
  {
    "code": "NO",
    "name": "Norvège",
    "aliases": [
      "Norway"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      625.0,
      82.58
    ]
  },
  {
    "code": "KP",
    "name": "Corée du Nord",
    "aliases": [
      "North Korea",
      "Dem. Rep. Korea"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      982.16,
      156.63
    ]
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "aliases": [
      "Nigeria"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      624.49,
      266.05
    ]
  },
  {
    "code": "NE",
    "name": "Niger",
    "aliases": [
      "Niger"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      630.72,
      237.26
    ]
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "aliases": [
      "Nicaragua"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      323.25,
      254.44
    ]
  },
  {
    "code": "NZ",
    "name": "Nouvelle-Zélande",
    "aliases": [
      "New Zealand"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1122.53,
      442.92
    ]
  },
  {
    "code": "NU",
    "name": "Niue",
    "aliases": [
      "Niue"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      52.31,
      368.49
    ]
  },
  {
    "code": "CK",
    "name": "Îles Cook",
    "aliases": [
      "Cook Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      86.75,
      376.29
    ]
  },
  {
    "code": "NL",
    "name": "Pays-Bas",
    "aliases": [
      "Netherlands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      615.67,
      112.57
    ]
  },
  {
    "code": "AW",
    "name": "Aruba",
    "aliases": [
      "Aruba"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      372.32,
      254.99
    ]
  },
  {
    "code": "CW",
    "name": "Curaçao",
    "aliases": [
      "Curaçao"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      375.66,
      256.33
    ]
  },
  {
    "code": "NP",
    "name": "Népal",
    "aliases": [
      "Nepal"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      864.4,
      198.24
    ]
  },
  {
    "code": "NR",
    "name": "Nauru",
    "aliases": [
      "Nauru"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1147.09,
      301.87
    ]
  },
  {
    "code": "NA",
    "name": "Namibie",
    "aliases": [
      "Namibia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      655.02,
      373.99
    ]
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "aliases": [
      "Mozambique"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      722.93,
      350.14
    ]
  },
  {
    "code": "MA",
    "name": "Maroc",
    "aliases": [
      "Morocco"
    ],
    "featured": true,
    "galleryUrl": "galeries/maroc.html",
    "position": [
      577.52,
      186.18
    ]
  },
  {
    "code": "EH",
    "name": "Sahara occidental",
    "aliases": [
      "Western Sahara"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      559.64,
      213.81
    ]
  },
  {
    "code": "ME",
    "name": "Monténégro",
    "aliases": [
      "Montenegro"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      656.94,
      146.25
    ]
  },
  {
    "code": "MN",
    "name": "Mongolie",
    "aliases": [
      "Mongolia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      904.02,
      134.94
    ]
  },
  {
    "code": "MD",
    "name": "Moldavie",
    "aliases": [
      "Moldova"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      682.4,
      129.9
    ]
  },
  {
    "code": "MC",
    "name": "Monaco",
    "aliases": [
      "Monaco"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      621.89,
      142.92
    ]
  },
  {
    "code": "MX",
    "name": "Mexique",
    "aliases": [
      "Mexico"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      273.1,
      213.98
    ]
  },
  {
    "code": "MU",
    "name": "Maurice",
    "aliases": [
      "Mauritius"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      785.23,
      373.0
    ]
  },
  {
    "code": "MR",
    "name": "Mauritanie",
    "aliases": [
      "Mauritania"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      568.62,
      229.56
    ]
  },
  {
    "code": "MT",
    "name": "Malte",
    "aliases": [
      "Malta"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      644.42,
      170.94
    ]
  },
  {
    "code": "ML",
    "name": "Mali",
    "aliases": [
      "Mali"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      593.42,
      232.78
    ]
  },
  {
    "code": "MV",
    "name": "Maldives",
    "aliases": [
      "Maldives"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      840.66,
      284.99
    ]
  },
  {
    "code": "MY",
    "name": "Malaisie",
    "aliases": [
      "Malaysia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      972.87,
      290.91
    ]
  },
  {
    "code": "MW",
    "name": "Malawi",
    "aliases": [
      "Malawi"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      709.25,
      348.14
    ]
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "aliases": [
      "Madagascar"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      750.69,
      366.99
    ]
  },
  {
    "code": "MK",
    "name": "Macédoine du Nord",
    "aliases": [
      "North Macedonia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      664.56,
      150.68
    ]
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "aliases": [
      "Luxembourg"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      617.32,
      121.83
    ]
  },
  {
    "code": "LT",
    "name": "Lituanie",
    "aliases": [
      "Lithuania"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      665.87,
      103.35
    ]
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "aliases": [
      "Liechtenstein"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      627.71,
      131.03
    ]
  },
  {
    "code": "LY",
    "name": "Libye",
    "aliases": [
      "Libya"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      657.19,
      204.21
    ]
  },
  {
    "code": "LR",
    "name": "Liberia",
    "aliases": [
      "Liberia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      569.06,
      276.82
    ]
  },
  {
    "code": "LS",
    "name": "Lesotho",
    "aliases": [
      "Lesotho"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      689.01,
      406.01
    ]
  },
  {
    "code": "LB",
    "name": "Liban",
    "aliases": [
      "Lebanon"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      711.57,
      177.26
    ]
  },
  {
    "code": "LV",
    "name": "Lettonie",
    "aliases": [
      "Latvia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      668.42,
      96.78
    ]
  },
  {
    "code": "LA",
    "name": "Laos",
    "aliases": [
      "Laos",
      "Lao PDR"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      930.4,
      230.12
    ]
  },
  {
    "code": "KG",
    "name": "Kirghizistan",
    "aliases": [
      "Kyrgyzstan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      823.08,
      150.29
    ]
  },
  {
    "code": "KW",
    "name": "Koweït",
    "aliases": [
      "Kuwait"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      749.12,
      194.23
    ]
  },
  {
    "code": "XK",
    "name": "Kosovo",
    "aliases": [
      "Kosovo"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      662.12,
      147.0
    ]
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "aliases": [
      "Kiribati"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      84.39,
      293.45
    ]
  },
  {
    "code": "KE",
    "name": "Kenya",
    "aliases": [
      "Kenya"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      724.23,
      298.03
    ]
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "aliases": [
      "Kazakhstan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      796.6,
      124.21
    ]
  },
  {
    "code": "JO",
    "name": "Jordanie",
    "aliases": [
      "Jordan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      714.13,
      189.23
    ]
  },
  {
    "code": "JP",
    "name": "Japon",
    "aliases": [
      "Japan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1025.59,
      170.04
    ]
  },
  {
    "code": "JM",
    "name": "Jamaïque",
    "aliases": [
      "Jamaica"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      350.34,
      234.78
    ]
  },
  {
    "code": "IT",
    "name": "Italie",
    "aliases": [
      "Italy"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      632.59,
      139.39
    ]
  },
  {
    "code": "IL",
    "name": "Israël",
    "aliases": [
      "Israel"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      709.29,
      188.84
    ]
  },
  {
    "code": "PS",
    "name": "Palestine",
    "aliases": [
      "Palestine"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      710.23,
      184.76
    ]
  },
  {
    "code": "IE",
    "name": "Irlande",
    "aliases": [
      "Ireland"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      578.33,
      110.31
    ]
  },
  {
    "code": "IQ",
    "name": "Irak",
    "aliases": [
      "Iraq"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      734.61,
      180.99
    ]
  },
  {
    "code": "IR",
    "name": "Iran",
    "aliases": [
      "Iran"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      771.5,
      184.33
    ]
  },
  {
    "code": "ID",
    "name": "Indonésie",
    "aliases": [
      "Indonesia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      933.89,
      303.43
    ]
  },
  {
    "code": "IN",
    "name": "Inde",
    "aliases": [
      "India"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      854.2,
      218.42
    ]
  },
  {
    "code": "IS",
    "name": "Islande",
    "aliases": [
      "Iceland"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      553.39,
      71.53
    ]
  },
  {
    "code": "HU",
    "name": "Hongrie",
    "aliases": [
      "Hungary"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      656.38,
      131.12
    ]
  },
  {
    "code": "HN",
    "name": "Honduras",
    "aliases": [
      "Honduras"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      317.99,
      246.8
    ]
  },
  {
    "code": "HT",
    "name": "Haïti",
    "aliases": [
      "Haiti"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      367.21,
      230.73
    ]
  },
  {
    "code": "GY",
    "name": "Guyana",
    "aliases": [
      "Guyana"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      407.08,
      281.57
    ]
  },
  {
    "code": "GW",
    "name": "Guinée-Bissau",
    "aliases": [
      "Guinea-Bissau"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      552.72,
      256.26
    ]
  },
  {
    "code": "GN",
    "name": "Guinée",
    "aliases": [
      "Guinea"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      567.34,
      261.82
    ]
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "aliases": [
      "Guatemala"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      306.33,
      246.12
    ]
  },
  {
    "code": "GD",
    "name": "Grenade",
    "aliases": [
      "Grenada"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      399.22,
      256.44
    ]
  },
  {
    "code": "GR",
    "name": "Grèce",
    "aliases": [
      "Greece"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      665.78,
      158.04
    ]
  },
  {
    "code": "GH",
    "name": "Ghana",
    "aliases": [
      "Ghana"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      596.61,
      272.25
    ]
  },
  {
    "code": "DE",
    "name": "Allemagne",
    "aliases": [
      "Germany"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      627.33,
      117.59
    ]
  },
  {
    "code": "GE",
    "name": "Géorgie",
    "aliases": [
      "Georgia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      730.75,
      149.57
    ]
  },
  {
    "code": "GM",
    "name": "Gambie",
    "aliases": [
      "The Gambia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      551.26,
      250.94
    ]
  },
  {
    "code": "GA",
    "name": "Gabon",
    "aliases": [
      "Gabon"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      638.79,
      301.57
    ]
  },
  {
    "code": "FR",
    "name": "France",
    "aliases": [
      "France"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      607.42,
      132.49
    ]
  },
  {
    "code": "PM",
    "name": "Saint-Pierre-et-Miquelon",
    "aliases": [
      "Saint Pierre and Miquelon"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      436.65,
      131.28
    ]
  },
  {
    "code": "WF",
    "name": "Wallis-et-Futuna",
    "aliases": [
      "Wallis and Futuna",
      "Wallis and Futuna Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      21.49,
      351.37
    ]
  },
  {
    "code": "MF",
    "name": "Saint-Martin",
    "aliases": [
      "Saint Martin",
      "Saint-Martin"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      396.4,
      234.98
    ]
  },
  {
    "code": "BL",
    "name": "Saint-Barthélemy",
    "aliases": [
      "Saint Barthélemy",
      "Saint-Barthélemy"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      397.04,
      235.62
    ]
  },
  {
    "code": "PF",
    "name": "Polynésie française",
    "aliases": [
      "French Polynesia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      117.01,
      363.39
    ]
  },
  {
    "code": "NC",
    "name": "Nouvelle-Calédonie",
    "aliases": [
      "New Caledonia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1130.42,
      375.75
    ]
  },
  {
    "code": "TF",
    "name": "Terres australes et antarctiques françaises",
    "aliases": [
      "French Southern and Antarctic Lands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      797.53,
      476.66
    ]
  },
  {
    "code": "AX",
    "name": "Åland",
    "aliases": [
      "Åland",
      "Åland Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      651.93,
      86.46
    ]
  },
  {
    "code": "FI",
    "name": "Finlande",
    "aliases": [
      "Finland"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      669.14,
      76.46
    ]
  },
  {
    "code": "FJ",
    "name": "Fidji",
    "aliases": [
      "Fiji"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1174.96,
      364.1
    ]
  },
  {
    "code": "ET",
    "name": "Éthiopie",
    "aliases": [
      "Ethiopia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      727.7,
      271.11
    ]
  },
  {
    "code": "EE",
    "name": "Estonie",
    "aliases": [
      "Estonia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      668.5,
      91.23
    ]
  },
  {
    "code": "ER",
    "name": "Érythrée",
    "aliases": [
      "Eritrea"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      724.08,
      243.23
    ]
  },
  {
    "code": "GQ",
    "name": "Guinée équatoriale",
    "aliases": [
      "Equatorial Guinea"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      629.45,
      291.61
    ]
  },
  {
    "code": "SV",
    "name": "Salvador",
    "aliases": [
      "El Salvador"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      311.14,
      250.79
    ]
  },
  {
    "code": "EG",
    "name": "Égypte",
    "aliases": [
      "Egypt"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      693.61,
      205.83
    ]
  },
  {
    "code": "EC",
    "name": "Équateur",
    "aliases": [
      "Ecuador"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      343.81,
      304.53
    ]
  },
  {
    "code": "DO",
    "name": "République dominicaine",
    "aliases": [
      "Dominican Republic"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      372.21,
      231.3
    ]
  },
  {
    "code": "DM",
    "name": "Dominique",
    "aliases": [
      "Dominica"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      401.08,
      244.41
    ]
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "aliases": [
      "Djibouti"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      738.36,
      256.93
    ]
  },
  {
    "code": "GL",
    "name": "Groenland",
    "aliases": [
      "Greenland"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      512.41,
      42.83
    ]
  },
  {
    "code": "FO",
    "name": "îles Féroé",
    "aliases": [
      "Faroe Islands",
      "Faeroe Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      581.92,
      79.91
    ]
  },
  {
    "code": "DK",
    "name": "Danemark",
    "aliases": [
      "Denmark"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      624.47,
      100.46
    ]
  },
  {
    "code": "CZ",
    "name": "Tchéquie",
    "aliases": [
      "Czech Republic"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      643.78,
      121.31
    ]
  },
  {
    "code": "NE-CYN",
    "name": "Chypre du Nord",
    "aliases": [
      "Turkish Republic of Northern Cyprus",
      "Northern Cyprus"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      704.01,
      173.37
    ]
  },
  {
    "code": "CY",
    "name": "Chypre",
    "aliases": [
      "Cyprus"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      702.26,
      174.45
    ]
  },
  {
    "code": "CU",
    "name": "Cuba",
    "aliases": [
      "Cuba"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      349.59,
      223.28
    ]
  },
  {
    "code": "HR",
    "name": "Croatie",
    "aliases": [
      "Croatia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      647.85,
      135.61
    ]
  },
  {
    "code": "CI",
    "name": "Côte d'Ivoire",
    "aliases": [
      "Ivory Coast",
      "Côte d'Ivoire",
      "Cote d Ivoire"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      581.8,
      273.06
    ]
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "aliases": [
      "Costa Rica"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      325.7,
      263.81
    ]
  },
  {
    "code": "CD",
    "name": "République démocratique du Congo",
    "aliases": [
      "Democratic Republic of the Congo"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      676.85,
      306.68
    ]
  },
  {
    "code": "CG",
    "name": "République du Congo",
    "aliases": [
      "Republic of the Congo"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      652.12,
      299.49
    ]
  },
  {
    "code": "KM",
    "name": "Comores",
    "aliases": [
      "Comoros"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      741.07,
      342.17
    ]
  },
  {
    "code": "CO",
    "name": "Colombie",
    "aliases": [
      "Colombia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      360.38,
      287.87
    ]
  },
  {
    "code": "CN",
    "name": "République populaire de Chine",
    "aliases": [
      "People's Republic of China",
      "China"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      931.6,
      183.14
    ]
  },
  {
    "code": "MO",
    "name": "Macao",
    "aliases": [
      "Macau",
      "Macao"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      964.13,
      220.42
    ]
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "aliases": [
      "Hong Kong"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      965.65,
      219.27
    ]
  },
  {
    "code": "CL",
    "name": "Chili",
    "aliases": [
      "Chile"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      379.69,
      437.16
    ]
  },
  {
    "code": "TD",
    "name": "Tchad",
    "aliases": [
      "Chad"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      660.49,
      245.55
    ]
  },
  {
    "code": "CF",
    "name": "République centrafricaine",
    "aliases": [
      "Central African Republic"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      668.34,
      274.87
    ]
  },
  {
    "code": "CV",
    "name": "Cap-Vert",
    "aliases": [
      "Cape Verde",
      "Republic of Cabo Verde"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      523.3,
      245.79
    ]
  },
  {
    "code": "CA",
    "name": "Canada",
    "aliases": [
      "Canada"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      334.08,
      85.92
    ]
  },
  {
    "code": "CM",
    "name": "Cameroun",
    "aliases": [
      "Cameroon"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      640.83,
      283.51
    ]
  },
  {
    "code": "KH",
    "name": "Cambodge",
    "aliases": [
      "Cambodia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      939.99,
      254.52
    ]
  },
  {
    "code": "MM",
    "name": "Birmanie",
    "aliases": [
      "Myanmar"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      907.53,
      222.42
    ]
  },
  {
    "code": "BI",
    "name": "Burundi",
    "aliases": [
      "Burundi"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      697.97,
      311.98
    ]
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "aliases": [
      "Burkina Faso"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      595.56,
      254.43
    ]
  },
  {
    "code": "BG",
    "name": "Bulgarie",
    "aliases": [
      "Bulgaria"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      674.94,
      147.3
    ]
  },
  {
    "code": "BN",
    "name": "Brunei",
    "aliases": [
      "Brunei",
      "Brunei Darussalam"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      975.01,
      284.0
    ]
  },
  {
    "code": "BR",
    "name": "Brésil",
    "aliases": [
      "Brazil"
    ],
    "featured": true,
    "galleryUrl": "galeries/bresil.html",
    "position": [
      438.67,
      343.51
    ]
  },
  {
    "code": "BW",
    "name": "Botswana",
    "aliases": [
      "Botswana"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      677.54,
      379.48
    ]
  },
  {
    "code": "BA",
    "name": "Bosnie-Herzégovine",
    "aliases": [
      "Bosnia and Herzegovina"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      653.35,
      141.67
    ]
  },
  {
    "code": "BO",
    "name": "Bolivie",
    "aliases": [
      "Bolivia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      390.94,
      359.93
    ]
  },
  {
    "code": "BT",
    "name": "Bhoutan",
    "aliases": [
      "Bhutan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      885.22,
      200.98
    ]
  },
  {
    "code": "BJ",
    "name": "Bénin",
    "aliases": [
      "Benin"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      607.67,
      262.87
    ]
  },
  {
    "code": "BZ",
    "name": "Belize",
    "aliases": [
      "Belize"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      313.13,
      238.14
    ]
  },
  {
    "code": "BE",
    "name": "Belgique",
    "aliases": [
      "Belgium"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      613.57,
      118.19
    ]
  },
  {
    "code": "BY",
    "name": "Biélorussie",
    "aliases": [
      "Belarus"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      678.5,
      107.75
    ]
  },
  {
    "code": "BB",
    "name": "Barbade",
    "aliases": [
      "Barbados"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      406.31,
      252.66
    ]
  },
  {
    "code": "BD",
    "name": "Bangladesh",
    "aliases": [
      "Bangladesh"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      886.45,
      212.92
    ]
  },
  {
    "code": "BH",
    "name": "Bahreïn",
    "aliases": [
      "Bahrain"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      760.78,
      206.3
    ]
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "aliases": [
      "The Bahamas",
      "Bahamas"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      354.88,
      205.06
    ]
  },
  {
    "code": "AZ",
    "name": "Azerbaïdjan",
    "aliases": [
      "Azerbaijan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      742.3,
      154.79
    ]
  },
  {
    "code": "AT",
    "name": "Autriche",
    "aliases": [
      "Austria"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      640.85,
      129.6
    ]
  },
  {
    "code": "AU",
    "name": "Australie",
    "aliases": [
      "Australia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1028.23,
      386.77
    ]
  },
  {
    "code": "NE-IOA",
    "name": "Territoires extérieurs australiens de l'Océan Indien",
    "aliases": [
      "Australian Indian Ocean Territories",
      "Indian Ocean Territories"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      944.59,
      337.72
    ]
  },
  {
    "code": "HM",
    "name": "îles Heard-et-MacDonald",
    "aliases": [
      "Heard Island and McDonald Islands",
      "Heard I. and McDonald Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      804.19,
      489.78
    ]
  },
  {
    "code": "NF",
    "name": "Île Norfolk",
    "aliases": [
      "Norfolk Island"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1129.88,
      404.4
    ]
  },
  {
    "code": "NE-ATC",
    "name": "Îles Ashmore-et-Cartier",
    "aliases": [
      "Ashmore and Cartier Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1002.16,
      344.71
    ]
  },
  {
    "code": "AM",
    "name": "Arménie",
    "aliases": [
      "Armenia"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      734.99,
      154.59
    ]
  },
  {
    "code": "AR",
    "name": "Argentine",
    "aliases": [
      "Argentina"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      400.62,
      420.47
    ]
  },
  {
    "code": "AG",
    "name": "Antigua-et-Barbuda",
    "aliases": [
      "Antigua and Barbuda"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      400.23,
      237.6
    ]
  },
  {
    "code": "AO",
    "name": "Angola",
    "aliases": [
      "Angola"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      658.54,
      343.81
    ]
  },
  {
    "code": "AD",
    "name": "Andorre",
    "aliases": [
      "Andorra"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      604.58,
      147.16
    ]
  },
  {
    "code": "DZ",
    "name": "Algérie",
    "aliases": [
      "Algeria"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      608.9,
      201.48
    ]
  },
  {
    "code": "AL",
    "name": "Albanie",
    "aliases": [
      "Albania"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      660.54,
      153.89
    ]
  },
  {
    "code": "AF",
    "name": "Afghanistan",
    "aliases": [
      "Afghanistan"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      806.1,
      177.15
    ]
  },
  {
    "code": "NE-KAS",
    "name": "glacier de Siachen",
    "aliases": [
      "Siachen Glacier"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      837.96,
      172.92
    ]
  },
  {
    "code": "AQ",
    "name": "Antarctique",
    "aliases": [
      "Antarctica"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      673.27,
      572.01
    ]
  },
  {
    "code": "SX",
    "name": "Saint-Martin",
    "aliases": [
      "Sint Maarten"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      396.32,
      235.12
    ]
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "aliases": [
      "Tuvalu"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      1185.27,
      330.62
    ]
  },
  {
    "code": "BQ",
    "name": "Bonaire, Saint-Eustache et Saba",
    "aliases": [
      "Caribbean Netherlands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      377.78,
      256.2
    ],
    "markerOnly": true
  },
  {
    "code": "BV",
    "name": "Île Bouvet",
    "aliases": [
      "Bouvet Island"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      609.21,
      494.31
    ],
    "markerOnly": true
  },
  {
    "code": "CC",
    "name": "Îles Cocos",
    "aliases": [
      "Cocos Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      915.18,
      343.76
    ],
    "markerOnly": true
  },
  {
    "code": "CX",
    "name": "Île Christmas",
    "aliases": [
      "Christmas Island"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      944.44,
      337.58
    ],
    "markerOnly": true
  },
  {
    "code": "GF",
    "name": "Guyane française",
    "aliases": [
      "French Guiana"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      426.47,
      285.62
    ],
    "markerOnly": true
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "aliases": [
      "Gibraltar"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      583.55,
      170.05
    ],
    "markerOnly": true
  },
  {
    "code": "GP",
    "name": "Guadeloupe",
    "aliases": [
      "Guadeloupe"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      400.66,
      241.56
    ],
    "markerOnly": true
  },
  {
    "code": "MQ",
    "name": "Martinique",
    "aliases": [
      "Martinique"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      401.98,
      247.32
    ],
    "markerOnly": true
  },
  {
    "code": "RE",
    "name": "La Réunion",
    "aliases": [
      "Reunion",
      "Réunion"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      778.4,
      375.98
    ],
    "markerOnly": true
  },
  {
    "code": "SJ",
    "name": "Svalbard et Jan Mayen",
    "aliases": [
      "Svalbard"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      631.57,
      32.89
    ],
    "markerOnly": true
  },
  {
    "code": "TK",
    "name": "Tokelau",
    "aliases": [
      "Tokelau"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      39.34,
      333.08
    ],
    "markerOnly": true
  },
  {
    "code": "UM",
    "name": "Îles mineures éloignées des États-Unis",
    "aliases": [
      "United States Minor Outlying Islands"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      39.15,
      198.59
    ],
    "markerOnly": true
  },
  {
    "code": "YT",
    "name": "Mayotte",
    "aliases": [
      "Mayotte"
    ],
    "featured": false,
    "galleryUrl": null,
    "position": [
      746.92,
      346.14
    ],
    "markerOnly": true
  }
];

// Sound effects use local files so the portfolio also works in file://.
const soundEffects = Object.fromEntries(Object.entries({
  hover: 'Sound FX/Clic.wav',
  select: 'Sound FX/Select pays.wav'
}).map(([name, path]) => {
  const audio = new Audio(path);
  audio.preload = 'auto';
  audio.volume = 0.30;
  return [name, audio];
}));
let siteSoundEnabled = true;
function playSound(name) {
  if (!siteSoundEnabled) return Promise.resolve(false);
  const audio = soundEffects[name];
  audio.currentTime = 0;
  return audio.play().then(() => true).catch(() => false);
}
// Delegate hover feedback so dynamically added links and controls also use it.
document.addEventListener('pointerover', event => {
  if (event.pointerType !== 'mouse' || !(event.target instanceof Element)) return;
  const item = event.target.closest('a[href], button, [role="button"], [role="option"], [role="link"], [role="switch"], input[type="range"], summary');
  if (!item || item.matches(':disabled')) return;
  // The pending mail address still gets the same hover feedback as the social icons.
  if (item.matches('[aria-disabled="true"]') && !item.matches('.mail-contact')) return;
  // Map shapes and city controls already have their own hover feedback.
  if (item.closest('#world-map, .detail-city') || item.hasAttribute('data-hover-sound-managed')) return;
  if (event.relatedTarget instanceof Node && item.contains(event.relatedTarget)) return;
  void playSound('hover');
});
const entrySoundButton = document.createElement('button');
entrySoundButton.type = 'button';
entrySoundButton.className = 'entry-sound-button';
entrySoundButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path class="sound-waves" d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/><path class="sound-slash" d="m3 3 18 18"/></svg>';
entrySoundButton.title = 'Activer le son';
entrySoundButton.setAttribute('aria-label', 'Couper le son du site');
document.querySelector('.site-header .socials').prepend(entrySoundButton);
function updateSoundButton() {
  entrySoundButton.classList.toggle('is-muted', !siteSoundEnabled);
  entrySoundButton.setAttribute('aria-pressed', String(siteSoundEnabled));
  entrySoundButton.setAttribute('aria-label', siteSoundEnabled ? 'Couper le son du site' : 'Activer le son du site');
  entrySoundButton.title = siteSoundEnabled ? 'Couper le son' : 'Activer le son';
}
updateSoundButton();
entrySoundButton.addEventListener('click', () => {
  siteSoundEnabled = !siteSoundEnabled;
  for (const audio of Object.values(soundEffects)) {
    audio.muted = !siteSoundEnabled;
    if (!siteSoundEnabled) audio.pause();
  }
  updateSoundButton();
});

let countryNavigationPending = false;
function openGalleryWithSound(url) {
  if (countryNavigationPending) return;
  countryNavigationPending = true;
  const audio = soundEffects.select;
  let timer;
  let navigated = false;
  const navigate = () => {
    if (navigated) return;
    navigated = true;
    clearTimeout(timer);
    audio.removeEventListener('ended', navigate);
    audio.removeEventListener('error', navigate);
    window.location.assign(url);
  };
  audio.addEventListener('ended', navigate, { once: true });
  audio.addEventListener('error', navigate, { once: true });
  // Never leave navigation waiting on a missing file or stalled playback.
  timer = setTimeout(navigate, 1100);
  void playSound('select').then(played => { if (!played) navigate(); });
}
window.addEventListener('pageshow', () => { countryNavigationPending = false; });

const $ = selector => document.querySelector(selector);
const input = $('#country-search');
const list = $('#suggestions');
const map = $('#world-map');
const panel = $('#country-panel');
const label = $('#country-label');
const marker = $('#marker');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const worldView = [0, 4, 1200, 520];
const collator = new Intl.Collator('fr', { sensitivity: 'base' });
const byCode = new Map(countries.map(country => [country.code, country]));
const shapes = new Map([...document.querySelectorAll('[data-country-code]')].map(shape => [shape.dataset.countryCode, shape]));
let options = [], activeIndex = -1, selectedCode = null, hoveredCode = null, animation = 0, hoverTimer;

Object.entries(SOCIAL_LINKS).forEach(([name, url]) => {
  document.querySelectorAll(`[data-social="${name}"]`).forEach(link => { link.href = url; });
});
function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’'`‐‑–—-]/g, ' ').replace(/\s+/g, ' ').trim();
}
function closeSuggestions() {
  list.hidden = true;
  $('#no-results').hidden = true;
  input.setAttribute('aria-expanded', 'false');
  input.removeAttribute('aria-activedescendant');
  activeIndex = -1;
}
function renderSuggestions() {
  const query = normalize(input.value);
  $('#clear-search').hidden = !input.value;
  list.replaceChildren();
  activeIndex = -1;
  input.removeAttribute('aria-activedescendant');
  if (!query) { options = []; closeSuggestions(); return; }
  options = countries.filter(country => country.code !== 'AQ' && [country.name, ...country.aliases].some(name => normalize(name).startsWith(query))).sort((a, b) => collator.compare(a.name, b.name));
  for (const [index, country] of options.entries()) {
    const item = document.createElement('li');
    item.id = `option-${country.code}`;
    item.setAttribute('role', 'option');
    item.setAttribute('aria-selected', 'false');
    const name = document.createElement('span');
    name.textContent = country.name;
    item.append(name);
    if (!country.galleryUrl) { const status = document.createElement('small'); status.textContent = 'Coming soon'; item.append(status); }
    item.addEventListener('pointerdown', event => { if (event.pointerType === 'mouse') event.preventDefault(); });
    item.addEventListener('click', () => openCountry(country.code));
    item.addEventListener('pointermove', () => setActive(index, false));
    list.append(item);
  }
  list.hidden = !options.length;
  $('#no-results').hidden = !!options.length;
  input.setAttribute('aria-expanded', String(options.length > 0));
}
function setActive(index, scroll = true) {
  activeIndex = index;
  [...list.children].forEach((item, i) => item.setAttribute('aria-selected', String(i === index)));
  const item = list.children[index];
  if (item) { input.setAttribute('aria-activedescendant', item.id); if (scroll) item.scrollIntoView({ block: 'nearest' }); }
}
input.addEventListener('input', () => { if (!input.value.trim()) resetWorld(false); renderSuggestions(); });
input.addEventListener('focus', () => { if (input.value && !selectedCode) renderSuggestions(); });
input.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    if (list.hidden) renderSuggestions();
    if (options.length) {
      const next = activeIndex < 0 ? (event.key === 'ArrowDown' ? 0 : options.length - 1) : (activeIndex + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
      setActive(next);
    }
  } else if (event.key === 'Enter' && !list.hidden && options.length) {
    event.preventDefault(); openCountry(options[activeIndex < 0 ? 0 : activeIndex].code);
  } else if (event.key === 'Escape' || event.key === 'Tab') closeSuggestions();
});
document.addEventListener('pointerdown', event => { if (!event.target.closest('.search')) closeSuggestions(); });

function copyShape(code, layer) {
  layer.replaceChildren();
  const source = shapes.get(code);
  if (!source) return;
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  for (const path of source.querySelectorAll('path')) {
    const clone = path.cloneNode(true);
    clone.removeAttribute('id');
    group.append(clone);
  }
  layer.append(group);
}
function positionLabel(code) {
  const country = byCode.get(code);
  if (!country) { label.hidden = true; return; }
  const point = map.createSVGPoint();
  const shape = shapes.get(code);
  let position = country.position;
  if (shape && !country.markerOnly) {
    const bounds = shape.getBBox();
    if (bounds.width < 500) position = [bounds.x + bounds.width / 2, bounds.y];
  }
  [point.x, point.y] = position;
  const matrix = map.getScreenCTM();
  if (!matrix) return;
  const screen = point.matrixTransform(matrix);
  const rect = $('.map-stage').getBoundingClientRect();
  label.textContent = country.name;
  label.hidden = false;
  const half = label.offsetWidth / 2 + 5;
  label.style.left = `${Math.max(half, Math.min(rect.width - half, screen.x - rect.left))}px`;
  label.style.top = `${Math.max(label.offsetHeight + 4, screen.y - rect.top - 12)}px`;
}
function addCountryFlag(code, layer) {
  const hasFlag = /^[A-Z]{2}$/.test(code);
  layer.classList.toggle('has-flag', hasFlag);
  if (!hasFlag) return;
  const bounds = shapes.get(code).getBBox();
  if (!bounds.width || !bounds.height) return;
  const ns = 'http://www.w3.org/2000/svg';
  const defs = document.createElementNS(ns, 'defs');
  const pattern = document.createElementNS(ns, 'pattern');
  pattern.id = 'country-hover-flag';
  pattern.setAttribute('patternUnits', 'userSpaceOnUse');
  pattern.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
  const image = document.createElementNS(ns, 'image');
  for (const attr of ['x', 'y', 'width', 'height']) {
    pattern.setAttribute(attr, bounds[attr]);
    image.setAttribute(attr, attr === 'x' || attr === 'y' ? 0 : bounds[attr]);
  }
  image.setAttribute('preserveAspectRatio', 'none');
  image.setAttribute('href', new URL(`assets/flags/${code.toLowerCase()}.svg`, document.baseURI).href);
  // Keep the ordinary silhouette if a territory has no flag asset.
  image.addEventListener('error', () => {
    if (!image.isConnected) return;
    layer.classList.remove('has-flag');
    layer.querySelectorAll('path').forEach(path => path.removeAttribute('fill'));
    defs.remove();
  });
  pattern.append(image);
  defs.append(pattern);
  layer.prepend(defs);
  layer.querySelectorAll('path').forEach(path => path.setAttribute('fill', 'url(#country-hover-flag)'));
}
function showHover(code) {
  clearTimeout(hoverTimer);
  hoveredCode = code;
  const layer = $('#hover-layer');
  layer.classList.remove('leaving');
  layer.classList.toggle('selected', code === selectedCode);
  copyShape(code, layer);
  addCountryFlag(code, layer);
  positionLabel(code);
}
function hideHover() {
  hoveredCode = null;
  const layer = $('#hover-layer');
  layer.classList.add('leaving');
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => layer.replaceChildren(), reducedMotion.matches ? 0 : 240);
  if (selectedCode) positionLabel(selectedCode); else label.hidden = true;
}
function setView(view) {
  map.setAttribute('viewBox', view.join(' '));
  if (hoveredCode || selectedCode) positionLabel(hoveredCode || selectedCode);
}
function animateView(target, duration = 550, onComplete) {
  cancelAnimationFrame(animation);
  if (reducedMotion.matches) { setView(target); onComplete?.(); return; }
  const from = map.getAttribute('viewBox').split(/\s+/).map(Number);
  const start = performance.now();
  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    setView(from.map((value, i) => value + (target[i] - value) * ease));
    if (t < 1) animation = requestAnimationFrame(frame);
    else onComplete?.();
  }
  animation = requestAnimationFrame(frame);
}
function targetView(country) {
  const shape = shapes.get(country.code);
  let center = country.position, zoom = 2.5;
  if (shape) {
    const box = shape.getBBox();
    // Dispersed territories / antimeridian: use Natural Earth's geographic label position.
    if (box.width < 500) {
      center = [box.x + box.width / 2, box.y + box.height / 2];
      zoom = Math.min(2.5, worldView[2] / (box.width * 1.5), worldView[3] / (box.height * 1.5));
    } else zoom = 1.6;
  }
  zoom = Math.max(1, zoom);
  const [left, top, worldWidth, worldHeight] = worldView;
  const width = worldWidth / zoom, height = worldHeight / zoom;
  return [Math.max(left, Math.min(left + worldWidth - width, center[0] - width / 2)), Math.max(top, Math.min(top + worldHeight - height, center[1] - height / 2)), width, height];
}
function openCountry(code) {
  const country = byCode.get(code);
  if (!country) return;
  window.countryExplorer?.hide();
  void playSound('select');
  hideHover();
  selectedCode = code;
  document.body.classList.add('exploring-country');
  $('#hover-layer').classList.remove('selected');
  $('#hover-layer').replaceChildren();
  shapes.forEach((shape, shapeCode) => shape.classList.toggle('selected', shapeCode === code));
  copyShape(code, $('#selection-layer'));
  input.value = country.name;
  $('#clear-search').hidden = false;
  closeSuggestions();
  $('#country-name').textContent = country.name;
  appendCountryFlag($('#country-name'), code);
  renderCountryFacts(code, $('#selected-country-facts'));
  $('#status').hidden = !!country.galleryUrl;
  $('#status').textContent = country.galleryUrl ? '' : 'Coming soon';
  $('#status-description').hidden = !!country.galleryUrl;
  $('#status-description').textContent = country.galleryUrl ? '' : 'La galerie sera bientôt disponible.';
  const link = $('#gallery-link');
  link.hidden = !country.galleryUrl;
  if (country.galleryUrl) link.href = country.galleryUrl; else link.removeAttribute('href');
  panel.hidden = false;
  $('#reset-view').hidden = false;
  const shape = shapes.get(code);
  const box = shape?.getBBox();
  marker.toggleAttribute('hidden', !!box && box.width >= 6 && box.height >= 6);
  if (!marker.hasAttribute('hidden')) marker.setAttribute('transform', `translate(${country.position.join(' ')})`);
  $('#announcement').textContent = [country.name, $('#status').textContent, $('#status-description').textContent].filter(Boolean).join('. ');
  positionLabel(code);
  animateView(targetView(country), 850, () => {
    if (selectedCode === code) window.countryExplorer?.show(country);
  });
}
function resetWorld(clearInput = true) {
  window.countryExplorer?.hide();
  selectedCode = null;
  document.body.classList.remove('exploring-country');
  hideHover();
  $('#hover-layer').classList.remove('selected');
  shapes.forEach(shape => shape.classList.remove('selected'));
  $('#selection-layer').replaceChildren();
  marker.setAttribute('hidden', '');
  panel.hidden = true;
  label.hidden = true;
  $('#reset-view').hidden = true;
  if (clearInput) { input.value = ''; $('#clear-search').hidden = true; }
  closeSuggestions();
  animateView(worldView);
}
$('#clear-search').addEventListener('click', () => { resetWorld(); input.focus(); });
$('#reset-view').addEventListener('click', () => { resetWorld(); input.focus(); });
$('#close-panel').addEventListener('click', () => { panel.hidden = true; input.focus(); });
for (const country of countries) {
  const shape = shapes.get(country.code);
  if (!shape) { if (!country.position) console.warn('Position manquante :', country.code); continue; }
  shape.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { void playSound('hover'); showHover(country.code); } });
  shape.addEventListener('pointerleave', () => hideHover());
  if (!country.featured) {
    shape.addEventListener('click', () => openCountry(country.code));
    continue;
  }
  shape.classList.add('featured');
  shape.setAttribute('tabindex', '0');
  shape.setAttribute('role', 'button');
  shape.setAttribute('aria-label', `${country.name} — découvrir la destination`);
  shape.addEventListener('focus', () => showHover(country.code));
  shape.addEventListener('blur', hideHover);
  shape.addEventListener('click', () => openCountry(country.code));
  shape.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openCountry(country.code); } });
}
// A coarse pointer gets a larger transparent target, while the visible outline stays intact.
if (window.matchMedia('(pointer: coarse)').matches) {
  for (const country of countries.filter(country => country.featured)) {
    const shape = shapes.get(country.code);
    const box = shape.getBBox();
    const target = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const units = 1200 / map.getBoundingClientRect().width;
    const size = 44 * units;
    target.setAttribute('x', box.x + box.width / 2 - Math.max(box.width, size) / 2);
    target.setAttribute('y', box.y + box.height / 2 - Math.max(box.height, size) / 2);
    target.setAttribute('width', Math.max(box.width, size));
    target.setAttribute('height', Math.max(box.height, size));
    target.setAttribute('fill', 'transparent');
    target.setAttribute('stroke', 'none');
    target.setAttribute('aria-hidden', 'true');
    target.addEventListener('click', () => openCountry(country.code));
    map.append(target);
  }
}
window.addEventListener('resize', () => { if (hoveredCode || selectedCode) positionLabel(hoveredCode || selectedCode); });
reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) { cancelAnimationFrame(animation); setView(selectedCode ? targetView(byCode.get(selectedCode)) : worldView); if (selectedCode) window.countryExplorer?.show(byCode.get(selectedCode)); } });

// A restrained camera pullback introduces the world map.
if (!reducedMotion.matches) {
  setView([150, 69, 900, 390]);
  animateView(worldView, 1500);
}
$('#gallery-link').addEventListener('click', event => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  openGalleryWithSound(event.currentTarget.href);
});
