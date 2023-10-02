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
   
Explorons davantage l'utilisation de [margins](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md#marges-(`margin`)), de [paddings](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md#paddings-(`padding`)) et de [bordures](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md#bordures-(`border`)) en [CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md). Ces [propriétés](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Syntaxe%20de%20base.md#propriétés-css-de-base) sont essentielles pour ajuster la [mise en page](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Introduction%20%C3%A0%20la%20mise%20en%20page.md) et la présentation des éléments sur une page web.   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Marges (`margin`)   
   
La [propriétés](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Syntaxe%20de%20base.md#propriétés-css-de-base) `margin` est utilisée pour définir l'espace entre les [bordures](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md#bordures-(`border`)) d'un [élément](../../../Tutoriels/HTML/Autres%20Ressources/HTML%20-%20Les%20balises%20principales.md) et les éléments adjacents. Elle peut être appliquée à tous les côtés d'un élément (haut, droite, bas, gauche) ou à des côtés spécifiques individuellement. Voici comment cela fonctionne :   
   
### Marges sur tous les côtés :   
```css
/* Applique une marge de 20 pixels sur tous les côtés de l'élément */
div {
    margin: 20px;
}
```
   
   
### Marges sur des côtés individuels :   
```css
/* Applique une marge de 10 pixels en haut, 20 pixels à droite, 30 pixels en bas, 40 pixels à gauche */
div {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}
```
   
   
L'utilisation de marges est courante pour espacer des éléments les uns des autres ou pour créer de l'espace autour d'un élément par rapport à son [conteneur](../../../Tutoriels/CSS/Autres%20Ressources/CSS%20-%20Le%20Conteneur%20et%20la%20Hi%C3%A9rarchie.md#qu'est-ce-qu'un-conteneur-en-css-?).   
   
## Paddings (`padding`)   
   
La propriété `padding` est utilisée pour définir l'espace entre le contenu d'un élément et sa bordure. Comme les marges, elle peut être appliquée à tous les côtés ou à des côtés spécifiques. Voici comment l'utiliser :   
   
### Padding sur tous les côtés :   
```css
/* Applique un padding de 15 pixels sur tous les côtés de l'élément */
div {
    padding: 15px;
}
```
   
   
### Padding sur des côtés individuels :   
```css
/* Applique un padding de 10 pixels en haut, 20 pixels à droite, 30 pixels en bas, 40 pixels à gauche */
div {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```
   
   
Le padding est souvent utilisé pour ajouter de l'espace à l'intérieur d'un élément, créant ainsi de l'espace autour du contenu.   
   
## Bordures (`border`)   
   
La propriété `border` est utilisée pour définir la bordure d'un élément. Elle est généralement utilisée en conjonction avec d'autres propriétés pour spécifier la largeur, le style et la couleur de la bordure. Voici comment l'utiliser :   
   
### Bordure simple :   
```css
/* Applique une bordure de 1 pixel de large, de style solide (solid), de couleur noire */
div {
    border: 1px solid #000;
}
```
   
   
### Bordure avec des propriétés individuelles :   
```css
/* Applique une bordure de 2 pixels de large, de style en pointillés (dotted), de couleur rouge uniquement sur le côté gauche */
div {
    border-width: 0 0 0 2px;
    border-style: dotted;
    border-color: red;
}
```
   
   
Les bordures sont couramment utilisées pour encadrer des éléments, créer des boîtes d'informations et ajouter des éléments décoratifs à la mise en page.   
   
En comprenant comment utiliser marges, paddings et bordures de manière appropriée, vous pouvez créer des mises en page bien espacées et attrayantes pour vos pages web. N'hésitez pas à expérimenter avec ces propriétés pour obtenir les résultats souhaités dans vos projets CSS.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Introduction%20%C3%A0%20la%20mise%20en%20page.md)   
- [Suivant](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Le%20Positionnement.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:20*