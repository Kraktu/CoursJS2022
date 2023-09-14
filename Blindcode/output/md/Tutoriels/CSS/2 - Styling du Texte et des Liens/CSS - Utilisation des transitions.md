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
   
Même si beaucoup d'animation précises peuvent se faire directement en Javascript, il existe des fonctions prédéfinies pour faire des transitions plus générique en CSS, il est important de les connaître pour gagner du temps lors de votre développement, cela vous permettra de ne pas réinventer la roue à chaque fois !   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Utilisation des Transitions pour Améliorer l'Expérience Utilisateur   
   
### 1. Introduction aux Transitions CSS   
   
#### 1.1 Qu'est-ce qu'une Transition ?   
   
Une transition CSS est une technique qui permet de créer une animation fluide lorsqu'une propriété CSS change d'état. Par exemple, vous pouvez animer le changement de couleur de fond d'un bouton lorsque l'utilisateur passe la souris dessus, ce qui rendra l'interaction plus agréable.   
   
#### 1.2 Propriétés de Transition   
   
Pour utiliser une transition, vous devez spécifier les propriétés CSS que vous souhaitez animer, ainsi que la durée de l'animation. Les propriétés de transition couramment utilisées sont `transition-property`, `transition-duration`, `transition-timing-function`, et `transition-delay`.   
   
#### 1.3 Exemple Simple   
   
Voici un exemple simple de création d'une transition pour un lien lorsque la souris le survole :   
   
```css
/* Propriétés de transition */
a {
    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
}

/* Changement de couleur de lien lorsqu'il est survolé */
a:hover {
    color: red;
    background-color: yellow;
}
```
   
   
### 2. Utilisation Avancée des Transitions   
   
#### 2.1 Transition sur Différentes Propriétés   
   
Vous pouvez animer plusieurs propriétés en même temps. Par exemple, vous pouvez animer la couleur du texte, la taille de la police et le fond d'un bouton lorsqu'il est survolé.   
   
#### 2.2 Timing Functions   
   
La propriété `transition-timing-function` permet de contrôler la façon dont l'animation progresse. Les valeurs courantes incluent `ease`, `linear`, `ease-in`, `ease-out`, et `ease-in-out`, chacune donnant une sensation différente à l'animation. Pour plus d'info sur celles-ci, je vous invite à regarder ma [documentation sur les Timing Functions](../../../Tutoriels/CSS/Autres%20Ressources/CSS%20-%20Les%20Timing%20Functions%20pour%20les%20transitions.md).   
   
#### 2.3 Retard de Transition   
   
Vous pouvez ajouter un délai à une transition en utilisant la propriété `transition-delay`. Cela permet de déterminer quand l'animation commence après que la propriété change.   
   
### 3. Transitions pour Améliorer l'Expérience Utilisateur   
   
#### 3.1 Boutons et Liens   
   
Les transitions peuvent être utilisées pour créer des effets de survol doux pour les boutons et les liens, ce qui rend l'interaction plus intuitive.   
   
#### 3.2 Menu de Navigation   
   
Lors de la création de menus de navigation, les transitions peuvent aider à indiquer visuellement quel élément est actuellement survolé ou sélectionné.   
   
#### 3.3 Galeries d'Images   
   
Les transitions sont très utiles pour les galeries d'images, où elles permettent de créer des diaporamas élégants et fluides.   
   
### 4. Mini Exercice Pratique   
   
#### 4.1 Créez une Transition de Bouton   
   
Pour mettre en pratique ce que vous avez appris, créez une page web simple contenant un bouton. Appliquez une transition pour animer le changement de couleur de fond du bouton lorsqu'il est survolé. Utilisez également différentes valeurs pour `transition-duration` et `transition-timing-function` pour expérimenter avec les animations.   
   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Pseudo-classes%20pour%20les%20liens.md)   
- [Suivant](../../../Tutoriels/CSS/2%20-%20Styling%20du%20Texte%20et%20des%20Liens/CSS%20-%20Exercices%20-%20Les%20pseudo-classes%20et%20les%20transitions.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:19*