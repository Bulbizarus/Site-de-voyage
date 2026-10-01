# Icaros — Site de mariage

Nouvel accueil créé le 1er octobre 2026 : `index.html`, `icaros.css`, `icaros.js`, `assets/icaros/`.

Ouvrir avec **Ouvrir le site.command**. Le site fonctionne aussi en ouvrant `index.html` directement. Pour publier cette version, seuls ces trois fichiers et le dossier `assets/icaros/` sont nécessaires. Aucune publication n’a été effectuée.

- Composition inspirée de https://paca-mariages.com/ ; textes et identité adaptés à Icaros.
- Six photos téléchargées depuis la galerie publique https://www.mariages.net/photo-mariage/icaros--e238842#gallery. Les filigranes de la plateforme sont conservés. Remplacer ces WebP par les fichiers originaux pour une version sans filigrane.
- Trois avis présentés sous forme de courts extraits et résumés explicitement signalés, avec les auteurs, dates et accès aux 23 avis complets. Note publique relevée le 1er octobre 2026 : 5/5, 23 avis, 100 % de recommandations. Pas de synchronisation automatique.
- Le contact redirige vers la fiche Icaros sur Mariages.net ; aucun formulaire fictif ni adresse inventée.
- Vérification dans Chrome : ordinateur et mobile 390 px, images sans erreur, absence de débordement horizontal, carrousel, visionneuse, navigation de la visionneuse, fermeture Échap, menu mobile et FAQ. Aucune erreur console observée.

L’accueil précédent est sauvegardé dans `backups/avant-icaros-20261001/index.html`. Pour le restaurer, recopier ce fichier à la racine ; les anciennes feuilles de style, scripts et galeries sont conservés.

---

# Allan Xavier Affonso — Portfolio

### Présentation des carnets

Les destinations avec des photos ou films sont mises en avant sur la carte et proposées en accès direct sous celle-ci. Cette disponibilité est calculée à partir des galeries. Les fiches restent visibles sans cadre ; les sections photo ou vidéo vides sont masquées lorsqu’un autre type de média est disponible.

Les films affichent une miniature issue de leur vidéo YouTube (haute résolution avec repli sur les formats plus petits) et leur durée (champ `duration` dans `galeries/city-content.js`). Le lecteur est chargé au clic et un seul film joue à la fois. Les quatre durées actuelles et leur lecture ont été vérifiées dans le navigateur. Les vues à 390 px, le filtrage Recife et le visualiseur photo du Maroc ont également été contrôlés.

Pour l’aperçu local, double-cliquer sur **Ouvrir le site.command** (Python 3 requis) et garder sa fenêtre ouverte. Le site s’ouvre dans le navigateur sur une adresse `http://localhost`. Les vidéos YouTube nécessitent une connexion Internet et une page servie en HTTP/HTTPS : l’ouverture directe de `index.html` en `file://` ne permet pas leur lecture intégrée. Pour publier le site, transférer les fichiers HTML, CSS, JavaScript et le dossier `assets` chez un hébergeur statique en conservant les sous-dossiers.

## Personnalisation

- **Réseaux** : remplacer `USERNAME` dans `SOCIAL_LINKS`, au début de `script.js`. Les adresses actuelles sont des démonstrations, indiquées dans les titres et noms accessibles des liens. Après configuration, adapter également ces libellés dans `index.html`.
- **Couleurs, espacements, transitions** : variables dans `:root`, en tête de `style.css`.
- **Galeries** : les pays ouvrent une carte locale avec leurs principales villes. Le Maroc et la Thaïlande proposent ensuite un lien vers leurs pages dans `galeries/`. Pour une autre destination, créer sa page puis configurer `galleryUrl` dans `script.js`. Les pays sans page conservent leur panneau « Coming soon ».
- **Destination interactive** : passer `featured` à `true`. Le contour devient accessible à la souris, au toucher et au clavier, indépendamment de la disponibilité de la galerie.

## Carte et données

