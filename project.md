# Portfolio — ALLAN XAVIER AFFONSO

## Instruction à Cursor

Construis le site décrit ci-dessous dans ce dossier. Crée les fichiers et réalise une première version complète, fonctionnelle et responsive. Ne te limite pas à proposer un plan. Utilise HTML, CSS et JavaScript vanilla, sans Node.js, npm, framework, compilation, backend ni clé API. Le site doit fonctionner en ouvrant directement `index.html` dans un navigateur et pouvoir ensuite être hébergé comme site statique.

La priorité est une composition élégante, très sombre et photographique, dominée par une véritable carte SVG du monde. Ne remplace pas cette carte par une image, des rectangles, des silhouettes approximatives ou deux pays isolés. N'invente ni photographies de portfolio, ni liens personnels, ni galeries déjà disponibles.

## 1. Référence visuelle et direction artistique

La capture fournie montre un fond noir, une identité blanche en haut à gauche, des commandes centrales très discrètes, des icônes sociales à droite et une grande grille visuelle quasiment bord à bord. L'en-tête est séparé de la grille par une importante respiration noire. Utilise uniquement ces proportions et cette ambiance : ne copie ni le nom, ni les images, ni les contenus du site de référence.

Dans notre version, la carte remplace intégralement la grille. Aucun menu Films / Photos / About / Contact. Aucun grand titre supplémentaire, bannière marketing, carte de prestation ou section ajoutée.

Repères visuels à adapter, sans figer la page à la taille de la capture :

- Fond général noir `#030303`, sans texture ni dégradé coloré.
- Texte principal blanc cassé `#F2F2F2`, secondaire `#969696`.
- Pays ordinaires `#202020`, frontières `#414141`, pays disponibles au repos `#505050`.
- Pays actif éclairci autour de `#929292`, ombre noire et halo blanc très subtil.
- Police système sans serif : `Arial, Helvetica, sans-serif`, sans téléchargement obligatoire.
- Sur grand écran, marges latérales de 24 à 36 px, en-tête commençant vers 64 à 88 px du haut.
- Carte commençant approximativement entre 220 et 300 px du haut sur un grand écran ; réduire cet espace sur les écrans moins hauts.
- Carte occupant environ 94 à 98 % de la largeur disponible, sans panneau visible autour, avec des océans transparents sur le fond noir.
- Éviter les couleurs saturées, ombres massives, contours lumineux épais et effets 3D spectaculaires.

Centraliser les couleurs, espacements et durées dans des variables CSS pour faciliter les ajustements.

## 2. Arborescence

```text
portfolio/
├── project.md
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── world-map.source.svg
    └── map-LICENSE.txt
```

`world-map.source.svg` conserve la source géographique choisie. La version utilisée dans la page doit être intégrée directement dans `index.html` pour pouvoir cibler ses pays et fonctionner sans serveur. Documenter cette duplication dans le README. Ne pas charger le SVG ou les données par `fetch`, ne pas utiliser de modules JavaScript nécessitant un serveur.

Les futures galeries pourront être ajoutées dans `galeries/maroc.html` et `galeries/thailande.html`. Ne pas créer de liens cassés vers ces fichiers avant qu'ils existent.

## 3. index.html : structure et en-tête

Créer une page avec `lang="fr"`, encodage UTF-8, viewport mobile, titre `Allan Xavier Affonso — Photographer & Filmmaker` et une description courte du portfolio. Charger `style.css` puis `script.js` avec `defer`.

### Identité, à gauche

- Titre principal exact : **ALLAN XAVIER AFFONSO**.
- Sous-titre exact : **Photographer & Filmmaker**.
- Nom en capitales, graisse 700, environ 26 à 30 px sur desktop, interligne compact ; sous-titre 15 à 17 px, gris, légèrement italique comme l'esprit de la référence.
- Sur mobile, réduire le nom vers 19 à 22 px et autoriser un retour à la ligne propre si nécessaire.

### Recherche, au centre

- L'unique commande centrale est une recherche de pays.
- Largeur desktop environ 280 à 360 px, hauteur minimale 44 px.
- Champ minimaliste avec fond transparent ou presque noir, bordure inférieure discrète, petite loupe SVG et placeholder `Rechercher un pays…`.
- Ajouter un vrai label accessible, éventuellement masqué visuellement.
- Suggestions affichées dans un panneau noir sous le champ, au-dessus de la carte, sans déplacer le contenu.
- Bouton d'effacement accessible uniquement lorsque le champ contient du texte.
- Ne pas ajouter de menu de navigation.

Utiliser une grille d'en-tête à trois zones avec la recherche réellement centrée dans la page lorsque l'espace le permet. Passer à deux lignes avant que le nom, le champ et les icônes se chevauchent.

### Réseaux sociaux, à droite

