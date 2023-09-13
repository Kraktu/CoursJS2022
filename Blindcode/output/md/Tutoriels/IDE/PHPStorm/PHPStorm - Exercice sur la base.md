---
Cours: IDE
Projet: Blindcode
Type: Cours
date: 2023-09-05
tags:
- cours
- blindcode
- ide
- informatique
- phpstorm
---
   
# Header :   
   
Dans cet exercice, vous allez créer deux fichiers [HTML](../../../Tutoriels/HTML/HTML%20-%20Pr%C3%A9sentation%20et%20Utilit%C3%A9.md) et un fichier [CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md) en utilisant [PHPStorm](../../../Tutoriels/IDE/PHPStorm/PHPStorm%20-%20Th%C3%A9orie.md). Les fichiers HTML doivent être liés entre eux, et le CSS doit modifier la couleur de fond en noir et l'écriture en blanc.   
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Exercice : PHPStorm, la base   
   
**Instructions :**   
   
1. Ouvrez PHPStorm sur votre ordinateur.   
2. Créez un nouveau projet dans PHPStorm en utilisant le nom de votre choix.   
3. À l'intérieur du projet, créez un fichier HTML nommé `index.html`.   
4. Dans le fichier `index.html`, ajoutez le code suivant :   
```html
    <!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <link rel="stylesheet" href="style.css">
		    <title>Page Principale</title>
		</head>
		<body>
		    <h1>Page Principale</h1>
		    <p>Visitez la <a href="article.html">page de l'article</a></p>
		</body>
	</html>
```
   
5. Créez un deuxième fichier HTML nommé `article.html`.   
       
6. Dans le fichier `article.html`, ajoutez le code suivant :   
```html
    <!DOCTYPE html>
	<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <link rel="stylesheet" href="style.css">
		    <title>Article</title>
		</head>
		<body>
		    <a href="index.html"><img src="image.jpg" alt="Une image"></a>
		</body>
	</html>

```
   
7. Téléchargez une image que vous voulez sur internet et enregistrez la dans votre dossier de projet. Une fois ceci fait, modifiez le code de l'article pour que l'image apparaisse sur votre site.   
8. Créez un fichier CSS nommé `style.css`.   
9. Dans le fichier `style.css`, ajoutez le code suivant pour changer la couleur de fond en noir et l'écriture en blanc :   
```css
    body {
	    background-color: black;
	    color: white;
	}
```
   
9. Assurez-vous que les trois fichiers (`index.html`, `article.html`, et `style.css`) sont bien situés dans le même répertoire du projet.   
10. Utilisez PHPStorm pour ouvrir ces fichiers et assurez-vous qu'ils sont correctement enregistrés.   
11. Vérifiez que les liens entre les fichiers HTML fonctionnent correctement.   
12. Lancez le fichier `index.html` dans votre navigateur pour vérifier que la mise en page est correcte et que les liens fonctionnent comme prévu.   
13. Félicitations ! Vous avez réussi à créer deux fichiers HTML liés entre eux et un fichier CSS pour changer le style de votre page web.   
   
   
---------------------------------------------------------------------------   
# Footer   
   
   
- [Accueil - PHPStorm](../../../Tutoriels/IDE/PHPStorm/Accueil%20-%20PHPStorm.md)   
- [Précédent](../../../Tutoriels/IDE/PHPStorm/PHPStorm%20-%20Les%20raccourcis.md)   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_ide}` `{_obsidian_pattern_tag_informatique}` `{_obsidian_pattern_tag_phpstorm}`   
   
*créé le 2023-09-05 à 11:41*