Carte Natural Earth Admin 0 – Countries, échelle 1:50m, projetée en Robinson avec interpolation des coefficients. Les 242 entités du jeu source sont conservées, avec leurs polygones et leurs trous. Le découpage représente les limites du jeu Natural Earth, généralement de facto ; il ne constitue pas une prise de position sur les territoires contestés.

Source exacte, auteurs et licence dans `assets/map-LICENSE.txt`. Natural Earth et les traductions de ses noms sont du domaine public. Aucune attribution visible obligatoire.

`assets/world-map.source.svg` conserve la conversion SVG géographique. La même carte est **dupliquée inline dans index.html** pour permettre les interactions et l'ouverture locale sans `fetch`. En cas de changement de géométrie, actualiser ces deux copies. Les styles et états interactifs sont appliqués au chargement.

Le tableau local couvre les **249 codes ISO 3166-1** du fichier IANA `assets/iso3166.tab`, révision du 1 juillet 2025, et conserve six entités géographiques supplémentaires de Natural Earth : Kosovo (`XK`), Somaliland (`NE-SOL`), Chypre du Nord (`NE-CYN`), territoires extérieurs australiens de l'océan Indien (`NE-IOA`), îles Ashmore-et-Cartier (`NE-ATC`), glacier de Siachen (`NE-KAS`). Total : **255 destinations**. Les identifiants `NE-` sont internes ; ce ne sont pas des codes ISO officiels. Noms français et alias anglais proviennent de Natural Earth ; quelques alias usuels sont ajoutés.

Treize codes ISO n'ont pas de contour autonome dans cette source : **BQ, BV, CC, CX, GF, GI, GP, MQ, RE, SJ, TK, UM, YT**. Leur position indicative est stockée dans `position`, en coordonnées SVG. La sélection affiche un marqueur, sans fabriquer de frontière. Certains de ces territoires sont représentés dans la géométrie d'une autre entité (France, Norvège ou territoires australiens notamment). La position de BQ, SJ et UM est représentative d'un archipel, et ne localise pas chacune de ses îles.

Pour tous les contours trop petits (largeur ou hauteur inférieure à 6 unités SVG), un marqueur apparaît également à la sélection. Les positions des entités présentes viennent des coordonnées de libellé de Natural Earth. Pour un pays dispersé ou traversant l'antiméridien (boîte de plus de 500 unités SVG), le centrage utilise cette position et un zoom 1,6×. Les autres centrages utilisent `getBBox`, avec un zoom maximal de 2,5×.

## Vérifications effectuées

- Ouverture locale dans Chrome sans serveur : rendu des styles, chargement du JavaScript, carte inline et panneau fonctionnels.
- 20 assertions de navigateur réussies pour chacune des largeurs **1440, 1024, 390 et 320 px** ; les deux dernières sont des fenêtres de document dans une iframe de largeur exacte. Aucun débordement horizontal ni chevauchement identité/réseaux détecté.
- Recherche `m`, tri français, `tha`, `Thailande`, `THAÏLANDE`, aucun résultat ; sélection par flèche puis Entrée, Espace sur le Maroc, sélection de la Thaïlande, du Vatican et de Gibraltar, marqueurs, limite du zoom, réinitialisation et absence de lien de galerie vide.
- Référentiel : 249 codes ISO présents, aucun doublon, 242 groupes SVG ; source SVG analysée comme XML valide.
- Capture du rendu desktop 1440 px inspectée visuellement.
- 24 assertions supplémentaires réussies dans Chrome avec préférence de mouvement réduit et pointeur tactile simulé : détection du mode tactile, présence de deux cibles élargies et application immédiate du zoom sans animation.

Limites : les essais clavier sont automatisés, sans validation avec un lecteur d'écran. Pas de test sur un téléphone physique, ni de vérification dans Safari ou Firefox. Les profils sociaux et les galeries attendent les contenus réels.

## Ajouter vos photographies

1. Déposer les photos du Maroc dans `assets/photos/maroc/` (ou celles de Thaïlande dans `assets/photos/thailande/`).
2. Ouvrir `galeries/gallery.js` et ajouter une entrée par image dans la liste `photos` correspondante :

