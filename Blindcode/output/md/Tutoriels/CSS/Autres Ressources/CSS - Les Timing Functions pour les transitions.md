---
Cours: null
Projet: Blindcode
Type: Cours
date: 2023-09-14
tags:
- cours
- blindcode
- css
- documentation
---
   
# Header :   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Les Timing Function les plus utilisées   
   
### 1. `ease`   
   
La valeur `ease` est l'une des timing functions les plus couramment utilisées. Elle crée une transition en douceur en commençant lentement, accélérant au milieu de l'animation, puis ralentissant à nouveau à la fin. Cela donne un effet d'animation naturel.   
   
```css
transition-timing-function: ease;
```
   
   
### 2. `linear`   
   
La timing function `linear` crée une transition linéaire, ce qui signifie que la valeur de la propriété change à un rythme constant tout au long de l'animation. Il n'y a pas d'accélération ou de décélération.   
   
```css
transition-timing-function: linear;
```
   
   
### 3. `ease-in`   
   
La timing function `ease-in` crée une transition en commençant lentement et en accélérant à la fin. Cela donne un effet d'entrée progressif, idéal pour les éléments qui apparaissent à l'écran.   
   
```css
transition-timing-function: ease-in;
```
   
   
### 4. `ease-out`   
   
La timing function `ease-out` crée une transition en commençant rapidement et en ralentissant à la fin. Cela donne un effet de sortie progressif, utile lorsque les éléments disparaissent de l'écran.   
   
```css
transition-timing-function: ease-out;
```
   
   
### 5. `ease-in-out`   
   
La timing function `ease-in-out` est un mélange d'`ease-in` et d'`ease-out`. Elle commence lentement, accélère au milieu et ralentit à la fin, créant une transition en douceur dans les deux sens. La description écrite ressemble à celle de `ease`, pourtant, ce n'est pas exactement la même transition. en effet, `ease-in-out` a une entrée et une sortie à la même smoothness, `ease` elle a une attaque plus rapide, l'élément arrive vite à l'écran au début et plus lente sur la fin, c'est à dire que la stabilisation sur l'état final se fait plus lentement, vous pouvez imaginer comme un poids qu'on laisse tomber sur un coussin d'air dans un tube presque hermétique.    
   
```css
transition-timing-function: ease-in-out;
```
   
   
### 6. `cubic-bezier()`   
   
La fonction `cubic-bezier()` vous permet de créer des courbes de synchronisation personnalisées en spécifiant des points de contrôle. Cela offre un contrôle précis sur la progression de l'animation.   
   
```css
/* Exemple de cubic-bezier() personnalisée */
transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
```
   
   
Dans cet exemple, les valeurs `0.42`, `0`, `0.58`, et `1` définissent les coordonnées de contrôle de la courbe de synchronisation.   
   
Je ne vais pas rentrer dans les détails de cette transition, mais imaginez qu'une transition est en fait une courbe, 0 étant l'origine de l'état de l'élément et 1 l'état auquel on veut arriver. Ces valeurs contrôlent donc la clef de modification de cette courbe. On peut imaginer que ces coordonnées sont les coordonnées X et Y d'un poids qui va influencer la courbe. Les deux premières données influent sur l'entrée de la courbe, et les deux dernière sur la fin. Ainsi, notre droit qui, à la base va de `(0,0)` à `(1,1)` va prendre une courbure en fonction du placement de ces deux points. Je ne vais pas faire de cours de math approfondi sur le fonctionnement, mais si vous voulez une prévisualisation du graphique et de l'effet, vous pouvez les trouver sur [ce site](https://cubic-bezier.com/). Sachez que c'est très fortement utilisé aussi dans l'industrie du jeu vidéo pour faire des animations entre autre.   
   
### 7. `steps()`   
   
La fonction `steps()` est utilisée pour créer des animations à étapes, où la propriété change brusquement à des intervalles définis. Par exemple, vous pouvez l'utiliser pour créer une animation d'images clignotantes.   
   
```css
/* Exemple de steps() pour une animation à 5 étapes */
transition-timing-function: steps(5, start);
```
   
   
Dans cet exemple, `steps(5, start)` divise l'animation en 5 étapes distinctes.   
   
Les timing functions sont un outil puissant pour ajuster le comportement des transitions et des animations CSS. Expérimentez avec différentes fonctions pour obtenir l'effet souhaité dans vos projets web. Les transitions fluides et les animations agréables peuvent améliorer considérablement l'expérience utilisateur sur votre site web.   
   
Les timing functions que j'ai mentionnées précédemment sont parmi les plus couramment utilisées et les plus importantes en CSS. Cependant, il existe d'autres timing functions moins courantes qui peuvent également être utilisées pour des cas spécifiques. Voici quelques-unes de ces timing functions moins courantes :   
   
### 1. `step-start` et `step-end`   
   
Les valeurs `step-start` et `step-end` de la propriété `animation-timing-function` sont utilisées pour créer des animations à étapes où la propriété change brusquement au début ou à la fin de chaque étape.   
   
Exemple :   
```css
animation-timing-function: step-start;
```
   
   
Dans cet exemple, la propriété change brusquement au début de chaque étape de l'animation.   
   
### 2. `frames()`   
   
La fonction `frames()` est utilisée pour créer des animations basées sur des images clés (keyframes). Vous pouvez spécifier une liste de valeurs de propriété à des moments précis de l'animation.   
   
Exemple :   
```css
animation-timing-function: frames(0, 10, 20, 30);
```
   
   
Dans cet exemple, des images clés (keyframes) sont spécifiées aux moments 0%, 10%, 20%, et 30% de l'animation.   
   
### 3. `step-middle`   
   
La valeur `step-middle` de la propriété `animation-timing-function` est une timing function intermédiaire entre `step-start` et `step-end`, ce qui signifie que la propriété change brusquement au milieu de chaque étape.   
   
Exemple :   
```css
animation-timing-function: step-middle;
```
   
   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_documentation}`    
   
*créé le 2023-09-14 à 14:19*