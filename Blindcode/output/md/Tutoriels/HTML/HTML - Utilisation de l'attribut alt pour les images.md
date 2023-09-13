---
Cours: HTML
Projet: Blindcode
Type: Cours
date: 2023-09-01
tags:
- cours
- blindcode
- html
- css
- programmation
- frontend
---
   
# Header :   
   
Nous allons voir ici comment et pourquoi donner une alternative textuelle aux images sur les sites internet   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Utilisation de l'Attribut "alt" pour les Images   
   
L'attribut "alt", abréviation de "texte alternatif", est un [attribut](../../Tutoriels/HTML/Autres%20Ressources/HTML%20-%20Les%20attributs.md) [HTML](../../Tutoriels/HTML/HTML%20-%20Pr%C3%A9sentation%20et%20Utilit%C3%A9.md) utilisé pour fournir une description textuelle d'une image présente sur une page web. L'objectif principal de cet attribut est d'améliorer l'[accessibilité web](../../Tutoriels/Accessibilit%C3%A9/Accessibilit%C3%A9%20-%20Pourquoi%20c%27est%20important.md) en permettant aux utilisateurs ayant des limitations visuelles, notamment les utilisateurs de lecteurs d'écran, de comprendre le contenu des images qui ne sont pas directement visibles pour eux.   
   
### Importance de l'Attribut "alt"   
   
1. **Accessibilité pour les Utilisateurs Malvoyants :** Les utilisateurs malvoyants dépendent de logiciels de lecture d'écran pour accéder au contenu web. L'attribut "alt" permet à ces lecteurs d'annoncer le contenu des images, ce qui rend la page web compréhensible pour ces utilisateurs.   
   
2. **Images Manquantes :** L'attribut "alt" joue également un rôle crucial lorsque l'image ne peut pas être affichée, par exemple, en raison d'une erreur de chargement ou de la désactivation des images par l'utilisateur. Dans ce cas, le texte alternatif est affiché à la place de l'image pour informer l'utilisateur de ce qu'il manque.   
   
### Bonnes Pratiques pour Utiliser l'Attribut "alt"   
   
   
- **Description Pertinente :** L'attribut "alt" devrait contenir une description concise et pertinente de l'image. Il devrait transmettre le sens ou le contexte de l'image.   
   
   
- **Éviter le Contenu Redondant :** Évitez de répéter le contenu déjà présent à côté de l'image. Par exemple, si une image affiche le texte "Logo de la société CacaCorp", l'attribut "alt" pourrait simplement dire "Logo de la société CacaCorp".   
   
   
- **Images Décoratives :** Pour les images purement décoratives, vous pouvez utiliser un attribut "alt" vide (`alt=""`) pour indiquer aux lecteurs d'écran qu'il s'agit d'une image décorative sans importance pour la compréhension du contenu.   
   
   
- **Images Complexes :** Si une image est complexe et contient des informations importantes, envisagez d'ajouter une description plus détaillée dans un élément `<figcaption>` ou dans le contenu textuel de la page.   
   
### Exemple d'Utilisation de l'Attribut "alt"   
   
Voici un exemple d'utilisation de l'attribut "alt" pour une image :   
   
```html
<img src="image.jpg" alt="Photo de classe Blindcode où les élèves sont tous tout nu">
```
   
   
Dans cet exemple, l'attribut "alt" décrit l'image en fournissant une description significative qui permet aux utilisateurs malvoyants entre autre de se faire une idée de ce que représente l'image, même s'ils ne peuvent pas la voir.   
   
### Funfact   
   
Le saviez vous, certains sites ou logiciels utilisent l'intelligence artificielle qui va analyser les images, reconnaître ce qu'il y a dedans, et ensuite réinjecter le code dans les attributs alt pour décrire les images sans alternatives. Cela dit, c'est une méthode, bien qu'intéressante, pas parfaite, car l'IA, elle, ne sait pas (*encore ?*) savoir si une image est pertinente à décrire ou non ! Rien ne vaut le fait de bien développer vos sites pour le moment !   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../Tutoriels/Accessibilit%C3%A9/Accessibilit%C3%A9%20-%20Pourquoi%20c%27est%20important.md)   
- [Suivant](../../Tutoriels/HTML/HTML%20-%20Utilisation%20de%20balises%20s%C3%A9mantiques.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_html}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:18*