```js
{ src: '../assets/photos/maroc/photo-01.jpg', alt: 'Description de votre photo', caption: 'Lieu, année' },
```

L'ordre de la liste détermine celui des images. La légende `caption` est facultative ; renseigner `alt` pour l'accessibilité. La grille s'adapte au mobile et chaque photo peut être agrandie au clic ; Les boutons précédent/suivant, les flèches gauche/droite du clavier et le balayage horizontal sur mobile permettent de parcourir les photos. Le compteur indique la position ; la navigation s’arrête aux extrémités de la série. Échap ferme la vue agrandie. Le message d'attente disparaît dès que la liste contient des photos. Aucun visuel fictif n'est ajouté.

Les liens sociaux des pages galerie sont à renseigner également dans `galeries/maroc.html` et `galeries/thailande.html`. Pour publier les galeries, transférer aussi les dossiers `galeries/` et `assets/photos/`.

Le site reste statique : l'ajout durable de photos se fait dans ces fichiers, sans espace d'administration ni envoi vers un serveur.

## Section preset

La section sous la carte apparaît au défilement. Son comparateur est au format 16:9, utilisable à la souris, au toucher et avec les flèches du clavier. La préférence de mouvement réduit supprime l'animation d'apparition.

Configurer `preset.js` : `name`, `beforeImage`, `afterImage`, `purchaseUrl` et, éventuellement, `price` (texte, par exemple « 29 € »). Les chemins sont relatifs à `index.html`. Fournir deux exports JPG/WebP de la même photo avec un cadrage identique, idéalement 16:9 ; le fichier RAW original n'est pas directement affichable dans le navigateur.

Tant que les deux images ne sont pas configurées, une photo existante sert de démonstration avec un filtre CSS clairement signalé. Ce n'est pas un résultat réel du futur preset. Dès que les deux images sont renseignées, le filtre et les mentions de démonstration disparaissent. Sans lien d'achat, le bouton reste « Bientôt disponible ». Aucun paiement ni prix n'est inventé. Inclure `preset.js` lors de la publication.

### Activer le paiement et la livraison

Le bouton d'achat est affiché sous le comparateur, désactivé tant que `purchaseUrl` n'est pas configuré. Pour l'activer, créer un produit numérique chez un prestataire qui assure le paiement par carte ET la livraison du fichier (par exemple Gumroad ou Lemon Squeezy), y charger le preset, définir son prix et copier le lien HTTPS de vente dans `PRESET.purchaseUrl` (`preset.js`). `price` sert uniquement à l'affichage ; le prix facturé est défini chez le prestataire.

Le téléchargement doit être délivré par le prestataire après validation du paiement. Ne pas mettre le fichier payant dans les assets publics ni débloquer son accès à partir d'un simple paramètre d'URL. Cette page statique n'encaisse aucun paiement et ne vérifie aucune transaction elle-même. La disponibilité automatique du fichier après achat ne signifie pas que le navigateur démarre automatiquement un téléchargement sans clic.

Avant activation, vérifier via le mode test du prestataire le paiement, l'accès au bon fichier et l'email de livraison. Aucun paiement ni parcours de livraison réel n'a encore été testé : lien de vente et preset final non fournis.

## Vidéos YouTube

Chaque page pays dispose de sections PHOTOS et VIDÉOS. Dans `galeries/gallery.js`, remplir le tableau `videos` du pays :

```js
{ url: 'https://www.youtube.com/watch?v=IDENTIFIANT', title: 'Titre de votre film' },
```

Remplacer le lien d'exemple par un vrai lien YouTube (watch, youtu.be, Shorts ou live), ou un identifiant de 11 caractères. Aucun film de démonstration n'est ajouté. Les lecteurs intégrés sont responsives, chargés paresseusement, sans lecture automatique, avec plein écran et lien de secours vers YouTube.

Les vidéos doivent autoriser l'intégration et être publiques ou non répertoriées. Une connexion Internet est nécessaire. Tester depuis un site HTTP/HTTPS : l'ouverture directe en file:// peut entraîner l'erreur YouTube 153 faute d'en-tête Referer. Le lecteur utilise strict-origin-when-cross-origin et le domaine youtube-nocookie.com. Ne pas supprimer le Referer dans la configuration de l'hébergement.

