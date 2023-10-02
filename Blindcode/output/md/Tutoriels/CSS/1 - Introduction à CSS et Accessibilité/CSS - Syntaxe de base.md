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
   
Ce chapitre vous permettra d'avoir les notions de base de la manière d'écrire du code en CSS. Il sera utile en combinaison avec la page suivante, dans laquelle vous apprendrez à [créer un fichier CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Comment%20Inclure%20du%20CSS%20dans%20un%20fichier%20HTML.md). Une fois ces deux notions apprises, vous saurez tout ce que vous devez savoir pour bien commencer votre aventure dans le monde du CSS ! Nous aborderons donc :   
   
- La structure d'une règle CSS   
- Les différents types de sélecteurs en CSS   
- les propriétés de bases en CSS   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Syntaxe de Base du CSS   
   
La syntaxe de base du CSS est fondamentale pour comprendre comment styliser les éléments [HTML](../../../Tutoriels/HTML/HTML%20-%20Pr%C3%A9sentation%20et%20Utilit%C3%A9.md). Le CSS utilise un modèle de règles qui spécifie quel élément HTML vous souhaitez cibler et comment vous souhaitez le styliser.   
   
### Structure d'une Règle CSS   
   
Une règle CSS est composée de deux parties principales :   
   
1. **Le Sélecteur :** Le sélecteur indique quel élément HTML vous souhaitez styliser. Par exemple, vous pouvez cibler tous les titres de niveau 1 (`<h1>`) en utilisant le sélecteur `h1`, ou tous les éléments ayant une classe spécifique en utilisant `.ma-classe`.   
   
2. **La Déclaration :** La déclaration spécifie comment vous souhaitez styliser l'élément ciblé. Elle comprend une ou plusieurs propriétés CSS et leurs valeurs. Par exemple, vous pouvez déclarer `color: red;` pour changer la couleur du texte en rouge.   
   
Voici un exemple de règle CSS complète :   
   
```css
h1 {
    color: blue;
    font-size: 24px;
}
```
   
Dans cet exemple, `h1` est le sélecteur, et les propriétés `color` et `font-size` sont déclarées avec leurs valeurs respectives.   
   
#### Les différents types de sélecteurs :   
   
1. **Sélecteur d'Élément :** Cible tous les éléments d'un type spécifique. Par exemple, `<h1>` cible tous les titres de niveau 1. Il s'agit donc de vos [balises HTML](../../../Tutoriels/HTML/Autres%20Ressources/HTML%20-%20Les%20balises%20principales.md).   
2. **Sélecteur de Classe :** Cible tous les éléments ayant une classe spécifique. Par exemple, `.ma-classe` cible tous les éléments avec la classe "ma-classe".   
3. **Sélecteur d'ID :** Cible un élément spécifique avec un attribut ID unique. Par exemple, `#mon-id` cible l'élément avec l'ID "mon-id".   
4. **Sélecteur Universel :** Cible tous les éléments de la page. Il s'écrit simplement `*`. Pour plus d'info, lisez la doc du [sélécteur universel](../../../Tutoriels/CSS/Autres%20Ressources/CSS%20-%20Le%20s%C3%A9l%C3%A9cteur%20universel.md)   
5. **Sélecteur de Descendant :** Cible des éléments qui sont des descendants d'un autre élément. Par exemple, `nav ul` cible toutes les listes non ordonnées (`<ul>`) qui sont des descendants d'un élément `<nav>`.   
   
#### Propriétés CSS de base :   
   
Les propriétés CSS définissent les aspects que vous pouvez styliser, tels que la couleur, la taille de la police, la marge, la bordure, etc. Les valeurs sont les paramètres que vous attribuez à ces propriétés pour définir comment l'élément doit être stylisé.   
   
Voici quelques exemples de propriétés et de valeurs couramment utilisées en CSS :   
   
1. **Colorer le Texte :** Vous pouvez changer la couleur du texte en utilisant la propriété `color`. Par exemple, `color: red;` rendra le texte en rouge.   
2. **Taille de Police :** La propriété `font-size` est utilisée pour définir la taille de la police du texte. Par exemple, `font-size: 16px;` définira la taille de la police à 16 pixels.   
3. **Marge :** La propriété `margin` est utilisée pour définir les marges autour d'un élément. Par exemple, `margin: 10px;` définira une marge de 10 pixels autour de l'élément.   
4. **Bordure :** Vous pouvez ajouter une bordure à un élément en utilisant la propriété `border`. Par exemple, `border: 1px solid black;` ajoutera une bordure noire solide d'une épaisseur d'1 pixel autour de l'élément.   
5. **Fond :** La propriété `background-color` est utilisée pour définir la couleur de fond d'un élément. Par exemple, `background-color: #f0f0f0;` définira un fond gris clair.   
   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md)   
- [Suivant](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Comment%20Inclure%20du%20CSS%20dans%20un%20fichier%20HTML.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:16*