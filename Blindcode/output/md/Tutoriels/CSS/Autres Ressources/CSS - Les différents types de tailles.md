---
Cours: CSS
Projet: Blindcode
Type: Cours
date: 2023-09-12
tags:
- cours
- blindcode
- untagged
- todo
---
   
# Header :   
   
Cette petite fiche reprendra les différents moyens de donner la tailles des [propriété CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Syntaxe%20de%20base.md#propriétés-css-de-base).   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## 1. Pixels (px)   
   
   
- **Unité :** px   
- **Exemple :** `font-size: 16px;`   
   
Les pixels (px) sont une unité de taille absolue, ce qui signifie qu'un pixel correspond à une unité de mesure fixe sur l'écran de l'utilisateur. Les tailles en pixels sont généralement utilisées pour des éléments dont la taille doit être précise et constante, comme les images ou les éléments d'interface utilisateur.   
   
## 2. Pourcentage (%)   
   
   
- **Unité :** %   
- **Exemple :** `width: 50%;`   
   
Les pourcentages (%) sont une unité de mesure relative par rapport à la taille de l'élément parent. Par exemple, si vous définissez la largeur d'un élément à 50%, il occupera la moitié de la largeur de son conteneur parent. Les pourcentages sont souvent utilisés pour créer des mises en page responsives.   
   
## 3. Points (pt)   
   
   
- **Unité :** pt   
- **Exemple :** `font-size: 12pt;`   
   
Les points (pt) sont une unité de taille relative couramment utilisée dans l'impression. Un point équivaut à environ 1/72e de pouce. Bien que les points soient principalement utilisés pour l'impression, ils peuvent également être utilisés en [CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md) pour définir la taille de la police.   
   
## 4. Em (em)   
   
   
- **Unité :** em   
- **Exemple :** `line-height: 1.5em;`   
   
L'unité em (em) est une unité de mesure relative par rapport à la taille de la police de l'élément parent. Par exemple, si la taille de la police de l'élément parent est de 16px, alors 1em équivaut à 16px. Les ems sont utiles pour créer des mises en page flexibles et scalables.   
   
## 5. Rem (rem)   
   
   
- **Unité :** rem   
- **Exemple :** `margin: 1rem;`   
   
L'unité rem (rem) est similaire à l'unité em, mais elle est basée sur la taille de la police de l'élément racine (généralement la balise `<html>`). Cela signifie que toutes les valeurs rem sont relatives à la taille de la police de l'élément racine, ce qui les rend particulièrement utiles pour créer des mises en page cohérentes.   
   
## 6. Viewport Height (vh) et Viewport Width (vw)   
   
   
- **Unités :** vh (viewport height) et vw (viewport width)   
- **Exemple :** `height: 50vh;`   
   
Les unités vh et vw sont relatives à la taille de la fenêtre du navigateur (viewport). 1vh équivaut à 1% de la hauteur de la fenêtre, et 1vw équivaut à 1% de la largeur de la fenêtre. Ces unités sont couramment utilisées pour créer des mises en page adaptatives en fonction de la taille de l'écran.   
   
En utilisant ces différentes unités de taille en CSS, vous pouvez créer des mises en page flexibles et adaptables à différentes résolutions d'écran, tout en conservant le contrôle précis sur la taille de certains éléments lorsque cela est nécessaire. Choisir la bonne unité dépendra de vos besoins spécifiques sur le projet sur lequel vous travaillez.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_untagged}` `{_obsidian_pattern_tag_todo}`   
   
*créé le 2023-09-12 à 15:53*