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
   
Ce cours abordera les manières les plus basique de manipuler du texte en CSS. Souvent elles seront couplées à d'autres choses, comme le [positionnement de l'élément parent](/not_created.md), mais nous en apprendront plus, plus tard !   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## 1. Police de caractères (`font-family`)   
   
La [propriété](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Syntaxe%20de%20base.md#propriétés-css-de-base) [CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md) `font-family` vous permet de spécifier la police de caractères à utiliser pour le texte d'un élément [HTML](../../../Tutoriels/HTML/HTML%20-%20Pr%C3%A9sentation%20et%20Utilit%C3%A9.md). Vous pouvez inclure plusieurs polices de caractères dans votre liste, de sorte que si la première n'est pas disponible sur l'ordinateur de l'utilisateur, la suivante sera utilisée.   
   
Exemple :   
```css
body {
    font-family: "Arial", sans-serif;
}
```
   
   
## 2. Taille de police (`font-size`)   
   
La propriété CSS `font-size` définit la taille de la police du texte. Vous pouvez spécifier la taille en pixels (`px`), en pourcentage (`%`), en points (`pt`), en ems (`em`), etc. Si vous voulez plus d'info, je vous invite à lire la [doc sur les tailles](../../../Tutoriels/CSS/Autres%20Ressources/CSS%20-%20Les%20diff%C3%A9rents%20types%20de%20tailles.md).   
   
Exemple :   
```css
h1 {
    font-size: 36px;
}
```
   
   
## 3. Espacement des lignes (`line-height`)   
   
La propriété CSS `line-height` contrôle l'espacement entre les lignes de texte dans un élément. Vous pouvez utiliser une valeur unitaire ou un nombre sans unité pour définir l'espacement.   
   
Exemple :   
```css
p {
    line-height: 1.5; /* 1.5 fois l'espace normal */
}
```
   
   
## 4. Alignement du texte (`text-align`)   
   
La propriété CSS `text-align` détermine comment le texte est aligné horizontalement à l'intérieur d'un élément. Vous pouvez choisir parmi les valeurs `left` (gauche), `right` (droite), `center` (centre), ou `justify` (justifié).   
   
Exemple :   
```css
p {
    text-align: center;
}
```
   
   
## 5. Couleur du texte (`color`)   
   
La propriété CSS `color` détermine la couleur du texte. Vous pouvez spécifier la couleur en utilisant des noms de couleur (comme "red", "blue", etc.) ou en utilisant des codes hexadécimaux ou RGB.   
   
Exemple :   
```css
p {
    color: #333; /* Couleur de texte en hexadécimal */
}
```
   
   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/HTML/HTML%20-%20Exercices%20-%20Ajout%20d%27attributs%20alt%20et%20de%20balises%20s%C3%A9mantiques.md)   
- [Suivant](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Les%20Liens.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:18*