- Seulement Instagram et YouTube, dans cet ordre, avec icônes SVG monochromes reconnaissables de 17 à 20 px.
- Zones cliquables de 44 × 44 px minimum, espacées et alignées.
- Liens ouvrant un nouvel onglet, avec `rel="noopener noreferrer"` et noms accessibles.
- Centraliser dans `script.js` ces URLs de démonstration, signalées par un commentaire `TODO : remplacer par les vrais profils` :

```js
const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/USERNAME/',
  youtube: 'https://www.youtube.com/@USERNAME'
};
```

- Ne pas présenter ces placeholders comme les comptes réels de l'auteur.

## 4. Carte SVG du monde

Choisir une carte SVG géographique sous licence autorisant la réutilisation. Vérifier sa source et sa licence avant intégration, enregistrer le lien exact, l'auteur et les obligations d'attribution dans `assets/map-LICENSE.txt`. Respecter toute attribution visible requise. Ne pas reprendre les ressources du site de référence.

Exiger les propriétés suivantes :

- Monde entier reconnaissable, proportions cohérentes, projection plane sobre, `viewBox` valide et `preserveAspectRatio="xMidYMid meet"`.
- Chaque pays possède un identifiant stable, de préférence ISO alpha-2 en majuscules, partagé entre données et SVG : `MA` pour Maroc, `TH` pour Thaïlande.
- Chaque pays peut contenir plusieurs tracés : les regrouper dans un `<g data-country-code="XX">` pour traiter ensemble îles et parties disjointes.
- Ne pas fusionner les pays en un seul tracé. Préserver les frontières et le découpage du jeu de données choisi, y compris les territoires distincts ; ne pas modifier silencieusement les limites géographiques.
- Frontières fines et discrètes, avec `vector-effect="non-scaling-stroke"` si nécessaire.
- Carte fluide en largeur, ratio naturel conservé, sans étirement ni rognage initial.
- Aucun nom permanent sur tous les pays : afficher le nom du pays survolé, focalisé ou sélectionné dans une petite étiquette.

Les petits États absents ou invisibles à cette échelle doivent rester trouvables. Compléter leurs données avec des coordonnées dans le repère SVG et utiliser, à la sélection seulement, un marqueur discret avec leur nom. Ne pas fabriquer de forme géographique. Énumérer ces exceptions dans le README.

### Maroc et Thaïlande : effet de relief

Seuls le Maroc et la Thaïlande ont une interaction permanente de portfolio sur la carte au repos. Ils restent légèrement plus clairs que les autres pays, sans couleurs criardes.

Au survol avec une souris ou au focus clavier :

1. Le curseur devient `pointer`.
2. La forme du pays s'éclaircit.
3. Elle s'élève subtilement : déplacement visuel de 2 à 4 px vers le haut et agrandissement d'environ 1,03 à 1,06 autour de son propre centre.
4. Une ombre douce et un halo gris/blanc très léger rendent le relief lisible.
5. Une étiquette affiche `Maroc` ou `Thaïlande`.
6. Entrée et sortie prennent environ 200 à 280 ms, avec une transition fluide.

L'effet doit porter sur la silhouette réelle, pas sur une boîte entourant le pays. Une élévation simulée en 2D suffit. Préserver une zone de détection stable pour éviter le clignotement quand le pays se déplace. Une solution simple consiste à garder la forme d'origine comme cible et à dessiner une copie visuelle dans un groupe de surbrillance au-dessus de la carte, avec `pointer-events="none"` et sans dupliquer les identifiants SVG. Les formes voisines ne doivent pas recouvrir le pays en relief ; les filtres ne doivent pas être coupés.

Ne pas animer la carte entière à chaque survol. Respecter `prefers-reduced-motion` : conserver l'éclaircissement mais supprimer les déplacements et animations de zoom.

### Clic et futures galeries

Prévoir une fonction unique `openCountry(code)` appelée depuis la carte, le clavier et les résultats de recherche.

- Pour le Maroc et la Thaïlande, un clic ou une activation clavier sélectionne le pays et ouvre un petit panneau sous la carte avec son nom et son état.
- Aucun contenu réel n'étant fourni, afficher initialement `Coming soon` et `La galerie sera bientôt disponible.`.
- Prévoir une propriété `galleryUrl: null`. Dès qu'une URL réelle est configurée, le panneau affiche un lien `Voir la galerie` vers cette URL.
- Séparer la notion de pays interactif (`featured`) de la disponibilité effective de sa galerie (`galleryUrl`).
- Pour les autres pays trouvés par recherche, afficher aussi le nom et l'état `Coming soon`, sans lien vide ou navigation vers `#`.
- Prévoir un bouton pour fermer le panneau. Ne pas ouvrir automatiquement une nouvelle page lors de la simple saisie d'une lettre.

## 5. Recherche complète des pays

