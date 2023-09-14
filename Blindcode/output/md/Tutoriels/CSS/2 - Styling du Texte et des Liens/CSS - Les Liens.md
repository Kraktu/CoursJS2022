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
   
Les liens hypertextes (ou simplement les liens) sont essentiels pour la navigation web, et en utilisant [CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md), vous pouvez personnaliser leur apparence pour les rendre attrayants et informatifs.   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Stylisation des Liens Hypertextes   
   
Les liens hypertextes peuvent être stylisés en CSS en utilisant différentes [propriétés](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Syntaxe%20de%20base.md#propriétés-css-de-base) pour définir leur couleur, leur texte décoratif, leur comportement au survol, etc. Voici quelques-unes des propriétés CSS couramment utilisées pour styliser les liens :   
   
### 1. Couleur (`color`)   
   
Comme pour [les textes](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Styling%20du%20texte%20-%20Police%2C%20taille%2C%20espacement%2C%20alignement.md#5.-couleur-du-texte-(`color`)), la propriété `color` définit la couleur du texte du lien lorsque le lien est dans son état normal. Vous pouvez spécifier une couleur par nom (comme "blue" ou "red") ou en utilisant des codes hexadécimaux ou RGB.   
   
Exemple :   
```css
a {
    color: blue; /* Définit la couleur du texte du lien en bleu */
}
```
   
   
### 2. Texte Décoratif (`text-decoration`)   
   
La propriété `text-decoration` permet de contrôler les décorations du texte, telles que les soulignements, les lignes en surbrillance, etc. Vous pouvez utiliser cette propriété pour supprimer les soulignements par défaut des liens.   
   
Exemple :   
```css
a {
    text-decoration: none; /* Supprime le soulignement des liens */
}
```
   
   
### 3. Comportement au Survol (`:hover`)   
   
Le pseudo-élément `:hover` permet de spécifier le style des liens lorsqu'ils sont survolés par la souris. Cela peut inclure un changement de couleur, un soulignement ou toute autre propriété de style.   
   
Exemple :   
```css
a:hover {
    color: red; /* Change la couleur du texte du lien en rouge au survol */
}
```
   
   
### 4. Comportement au Clic (`:active`)   
   
Le pseudo-élément `:active` définit le style des liens lorsqu'ils sont activés, généralement lors du clic de l'utilisateur. Vous pouvez également personnaliser le style de cet état.   
   
Exemple :   
```css
a:active {
    background-color: yellow; /* Change la couleur de fond du lien en jaune lorsqu'il est cliqué */
}
```
   
   
### 5. Visited (`:visited`)   
   
Le pseudo-élément `:visited` permet de spécifier le style des liens déjà visités par l'utilisateur. Cela peut être utile pour différencier les liens visités des liens non visités.   
   
Exemple :   
```css
a:visited {
    color: purple; /* Définit la couleur du texte du lien en violet pour les liens visités */
}
```
   
   
## Utilisation de Classes et d'ID   
   
En plus de styliser tous les liens de la même manière, vous pouvez utiliser des classes ou des ID pour cibler des liens spécifiques ou des groupes de liens. Cela vous permet d'appliquer des styles différents à des liens particuliers sur une même page.   
   
Exemple avec une classe :   
```html
<a href="#" class="special-link">Lien Spécial</a>
```
   
   
```css
.special-link {
    color: green; /* Applique un style spécial au lien avec la classe "special-link" */
}
```
   
   
Exemple avec un ID :   
```html
<a href="#" id="important-link">Lien Important</a>
```
   
   
```css
#important-link {
    font-weight: bold; /* Applique un style gras au lien avec l'ID "important-link" */
}
```
   
   
Cette méthode marche pour tout ce que nous voyons au cours, et n'est pas spécifique aux liens, mais il me semble que c'est le bon moment pour vous en parler.   
## Pseudo-classes Additionnelles   
   
Outre les pseudo-classes `:hover`, `:active`, et `:visited`, il existe d'autres pseudo-classes CSS que vous pouvez utiliser pour cibler des états spécifiques des liens, tels que `:focus` pour les liens actuellement en focus ou `:not()` pour exclure certains liens de la stylisation. Nous verrons tout ça en détail un peu plus loin.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Styling%20du%20texte%20-%20Police%2C%20taille%2C%20espacement%2C%20alignement.md)   
- [Suivant](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Exercices%20-%20Mise%20en%20forme%20du%20texte%20et%20des%20liens.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:19*