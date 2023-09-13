---
Cours: HTML
Projet: Blindcode
Type: Cours
date: 2023-09-08
tags:
- cours
- blindcode
- html
- programmation
- frontend
---
   
# Header :   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Attributs HTML    
   
### Explication   
   
Les attributs [HTML](../../../Tutoriels/HTML/HTML%20-%20Pr%C3%A9sentation%20et%20Utilit%C3%A9.md) sont utilisés pour fournir des informations supplémentaires ou des instructions sur la manière dont les éléments HTML doivent fonctionner ou être affichés. Ils sont toujours spécifiés dans la [balise](../../../Tutoriels/HTML/Autres%20Ressources/HTML%20-%20Les%20balises%20principales.md) d'ouverture d'un élément et sont généralement composés d'un nom et d'une valeur, séparés par un signe égal (` = `) et entourée de guillemets (`"`).   
#### Exemple :   
```html
<a id="mon-lien" class="lien-important" href="https://www.example.com" style="color: blue; text-decoration: underline;">Cliquez ici</a>
```
   
   
   
- **La balise** `<a>` crée un lien vers `https://www.example.com` grâce à son **attribut** `href`.   
- **L'attribut** `id` donne à ce lien un identifiant unique, qui peut être utilisé pour le cibler avec du CSS ou du JavaScript. Dans cet exemple, l'id est "mon-lien".   
- **L'attribut** `class` attribue une classe CSS au lien, dans ce cas "lien-important", ce qui permet de le styliser spécifiquement en utilisant une règle CSS pour cette classe.   
- **L'attribut** `style` définit directement le style CSS de ce lien. Dans cet exemple, il est défini pour avoir une couleur de texte bleue et un soulignement.   
#### Principaux Attributs HTML :   
   
1. `id` : Identifiant unique de l'élément. Il permet de cibler l'élément avec du CSS ou du JavaScript.   
2. `class` : Classe de l'élément. Elle permet de regrouper des éléments similaires pour les styliser avec du CSS.   
3. `src` : Source d'un élément, souvent utilisé pour spécifier le chemin vers une image, une vidéo ou un script.   
4. `href` : URL de destination pour les liens `<a>`. Il spécifie la page ou la ressource vers laquelle le lien pointe.   
5. `alt` : Texte alternatif pour les images. Il est affiché si l'image ne peut pas être chargée ou pour l'accessibilité.   
6. `width` et `height` : Définissent la largeur et la hauteur d'un élément, généralement utilisés avec les images.   
7. `style` : Attribut inline permettant de définir des styles CSS directement dans l'élément.   
8. `title` : Texte informatif qui s'affiche lorsque l'utilisateur survole un élément, tel qu'un lien.   
9. `target` : Définit où ouvrir un lien (`_blank` pour une nouvelle fenêtre, `_self` pour la même fenêtre, etc.).   
10. `type` : Spécifie le type de contenu d'un élément, généralement utilisé dans les balises `<script>`.   
11. `name` : Utilisé pour identifier les éléments dans les formulaires, comme les champs de texte.   
12. `value` : Définit la valeur initiale d'un élément de formulaire, comme un bouton radio ou une case à cocher.   
13. `aria-*` : Attributs utilisés pour améliorer l'accessibilité web en fournissant des informations aux lecteurs d'écran.   
14. `data-*` : Attributs personnalisés qui permettent de stocker des données personnalisées associées à un élément.   
15. `rel` : Utilisé pour spécifier la relation entre la page actuelle et la page liée dans les liens `<a>`.   
16. `role` : Utilisé pour définir le rôle de l'élément dans les pages web accessibles.   
   
---------------------------------------------------------------------------   
# Footer   
   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_html}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-08 à 10:21*