Documentation : https://developers.google.com/youtube/player_parameters et https://developers.google.com/youtube/iframe_api_reference (erreurs 101, 150, 153). La lecture effective reste à vérifier avec vos vidéos réelles ; aucun lien vidéo n'a encore été fourni.

## Pages dédiées par média

Les pages `galeries/maroc.html` et `galeries/thailande.html` présentent deux choix côte à côte : PHOTOS et VIDÉOS. Ils ouvrent respectivement `<pays>-photos.html` et `<pays>-videos.html`, dans le même dossier. Chaque page de média permet de revenir au pays ou de passer à l'autre média. Les listes de photos et de vidéos restent centralisées dans `gallery.js`. La carte continue de pointer vers les pages de choix du pays.

## Images optimisées pour la navigation

Les mosaïques utilisent `assets/photos/maroc/thumbnails/` (480 px au maximum). Les listes de photos utilisent les aperçus `assets/photos/maroc/previews/` (1200 px), configurés par la propriété `thumbnail` dans `gallery.js`. Les originaux restent inchangés et sont chargés dans la visionneuse lors de l'agrandissement. Pour une nouvelle photo, `thumbnail` est facultatif ; sans aperçu, la liste utilise `src`. Inclure ces deux sous-dossiers lors de la publication.

### Cadrage sans Antarctique

À la demande de l’auteur, l’Antarctique (AQ) est retiré de la carte affichée et des suggestions. La source géographique complète reste conservée dans `assets/world-map.source.svg` ; le SVG intégré diffère désormais de cette source par cette omission et son cadrage. La vue mondiale utilise `0 4 1200 520`, avec des marges équilibrées autour des autres continents. Les zooms et le retour à la vue mondiale utilisent ce même repère.

## Carnets et présentation des films

Les introductions sont modifiables dans le bloc `journey-intro` des pages pays. Le texte du Maroc décrit uniquement les images fournies ; les dates, lieux précis et anecdotes restent à compléter avec les souvenirs de l’auteur. La Thaïlande annonce son contenu à venir. Des liens en bas de page relient les médias et les carnets.

Pour présenter un film dans `gallery.js`, renseigner `url`, `title` et, facultativement, `kind` (`film` ou `vlog`), `duration` (par exemple `08:24`) et `description`. La miniature est celle du lecteur YouTube, à choisir sur YouTube. Aucune durée ni vidéo fictive n’est publiée. Le premier film attend un lien fourni par l’auteur.

## Sons de la carte

Conserver le dossier `Sound FX` lors de la publication : `Enter.wav` joue à l’arrivée (ou à la première interaction si la lecture automatique est bloquée), `Clic.wav` au survol souris des pays avec une galerie, et `Select pays.wav` à la sélection d’un pays. La galerie s’ouvre à la fin du son de sélection, avec une attente maximale de 1,1 seconde en cas de problème audio. Les chemins sont configurés dans `soundEffects` dans `script.js`.

## Exploration des pays et villes

La carte mondiale apparaît avec un dézoom de 1,5 seconde. La sélection d’un pays déclenche le son et un rapprochement de 850 ms, puis révèle sa carte locale. La recherche suit le même parcours. « Vue mondiale » revient à la carte initiale. Les animations sont supprimées avec la préférence système de réduction des mouvements.

`country-explorer.js` gère les villes, leur sélection sonore, le déplacement de la carte et les boutons de zoom. Les boutons de villes permettent aussi l’exploration au clavier. Les dix villes sélectionnées au Maroc ouvrent chacune leur page. Pour les autres pays, la sélection reste un zoom sur la ville ; le lien de galerie reste celui du pays.

