---
Cours: CSS
Projet: Blindcode
Type: Cours
date: 2023-09-26
tags:
- cours
- blindcode
- css
- documentation
---
   
# Header :   
   
Lors de mon cours, et même de la réalisation de site, où lecture de tuto, vous allez souvent être confronté à la notion de *conteneur* ou *conteneur parent*. Même si cette notion peut couler de source pour certains, je préfère étayer la notion ici pour que vous puissiez vous y retrouver si vous ne comprenez pas.   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Qu'est-ce qu'un Conteneur en CSS ?   
   
Un "conteneur" en CSS est un [élément HTML](../../../Tutoriels/HTML/Autres%20Ressources/HTML%20-%20Les%20balises%20principales.md) utilisé pour englober d'autres éléments à l'intérieur de lui. Le conteneur permet de regrouper des éléments et de les organiser de manière cohérente dans une mise en page. Les conteneurs sont fréquemment utilisés pour appliquer des styles ou des mises en page spécifiques à un groupe d'éléments plutôt qu'à chaque élément individuellement.   
   
### Avantages des Conteneurs :   
   
1. **Organisation Structurelle** : Les conteneurs aident à organiser la structure d'une page en regroupant des éléments connexes. Par exemple, vous pouvez avoir un conteneur pour la navigation, un autre pour le contenu principal, et un autre pour le pied de page.   
2. **Styles Cohérents** : Les conteneurs permettent d'appliquer des styles cohérents à un groupe d'éléments. Par exemple, vous pouvez définir une largeur fixe pour un conteneur de contenu, ce qui affectera tous les éléments qu'il contient.   
3. **Positionnement Relatif** : Les conteneurs peuvent être utilisés pour le [positionnement relatif](../../../Tutoriels/CSS/3%20-%20Mise%20en%20Page%20et%20Flexbox/CSS%20-%20Le%20Positionnement.md#1.-position-relative-(`position relative;`)) des éléments à l'intérieur d'eux. Par exemple, un conteneur peut être positionné de manière relative, tandis que ses éléments internes peuvent être positionnés en fonction de lui.   
   
### Exemple de Conteneur en CSS :   
   
```html Copy code
<div class="container">
    <h2>Titre Principal</h1>
    <p>Texte d'introduction.</p>
    <ul>
        <li>Liste d'éléments</li>
        <li>Liste d'éléments</li>
        <li>Liste d'éléments</li>
    </ul>
</div>
```
   
   
Dans cet exemple, la `<div>` avec la classe "container" est utilisée comme conteneur. Elle englobe le titre principal, le paragraphe et la liste à puces. En appliquant des styles ou des classes à cette div, vous pouvez influencer la présentation de tous les éléments qu'elle contient.   
   
### Utilisation de Conteneurs en CSS :   
   
Les conteneurs sont couramment utilisés dans la conception de sites web pour créer une structure logique et appliquer des mises en page cohérentes. Vous pouvez également utiliser des [éléments HTML spécifiques](../../../Tutoriels/HTML/HTML%20-%20Utilisation%20de%20balises%20s%C3%A9mantiques.md) pour créer des conteneurs, tels que `<section>`, `<article>`, `<header>`, `<footer>`, etc.   
   
## Notion de Hiérarchie en CSS   
   
### Parent et Enfant :   
   
   
- **Parent** : Un élément parent est un élément HTML qui englobe un ou plusieurs éléments enfants. Il est souvent utilisé comme un conteneur pour organiser et structurer le contenu de manière logique. Les éléments parents peuvent contenir d'autres éléments (enfants) à l'intérieur d'eux. Par exemple, une `<div>` peut être un parent qui contient un `<h1>` et un paragraphe `<p>`.   
- **Enfant** : Un élément enfant est un élément HTML qui est contenu à l'intérieur d'un élément parent. Les éléments enfants sont situés à un niveau hiérarchique inférieur par rapport à leur parent. Par exemple, dans la structure `<div> <h1></h1> <p> </p> </div>`, le `<h1>` et le paragraphe `<p>` sont des éléments enfants de la `<div>`.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_documentation}`    
   
*créé le 2023-09-26 à 10:46*