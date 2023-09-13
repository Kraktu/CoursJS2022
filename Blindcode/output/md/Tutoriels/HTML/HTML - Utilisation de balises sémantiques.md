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
   
Nous parlerons ici des [balises](../../Tutoriels/HTML/Autres%20Ressources/HTML%20-%20Les%20balises%20principales.md) sémantiques en [HTML](../../Tutoriels/HTML/HTML%20-%20Pr%C3%A9sentation%20et%20Utilit%C3%A9.md), c'est à dire les balises qui ne servent qu'à la structure de votre document.   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Utilisation des Balises Sémantiques en HTML   
   
Les balises sémantiques en HTML sont des éléments spécialement conçus pour donner un sens et une structure au contenu d'une page web. Elles permettent aux navigateurs web, aux moteurs de recherche et aux technologies d'assistance (comme les lecteurs d'écran) de comprendre la signification du contenu, ce qui améliore l'[accessibilité](../../Tutoriels/Accessibilit%C3%A9/Accessibilit%C3%A9%20-%20Pourquoi%20c%27est%20important.md) et l'indexation des pages. Voici quelques-unes des balises sémantiques les plus couramment utilisées :   
   
### 1. `<header>`   
   
La balise `<header>` représente généralement l'en-tête d'une page web ou d'une section particulière de contenu. Elle contient des éléments tels que le logo, le titre principal, la navigation principale et d'autres informations d'en-tête.   
   
Exemple :   
```html
<header>
    <h1>Le site à Philip</h1>
    <nav>
        <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À Propos</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
```
   
   
### 2. `<nav>`   
   
La balise `<nav>` est utilisée pour définir la navigation principale ou la barre de menus d'un site web. Elle contient généralement des liens vers différentes sections du site ou vers d'autres pages importantes.   
   
Exemple :   
```html
<nav>
    <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">À Propos</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```
   
   
### 3. `<main>`   
   
La balise `<main>` représente le contenu principal d'une page web. Il ne devrait y avoir qu'une seule balise `<main>` par page, et elle devrait englober tout le contenu principal, à l'exclusion des en-têtes et pieds de page.   
   
Exemple :   
```html
<main>
    <h1>Titre de la Page</h1>
    <p>Contenu principal de la page...</p>
</main>
```
   
   
### 4. `<article>`   
   
La balise `<article>` est utilisée pour encadrer un contenu autonome et indépendant. Cela peut inclure des articles de blog, des commentaires, des critiques, etc. Chaque `<article>` doit avoir son propre sens, même s'il est présent sur la même page que d'autres articles.   
   
Exemple :   
```html
<article>
    <h2>Titre de l'Article</h2>
    <p>Contenu de l'article...</p>
</article>
```
   
   
### 5. `<section>`   
   
La balise `<section>` est utilisée pour diviser le contenu de manière sémantique en sections logiques. Elle peut être utile pour organiser le contenu en chapitres, en fonctionnalités distinctes, ou en blocs thématiques.   
   
Exemple :   
```html
<section>
    <h2>Section 1</h2>
    <p>Contenu de la section 1...</p>
</section>

<section>
    <h2>Section 2</h2>
    <p>Contenu de la section 2...</p>
</section>
```
   
   
### 6. `<aside>`   
   
La balise `<aside>` est utilisée pour représenter du contenu qui est accessoire ou complémentaire au contenu principal de la page. Cela peut inclure des encarts publicitaires, des informations connexes, des citations, etc.   
   
Exemple :   
```html
<aside>
    <h3>À ne pas manquer</h3>
    <ul>
        <li><a href="/promotion">Promotion spéciale</a></li>
        <li><a href="/conseils">Conseils pratiques</a></li>
    </ul>
</aside>
```
   
   
### 7. `<footer>`   
   
La balise `<footer>` représente généralement le pied de page d'une page web ou d'une section particulière de contenu. Elle peut contenir des informations de contact, des liens vers des pages importantes, des droits d'auteur, etc.   
   
Exemple :   
```html
<footer>
    <p>&copy; 2023 Mon Site Web. Tous droits réservés.</p>
</footer>
```
   
   
### Avantages des Balises Sémantiques   
   
   
- **Amélioration de l'Accessibilité :** Les balises sémantiques aident les technologies d'assistance à comprendre la structure de la page, ce qui est essentiel pour les utilisateurs malvoyants par exemple.   
   
   
- **Meilleur Référencement :** Les moteurs de recherche utilisent également les balises sémantiques pour comprendre le contenu et l'indexer correctement.   
   
   
- **Maintenabilité :** L'utilisation de balises sémantiques rend le code HTML plus clair et plus facile à maintenir.   
   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../Tutoriels/HTML/HTML%20-%20Utilisation%20de%20l%27attribut%20alt%20pour%20les%20images.md)   
- [Suivant](../../Tutoriels/HTML/HTML%20-%20Exercices%20-%20Ajout%20d%27attributs%20alt%20et%20de%20balises%20s%C3%A9mantiques.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_html}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`   
   
*créé le 2023-09-01 à 11:18*