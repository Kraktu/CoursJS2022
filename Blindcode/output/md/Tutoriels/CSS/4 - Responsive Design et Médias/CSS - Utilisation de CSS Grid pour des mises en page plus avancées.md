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
   
Dans ce cours, nous allons explorer l'utilisation de CSS Grid pour créer des mises en page web avancées. CSS Grid est une technologie puissante qui permet de créer des mises en page complexes et flexibles avec une grande facilité. Vous apprendrez à utiliser CSS Grid pour organiser le contenu de votre site web de manière élégante et [réactive](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Introduction%20au%20responsive%20design.md).   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Utilisation de CSS Grid pour des Mises en Page Avancées   
   
### Pourquoi CSS Grid est-il Important ?   
   
#### Flexibilité de la Mise en Page   
   
CSS Grid offre une flexibilité exceptionnelle pour organiser les éléments de votre page. Vous pouvez créer des grilles complexes avec des rangées et des colonnes de différentes tailles pour répondre à vos besoins de conception.   
   
#### Alignement Précis   
   
Avec CSS Grid, vous pouvez aligner précisément les éléments à l'intérieur de la grille, ce qui vous permet de créer des designs pixel-perfect.   
   
#### Réactivité Intégrée   
   
CSS Grid est réactif par nature. Vous pouvez facilement adapter votre mise en page à différents écrans et résolutions en utilisant des [média-queries](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Utilisation%20des%20media%20queries.md).   
   
### Concepts Fondamentaux de CSS Grid   
   
#### La Grille   
   
La grille est le fondement de CSS Grid. Elle est définie en utilisant la propriété `display: grid;`. Voici comment vous pouvez créer une grille de base :   
   
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
}
```
   
   
   
- `display: grid;` définit que l'élément `.container` est une grille.   
- `grid-template-columns` définit le nombre de colonnes et leur largeur. Dans cet exemple, nous avons trois colonnes de largeur égale, chacune occupant 1 fraction (1fr) de l'espace disponible.   
- `grid-template-rows` définit le nombre de rangées et leur hauteur. Ici, nous avons deux rangées, chacune ayant une hauteur fixe de 100 pixels.   
   
#### Placement des Éléments   
   
Une fois que vous avez créé une grille, vous pouvez placer des éléments à l'intérieur en spécifiant les lignes et les colonnes sur lesquelles ils doivent être positionnés. Voici comment placer un élément dans une grille :   
   
```css
.item {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```
   
   
   
- `grid-column` spécifie la plage de colonnes où l'élément sera placé. Dans cet exemple, l'élément occupe les colonnes 2 à 4.   
- `grid-row` spécifie la plage de rangées où l'élément sera placé. Ici, il occupe les rangées 1 à 3.   
   
### Espacement et Alignement   
   
CSS Grid offre un contrôle précis sur l'espacement et l'alignement des éléments dans la grille.   
   
#### 1. Espacement entre les Éléments   
   
Vous pouvez définir l'espacement horizontal et vertical entre les éléments de la grille en utilisant `grid-column-gap` et `grid-row-gap` ou `grid-gap`. Par exemple :   
   
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 20px; /* Espacement entre les éléments */
}
```
   
   
#### 2. Alignement Horizontal   
   
Pour aligner horizontalement les éléments dans la grille, vous pouvez utiliser `justify-items` ou `justify-self`. Par exemple :   
   
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; /* Centre horizontalement tous les éléments */
}
```
   
   
#### 3. Alignement Vertical   
   
Pour aligner verticalement les éléments dans la grille, vous pouvez utiliser `align-items` ou `align-self`. Par exemple :   
   
```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  align-items: center; /* Centre verticalement tous les éléments */
}
```
   
   
### Création de Mises en Page Avancées   
   
Bien sûr, examinons de plus près ces trois aspects essentiels de l'utilisation de CSS Grid dans des mises en page avancées.   
   
#### Mises en Page en Grille Complexes   
   
L'un des avantages majeurs de CSS Grid est sa capacité à créer des mises en page complexes et flexibles. Voici quelques concepts clés pour créer des mises en page en grille complexes :   
   
##### 1. Grilles Imbriquées   
   
CSS Grid permet d'imbriquer des grilles les unes dans les autres. Cela signifie que vous pouvez créer des sous-grilles à l'intérieur de votre grille principale. Cela offre une flexibilité incroyable pour organiser votre contenu. Voici un exemple simple :   
   
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5px;
}
```
   
   
Dans cet exemple, nous avons une grille principale avec trois colonnes et un espacement de 10px. À l'intérieur de chaque élément, nous avons une sous-grille avec deux colonnes et un espacement de 5px.   
   
