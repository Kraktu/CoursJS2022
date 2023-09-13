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
   
Pour appliquer les règles CSS à une page web, vous avez plusieurs options :   
   
1. **Inclure directement le code dans la balise voulue :** Vous ne devez JAMAIS utiliser cette façon, sauf si vous savez ce que vous faites dans un projet personnel. Je ne veux JAMAIS voir ça au cours !   
2. **Inclure le CSS dans une balise `<style>` :** Vous pouvez inclure votre CSS directement dans la balise `<style>` du document HTML. Cette méthode est à proscrire, je ne vous autorise pas à l'utiliser à ce cours. Par contre, il vous sera parfois utile, lors de petit projet personnels ou pour faire des tests rapides de passer par cette méthode.   
3. **Utiliser un fichier CSS externe :** Pour un contrôle plus étendu et une gestion plus efficace du code CSS, vous pouvez créer un fichier CSS externe avec toutes vos règles de style et l'inclure dans votre page HTML à l'aide de la balise `<link>`.   
   
   
-------------------------------------------------------------------------------   
# Body   
## Inclusion de CSS dans une Page Web   
   
Lorsque vous travaillez avec CSS (Cascading Style Sheets) pour styliser vos pages web, il existe trois méthodes principales pour inclure vos règles CSS dans une page HTML. Chacune de ces méthodes a ses avantages et ses inconvénients, alors choisissez celle qui convient le mieux à votre projet.   
   
### 1. Inclusion de CSS dans la Balise HTML Directement   
   
La première méthode consiste à inclure vos règles CSS directement dans la balise HTML en utilisant l'attribut `style`. Bien que cela puisse sembler pratique pour de petits ajustements de style, elle n'est généralement pas recommandée pour les projets de grande envergure en raison de son manque de séparation entre le contenu et la présentation.   
   
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemple de CSS en ligne</title>
</head>
<body>
    <h1 style="color: blue;">Titre en Bleu</h1>
    <p style="font-size: 18px; text-align: center;">Paragraphe centré avec une grande police.</p>
</body>
</html>
```
   
   
**Avantages :**   
   
- Rapide pour les ajustements de style simples.   
- Pas besoin de fichiers CSS externes.   
   
**Inconvénients :**   
   
- Manque de séparation entre le contenu HTML et le CSS.   
- Non recommandé pour les projets de plus que quelques lignes.   
- Maintenance vite impossible...   
   
### 2. Inclusion de CSS dans une Balise `<style>`   
   
La deuxième méthode consiste à inclure vos règles CSS à l'intérieur d'une balise `<style>` placée dans la section `<head>` du document HTML. Cela permet de séparer le CSS du contenu HTML, ce qui est plus propre que l'inclusion directe dans les balises.   
   
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemple de CSS dans une balise &lt;style&gt;</title>
    <style>
        h1 {
            color: green;
        }
        p {
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Titre en Vert</h1>
    <p>Paragraphe avec une taille de police de 16 pixels.</p>
</body>
</html>
```
   
   
**Avantages :**   
   
- Séparation propre entre le contenu HTML et le CSS.   
- Pratique pour les petits projets personnels pour faire des tests rapide.   
   
**Inconvénients :**   
   
- Les règles CSS sont toujours intégrées dans le fichier HTML.   
- La lecture n'est pas simple   
- Cette méthode ne marche que pour un fichier HTML à la fois...   
   
### 3. Inclusion de CSS à partir d'un Fichier Externe   
   
La méthode préférée pour gérer les styles CSS est d'inclure les règles à partir d'un fichier CSS externe. Cela permet de séparer complètement la structure HTML du style CSS, ce qui facilite la maintenance et la gestion des styles.   
   
**index.html :**   
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemple de CSS externe</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Titre avec un style externe</h1>
    <p>Paragraphe stylisé à partir d'un fichier CSS externe.</p>
</body>
</html>
```
   
   
**style.css :**   
```css
/* style.css */
h1 {
    color: red;
}
p {
    font-size: 20px;
}
```
   
   
**Avantages :**   
   
- Séparation complète entre le contenu HTML et le CSS.   
- Facilité de maintenance et de réutilisation des styles.   
- Idéal pour les projets de grande envergure.   
   
**Inconvénients :**   
   
- Nécessite un fichier CSS externe supplémentaire, à noter que cet inconvénient, est sa nature même, et est donc ce qui produit tout le positif, mais je ne peux pas ignorer que en effet ça crée un fichier de plus et donc prend plus de place... On est en 2023, c'est tout à fait négligeable.    
   
En résumé, bien que les deux premières méthodes (inclusion dans la balise HTML directement et inclusion dans une balise `<style>`) soient parfois utilisées pour des ajustements rapides, l'inclusion de CSS à partir d'un fichier externe est la méthode recommandée pour des projets web plus importants en raison de sa séparation propre entre le contenu et la présentation, ce qui facilite la maintenance et la gestion des styles.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - CSS](../../../Tutoriels/CSS/Accueil%20-%20CSS.md)   
- [Précédent](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Syntaxe%20de%20base.md)   
- [Suivant](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Exercices%20-%20Les%20bases%20du%20CSS.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_css}` `{_obsidian_pattern_tag_programmation}` `{_obsidian_pattern_tag_frontend}`    
   
*créé le 2023-09-01 à 14:42*