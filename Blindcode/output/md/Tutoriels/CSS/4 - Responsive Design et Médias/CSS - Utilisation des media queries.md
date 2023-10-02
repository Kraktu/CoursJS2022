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
   
# Utilisation des Media Queries   
   
Les Media Queries sont un élément essentiel du [Responsive Design](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Introduction%20au%20responsive%20design.md), permettant de définir des styles [CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md) en fonction des caractéristiques de l'appareil, telles que la largeur de l'écran, la résolution, l'orientation, etc. Voici comment les utiliser en pratique :   
   
## Syntaxe de Base   
   
Une Media Query commence par l'instruction `@media`, suivie de la condition à évaluer, puis des styles CSS à appliquer si la condition est vraie.   
   
Exemple de syntaxe :   
   
```css
@media (condition) {
    /* Styles à appliquer si la condition est vraie */
}
```
   
   
## Conditions Courantes   
   
### 1. Largeur de l'Écran (`max-width`, `min-width`)   
   
   
- `max-width` : Applique les styles lorsque la largeur de l'écran est inférieure ou égale à la valeur spécifiée.   
   
  Exemple :   
```css
  @media (max-width: 768px) {
      /* Styles pour les écrans de 768px de large ou moins */
  }
```
   
   
   
- `min-width` : Applique les styles lorsque la largeur de l'écran est supérieure ou égale à la valeur spécifiée.   
   
  Exemple :   
```css
  @media (min-width: 1024px) {
      /* Styles pour les écrans de 1024px de large ou plus */
  }
```
   
   
### 2. Résolution de l'Écran (`min-resolution`, `max-resolution`)   
   
   
- `min-resolution` : Applique les styles lorsque la résolution de l'écran est supérieure ou égale à la valeur spécifiée en DPI (points par pouce).   
   
  Exemple :   
```css
  @media (min-resolution: 300dpi) {
      /* Styles pour les écrans haute résolution */
  }
```
   
   
   
- `max-resolution` : Applique les styles lorsque la résolution de l'écran est inférieure ou égale à la valeur spécifiée en DPI.   
   
### 3. Orientation de l'Écran (`orientation`)   
   
   
- `orientation: portrait` : Applique les styles lorsque l'appareil est en mode portrait (vertical).   
   
   
- `orientation: landscape` : Applique les styles lorsque l'appareil est en mode paysage (horizontal).   
   
Exemple :   
```css
@media (orientation: landscape) {
    /* Styles pour les appareils en mode paysage */
}
```
   
   
## Combinaison de Conditions   
   
Vous pouvez combiner plusieurs conditions en utilisant les opérateurs logiques `and`, `not`, et `only`. Par exemple :   
   
```css
@media (min-width: 768px) and (orientation: landscape) {
    /* Styles pour les écrans de 768px de large ou plus en mode paysage */
}
```
   
   
## Print   
   
Je ne vais pas épiloguer ici, mais il existe une media query qui permet de faire un rendu spécifiquement pour les imprimantes, je vous invite à vous référer à [ce chapitre](../../../Tutoriels/CSS/6%20-%20Chapitres%20Bonus/CSS%20-%20La%20mediaquery%20Print.md) si vous voulez en apprendre plus !   
## Utilisation Pratique   
   
   
- Utilisez les Media Queries pour cibler différents appareils et tailles d'écran.   
   
   
- Concevez d'abord pour les appareils mobiles (approche mobile-first), puis ajoutez des Media Queries pour les écrans plus larges.   
   
   
- Testez votre site avec des outils de développement de navigateur pour simuler différentes conditions.   
   
## Outils de Test   
   
   
- **Inspecteurs de Navigateur** : Les navigateurs modernes offrent des outils de développement avec des fonctionnalités pour tester des Media Queries en temps réel.   
   
   
- **Adobe XD, Figma, Sketch** : Ces outils de conception permettent de prévisualiser votre conception pour différentes tailles d'écran.   
   
   
- **Outils en Ligne** : Des sites Web tels que "[Responsinator](http://www.responsinator.com/)" et "[Am I Responsive?](https://ui.dev/amiresponsive)" vous permettent de visualiser votre site sur différentes tailles d'écran.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Introduction%20au%20responsive%20design.md)   
- [Suivant](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Exercices%20-%20Cr%C3%A9ation%20de%20mises%20en%20page%20responsives%20simples.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:21*