Inclure une liste locale complète des pays avec noms français, codes stables et correspondances SVG. Ne pas limiter les suggestions aux deux destinations interactives ou aux seuls pays visibles dans le SVG. Documenter dans le README le référentiel utilisé et le traitement des territoires ; contrôler l'exhaustivité par rapport à ce référentiel.

Structure de données indicative dans `script.js` :

```js
const countries = [
  { code: 'MA', name: 'Maroc', aliases: ['Morocco'], featured: true, galleryUrl: null },
  { code: 'TH', name: 'Thaïlande', aliases: ['Thailande', 'Thailand'], featured: true, galleryUrl: null }
  // Compléter avec TOUS les autres pays, featured: false et galleryUrl: null.
];
```

Pour les exceptions sans tracé, ajouter une position dans le repère de la carte. Le fragment ci-dessus décrit le format ; ce n'est pas une liste suffisante pour la livraison.

### Filtrage et tri

- Réagir à chaque événement `input`, immédiatement dès le premier caractère non blanc, sans requête réseau.
- Ignorer la casse, les accents, les espaces superflus et normaliser les apostrophes/tirets pour la comparaison.
- Filtrer par **préfixe** sur le nom français normalisé et sur les alias : `m` trouve notamment Madagascar, Malaisie, Maroc, etc. ; `tha`, `Thailande` et `Thaïlande` trouvent Thaïlande.
- Les alias anglais sont acceptés, mais les résultats affichent toujours le nom français.
- Trier les résultats par nom français avec `Intl.Collator('fr', { sensitivity: 'base' })` ; ne pas favoriser les pays avec galerie.
- Chaque pays n'apparaît qu'une seule fois, même si plusieurs alias correspondent.
- Champ vide : fermer les suggestions, sans afficher toute la liste.
- Limiter la hauteur du panneau à environ 280 px avec défilement ; conserver tous les résultats filtrés accessibles.
- Aucun résultat : afficher `Aucun pays trouvé`.
- Signaler discrètement `Coming soon` pour les pays sans galerie, sans désactiver leur sélection.

### Sélection et centrage

- Un clic sur une suggestion ou Entrée sur l'option active renseigne le champ, ferme les suggestions, sélectionne le pays et ouvre son panneau.
- Surligner le pays choisi, même s'il n'est pas Maroc ou Thaïlande. Les autres pays restent discrets en dehors de cet état temporaire.
- Pour Maroc et Thaïlande, centrer clairement la vue sur le pays avec une transition douce et un zoom modéré, plafonné à environ 2,5×. Conserver du contexte géographique autour.
- Utiliser les limites géométriques du pays dans le SVG (`getBBox`) pour calculer le centre et un `viewBox` cible ; ne pas coder des positions en pixels d'écran.
- Pour les pays très étendus ou en plusieurs parties, privilégier une vue géographique compréhensible ; utiliser une cible documentée si leurs limites couvrent artificiellement presque toute la carte.
- Si aucun tracé n'existe, centrer sur le marqueur de repli et conserver l'état `Coming soon`.
- Afficher un petit bouton `Vue mondiale` après sélection pour restaurer le `viewBox` initial, enlever la sélection et fermer le panneau. Il ne fait pas partie d'un menu d'en-tête.
- L'effacement du champ restaure aussi la vue mondiale. Une nouvelle sélection remplace proprement la précédente et interrompt une animation en cours.

### Clavier et accessibilité

- Implémenter un champ de type combobox avec `aria-expanded`, `aria-controls`, `aria-autocomplete="list"` et `aria-activedescendant` quand une option est active.
- Suggestions avec rôles `listbox` et `option`, identifiants uniques et état sélectionné cohérent.
- Flèches haut/bas : parcourir les suggestions ; Entrée : choisir ; Échap : fermer ; Tab : poursuivre la navigation normalement.
- Conserver le focus dans le champ pendant le parcours des suggestions et garder l'option active visible dans la liste.
- Fermer les suggestions après clic extérieur sans empêcher la sélection d'une option.
- Maroc et Thaïlande accessibles au clavier avec nom accessible, focus visible et activation Entrée/Espace ; éviter des centaines d'arrêts Tab pour tous les pays ordinaires.
- Donner au SVG un titre et une description, tout en gardant ses éléments interactifs accessibles ; ne pas masquer les contrôles internes aux technologies d'assistance.
- Annoncer la sélection et l'état du panneau via une zone `aria-live="polite"`. Utiliser `textContent` pour injecter le texte recherché ou les noms.

## 6. Responsive et tactile

