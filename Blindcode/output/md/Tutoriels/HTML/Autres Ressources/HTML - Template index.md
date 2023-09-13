---
Cours: HTML
Projet: Blindcode
Type: Cours
date: 2023-09-12
tags:
- cours
- blindcode
- template
- html
---
   
# Header :   
   
Vous trouverez ci-dessous le template d'un fichier `index.html` de base utile pour avoir une première base à modifier en fonction de vos projets.    
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Info    
Ce template n'est pas complet, en effet il ne contient que la base sémantique d'un projet. A vous de le compléter à votre convenance avec d'éventuels liens vers du [CSS](../../../Tutoriels/CSS/1%20-%20Introduction%20%C3%A0%20CSS%20et%20Accessibilit%C3%A9/CSS%20-%20Introduction%20-%20Qu%27est-ce%20que%20CSS%20et%20pourquoi%20c%27est%20important.md), du [javascript](/not_created.md),  un [footer](/not_created.md) et un [header](/not_created.md) plus détaillé et d'autres choses qui vous semblent importantes !   
## Template   
   
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Exemple de Page HTML</title>
</head>
<body>
    <header>
        <h1>Mon Site Web</h1>
        <nav>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">À Propos</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Section 1</h2>
            <p>Contenu de la section 1...</p>
        </section>

        <section>
            <h2>Section 2</h2>
	        <article>
	            <h3>Article 1</h3>
	            <p>Contenu de l'article 1...</p>
	        </article>

	        <article>
	            <h3>Article 2</h3>
	            <p>Contenu de l'article 2...</p>
	        </article>
        </section>
    </main>
    
    <aside>
        <h3>À ne pas manquer</h3>
        <ul>
            <li><a href="/promotion">Promotion spéciale</a></li>
            <li><a href="/conseils">Conseils pratiques</a></li>
        </ul>
    </aside>
    
    <footer>
        <p>&copy; 2023 Mon Site Web. Tous droits réservés.</p>
    </footer>
</body>
</html>
```
   
   
   
---------------------------------------------------------------------------   
# Footer   
   
##### Tags   
`{_obsidian_pattern_tag_cours}` `{_obsidian_pattern_tag_blindcode}` `{_obsidian_pattern_tag_template}` `{_obsidian_pattern_tag_html}`   
   
*créé le 2023-09-12 à 10:31*