// Médias propres à chaque ville. Chemins relatifs au dossier galeries.
// photos : { src, thumbnail, alt, caption }; vidéos : { url (YouTube), title, description }.
window.CITY_CONTENT = {
  "maroc-merzouga": {
    "name": "Merzouga",
    "country": "Maroc",
    "coordinates": [
      -4.011667,
      31.099167
    ],
    "setting": "Sud-est du Maroc",
    "landmark": "Aux portes du désert",
    "description": "Merzouga est un village du sud-est marocain, point de départ pour découvrir les dunes de l’Erg Chebbi.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [
      {
        "src": "../assets/photos/maroc/1.jpg",
        "thumbnail": "../assets/photos/maroc/previews/1.jpg",
        "alt": "Voyageur et dromadaire dans les dunes"
      },
      {
        "src": "../assets/photos/maroc/2.jpg",
        "thumbnail": "../assets/photos/maroc/previews/2.jpg",
        "alt": "Portrait au turban orange"
      },
      {
        "src": "../assets/photos/maroc/3.jpg",
        "thumbnail": "../assets/photos/maroc/previews/3.jpg",
        "alt": "Silhouettes et dromadaire au soleil couchant"
      },
      {
        "src": "../assets/photos/maroc/4.jpg",
        "thumbnail": "../assets/photos/maroc/previews/4.jpg",
        "alt": "Deux silhouettes et un dromadaire sous un ciel orangé"
      },
      {
        "src": "../assets/photos/maroc/6.jpg",
        "thumbnail": "../assets/photos/maroc/previews/6.jpg",
        "alt": "Personne vêtue de blanc entre les palmes et le lac"
      },
      {
        "src": "../assets/photos/maroc/7.jpg",
        "thumbnail": "../assets/photos/maroc/previews/7.jpg",
        "alt": "Portrait au turban blanc"
      }
    ],
    "videos": [],
    "facts": {
      "population": "Non confirmée",
      "region": "Drâa-Tafilalet",
      "altitude": "≈ 700 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Merzouga",
      "altitudeSource": "https://de.wikipedia.org/wiki/Merzouga",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-alnif": {
    "name": "Alnif",
    "country": "Maroc",
    "coordinates": [
      -5.17028,
      31.11167
    ],
    "setting": "Province de Tinghir",
    "landmark": "Paysages sahariens et fossiles",
    "description": "Alnif est une étape du sud-est marocain connue pour ses fossiles, ses ksour et ses paysages sahariens.",
    "source": "https://www.tourismetinghir.com/index.php/nos-destinations/tinghir/alnif",
    "photos": [
      {
        "src": "../assets/photos/maroc/5.jpg",
        "thumbnail": "../assets/photos/maroc/previews/5.jpg",
        "alt": "Groupe d’enfants avec des vélos sur une route"
      }
    ],
    "videos": [],
    "facts": {
      "population": "4 728 hab. · 2014 · centre urbain",
      "region": "Drâa-Tafilalet",
      "altitude": "≈ 882 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Alnif",
      "altitudeSource": "https://fr.wikipedia.org/wiki/Alnif",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-ouarzazate": {
    "name": "Ouarzazate",
    "country": "Maroc",
    "coordinates": [
      -6.904221,
      30.922991
    ],
    "setting": "Drâa-Tafilalet",
    "landmark": "Kasbahs et paysages du Sud",
    "description": "Ouarzazate ouvre sur les paysages du Sud marocain et leurs kasbahs.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [],
    "videos": [],
    "facts": {
      "population": "71 067 hab. · 2014",
      "region": "Drâa-Tafilalet",
      "altitude": "≈ 1 150 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Ouarzazate",
      "altitudeSource": "https://fr.wikipedia.org/wiki/Ouarzazate",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-essaouira": {
    "name": "Essaouira",
    "country": "Maroc",
    "coordinates": [
      -9.76972,
      31.5125
    ],
    "setting": "Côte atlantique",
    "landmark": "Médina et océan",
    "description": "Ancienne Mogador, Essaouira se découvre entre sa médina, ses remparts et l’Atlantique.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [],
    "videos": [],
    "facts": {
      "population": "82 094 hab. · 2024",
      "region": "Marrakech-Safi",
      "altitude": "≈ 11 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Essaouira",
      "altitudeSource": "https://fr.wikivoyage.org/wiki/Essaouira",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-tanger": {
    "name": "Tanger",
    "country": "Maroc",
    "coordinates": [
      -5.8,
      35.767
    ],
    "setting": "Nord du Maroc",
    "landmark": "Une ville tournée vers le détroit",
    "description": "Tanger occupe la pointe nord du Maroc, au bord du détroit de Gibraltar.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [],
    "videos": [],
    "facts": {
      "population": "1 275 428 hab. · 2024",
      "region": "Tanger-Tétouan-Al Hoceïma",
      "altitude": "≈ 20 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Tanger",
      "altitudeSource": "https://fr.wikipedia.org/wiki/Tanger",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-meknes": {
    "name": "Meknès",
    "country": "Maroc",
    "coordinates": [
      -5.554722,
      33.895
    ],
    "setting": "Fès-Meknès",
    "landmark": "Ville impériale",
    "description": "Meknès fait partie des villes impériales du Maroc. La porte Bab Mansour est l’un de ses grands repères.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [],
    "videos": [],
    "facts": {
      "population": "551 503 hab. · 2024",
      "region": "Fès-Meknès",
      "altitude": "≈ 535 m",
      "populationSource": "https://fr.wikivoyage.org/wiki/Mekn%C3%A8s",
      "altitudeSource": "https://fr.wikivoyage.org/wiki/Mekn%C3%A8s",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-agadir": {
    "name": "Agadir",
    "country": "Maroc",
    "coordinates": [
      -9.598145,
      30.420182
    ],
    "setting": "Côte atlantique",
    "landmark": "La baie et l’océan",
    "description": "Agadir s’ouvre sur l’Atlantique et sa large baie, sur la côte ouest du Maroc.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [
      {
        "src": "../assets/photos/maroc/11.jpg",
        "thumbnail": "../assets/photos/maroc/previews/11.jpg",
        "alt": "Silhouettes sur la plage à la lumière du soir"
      }
    ],
    "videos": [],
    "facts": {
      "population": "504 768 hab. · 2024",
      "region": "Souss-Massa",
      "altitude": "24 à 70 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Agadir",
      "altitudeSource": "https://fr.wikipedia.org/wiki/Agadir",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-marrakech": {
    "name": "Marrakech",
    "country": "Maroc",
    "coordinates": [
      -8.001933,
      31.631939
    ],
    "setting": "Intérieur du Maroc",
    "landmark": "Jardins et ville impériale",
    "description": "Marrakech est une ville impériale du Maroc, connue pour ses jardins et sa médina.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [],
    "videos": [],
    "facts": {
      "population": "996 643 hab. · 2024",
      "region": "Marrakech-Safi",
      "altitude": "≈ 450 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Marrakech",
      "altitudeSource": "https://fr.wikipedia.org/wiki/Marrakech",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-casablanca": {
    "name": "Casablanca",
    "country": "Maroc",
    "coordinates": [
      -7.618313,
      33.601922
    ],
    "setting": "Côte atlantique",
    "landmark": "Métropole atlantique",
    "description": "Casablanca est une grande métropole économique du Maroc, ouverte sur l’océan Atlantique.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [],
    "videos": [],
    "facts": {
      "population": "3 218 036 hab. · 2024 · préfecture",
      "region": "Casablanca-Settat",
      "altitude": "0 à 150 m",
      "populationSource": "https://www.hcp.ma/reg-casablanca/attachment/2863464/",
      "altitudeSource": "https://fr.wikipedia.org/wiki/Casablanca",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-rabat": {
    "name": "Rabat",
    "country": "Maroc",
    "coordinates": [
      -6.836408,
      34.025307
    ],
    "setting": "Côte atlantique",
    "landmark": "Capitale du Maroc",
    "description": "Rabat est la capitale du Maroc. La tour Hassan et la kasbah des Oudayas comptent parmi ses repères.",
    "source": "https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc",
    "photos": [],
    "videos": [],
    "facts": {
      "population": "515 619 hab. · 2024",
      "region": "Rabat-Salé-Kénitra",
      "altitude": "≈ 75 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Rabat",
      "altitudeSource": "https://en.terravisor.com/cities/info/rabat",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-fes": {
    "name": "Fès",
    "country": "Maroc",
    "coordinates": [
      -5.002323,
      34.056545
    ],
    "setting": "Fès-Meknès",
    "landmark": "Médina et artisanat",
    "description": "Fès se découvre à travers sa médina et ses ateliers d’artisans, des tanneries aux poteries.",
    "source": "https://www.visitmorocco.com/fr/voyage/fes/medina",
    "photos": [
      {
        "src": "../assets/photos/maroc/9.jpg",
        "thumbnail": "../assets/photos/maroc/previews/9.jpg",
        "alt": "Lanternes suspendues dans un passage étroit"
      }
    ],
    "videos": [],
    "facts": {
      "population": "1 182 963 hab. · 2024",
      "region": "Fès-Meknès",
      "altitude": "≈ 400 m",
      "populationSource": "https://fr.wikipedia.org/wiki/F%C3%A8s",
      "altitudeSource": "https://fr.wikipedia.org/wiki/F%C3%A8s",
      "checkedOn": "2026-09-21"
    }
  },
  "maroc-imilchil": {
    "name": "Imilchil",
    "country": "Maroc",
    "coordinates": [
      -5.634722,
      32.155
    ],
    "setting": "Haut Atlas",
    "landmark": "Village de montagne",
    "description": "Imilchil est une localité du Haut Atlas, dans la province de Midelt, au cœur des paysages de montagne du Maroc.",
    "source": "https://fr.wikipedia.org/wiki/Imilchil",
    "photos": [
      {
        "src": "../assets/photos/maroc/8.jpg",
        "thumbnail": "../assets/photos/maroc/previews/8.jpg",
        "alt": "Croissant de lune au-dessus de l’eau au crépuscule"
      },
      {
        "src": "../assets/photos/maroc/10.jpg",
        "thumbnail": "../assets/photos/maroc/previews/10.jpg",
        "alt": "Portrait devant un paysage rocheux"
      }
    ],
    "videos": [],
    "facts": {
      "population": "9 164 hab. · 2024 · commune",
      "region": "Drâa-Tafilalet",
      "altitude": "≈ 2 200 m",
      "populationSource": "https://fr.wikipedia.org/wiki/Imilchil",
      "altitudeSource": "https://fr.wikipedia.org/wiki/Imilchil",
      "checkedOn": "2026-09-21"
    }
  },
  "bresil-recife": {
    "name": "Recife",
    "country": "Brésil",
    "coordinates": [
      -34.881111,
      -8.053889
    ],
    "setting": "Pernambouc · Nordeste",
    "landmark": "Centre historique et Atlantique",
    "description": "Recife, capitale du Pernambouc, se découvre entre son centre historique, le fleuve Capibaribe et les plages de l’Atlantique.",
    "source": "https://www.visitbrasil.com/location/recife/",
    "photos": [],
    "videos": [
      {
        "url": "https://www.youtube.com/watch?v=icO0ZecrAMk",
        "title": "Recife",
        "duration": "4:06"
      },
      {
        "url": "https://www.youtube.com/watch?v=wNTyHNSUvoA",
        "title": "Umbanda",
        "duration": "2:09"
      }
    ],
    "facts": {
      "population": "1 488 920 hab. · 2022 · municipalité",
      "region": "Pernambouc · Nordeste",
      "altitude": "≈ 5 m",
      "populationSource": "https://www.ibge.gov.br/cidades-e-estados/pe/recife.html",
      "altitudeSource": "https://anuario.ibge.gov.br/images/aeb/2024/s1/2_pdf/s1t1102.pdf",
      "checkedOn": "2026-09-21"
    }
  },
  "bresil-manaus": {
    "name": "Manaus",
    "country": "Brésil",
    "coordinates": [
      -60.025,
      -3.101944
    ],
    "setting": "Amazonas · Amazonie",
    "landmark": "Culture et forêt amazonienne",
    "description": "Manaus, capitale de l’Amazonas, est une métropole au cœur de l’Amazonie. Le Teatro Amazonas et les marchés de la ville témoignent de sa vie culturelle.",
    "source": "https://www.visitbrasil.com/en/location/manaus/",
    "photos": [],
    "videos": [
      {
        "url": "https://www.youtube.com/watch?v=u_JKY8_587k",
        "title": "Amazona",
        "duration": "6:34"
      }
    ],
    "facts": {
      "population": "2 063 689 hab. · 2022 · municipalité",
      "region": "Amazonas · Nord",
      "altitude": "≈ 93 m",
      "populationSource": "https://www.ibge.gov.br/cidades-e-estados/am/manaus.html",
      "altitudeSource": "https://anuario.ibge.gov.br/images/aeb/2024/s1/2_pdf/s1t1102.pdf",
      "checkedOn": "2026-09-21"
    }
  },
  "bresil-sao-luis": {
    "name": "São Luís",
    "country": "Brésil",
    "coordinates": [
      -44.30278,
      -2.52972
    ],
    "photos": [],
    "videos": [
      {
        "url": "https://www.youtube.com/watch?v=fqVSKW2jrg4",
        "title": "Brazil Nordeste",
        "duration": "1:44"
      }
    ]
  }
};