- Desktop, à partir d'environ 1100 px : trois zones sur une seule ligne, recherche au centre, carte presque bord à bord, grande respiration verticale.
- Tablette : identité et réseaux sur la première ligne, recherche centrée sur une deuxième ligne dès que nécessaire.
- Mobile, sous environ 600 px : marges de 16 px, identité à gauche et réseaux à droite, recherche pleine largeur en dessous, espace avant la carte ramené à 40–64 px.
- Afficher initialement toute la carte sans défilement horizontal de la page. Sur mobile, accepter une carte moins haute plutôt que déformer la géographie.
- Le champ de recherche reste le moyen fiable de choisir les petits pays. Prévoir des zones de toucher élargies et transparentes pour Maroc et Thaïlande si nécessaire, sans modifier leurs silhouettes ni bloquer les autres contrôles.
- Le toucher sélectionne directement le pays et affiche le même panneau ; aucune action ne doit dépendre exclusivement du survol ou exiger un double tap.
- Taille de police du champ au moins 16 px sur mobile, commandes faciles à toucher, panneau de suggestions contenu dans la largeur disponible.
- Le panneau pays se place sous la carte, sans masquer la recherche ; autoriser le défilement vertical naturel.

## 7. Répartition du travail dans les fichiers

### index.html

Écrire la structure sémantique complète : en-tête, identité, recherche et suggestions, liens sociaux, contenu principal, SVG inline, bouton de retour à la vue mondiale et panneau de pays. Inclure un message `noscript` expliquant que JavaScript est nécessaire pour la recherche et les interactions. Aucun texte ni asset provenant du portfolio de référence.

### style.css

Définir variables, styles de base, composition de l'en-tête, champ et suggestions, carte et états (`featured`, survol/focus, sélection), relief, panneau et breakpoints. Ajouter les états `:focus-visible`, les règles tactiles et `prefers-reduced-motion`. Éviter les dimensions fixes qui provoquent un débordement. La recherche doit rester au-dessus des effets de carte.

### script.js

Organiser le code en fonctions lisibles, sans dépendances :

- Configuration sociale et tableau complet des pays.
- Normalisation des chaînes, filtrage, tri et rendu des suggestions.
- Gestion de l'option active, du clavier et de la fermeture.
- Correspondance entre codes et groupes SVG, contrôle des données manquantes.
- Surbrillance/relief, sélection et panneau via `openCountry(code)`.
- Centrage, animation éventuelle du `viewBox` et retour à la vue mondiale.
- Gestion cohérente des clics, du toucher, du focus et de la réduction des animations.

Conserver un état simple : texte saisi, options filtrées, index actif, code sélectionné et vue mondiale initiale. Séparer survol temporaire et sélection persistante : quitter un pays avec la souris ne doit pas effacer une sélection faite par recherche. Ne pas ajouter de stockage, d'analytics ou de services externes.

### README.md

Expliquer en quelques lignes comment ouvrir `index.html`, remplacer les URLs sociales, modifier les couleurs, configurer une galerie et ajouter une destination interactive. Indiquer la source/licence de la carte, le référentiel des pays et les éventuelles exceptions géographiques. Décrire les vérifications réellement effectuées et les limites restantes, sans déclarer un test réussi s'il n'a pas été exécuté.

## 8. Critères de validation avant livraison

1. Ouvrir `index.html` directement : styles, carte, recherche et interactions fonctionnent, sans serveur ni erreur de chargement.
2. Vérifier le nom et le sous-titre exacts, l'absence de menu et la présence exclusive des deux réseaux demandés.
3. Vérifier que la carte représente le monde entier avec pays distincts et n'est pas une image aplatie.
4. Survoler Maroc et Thaïlande : relief de leurs silhouettes, curseur pointer, étiquette lisible, absence de clignotement et retour fluide à l'état normal.
5. Taper `m` : résultats immédiats, filtrés par préfixe et triés alphabétiquement. Vérifier `tha`, `Thailande`, `THAÏLANDE`, `Maroc` et un texte inexistant.
6. Rechercher plusieurs pays hors Maroc/Thaïlande, dont un petit État : tous doivent être trouvables et afficher `Coming soon` en l'absence de galerie.
7. Sélectionner Maroc et Thaïlande depuis la recherche : surbrillance, centrage et zoom modéré corrects ; `Vue mondiale` restaure la vue initiale.
8. Tester clavier seul : focus visible, suggestions navigables, Entrée/Espace sur les pays interactifs et Échap pour fermer la liste.
9. Tester au minimum 1440 px, 1024 px et 390 px de large, puis une largeur étroite de 320 px : pas de chevauchement ni défilement horizontal de page.
10. Tester le toucher et la préférence de réduction des animations. Vérifier que toutes les actions restent possibles sans survol.
11. Vérifier les URLs sociales configurables, l'absence de liens de galerie cassés et la documentation de la licence cartographique.

Livrer les fichiers effectivement créés et indiquer simplement comment lancer la page. La première version doit déjà démontrer l'ensemble des interactions, même si les galeries restent en attente de contenu.