##### 2. Zones Nommées   
   
Dans CSS Grid, vous pouvez définir des zones nommées pour chaque section de votre grille. Ces zones nommées facilitent le placement des éléments dans la grille en utilisant des noms plutôt que des lignes et des colonnes numériques. Les zones nommées sont définies à l'aide de la propriété `grid-template-areas`.   
   
Voici un exemple simple pour mieux comprendre :   
   
```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";
}
```
   
   
Dans cet exemple, nous avons défini une grille avec trois rangées et trois colonnes. Chaque cellule de la grille est définie entre les guillemets. Vous pouvez voir que nous avons donné des noms aux zones de la grille, comme "header", "main", "sidebar" et "footer". Ces noms sont arbitraires et peuvent être choisis selon vos préférences.   
   
Maintenant, pour placer un élément dans la grille en utilisant des zones nommées, vous pouvez faire quelque chose comme ceci :   
   
```css
.item {
  grid-area: header;
}
```
   
   
Dans cet exemple, l'élément avec la classe `.item` est placé dans la zone nommée "header" de la grille. Vous n'avez pas besoin de spécifier les lignes et les colonnes exactes, car le nom de la zone gère cela pour vous.   
   
Les avantages des zones nommées sont les suivants :   
   
1. **Clarté dans le code** : Les zones nommées rendent le code plus lisible et compréhensible, car vous pouvez voir immédiatement où chaque élément est censé aller dans la mise en page.   
   
2. **Facilité de maintenance** : Si vous décidez de réorganiser votre mise en page, vous n'avez pas besoin de mettre à jour manuellement les valeurs des lignes et des colonnes pour chaque élément. Vous pouvez simplement réorganiser les noms des zones dans votre modèle de grille.   
   
3. **Facilité de collaboration** : Lorsque vous travaillez en équipe sur un projet, les zones nommées facilitent la communication entre les membres de l'équipe, car tout le monde comprend immédiatement l'organisation de la grille.   
   
En résumé, les zones nommées sont une fonctionnalité utile de CSS Grid qui rend la création et la maintenance de mises en page complexes plus simples et plus intuitives.   
   
#### Réactivité avec CSS Grid   
   
L'un des avantages de CSS Grid est sa réactivité intégrée. Vous pouvez utiliser des media queries pour ajuster la mise en page en fonction de la taille de l'écran. Voici un exemple de réactivité avec CSS Grid :   
   
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```
   
   
Dans cet exemple, nous avons défini une grille à trois colonnes pour les écrans larges, puis nous avons ajusté le nombre de colonnes pour les écrans plus petits à l'aide de media queries. Cela garantit que la mise en page s'adapte de manière fluide à différentes résolutions d'écran.   
   
### Outils Utiles   
   
Lorsque vous travaillez avec CSS Grid, il existe plusieurs outils utiles pour vous aider à créer et à déboguer vos mises en page :   
   
#### 1. Outils de Débuggage des Grilles   
   
La plupart des navigateurs modernes proposent des outils de débogage des grilles qui vous permettent de visualiser et de déboguer votre mise en page en grille. Vous pouvez activer ces outils dans les options de développement de votre navigateur pour inspecter la grille de votre site.   
   
#### 2. Générateurs de Grilles en Ligne   
   
Il existe également de nombreux générateurs de grilles en ligne qui vous permettent de créer rapidement des mises en page en grille en utilisant une interface visuelle. Vous pouvez générer le code CSS Grid en fonction de vos besoins et l'ajuster ensuite selon vos préférences.   
**exemple :**   
   
- [grid layout it](https://grid.layoutit.com/)   
- [css grid generator](https://cssgrid-generator.netlify.app/)   
- [angrytools](https://angrytools.com/css-grid/)   
- Et j'en passe... Google est là pour vous !   
   
### Conclusion   
   
CSS Grid est un outil puissant pour la création de mises en page web avancées. En comprenant les concepts de base de CSS Grid et en pratiquant la création de mises en page réactives, vous serez en mesure de concevoir des sites web modernes et flexibles qui s'adaptent à tous les écrans.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Images%20r%C3%A9actives.md)   
- [Suivant](../../../Tutoriels/CSS/4%20-%20Responsive%20Design%20et%20M%C3%A9dias/CSS%20-%20Exercices%20-%20Grid%20et%20les%20images%20r%C3%A9actives.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:21*