`assets/maps/country-maps.js` contient 237 cartes locales et 683 repères (jusqu’à dix villes par pays, priorité aux capitales puis à la population du jeu de données). Les cartes sont centrées sur la masse terrestre principale ; les territoires ultramarins éloignés ne sont pas tous représentés dans cette vue. Les pays absents du jeu conservent le zoom mondial et leur fiche. Conserver ce fichier ainsi que `country-explorer.js` lors de la publication. Tout fonctionne hors ligne, sans service de cartographie externe.

Source des contours et villes : Natural Earth, données publiques à l’échelle 1:50m, https://github.com/nvkelso/natural-earth-vector/tree/master/geojson (`ne_50m_admin_0_countries.geojson` et `ne_50m_populated_places.geojson`). Les coordonnées sont projetées localement pour chaque pays. Les populations servent uniquement au choix des repères et ne sont pas affichées comme des chiffres actuels.

## Pages des villes du Maroc

Les repères du Maroc sont : Merzouga, Alnif, Ouarzazate, Essaouira, Tanger, Meknès, Agadir, Marrakech, Casablanca et Rabat. Leurs liens sont stockés dans `assets/maps/country-maps.js` (`galleryUrl`). Le clic joue le son de sélection avant d’ouvrir `galeries/maroc-<ville>.html`. Le retour `index.html#country=MA` rouvre la carte du Maroc.

Les pages reprennent les repères de la destination, un texte de présentation, le visualiseur de photos existant et les vidéos YouTube. Les médias sont configurés séparément pour chaque ville dans `galeries/city-content.js`. Aucun fichier du carnet général n’a été attribué arbitrairement à une ville.

Exemple d’entrée dans la liste `photos` d’une ville :
```js
{ src: '../assets/photos/maroc/1.jpg', thumbnail: '../assets/photos/maroc/previews/1.jpg', alt: 'Description précise de la photographie' }
```
Exemple dans `videos` :
```js
{ url: 'https://www.youtube.com/watch?v=IDENTIFIANT', title: 'Titre du film', description: 'Présentation du film' }
```
Les titres et repères visibles sont présents dans chaque fichier HTML et peuvent y être modifiés directement. Les listes médias vides affichent un message d’attente propre à la ville.

