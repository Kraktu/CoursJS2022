---
Cours: CSS
Projet: Blindcode
Type: Cours
date: 2023-09-17
tags:
- cours
- blindcode
- documentation
- css
---
   
# Header :   
La propriété `display` contrôle le type d'affichage d'un élément. Chaque élément HTML a une valeur de `display` par défaut, mais vous pouvez la modifier pour changer son comportement visuel. Nous allons voir ici ces différentes valeurs   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## 1. `block`   
   
Lorsque vous définissez `display: block;` sur un élément, il s'affiche comme un bloc de texte autonome qui commence sur une nouvelle ligne et occupe toute la largeur disponible de son [conteneur](../../../Tutoriels/CSS/Autres%20Ressources/CSS%20-%20Le%20Conteneur%20et%20la%20Hi%C3%A9rarchie.md#qu'est-ce-qu'un-conteneur-en-css-?) parent. Les éléments de type "block" ignorent généralement les propriétés de largeur et de hauteur spécifiées, à moins qu'elles ne soient explicitement définies.   
   
Exemple :   
```css
div {
    display: block;
}
```
   
   
## 2. `inline`   
   
Lorsque vous définissez `display: inline;` sur un élément, il s'affiche en ligne avec le contenu adjacent. Les éléments en ligne ne commencent pas sur une nouvelle ligne et ne prennent que la largeur nécessaire pour afficher leur contenu. Cela signifie que vous pouvez placer plusieurs éléments en ligne côte à côte.   
   
Exemple :   
```css
span {
    display: inline;
}
```
   
   
## 3. `inline-block`   
   
La valeur `inline-block` est une combinaison des propriétés `inline` et `block`. Les éléments `inline-block` s'affichent en ligne, mais vous pouvez définir leur largeur, leur hauteur et d'autres propriétés de boîte, ce qui les rend plus flexibles que les éléments `inline` normaux.   
   
Exemple :   
```css
button {
    display: inline-block;
    width: 120px;
    height: 40px;
}
```
   
   
## 4. `none`   
   
Lorsque vous définissez `display: none;` sur un élément, il est complètement caché et ne prend pas de place dans la mise en page. Cela peut être utile pour masquer temporairement des éléments de la page.   
   
Exemple :   
```css
.hidden {
    display: none;
}
```
   
   
## 5. `table`, `table-row`, `table-cell`, etc.   
   
Il existe également des valeurs de `display` spécifiques à la création de mises en page en tableau, telles que `table`, `table-row`, `table-cell`, `table-header-group`, `table-footer-group`, etc. Ces valeurs sont utilisées pour créer des mises en page en tableau personnalisées en CSS.   
   
Exemple :   
```css
.table {
    display: table;
}
.table-row {
    display: table-row;
}
.table-cell {
    display: table-cell;
}
```
   
   
## 6. `grid`   
   
Pour résumer, la valeur `grid` de la propriété `display` est utilisée pour créer un [conteneur](../../../Tutoriels/CSS/Autres%20Ressources/CSS%20-%20Le%20Conteneur%20et%20la%20Hi%C3%A9rarchie.md#qu'est-ce-qu'un-conteneur-en-css-?) de [grille](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Utilisation%20de%20CSS%20Grid%20pour%20des%20mises%20en%20page%20plus%20avanc%C3%A9es.md) (grid container) qui organise ses éléments enfants dans une grille bidimensionnelle. Cela signifie que vous pouvez disposer des éléments dans des lignes et des colonnes, créant ainsi des mises en page complexes et bien structurées.   
   
Exemple :   
   
```css
.grid-container {
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: auto;
	gap: 10px; 
}
```
   
   
Dans cet exemple, le [conteneur](../../../Tutoriels/CSS/Autres%20Ressources/CSS%20-%20Le%20Conteneur%20et%20la%20Hi%C3%A9rarchie.md#qu'est-ce-qu'un-conteneur-en-css-?) de grille (`grid-container`) est configuré avec `display: grid;`. Les propriétés `grid-template-columns` et `grid-template-rows` définissent la structure de la grille, spécifiant le nombre de colonnes et de lignes et leur taille. La propriété `gap` définit l'espace entre les cellules de la grille.   
   
Les dispositions de grille sont particulièrement utiles pour créer des mises en page de type tableau, des grilles de produits, des galeries d'images, et bien plus encore. Elles offrent un contrôle précis sur la disposition des éléments sur la page, mais c'est bien plus complet et complexe que ça, nous abordons tout ceci dans le cours dans le [chapitre dédié aux grids](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Utilisation%20de%20CSS%20Grid%20pour%20des%20mises%20en%20page%20plus%20avanc%C3%A9es.md).   
   
Il existe moulte autres type de display, plus ou moins courant, mais de toute façon mon but n'est pas de tous les voir, vous avez ici ceux que j'utilise le plus souvent outre les [flexbox](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Flexbox%20-%20Introduction%20et%20utilisation.md). Si vous voulez en savoir plus, je vous invite à checker la doc en ligne tel que celle de [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/display)   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_documentation}` `{_obsidian_pattern_tag_css}`    
   
*créé le 2023-09-17 à 15:25*