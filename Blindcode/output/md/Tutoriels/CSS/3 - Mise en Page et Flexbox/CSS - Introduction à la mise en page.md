---
Cours: CSS
Projet: Blindcode
Type: Cours
date: 2023-09-01
tags:
- cours
- blindcode
- css
- programmation
- frontend
---
   
# Header :   
   
Nous allons ici explorer les concepts de base de la mise en page [CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md). La mise en page CSS est essentielle pour organiser et structurer visuellement les éléments [HTML](../../../Tutoriels/HTML/HTML%20-%20Pr%C3%A9sentation%20et%20Utilit%C3%A9.md) sur une page web. À la fin de ce chapitre, vous serez en mesure de :   
   
1. Comprendre la boîte CSS : le modèle de boîte (box model).   
2. Appliquer des marges, des bordures et des rembourrages aux éléments.   
3. Utiliser la propriété `display` pour contrôler le type d'affichage des éléments.   
4. Maîtriser les propriétés `width` et `height` pour dimensionner les éléments.   
5. Créer des mises en page simples en utilisant `float` et `clear`.   
   
-------------------------------------------------------------------------------   
# Body   
   
## 1. Modèle de Boîte CSS (Box Model)   
   
### 1.1 Qu'est-ce que le Modèle de Boîte ?   
   
Le modèle de boîte CSS est la base de la mise en page CSS. Chaque [élément HTML](../../../Tutoriels/HTML/Autres%20Ressources/HTML%20-%20Les%20balises%20principales.md) est considéré comme une boîte rectangulaire ayant quatre composantes principales : le contenu, le rembourrage ([padding](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md#paddings-(`padding`))), la bordure ([border](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md#bordure-simple)), et la marge ([margin](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md#marges-(`margin`))).   
   
### 1.2 Propriétés du Modèle de Boîte   
   
   
- **Contenu (Content)** : C'est la partie interne de la boîte qui contient le texte ou les éléments.   
- **Rembourrage (Padding)** : C'est l'espace entre le contenu et la bordure. Vous pouvez définir la taille du rembourrage avec la propriété `padding`.   
- **Bordure (Border)** : C'est la ligne autour du contenu et du rembourrage. Vous pouvez définir la taille et le style de la bordure avec la propriété `border`.   
- **Marge (Margin)** : C'est l'espace entre la bordure de l'élément et les éléments adjacents. Vous pouvez définir la taille de la marge avec la propriété `margin`.   
   
## 2. Propriété `display`   
   
La propriété `display` vous permet de contrôler le type d'affichage d'un élément. Les valeurs courantes de `display` incluent `block`, `inline`, `inline-block`, `none`, et plus encore.   
   
   
- `block` : Les éléments s'affichent les uns en dessous des autres, prenant toute la largeur disponible.   
- `inline` : Les éléments s'affichent les uns à côté des autres, en ligne.   
- `inline-block` : Les éléments s'affichent en ligne, mais vous pouvez définir leur largeur et leur hauteur.   
- `none` : L'élément n'est pas affiché du tout (utile pour masquer temporairement des éléments).   
   
Plus d'info sur tout ceci dans la [documentation sur les display](../../../Tutoriels/CSS/Autres%20Ressources/CSS%20-%20Les%20principales%20valeurs%20de%20la%20propri%C3%A9t%C3%A9%20display.md) ainsi que dans le cours sur les [flexbox](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Flexbox%20-%20Introduction%20et%20utilisation.md)   
   
## 3. Propriétés `width` et `height`   
   
Les propriétés `width` et `height` permettent de définir la largeur et la hauteur des éléments. Vous pouvez spécifier les valeurs en pixels, en pourcentage, en em ou d'autres unités.   
   
Exemple :   
```css
/* Définir la largeur et la hauteur d'un élément */
div {
    width: 200px;
    height: 100px;
}
```
   
   
## 4. `float` et `clear`   
   
La propriété `float` permet de déplacer un élément vers la gauche ou la droite, le faisant flotter autour d'autres éléments. Cela est couramment utilisé pour créer des mises en page multi-colonnes.   
   
La propriété `clear` est utilisée pour forcer un élément à ne pas flotter à gauche ou à droite d'autres éléments flottants.   
   
Exemple :   
```css
/* Faire flotter un élément à gauche */
img {
    float: left;
}

/* Forcer un élément à ne pas flotter à gauche d'autres éléments flottants */
.clearfix {
    clear: both;
}
```
   
   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Exercices%20-%20Les%20pseudo-classes%20et%20les%20transitions.md)   
- [Suivant](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:20*