Orthographe et présentations : Office national marocain du tourisme (https://www.visitmorocco.com/fr/ et https://www.visitmorocco.com/fr/idees-de-voyage/grand-tour-du-maroc), tourisme de Tinghir pour Alnif (https://www.tourismetinghir.com/index.php/nos-destinations/tinghir/alnif). Coordonnées : Natural Earth pour Rabat, Marrakech et Casablanca ; fiches géographiques Wikipédia pour Merzouga, Alnif, Ouarzazate, Tanger et Meknès ; GeoNames pour Agadir et coordonnées d’Essaouira recoupées avec sa fiche géographique. Les repères représentent les localités approximativement, pas une adresse de prise de vue.

Validation : syntaxe JavaScript, liens locaux des dix pages, positions dans le cadre de la carte et tests de logique de sélection/navigation. Le rendu visuel et la lecture audio doivent être vérifiés dans un navigateur ; l’accès automatisé aux pages locales est bloqué dans cet environnement.

### Répartition des photographies confirmée par l’auteur

- Merzouga : 1, 2, 3, 4, 6, 7.
- Alnif : 5.
- Fès : 9.
- Agadir : 11.
- Imilchil : 8, 10.

Les onze photos sont référencées dans `galeries/city-content.js`, avec leurs aperçus et une légende de lieu. Fès et Imilchil ont été ajoutées aux repères de la carte et disposent de leurs pages : le Maroc compte désormais douze étapes. Les fichiers originaux restent dans `assets/photos/maroc/` et le carnet général conserve toutes les images. Les autres villes attendent leurs médias.

Repères de Fès : ONMT, https://www.visitmorocco.com/fr/voyage/fes/medina ; coordonnées Natural Earth. Imilchil : https://fr.wikipedia.org/wiki/Imilchil (coordonnées et situation). Liens des nouvelles pages, syntaxe des données et présence des onze originaux et aperçus vérifiés.

La carte du Maroc et les liens « Explorer » entre villes affichent désormais uniquement les cinq destinations avec photos : Merzouga, Alnif, Agadir, Fès et Imilchil. Les pages des autres villes sont conservées pour un ajout de contenu ultérieur.

## Brésil

Le Brésil est une destination active sur la carte du monde, avec les mêmes sons et transitions que le Maroc. Sa carte locale présente Recife et Manaus. `galeries/bresil.html` affiche les informations du pays et relie les deux pages de villes. Les listes de photos et vidéos dans `galeries/city-content.js` (`bresil-recife`, `bresil-manaus`) sont prêtes à remplir. Ces deux villes ont été ajoutées explicitement avant réception des médias ; le Maroc conserve ses cinq villes avec photos.

Présentations : Visit Brasil, https://www.visitbrasil.com/location/recife/ et https://www.visitbrasil.com/en/location/manaus/. Coordonnées : GeoNames. Syntaxe JavaScript, liens des trois pages, positions des deux repères et conservation des cinq villes marocaines vérifiés.

## Informations des villes

Les quatorze pages de villes affichent uniquement Population, Région et Altitude. Les introductions descriptives visibles ont été retirées. Les valeurs et sources sont conservées dans `galeries/city-content.js`, champ `facts`, et les valeurs de population et altitude renvoient à leur source depuis la page. Les populations portent leur année et, si nécessaire, leur périmètre. Les altitudes sont des repères arrondis ou des plages locales, pas une altitude uniforme de toute la commune.

Recife et Manaus : recensement IBGE 2022 ; altitude du repère IBGE (table 1.1.1.2), arrondie à 5 m et 93 m. Merzouga : population affichée « Non confirmée », les sources consultées donnant des estimations contradictoires et non datées ; altitude indicative de 700 m. Alnif : centre urbain en 2014 ; Imilchil : commune en 2024. Les sources individuelles sont enregistrées dans les données. Les quatorze blocs à trois champs et la conservation des onze photos ont été vérifiés.

Les informations du pays sont placées avant la carte dans la page principale. Sur la carte locale, le clic sur une ville disposant d’une fiche (ou l’activation de son lien au clavier) affiche son nom, sa population, sa région et son altitude au-dessus de la carte. La sélection conserve son ouverture de galerie et son son. Le bouton « Vue du pays » réinitialise la fiche de ville.

## Finition texturée

Le dernier bloc de `style.css` applique une palette charbon légèrement teintée, une lumière diffuse en arrière-plan et des ombres discrètes aux cartes, photos, boutons et fiches. La texture SVG locale `assets/textures/charcoal-grain.svg` est répétée uniquement dans le fond du document : aucun grain ne recouvre les photographies. Elle est statique, sans téléchargement externe et sans animation continue. Conserver le dossier `assets/textures` à la publication. Les styles mobiles, le mode de contraste forcé et la réduction des mouvements sont pris en compte. Structure CSS, validité XML de la texture et partage de la feuille de style entre les pages vérifiés ; rendu visuel à contrôler dans le navigateur local.

### Vidéos du Brésil

Les quatre vidéos YouTube fournies sont regroupées dans la section VIDÉOS de `galeries/bresil.html`, dans leur ordre de réception. Leurs liens et titres sont configurés dans `galeries/gallery.js`, entrée `bresil`. Les titres et les villes ont été confirmés par l’auteur (voir la répartition ci-dessous). Les lecteurs réutilisent la présentation responsive et les liens vers YouTube existants. La lecture effective et l’autorisation d’intégration restent à vérifier sur un hébergement HTTP/HTTPS.

### Médias sous la carte

La sélection du pays affiche ses sections PHOTOS et VIDÉOS sous la carte. La sélection d’une ville filtre ces médias ; le bouton « Toutes les photos et vidéos du pays » rétablit le carnet complet. Le retour au monde ferme les lecteurs.

Répartition confirmée : Recife → Recife et Umbanda ; Manaus → Amazona ; São Luís → Brazil Nordeste. Les vidéos sont centralisées dans `galeries/city-content.js` et réunies automatiquement pour le carnet du Brésil. Les lecteurs YouTube intégrés permettent la lecture sur le site si les vidéos autorisent l’intégration.

Repère de São Luís : https://www.geodatos.net/en/coordinates/brazil/sao-luis ; projection dans le même repère que Recife et Manaus.

Vérification navigateur : affichage du carnet sous la carte, filtrage Recife (2), Manaus (1), São Luís (1), retour aux quatre films et fermeture au retour mondial validés. Le lecteur de Brazil Nordeste charge ses commandes et sa durée ; YouTube affiche « Cette vidéo n’est pas disponible » pour les trois autres films lors du test local.

### Lecture YouTube en développement

Utiliser `http://localhost:8000` pour l’aperçu (serveur : `python3 -m http.server 8000 --bind 127.0.0.1`). Les pages chargeant `gallery.js` redirigent automatiquement l’adresse `127.0.0.1` vers `localhost`, en conservant port, chemin, paramètres et ancre. Lors des essais, trois films étaient indisponibles avec l’adresse IP, alors que leurs lecteurs fonctionnaient avec le nom localhost. Les réglages Studio des quatre films autorisent déjà l’intégration et leur traitement HD est terminé.

YouTube choisit automatiquement la résolution. Son API ne permet plus d’imposer une qualité au démarrage ; le spectateur peut choisir la HD dans les paramètres du lecteur. Aucun faux paramètre de qualité forcée n’est ajouté. Documentation : https://developers.google.com/youtube/iframe_api_reference#Playback_quality

### Son d’entrée et navigateurs

Le son d’entrée tente de jouer dès l’ouverture et, si le navigateur le bloque, au premier clic, toucher ou appui clavier. Une commande de haut-parleur reste visible au centre au-dessus de la carte : barrée lorsque les sons du site sont coupés, normale lorsqu’ils sont activés. Le bouton active ou coupe les trois effets (entrée, survol, sélection), avec un survol jaune plus marqué. Une coupure volontaire reste respectée pendant la page et le son d’entrée ne se répète pas lors de la réactivation. Les lecteurs YouTube gardent leur propre volume.

Vérification Chrome : activation, coupure, état visuel et maintien de la coupure après un autre clic validés.

### Lecteur YouTube et erreur 153

Sur HTTP/HTTPS, cliquer sur la miniature charge une iframe YouTube avec l’origine réelle du site et la politique `strict-origin-when-cross-origin`. En ouverture directe (`file://`), la miniature ouvre la vidéo sur YouTube pour éviter un lecteur sans référent HTTP. Pour une lecture intégrée en local, utiliser **Ouvrir le site.command**. Le lien « Voir sur YouTube » reste disponible dans tous les cas. Si l’erreur 153 persiste sur HTTP/HTTPS, vérifier que le navigateur ou une extension ne supprime pas le référent.

Vérification du 27 septembre : syntaxe JavaScript et tests isolés des liens locaux, de la création des iframes, de l’arrêt du lecteur précédent et des miniatures de secours réussis. Lecture réelle YouTube non revalidée dans le navigateur durant cette modification.

### Direction éditoriale — essai du 27 septembre

L’accueil présente une grande photographie du Maroc, trois images sélectionnées, deux films du Brésil, puis la carte, la présentation et le preset. La recherche se trouve dans la section Destinations. `editorial.css` définit la typographie et les mises en page ordinateur/mobile pour l’accueil et les galeries, avec les palettes de `theme.css`. `editorial.js` réutilise le lecteur YouTube existant pour Recife et Amazona.

La version précédente des fichiers modifiés est conservée dans `backups/avant-editorial-20260927/`. Pour revenir à cette version, recopier son `index.html` et ses fichiers `galeries/*.html` aux emplacements d’origine ; ils ne chargeront plus `editorial.css` ni `editorial.js`. Les images originales restent inchangées. Le dossier de sauvegarde ne doit pas être publié avec le site.

Vérification : structure HTML, unicité des identifiants, ancres, chemins locaux, syntaxe JavaScript et initialisation des deux films contrôlées. Aperçu visuel non vérifié dans le navigateur : l’accès aux fichiers locaux y est bloqué.
