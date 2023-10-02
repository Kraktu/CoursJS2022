---
Cours: CSS
Projet: Blindcode
Type: Cours
date: 2023-09-26
tags:
- cours
- blindcode
- css
- programmation
- frontend
---
   
# Header :   
   
Il est important de savoir positionner vos éléments par rapport à un autre, lorsque vous voudrez faire des mise en page particulière, ce chapitre vous aidera à ceci !   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Positionnement en CSS   
   
Le positionnement en CSS vous permet de contrôler la façon dont les [éléments HTML](../../../Tutoriels/HTML/Autres%20Ressources/HTML%20-%20Les%20balises%20principales.md) sont affichés et positionnés sur une page web. Il existe plusieurs valeurs de la propriété `position` qui définissent le type de positionnement d'un élément.   
   
### 1. Position Relative (`position: relative;`)   
   
Lorsque vous définissez `position: relative;` sur un élément, cet élément est positionné par rapport à sa position normale dans le flux du document. Vous pouvez ensuite utiliser les propriétés `top`, `right`, `bottom` et `left` pour déplacer l'élément par rapport à sa position d'origine. Cela n'affecte pas la mise en page des autres éléments.   
   
Exemple :   
   
```css
/* Déplace un élément de 20 pixels vers le bas et de 10 pixels vers la gauche par rapport à sa position d'origine */
div {
    position: relative;
    top: 20px;
    left: -10px;
}
```
   
   
### 2. Position Absolue (`position: absolute;`)   
   
Lorsque vous définissez `position: absolute;` sur un élément, cet élément est positionné par rapport au premier ancêtre positionné qu'il rencontre (un ancêtre avec `position: relative;`, `position: absolute;`, ou `position: fixed;`). Si aucun ancêtre positionné n'est trouvé, l'élément sera positionné par rapport au corps (`<body>`) de la page. Les propriétés `top`, `right`, `bottom` et `left` sont utilisées pour spécifier la position par rapport à l'ancêtre positionné.   
   
Exemple :   
   
```CSS
/* Positionne un élément par rapport à son conteneur parent avec une marge de 10 pixels en haut et à gauche */
div {
    position: absolute;
    top: 10px;
    left: 10px;
}
```
   
   
### 3. Position Fixe (`position: fixed;`)   
   
Lorsque vous définissez `position: fixed;` sur un élément, cet élément est positionné par rapport à la fenêtre du navigateur, quel que soit le défilement de la page. Cela signifie que l'élément reste à la même position même lorsque l'utilisateur fait défiler la page. Les propriétés `top`, `right`, `bottom` et `left` sont utilisées pour spécifier la position par rapport à la fenêtre du navigateur.   
   
Exemple :   
   
```CSS
/* Positionne un élément fixe en haut à droite de la fenêtre du navigateur */
div {
    position: fixed;
    top: 10px;
    right: 10px;
}
```
   
   
### 4. Position Statique (`position: static;` - valeur par défaut)   
   
Tous les éléments HTML ont par défaut un positionnement statique, ce qui signifie qu'ils sont positionnés dans l'ordre normal du flux du document. Le positionnement statique n'est généralement pas modifié à moins que vous n'appliquiez d'autres propriétés de positionnement.   
   
Exemple :   
   
```CSS
/* Positionnement statique par défaut */
div {
    /* Aucune propriété de positionnement spécifiée */
}
```
   
   
Le positionnement en CSS offre une grande flexibilité pour créer des mises en page complexes et personnalisées. Il est important de comprendre comment ces différentes valeurs de positionnement fonctionnent pour les utiliser efficacement dans vos projets web.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Utilisation%20de%20marges%2C%20de%20paddings%20et%20de%20bordures.md)   
- [Suivant](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Exercices%20-%20Cr%C3%A9ation%20de%20mises%20en%20page%20simples.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-26 à 10:56*