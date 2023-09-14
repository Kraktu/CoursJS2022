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
   
   
-------------------------------------------------------------------------------   
# Body   
   
Bien sûr, voici les points du cours pour l'utilisation des différentes pseudo-classes CSS appliquées uniquement aux liens (`<a>`) :   
   
## Pseudo-Classes pour les Liens (`<a>`)   
   
Les pseudo-classes pour les liens sont des sélecteurs CSS spéciaux qui permettent de définir des styles spécifiques pour les liens dans différentes situations, améliorant ainsi l'expérience de l'utilisateur lors de la navigation.   
   
### 1. `:hover`   
   
La pseudo-classe `:hover` est activée lorsque l'utilisateur survole un lien avec la souris. Cela permet de créer des effets visuels interactifs lorsqu'un lien est survolé.   
   
Exemple :   
```css
/* Changement de couleur lorsque le lien est survolé */
a:hover {
    color: red;
    text-decoration: underline;
}
```
   
   
Dans cet exemple, lorsque l'utilisateur survole un lien, le texte du lien devient rouge et un soulignement est ajouté.   
   
### 2. `:focus`   
   
La pseudo-classe `:focus` est activée lorsque le lien est sélectionné avec le clavier (par exemple, en utilisant la touche Tab pour naviguer à travers les liens). Cela améliore l'accessibilité en indiquant clairement quel lien est actuellement sélectionné.   
   
Exemple :   
```css
/* Style pour les liens lorsqu'ils sont en focus au clavier */
a:focus {
    outline: 2px solid blue;
}
```
   
   
Dans cet exemple, lorsque l'utilisateur sélectionne un lien avec le clavier, une bordure bleue de 2 pixels est affichée autour du lien pour indiquer qu'il est en focus.   
   
### 3. `:active`   
   
La pseudo-classe `:active` est activée lorsque l'utilisateur clique sur un lien. Elle est souvent utilisée pour créer un effet visuel momentané lorsqu'un élément est en cours de clic.   
   
Exemple :   
```css
/* Style pour les liens lorsqu'ils sont activés (clic) */
a:active {
    color: orange;
}
```
   
   
Dans cet exemple, le texte du lien devient orange lorsque l'utilisateur clique dessus.   
   
### 4. `:visited`   
   
La pseudo-classe `:visited` permet de cibler les liens déjà visités par l'utilisateur. Cela peut être utile pour afficher différemment les liens déjà consultés par rapport aux liens non visités.   
   
Exemple :   
```css
/* Style pour les liens déjà visités */
a:visited {
    color: purple;
}
```
   
   
Dans cet exemple, les liens visités affichent une couleur violette.   
   
### 5. `:nth-child()`   
   
La pseudo-classe `:nth-child()` permet de cibler un lien en fonction de sa position parmi les enfants de son parent. Elle est souvent utilisée pour créer des mises en page dynamiques.   
   
Exemple :   
```css
/* Style pour chaque deuxième lien dans une liste */
ul a:nth-child(2n) {
    background-color: #f0f0f0;
}
```
   
   
Dans cet exemple, chaque deuxième lien dans une liste sera coloré en gris clair.   
   
### 6. `:not()`   
   
La pseudo-classe `:not()` permet d'exclure des liens spécifiques de la sélection. Elle est utile lorsque vous souhaitez styliser tous les liens, sauf certains.   
   
Exemple :   
```css
/* Style pour tous les liens, sauf ceux avec la classe "external" */
a:not(.external) {
    text-decoration: underline;
}
```
   
   
Dans cet exemple, tous les liens, à l'exception de ceux avec la classe "external," auront un soulignement.   
   
### 7. `:first-child`   
   
La pseudo-classe `:first-child` cible le premier enfant d'un élément parent. Vous pouvez l'utiliser pour appliquer un style spécifique au premier lien parmi les enfants d'un conteneur.   
   
Exemple :   
```css
/* Style pour le premier lien parmi les enfants d'une liste */
ul a:first-child {
    font-weight: bold;
}
```
   
   
Dans cet exemple, le premier lien à l'intérieur d'une liste sera mis en gras.   
   
### 8. `:last-child`   
   
La pseudo-classe `:last-child` cible le dernier enfant d'un élément parent. Vous pouvez l'utiliser pour appliquer un style spécifique au dernier lien parmi les enfants d'un conteneur.   
   
Exemple :   
```css
/* Style pour le dernier lien parmi les enfants d'une liste */
ul a:last-child {
    margin-bottom: 0;
}
```
   
   
Dans cet exemple, le dernier lien à l'intérieur d'une liste n'aura pas de marge inférieure.   
   
Ici, nous utilisons toutes ces pseudos classes sur des liens, car ce sont en général les éléments interactifs les plus basique avec lesquels on joue. En effet, vous pourriez utiliser certaines de ces pseudos classes sur d'autres éléments, mais il se peut que ça soit perturbant pour vos utilisateurs. Pour le coup, je ne suis pas WebDesigner donc je vous laisse un peu bidouiller avec tout ça sur d'autres éléments, vous pouvez vous amuser à zoomer sur un `<p>` au survol par exemple !   
   
## Quelques autres pseudo-classes bonus...   
   
Les pseudo-classes que nous avons couvertes jusqu'à présent sont parmi les plus couramment utilisées lors de la stylisation des liens. Cependant, il existe quelques autres pseudo-classes moins courantes qui peuvent être utiles dans des cas spécifiques, bien que leur utilisation soit moins répandue. Voici quelques-unes de ces pseudo-classes supplémentaires :   
   
### 9. `:empty`   
   
La pseudo-classe `:empty` permet de cibler des éléments HTML qui sont complètement vides, c'est-à-dire ceux qui n'ont pas de contenu textuel ni d'enfants.   
   
Exemple :   
```css
/* Style pour les liens vides */
a:empty {
    color: gray;
}
```
   
   
### 10. `:target`   
   
La pseudo-classe `:target` est utilisée pour cibler un élément spécifique qui est actuellement la cible d'un lien d'ancrage (ancre) dans l'URL. Elle est souvent utilisée pour créer des effets de mise en évidence pour les éléments ciblés.   
   
Exemple :   
```css
/* Style pour l'élément avec l'ID correspondant à la cible de l'ancre actuelle */
#section2:target {
    background-color: yellow;
}
```
   
   
### 11. `:enabled` et `:disabled`   
   
Ces pseudo-classes sont utilisées pour cibler des éléments de formulaire qui sont activés ou désactivés.   
   
Exemple :   
```css
/* Style pour les liens désactivés */
a:disabled {
    color: gray;
}
```
   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Exercices%20-%20Mise%20en%20forme%20du%20texte%20et%20des%20liens.md)   
- [Suivant](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Utilisation%20des%20transitions.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:19*