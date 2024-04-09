let graphData={graphOptions:{attractionForce:1,linkLength:10,repulsionForce:150,centralForce:3,edgePruning:100,minNodeRadius:3,maxNodeRadius:7},isInitialized:!0,paths:["tutoriels/accessibilité/théorie/accessibilité-pourquoi-c'est-important.html","tutoriels/accessibilité/théorie/accessibilité-principes-de-l'accessibilité-pour-les-mises-en-page-réactives.html","tutoriels/accessibilité/théorie/accessibilité-tests-et-vérifications-de-l'accessibilité-avec-des-outils-en-ligne.html","tutoriels/accessibilité/accueil-accessibilité.html","tutoriels/algorithmie/0-le-plus-important/algo-utilisation-des-concepts-appris-pour-résoudre-des-problèmes.html","tutoriels/algorithmie/1-les-bases-du-pseudo-code/algo-entrée-et-sortie-de-données.html","tutoriels/algorithmie/1-les-bases-du-pseudo-code/algo-opérations-mathématiques-de-base.html","tutoriels/algorithmie/1-les-bases-du-pseudo-code/algo-structure-générale-du-pseudo-code.html","tutoriels/algorithmie/1-les-bases-du-pseudo-code/algo-variables-et-types-de-données.html","tutoriels/algorithmie/2-structure-de-contrôle/algo-boucles-(pour,-tant-que).html","tutoriels/algorithmie/2-structure-de-contrôle/algo-instructions-de-saut-(sauter,-continuer).html","tutoriels/algorithmie/2-structure-de-contrôle/algo-la-boucle-pour-chaque.html","tutoriels/algorithmie/2-structure-de-contrôle/algo-structure-case-(choix-multiple).html","tutoriels/algorithmie/2-structure-de-contrôle/algo-structures-conditionnelles-(si...alors...sinon).html","tutoriels/algorithmie/3-structure-de-données/algo-allocation-dynamique-de-mémoire.html","tutoriels/algorithmie/3-structure-de-données/algo-structure-de-données-associatives-(dictionnaires,-maps).html","tutoriels/algorithmie/3-structure-de-données/algo-variables-composées-(enregistrements,-structures).html","tutoriels/algorithmie/3-structure-de-données/algo-variables-composées-(tableaux,-listes).html","tutoriels/algorithmie/4-sous-programmes/algo-définition-et-appel-de-fonctions.html","tutoriels/algorithmie/4-sous-programmes/algo-paramètres-et-retours-de-fonctions.html","tutoriels/algorithmie/4-sous-programmes/algo-portée-des-variables.html","tutoriels/algorithmie/4-sous-programmes/algo-réutilisation-de-code.html","tutoriels/algorithmie/5-gestion-d'erreurs-et-exceptions/algo-gestion-d'erreurs-avec-des-structures-conditionnelles.html","tutoriels/algorithmie/5-gestion-d'erreurs-et-exceptions/algo-utilisation-des-exceptions.html","tutoriels/algorithmie/6-récursivité/algo-cas-de-base-et-cas-récursifs.html","tutoriels/algorithmie/6-récursivité/algo-exemples-de-fonctions-récursives.html","tutoriels/algorithmie/6-récursivité/algo-principe-de-la-récursivité.html","tutoriels/algorithmie/7-complexité-algorithmique/algo-analyse-de-la-complexité.html","tutoriels/algorithmie/7-complexité-algorithmique/algo-notation-big-o.html","tutoriels/algorithmie/7-complexité-algorithmique/algo-notion-de-complexité-temporelle-et-spatiale.html","tutoriels/algorithmie/8-algorithme-de-tri/algo-comparaison-des-algorithmes-de-tri.html","tutoriels/algorithmie/8-algorithme-de-tri/algo-tri-à-bulles.html","tutoriels/algorithmie/8-algorithme-de-tri/algo-tri-par-insertion.html","tutoriels/algorithmie/8-algorithme-de-tri/algo-tri-par-sélection.html","tutoriels/algorithmie/8-algorithme-de-tri/algo-tri-rapide-(quicksort).html","tutoriels/algorithmie/autres-ressources/algo-commenter-le-code.html","tutoriels/algorithmie/autres-ressources/algo-nommage-des-variables-et-des-fonctions.html","tutoriels/algorithmie/autres-ressources/algo-organisation-du-code.html","tutoriels/algorithmie/autres-ressources/algo-schémas-de-raisonnement-résolution-d'exercice-de-programmation.html","tutoriels/algorithmie/autres-ressources/algo-tests-unitaires.html","tutoriels/algorithmie/accueil-algorithmie.html","tutoriels/css/1-introduction-à-css-et-accessibilité/css-comment-inclure-du-css-dans-un-fichier-html.html","tutoriels/css/1-introduction-à-css-et-accessibilité/css-exercices-les-bases-du-css.html","tutoriels/css/1-introduction-à-css-et-accessibilité/css-introduction-qu'est-ce-que-css-et-pourquoi-c'est-important.html","tutoriels/css/1-introduction-à-css-et-accessibilité/css-présentation-du-cours-et-des-objectifs.html","tutoriels/css/1-introduction-à-css-et-accessibilité/css-résolution-les-bases-du-css.html","tutoriels/css/1-introduction-à-css-et-accessibilité/css-syntaxe-de-base.html","tutoriels/css/2-styling-du-texte-et-des-liens/css-exercices-les-pseudo-classes-et-les-transitions.html","tutoriels/css/2-styling-du-texte-et-des-liens/css-exercices-mise-en-forme-du-texte-et-des-liens.html","tutoriels/css/2-styling-du-texte-et-des-liens/css-les-liens.html","tutoriels/css/2-styling-du-texte-et-des-liens/css-pseudo-classes-pour-les-liens.html","tutoriels/css/2-styling-du-texte-et-des-liens/css-styling-du-texte-police,-taille,-espacement,-alignement.html","tutoriels/css/2-styling-du-texte-et-des-liens/css-utilisation-des-transitions.html","tutoriels/css/3-mise-en-page-et-flexbox/css-exercices-création-de-mises-en-page-simples.html","tutoriels/css/3-mise-en-page-et-flexbox/css-exercices-flexbox-avancé.html","tutoriels/css/3-mise-en-page-et-flexbox/css-exercices-mise-en-page-avec-flexbox.html","tutoriels/css/3-mise-en-page-et-flexbox/css-flexbox-introduction-et-utilisation.html","tutoriels/css/3-mise-en-page-et-flexbox/css-flexbox-avancé-alignement,-ordre,-etc.html","tutoriels/css/3-mise-en-page-et-flexbox/css-introduction-à-la-mise-en-page.html","tutoriels/css/3-mise-en-page-et-flexbox/css-le-positionnement.html","tutoriels/css/3-mise-en-page-et-flexbox/css-utilisation-de-marges,-de-paddings-et-de-bordures.html","tutoriels/css/4-responsive-design-et-médias/css-exercices-création-de-mises-en-page-responsives-simples.html","tutoriels/css/4-responsive-design-et-médias/css-exercices-grid-et-les-images-réactives.html","tutoriels/css/4-responsive-design-et-médias/css-images-réactives.html","tutoriels/css/4-responsive-design-et-médias/css-introduction-au-responsive-design.html","tutoriels/css/4-responsive-design-et-médias/css-utilisation-de-css-grid-pour-des-mises-en-page-plus-avancées.html","tutoriels/css/4-responsive-design-et-médias/css-utilisation-des-media-queries.html","tutoriels/css/5-projets-et-évaluation/css-evaluation-des-projets.html","tutoriels/css/5-projets-et-évaluation/css-présentation-des-projets-aux-autres-étudiants.html","tutoriels/css/5-projets-et-évaluation/css-présentation-du-projet-final.html","tutoriels/css/5-projets-et-évaluation/css-travail-en-groupe.html","tutoriels/css/6-chapitres-bonus/css-changement-de-style-des-listes.html","tutoriels/css/6-chapitres-bonus/css-importer-une-police.html","tutoriels/css/6-chapitres-bonus/css-la-mediaquery-print.html","tutoriels/css/autres-ressources/css-le-conteneur-et-la-hiérarchie.html","tutoriels/css/autres-ressources/css-le-fichier-reset.html","tutoriels/css/autres-ressources/css-le-sélecteur-universel.html","tutoriels/css/autres-ressources/css-les-différents-types-de-tailles.html","tutoriels/css/autres-ressources/css-les-principales-valeurs-de-la-propriété-display.html","tutoriels/css/autres-ressources/css-les-timing-functions-pour-les-transitions.html","tutoriels/css/accueil-css.html","tutoriels/git/github/github-github-pages-pour-avoir-son-site-gratuit.html","tutoriels/git/github/github-les-bases-et-à-quoi-ça-sert.html","tutoriels/git/github/github-les-repositories-github.html","tutoriels/git/principal/git-les-bases-et-à-quoi-ça-sert.html","tutoriels/git/accueil-git.html","tutoriels/html/autres-ressources/html-les-attributs.html","tutoriels/html/autres-ressources/html-les-balises-principales.html","tutoriels/html/autres-ressources/html-template-index.html","tutoriels/html/cours/html-exercices-ajout-d'attributs-alt-et-de-balises-sémantiques.html","tutoriels/html/cours/html-images-réactives.html","tutoriels/html/cours/html-présentation-et-utilité.html","tutoriels/html/cours/html-résolution-ajout-d'attributs-alt-et-de-balises-sémantiques.html","tutoriels/html/cours/html-utilisation-de-balises-sémantiques.html","tutoriels/html/cours/html-utilisation-de-l'attribut-alt-pour-les-images.html","tutoriels/html/accueil-html.html","tutoriels/ide/phpstorm/accueil-phpstorm.html","tutoriels/ide/phpstorm/phpstorm-exercice-sur-la-base.html","tutoriels/ide/phpstorm/phpstorm-installation-mac.html","tutoriels/ide/phpstorm/phpstorm-installation-windows.html","tutoriels/ide/phpstorm/phpstorm-les-bases.html","tutoriels/ide/phpstorm/phpstorm-les-raccourcis.html","tutoriels/ide/phpstorm/phpstorm-théorie.html","tutoriels/ide/théorie/ide-la-suite-jetbrains.html","tutoriels/ide/théorie/ide-qu'est-ce-que-c'est.html","tutoriels/ide/vscode/accueil-vscode.html","tutoriels/ide/vscode/vscode-théorie.html","tutoriels/ide/accueil-ide.html","tutoriels/informatique/accueil-informatique.html","tutoriels/informatique/informatique-algèbre-de-bool.html","tutoriels/informatique/informatique-envoyer-des-mail-sans-smtp-avec-testmailservertool.html","tutoriels/informatique/informatique-explication-de-l'internet-of-things-(iot).html","tutoriels/informatique/informatique-intro-à-l'intelligence-artificielle.html","tutoriels/informatique/informatique-introduction-à-bootstrap.html","tutoriels/informatique/informatique-introduction-à-java.html","tutoriels/informatique/informatique-introduction-à-javascript.html","tutoriels/informatique/informatique-introduction-à-laravel.html","tutoriels/informatique/informatique-introduction-à-python.html","tutoriels/informatique/informatique-introduction-à-r.html","tutoriels/informatique/informatique-introduction-au-langage-c.html","tutoriels/informatique/informatique-introduction-au-langage-c#.html","tutoriels/informatique/informatique-introduction-au-sql.html","tutoriels/informatique/informatique-l'open-source.html","tutoriels/informatique/informatique-la-conception-d'application-et-ses-métiers.html","tutoriels/informatique/informatique-la-ligne-de-commande.html","tutoriels/informatique/informatique-le-concept-d'api.html","tutoriels/informatique/informatique-le-dom.html","tutoriels/informatique/informatique-le-modèle-vue-contrôleur-(mvc).html","tutoriels/informatique/informatique-le-modulo.html","tutoriels/informatique/informatique-le-référencement-d'un-site-web.html","tutoriels/informatique/informatique-les-bases-de-données.html","tutoriels/informatique/informatique-les-deux-familles-de-programmation.html","tutoriels/informatique/informatique-qu'est-ce-qu'un-framework.html","tutoriels/informatique/informatique-qu'est-ce-qu'un-langage-de-programmation.html","tutoriels/obsidian/core/le-programme-obsidian.html","tutoriels/obsidian/core/markdown.html","tutoriels/obsidian/plugins/dataview.html","tutoriels/obsidian/plugins/natural-languages-date.html","tutoriels/obsidian/plugins/obsidianhtml.html","tutoriels/obsidian/accueil-obsidian.html","tutoriels/php/a-procédural-php/1-introduction-à-la-programmation-procédurale/php-présentation-en-tant-que-langage-de-programmation-procédurale.html","tutoriels/php/a-procédural-php/2-les-fondamentaux-en-php/php-exercices-bonus-conditions.html","tutoriels/php/a-procédural-php/2-les-fondamentaux-en-php/php-installation-et-configuration-de-l'environnement.html","tutoriels/php/a-procédural-php/2-les-fondamentaux-en-php/php-les-boucles.html","tutoriels/php/a-procédural-php/2-les-fondamentaux-en-php/php-opérateurs-et-expressions.html","tutoriels/php/a-procédural-php/2-les-fondamentaux-en-php/php-structure-de-contrôle-conditionnelle.html","tutoriels/php/a-procédural-php/2-les-fondamentaux-en-php/php-structure-générale-d'un-script.html","tutoriels/php/a-procédural-php/2-les-fondamentaux-en-php/php-variables-et-types-de-données.html","tutoriels/php/a-procédural-php/3-les-fonctions-en-php/php-définition-et-utilisation-de-fonctions-en-php.html","tutoriels/php/a-procédural-php/3-les-fonctions-en-php/php-les-strict-types.html","tutoriels/php/a-procédural-php/3-les-fonctions-en-php/php-passage-de-paramètres-de-fonction.html","tutoriels/php/a-procédural-php/3-les-fonctions-en-php/php-portée-des-variables.html","tutoriels/php/a-procédural-php/3-les-fonctions-en-php/php-retour-de-valeurs-de-fonction.html","tutoriels/php/a-procédural-php/3-les-fonctions-en-php/php-retour-de-valeurs-de-fonction-avec-typage.html","tutoriels/php/a-procédural-php/3-les-fonctions-en-php/php-typage-de-paramètre.html","tutoriels/php/a-procédural-php/4-manipulation-des-chaînes-de-caractères-et-des-tableaux-en-php/php-challenge-sur-les-tableaux.html","tutoriels/php/a-procédural-php/4-manipulation-des-chaînes-de-caractères-et-des-tableaux-en-php/php-fonctions-de-tableau-utiles.html","tutoriels/php/a-procédural-php/4-manipulation-des-chaînes-de-caractères-et-des-tableaux-en-php/php-manipulation-de-tableaux-(tableaux-indexés-et-associatifs).html","tutoriels/php/a-procédural-php/4-manipulation-des-chaînes-de-caractères-et-des-tableaux-en-php/php-opérations-de-base-sur-les-chaînes-de-caractères.html","tutoriels/php/a-procédural-php/4-manipulation-des-chaînes-de-caractères-et-des-tableaux-en-php/php-tableau-à-deux-dimensions.html","tutoriels/php/a-procédural-php/5-gestion-des-formulaires-en-php/php-conventions-de-nommage.html","tutoriels/php/a-procédural-php/5-gestion-des-formulaires-en-php/php-envoi-de-données-de-formulaire.html","tutoriels/php/a-procédural-php/5-gestion-des-formulaires-en-php/php-exercice-récapitulatif-sur-les-formulaires.html","tutoriels/php/a-procédural-php/5-gestion-des-formulaires-en-php/php-fichier-multiples-et-includes.html","tutoriels/php/a-procédural-php/5-gestion-des-formulaires-en-php/php-rappel-des-formulaires-html.html","tutoriels/php/a-procédural-php/5-gestion-des-formulaires-en-php/php-traitement-des-données-de-formulaire.html","tutoriels/php/a-procédural-php/6-travailler-avec-les-fichiers-en-php/php-gestion-des-erreurs-de-fichiers.html","tutoriels/php/a-procédural-php/6-travailler-avec-les-fichiers-en-php/php-ouverture,-lecture-et-écriture-de-fichiers.html","tutoriels/php/a-procédural-php/7-introduction-aux-bases-de-données-en-php/php-connexion-à-une-base-de-données.html","tutoriels/php/a-procédural-php/7-introduction-aux-bases-de-données-en-php/php-exécution-de-requêtes-sql-en-php.html","tutoriels/php/a-procédural-php/7-introduction-aux-bases-de-données-en-php/php-récupération-et-affichage-de-données-en-php.html","tutoriels/php/a-procédural-php/8-introduction-à-la-sécurité-en-php/php-gestion-des-attaques-courantes-(injection-sql,-xss,-csrf).html","tutoriels/php/a-procédural-php/8-introduction-à-la-sécurité-en-php/php-pratiques-de-sécurité-recommandées.html","tutoriels/php/a-procédural-php/9-projet-final-php-procédural/php-projet-récapitulatif-procédural-de-groupe.html","tutoriels/php/a-procédural-php/9-projet-final-php-procédural/php-projet-récapitulatif-procédural-en-solo.html","tutoriels/php/b-poo-php/1-introduction-à-la-programmation-orientée-objet-en-php/php-avantages-de-la-poo.html","tutoriels/php/b-poo-php/1-introduction-à-la-programmation-orientée-objet-en-php/php-concepts-de-base-de-la-poo.html","tutoriels/php/b-poo-php/2-classes-et-objets-en-php/php-définition-de-classes-et-d'objets.html","tutoriels/php/b-poo-php/2-classes-et-objets-en-php/php-héritage,-et-polymorphisme.html","tutoriels/php/b-poo-php/2-classes-et-objets-en-php/php-propriétés-et-méthodes-de-classe.html","tutoriels/php/b-poo-php/2-classes-et-objets-en-php/php-visibilité-des-membres.html","tutoriels/php/b-poo-php/3-constructeurs-et-destructeurs-en-php/php-destructeurs-et-libération-de-ressources.html","tutoriels/php/b-poo-php/3-constructeurs-et-destructeurs-en-php/php-les-constructeurs.html","tutoriels/php/b-poo-php/4-héritage-en-php/php-création-de-hiérarchies-de-classes.html","tutoriels/php/b-poo-php/4-héritage-en-php/php-surcharge-de-méthodes.html","tutoriels/php/b-poo-php/5-interfaces-et-traits/php-définition-d'interfaces.html","tutoriels/php/b-poo-php/5-interfaces-et-traits/php-les-traits.html","tutoriels/php/b-poo-php/6-gestion-des-exceptions/php-les-exceptions.html","tutoriels/php/b-poo-php/7-autoloaders-et-namespaces/php-les-autoloaders.html","tutoriels/php/b-poo-php/7-autoloaders-et-namespaces/php-les-namespaces.html","tutoriels/php/b-poo-php/8-utilisation-de-design-patterns/php-introduction-aux-design-patterns-couramment-utilisés.html","tutoriels/php/b-poo-php/9-bonnes-pratiques-de-programmation-orientée-objet/php-pratiques-de-codage-propre-en-poo.html","tutoriels/php/b-poo-php/9-bonnes-pratiques-de-programmation-orientée-objet/php-tests-unitaires-et-tdd-en-poo.html","tutoriels/php/accueil-php.html","tutoriels/python/lecture-et-ecriture-de-fichier/python-ecriture-de-fichier-csv.html","tutoriels/python/lecture-et-ecriture-de-fichier/python-ecriture-de-fichier-texte.html","tutoriels/python/lecture-et-ecriture-de-fichier/python-lecture-de-fichier-csv.html","tutoriels/python/lecture-et-ecriture-de-fichier/python-lecture-de-fichier-texte.html","tutoriels/python/lecture-et-ecriture-de-fichier/python-lecture-et-écriture-de-fichier-csv.html","tutoriels/python/lecture-et-ecriture-de-fichier/python-lecture-et-écriture-de-fichier-texte.html","tutoriels/python/accueil-python.html","tutoriels/uxdesign/conception.html","tutoriels/uxdesign/decouvrir.html","tutoriels/uxdesign/mesurer.html","tutoriels/uxdesign/notes-ux-design.html","tutoriels/uxdesign/persona.html","tutoriels/uxdesign/test.html","tutoriels/accueil-tutoriels.html","tutoriels/projet-de-fin-d'année-blindcode-2024.html"],nodeCount:209,linkSources:[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15,15,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,22,22,22,22,22,22,23,23,23,23,23,23,24,24,24,25,25,25,25,26,26,26,26,26,26,27,27,27,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,30,30,30,31,31,31,31,31,31,31,32,32,32,32,32,33,33,33,33,33,33,33,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,36,36,36,36,37,37,37,37,37,37,37,39,39,39,39,39,39,39,39,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,41,41,41,41,41,42,42,42,42,42,43,43,43,43,43,43,43,43,43,43,44,44,44,44,44,44,44,44,44,45,45,46,46,46,46,46,46,47,47,47,48,48,48,48,49,49,49,49,49,50,50,50,50,51,51,51,51,51,51,51,51,52,52,52,52,52,53,53,53,54,54,54,55,55,55,56,56,56,56,56,56,56,56,57,57,57,57,57,57,57,58,58,58,58,58,58,58,58,59,59,59,59,60,60,60,60,60,60,60,61,61,61,61,62,62,62,62,62,63,63,63,63,63,63,63,63,64,64,64,64,65,65,65,65,65,66,66,66,66,66,67,67,68,68,68,69,69,69,69,69,69,69,69,69,69,70,70,70,70,71,71,71,72,72,72,73,73,74,74,74,74,75,75,75,75,75,76,76,76,76,76,76,76,77,77,77,77,78,78,78,78,78,78,79,79,79,79,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,81,81,81,81,81,81,81,82,82,83,83,83,84,84,84,85,85,85,85,86,86,86,86,87,87,87,87,87,88,88,88,89,89,89,89,89,90,90,90,90,90,90,90,90,92,93,93,93,93,93,93,94,94,94,94,94,94,95,95,95,95,95,95,95,95,95,95,95,96,96,96,96,96,96,96,97,97,97,98,98,98,98,98,99,99,99,99,99,99,99,99,99,100,100,100,100,100,101,101,101,102,102,102,102,102,102,102,102,102,102,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,104,104,104,104,105,105,106,106,106,106,106,106,106,106,106,106,106,106,106,107,107,107,107,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,109,110,111,111,112,113,113,113,113,113,113,114,114,114,114,114,114,115,115,115,115,115,115,115,115,116,116,116,116,116,116,117,117,117,117,117,117,117,117,117,117,118,118,118,118,118,118,118,118,118,119,119,119,119,119,119,119,120,120,120,120,120,121,121,121,122,122,122,123,123,123,123,123,123,123,123,123,123,124,124,125,125,125,125,125,125,126,126,126,126,126,126,127,127,127,128,128,128,128,128,128,128,129,129,130,130,131,131,131,131,132,132,132,133,133,133,133,133,133,133,133,133,133,134,134,135,135,135,135,136,136,136,136,136,137,137,138,138,138,138,138,138,139,139,139,139,139,140,140,140,140,140,140,140,140,141,142,142,142,142,142,142,142,143,143,143,143,143,143,144,144,144,144,144,144,145,145,145,145,145,145,146,146,146,146,146,146,146,147,147,147,147,147,147,147,147,147,148,148,148,148,149,149,149,149,149,149,149,149,149,150,150,150,150,150,151,151,151,151,151,152,152,152,152,153,153,153,153,153,154,154,154,154,154,154,155,155,155,155,155,155,156,156,156,156,157,157,157,158,158,158,158,159,159,159,159,159,160,160,160,160,160,160,161,161,161,162,162,162,162,162,163,163,163,163,164,164,164,164,164,165,165,165,165,166,166,166,167,167,167,168,168,168,168,169,169,169,169,169,169,169,170,170,170,170,171,171,171,171,171,172,172,172,172,172,172,172,173,173,173,173,174,174,174,175,175,175,176,176,177,177,177,178,178,178,179,179,179,180,180,180,181,181,181,182,182,182,183,183,183,184,184,184,185,185,185,186,186,186,187,187,187,188,188,188,189,189,189,190,190,190,191,191,191,192,192,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,193,194,194,194,195,195,196,196,196,197,197,197,198,198,199,199,199,200,200,200,200,200,200,202,204,204,204,204,207,207,207,207,207,207,207,207,207,207],linkTargets:[91,80,42,94,0,64,63,94,86,93,46,57,87,80,62,2,0,115,124,122,80,1,69,123,80,95,193,0,1,2,13,9,8,18,133,35,40,8,133,111,21,18,40,6,13,133,7,128,8,109,40,5,133,8,35,40,109,6,20,18,40,7,7,8,17,40,13,10,133,7,9,13,40,12,17,15,40,8,12,7,13,9,18,40,10,11,133,7,12,40,5,9,119,8,40,16,18,7,8,11,40,17,16,8,131,7,40,15,14,133,7,8,9,18,40,11,15,133,7,8,40,14,19,18,133,8,7,40,20,8,7,18,13,12,9,133,40,19,21,18,8,131,35,40,20,22,133,13,7,23,40,21,133,7,131,40,22,26,26,40,25,26,40,24,29,133,18,17,40,23,24,29,9,13,26,28,130,40,27,29,40,31,27,28,40,25,31,29,33,32,17,34,40,17,29,7,34,40,28,33,17,29,40,33,34,31,17,29,7,34,40,32,29,21,133,40,32,30,18,8,19,21,104,133,117,114,140,40,8,18,35,40,36,35,18,22,84,39,40,133,18,21,132,114,117,119,40,133,4,7,8,6,5,13,9,10,12,11,17,15,16,14,18,19,20,21,22,23,26,24,25,29,27,28,31,33,32,34,30,35,36,37,39,38,43,91,87,86,80,46,42,82,80,41,0,45,91,72,60,0,64,123,115,80,44,46,43,46,91,0,113,193,116,112,80,42,80,41,91,87,76,80,43,80,52,58,42,80,49,50,43,46,51,80,48,74,80,48,52,59,46,43,91,77,80,89,49,115,79,80,50,47,80,59,56,80,57,64,80,56,57,58,64,43,74,87,80,53,55,56,87,74,46,80,55,54,43,91,87,60,78,56,80,47,87,80,60,53,43,46,58,87,74,80,59,73,80,66,63,82,88,80,65,1,43,90,46,74,66,80,61,65,66,63,80,54,64,66,80,63,62,64,43,73,80,61,80,68,80,70,67,43,123,91,0,70,68,67,113,80,2,82,80,69,68,46,80,72,80,71,73,80,72,87,59,93,80,43,91,87,41,80,46,43,87,60,72,50,80,46,74,43,80,46,87,74,65,56,80,46,52,43,80,44,43,46,41,42,0,94,93,89,51,49,48,50,52,47,58,60,59,53,56,55,57,54,64,66,61,63,65,62,1,2,69,70,68,67,71,72,73,87,86,88,90,77,76,79,78,74,75,82,83,91,43,115,135,85,84,85,82,133,85,122,82,85,84,82,83,81,87,91,43,115,91,86,115,74,93,43,115,93,88,80,93,51,92,63,87,91,86,94,80,61,65,89,87,91,0,80,94,89,86,91,0,112,80,93,80,91,43,94,93,89,92,90,87,86,88,98,99,102,100,101,97,107,91,43,102,102,104,193,96,99,102,104,193,91,43,106,124,96,98,91,43,101,96,102,100,96,97,104,103,82,133,91,43,115,96,99,100,104,133,114,117,91,43,115,132,130,107,133,114,117,119,91,43,115,132,107,106,107,104,133,132,122,123,84,91,43,115,117,118,111,105,104,103,96,105,115,119,114,117,121,118,133,131,132,113,116,126,130,125,127,128,110,124,123,111,112,122,129,108,108,112,108,108,132,43,122,115,91,108,133,21,122,131,104,108,133,114,126,21,132,122,91,108,122,127,130,21,125,108,133,131,112,21,132,106,8,9,18,108,133,122,21,130,125,17,8,18,108,133,8,18,13,9,12,108,133,114,132,125,108,133,130,108,21,132,108,91,43,115,130,133,117,114,193,125,108,133,108,18,8,21,115,126,108,115,91,87,86,35,108,8,132,108,133,9,119,114,117,115,108,0,108,8,108,8,18,147,108,21,123,108,114,117,115,119,8,131,18,121,130,108,135,139,134,82,207,139,134,121,135,18,139,134,139,134,124,117,81,83,139,135,134,136,138,137,133,131,18,8,130,91,193,142,193,140,104,96,105,8,193,146,9,140,13,193,145,148,6,128,109,193,147,145,13,6,12,193,144,143,133,140,130,35,142,193,147,8,140,133,109,18,5,193,146,144,18,193,143,150,193,153,154,148,150,152,147,151,158,193,19,18,148,154,147,145,193,153,149,193,148,154,153,193,148,8,152,151,193,19,8,148,150,152,158,157,156,159,193,164,157,148,193,159,193,158,156,147,193,149,157,157,15,193,156,155,36,8,18,193,163,161,193,160,165,163,110,193,165,167,193,80,164,160,95,193,161,155,163,95,193,161,162,193,167,168,193,162,166,130,193,166,169,168,130,121,131,165,193,170,121,193,169,171,121,115,193,170,172,193,130,121,95,165,171,173,83,193,172,174,83,193,173,193,176,177,193,175,193,175,180,193,179,182,193,180,178,193,177,179,193,182,183,193,178,181,193,181,184,193,183,185,193,184,186,193,185,187,193,186,189,193,189,190,193,187,188,193,189,191,193,190,192,193,191,140,142,146,147,144,145,141,143,148,150,154,152,153,151,149,158,157,156,159,155,164,163,160,161,165,162,167,166,168,169,170,171,172,173,174,176,175,177,180,179,178,182,181,183,184,185,186,187,188,189,190,191,192,200,199,196,200,197,200,194,198,200,195,199,200,196,200,197,194,195,197,199,194,196,198,205,202,201,206,203,139,95,80,193,123,107,85,108,40,200],labels:["Accessibilité - Pourquoi c'est important","Accessibilité - Principes de l'accessibilité pour les mises en page réactives","Accessibilité - Tests et vérifications de l'accessibilité avec des outils en ligne","Accueil - Accessibilité","Algo - Utilisation des Concepts Appris pour Résoudre des Problèmes","Algo - Entrée et Sortie de Données","Algo - Opérations Mathématiques de Base","Algo - Structure Générale du Pseudo-Code","Algo - Variables et Types de Données","Algo - Boucles (POUR, TANT QUE)","Algo - Instructions de Saut (SAUTER, CONTINUER)","Algo - La Boucle POUR CHAQUE","Algo - Structure CASE (Choix Multiple)","Algo - Structures Conditionnelles (SI...ALORS...SINON)","Algo - Allocation Dynamique de Mémoire","Algo - Structure de données associatives (Dictionnaires, Maps)","Algo - Variables Composées (Enregistrements, Structures)","Algo - Variables Composées (Tableaux, Listes)","Algo - Définition et Appel de Fonctions","Algo - Paramètres et Retours de Fonctions","Algo - Portée des Variables","Algo - Réutilisation de Code","Algo - Gestion d'Erreurs avec des Structures Conditionnelles","Algo - Utilisation des Exceptions","Algo - Cas de Base et Cas Récursifs","Algo - Exemples de Fonctions Récursives","Algo - Principe de la Récursivité","Algo - Analyse de la Complexité","Algo - Notation Big O","Algo - Notion de Complexité Temporelle et Spatiale","Algo - Comparaison des Algorithmes de Tri","Algo - Tri à Bulles","Algo - Tri par Insertion","Algo - Tri par Sélection","Algo - Tri Rapide (Quicksort)","Algo - Commenter le Code","Algo - Nommage des Variables et des Fonctions","Algo - Organisation du Code","Algo - Schémas de raisonnement résolution d'exercice de programmation","Algo - Tests Unitaires","Accueil - Algorithmie","CSS - Comment Inclure du CSS dans un fichier HTML","CSS - Exercices - Les bases du CSS","CSS - Introduction - Qu'est-ce que CSS et pourquoi c'est important","CSS - Présentation du cours et des objectifs","CSS - Résolution - Les bases du CSS","CSS - Syntaxe de base","CSS - Exercices - Les pseudo-classes et les transitions","CSS - Exercices - Mise en forme du texte et des liens","CSS - Les Liens","CSS - Pseudo-classes pour les liens","CSS - Styling du texte - Police, taille, espacement, alignement","CSS - Utilisation des transitions","CSS - Exercices - Création de mises en page simples","CSS - Exercices - Flexbox avancé","CSS - Exercices - Mise en page avec Flexbox","CSS - Flexbox - Introduction et utilisation","CSS - Flexbox avancé - Alignement, ordre, etc","CSS - Introduction à la mise en page","CSS - Le Positionnement","CSS - Utilisation de marges, de paddings et de bordures","CSS - Exercices - Création de mises en page responsives simples","CSS - Exercices - Grid et les images réactives","CSS - Images réactives","CSS - Introduction au responsive design","CSS - Utilisation de CSS Grid pour des mises en page plus avancées","CSS - Utilisation des media queries","CSS - Evaluation des projets","CSS - Présentation des projets aux autres étudiants","CSS - Présentation du projet final","CSS - Travail en groupe","CSS - Changement de style des listes","CSS - Importer une police","CSS - La mediaquery Print","CSS - Le Conteneur et la Hiérarchie","CSS - Le fichier reset","CSS - Le sélecteur universel","CSS - Les différents types de tailles","CSS - Les principales valeurs de la propriété display","CSS - Les Timing Functions pour les transitions","Accueil - CSS","GITHUB - GitHub Pages pour avoir son site gratuit","GITHUB - Les bases et à quoi ça sert","GITHUB - Les Repositories GitHub","GIT - Les bases et à quoi ça sert","Accueil - Git","HTML - Les attributs","HTML - Les balises principales","HTML - Template index","HTML - Exercices - Ajout d'attributs alt et de balises sémantiques","HTML - Images Réactives","HTML - Présentation et Utilité","HTML - Résolution - Ajout d'attributs alt et de balises sémantiques","HTML - Utilisation de balises sémantiques","HTML - Utilisation de l'attribut alt pour les images","Accueil - HTML","Accueil - PHPStorm","PHPStorm - Exercice sur la base","PHPStorm - Installation Mac","PHPStorm - Installation Windows","PHPStorm - Les bases","PHPStorm - Les raccourcis","PHPStorm - Théorie","IDE - La suite JetBrains","IDE - Qu'est-ce que c'est","Accueil - VSCode","VSCode - Théorie","Accueil - IDE","Accueil - Informatique","Informatique - Algèbre de Bool","Informatique - Envoyer des mail sans SMTP avec TestMailServerTool","Informatique - Explication de l'Internet of Things (IoT)","Informatique - Intro à l'Intelligence Artificielle","Informatique - Introduction à Bootstrap","Informatique - Introduction à Java","Informatique - Introduction à Javascript","Informatique - Introduction à Laravel","Informatique - Introduction à Python","Informatique - Introduction à R","Informatique - Introduction au langage C","Informatique - Introduction au langage C#","Informatique - Introduction au SQL","Informatique - L'Open Source","Informatique - La conception d'application et ses métiers","Informatique - La Ligne de Commande","Informatique - Le concept d'API","Informatique - Le DOM","Informatique - Le Modèle-Vue-Contrôleur (MVC)","Informatique - Le Modulo","Informatique - Le référencement d'un site web","Informatique - Les Bases de Données","Informatique - Les deux familles de Programmation","Informatique - Qu'est-ce qu'un Framework","Informatique - Qu'est-ce qu'un langage de programmation","Le Programme Obsidian","Markdown","DataView","Natural Languages Date","ObsidianHTML","Accueil - Obsidian","PHP - Présentation en tant que langage de programmation procédurale","PHP - Exercices Bonus Conditions","PHP - Installation et configuration de l'environnement","PHP - Les Boucles","PHP - Opérateurs et expressions","PHP - Structure de contrôle conditionnelle","PHP - Structure générale d'un Script","PHP - Variables et types de données","PHP - Définition et utilisation de fonctions en PHP","PHP - Les Strict Types","PHP - Passage de paramètres de fonction","PHP - Portée des variables","PHP - Retour de valeurs de fonction","PHP - Retour de valeurs de fonction avec Typage","PHP - Typage de paramètre","PHP - Challenge sur les tableaux","PHP - Fonctions de tableau utiles","PHP - Manipulation de tableaux (tableaux indexés et associatifs)","PHP - Opérations de base sur les chaînes de caractères","PHP - Tableau à deux dimensions","PHP - Conventions de nommage","PHP - Envoi de données de formulaire","PHP - Exercice récapitulatif sur les formulaires","PHP - Fichier multiples et Includes","PHP - Rappel des formulaires HTML","PHP - Traitement des données de formulaire","PHP - Gestion des erreurs de fichiers","PHP - Ouverture, lecture et écriture de fichiers","PHP - Connexion à une base de données","PHP - Exécution de requêtes SQL en PHP","PHP - Récupération et affichage de données en PHP","PHP - Gestion des attaques courantes (injection SQL, XSS, CSRF)","PHP - Pratiques de sécurité recommandées","PHP - Projet récapitulatif procédural de Groupe","PHP - Projet récapitulatif procédural en Solo","PHP - Avantages de la POO","PHP - Concepts de base de la POO","PHP - Définition de classes et d'objets","PHP - Héritage, et polymorphisme","PHP - Propriétés et méthodes de classe","PHP - Visibilité des membres","PHP - Destructeurs et libération de ressources","PHP - Les constructeurs","PHP - Création de hiérarchies de classes","PHP - Surcharge de méthodes","PHP - Définition d'interfaces","PHP - les Traits","PHP - Les exceptions","PHP - Les autoloaders","PHP - Les namespaces","PHP - Introduction aux design patterns couramment utilisés","PHP - Pratiques de codage propre en POO","PHP - Tests unitaires et TDD en POO","Accueil - PHP","Python - Ecriture de fichier CSV","Python - Ecriture de fichier texte","Python - Lecture de fichier CSV","Python - Lecture de fichier texte","Python - Lecture et écriture de fichier CSV","Python - Lecture et écriture de fichier texte","Accueil - Python","conception","decouvrir","mesurer","Notes ux design","Persona","test","Accueil - Tutoriels","Projet de fin d'année Blindcode 2024"],radii:[4.227180325255102,4.301020408163265,3.921855070153061,3.6005859375,3.6823979591836737,3.9996811224489797,3.9996811224489797,4.6552734375,5.621472417091836,4.445711096938775,3.7632134885204085,3.7632134885204085,4.15234375,4.445711096938775,3.6823979591836737,3.921855070153061,3.7632134885204085,4.445711096938775,5.4038384885204085,3.9996811224489797,4.15234375,4.7231345663265305,3.8430325255102042,3.7632134885204085,3.517777423469388,3.6005859375,3.921855070153061,3.8430325255102042,3.6823979591836737,4.076510682397959,3.7632134885204085,3.921855070153061,3.7632134885204085,3.921855070153061,3.921855070153061,4.445711096938775,3.6005859375,3.6823979591836737,3.088787468112245,3.8430325255102042,6.862703284438775,3.921855070153061,3.8430325255102042,5.724310427295918,3.921855070153061,3.2633729272959187,4.6552734375,3.517777423469388,3.6005859375,3.6823979591836737,3.6823979591836737,3.921855070153061,3.7632134885204085,3.517777423469388,3.517777423469388,3.517777423469388,4.15234375,3.921855070153061,3.9996811224489797,3.7632134885204085,3.9996811224489797,3.6823979591836737,3.6823979591836737,4.15234375,3.921855070153061,3.8430325255102042,3.8430325255102042,3.4339724170918364,3.6005859375,4.076510682397959,3.6005859375,3.4339724170918364,3.6823979591836737,3.517777423469388,4.076510682397959,3.517777423469388,3.7632134885204085,3.517777423469388,3.6823979591836737,3.517777423469388,7,3.7632134885204085,3.921855070153061,3.6823979591836737,3.6005859375,3.7632134885204085,3.9996811224489797,4.789999202806122,3.6005859375,3.8430325255102042,3.921855070153061,5.109375,3.2633729272959187,4.15234375,3.9996811224489797,4.301020408163265,4.15234375,3.4339724170918364,3.6005859375,3.9996811224489797,3.6823979591836737,3.4339724170918364,4.227180325255102,3.9996811224489797,4.445711096938775,3.4339724170918364,4.301020408163265,3.7632134885204085,6.1787109375,3.4339724170918364,3.2633729272959187,3.4339724170918364,3.517777423469388,3.7632134885204085,4.301020408163265,5.047492825255102,3.6823979591836737,4.5864158163265305,3.921855070153061,4.076510682397959,3.4339724170918364,3.8430325255102042,3.9996811224489797,4.37386399872449,3.517777423469388,3.921855070153061,3.7632134885204085,3.4339724170918364,3.8430325255102042,3.2633729272959187,4.227180325255102,4.076510682397959,4.15234375,6.052853954081632,3.6005859375,3.6823979591836737,3.517777423469388,3.2633729272959187,3.6005859375,3.921855070153061,4.15234375,3.176578443877551,3.8430325255102042,3.7632134885204085,3.7632134885204085,3.8430325255102042,3.8430325255102042,4.301020408163265,3.9996811224489797,3.9996811224489797,3.7632134885204085,3.6823979591836737,3.6823979591836737,3.7632134885204085,3.8430325255102042,3.7632134885204085,3.6823979591836737,3.6823979591836737,3.6823979591836737,3.6823979591836737,3.7632134885204085,3.6005859375,3.6823979591836737,3.6823979591836737,3.6823979591836737,3.7632134885204085,3.517777423469388,3.517777423469388,3.6005859375,3.8430325255102042,3.6005859375,3.6823979591836737,3.8430325255102042,3.6005859375,3.4339724170918364,3.517777423469388,3.3491709183673466,3.517777423469388,3.517777423469388,3.517777423469388,3.517777423469388,3.517777423469388,3.517777423469388,3.517777423469388,3.517777423469388,3.517777423469388,3.517777423469388,3.517777423469388,3.4339724170918364,3.6005859375,3.517777423469388,3.517777423469388,3.3491709183673466,7,3.517777423469388,3.3491709183673466,3.517777423469388,3.517777423469388,3.3491709183673466,3.517777423469388,4.076510682397959,3.088787468112245,3.176578443877551,3.088787468112245,3.3491709183673466,3.088787468112245,3.088787468112245,3.921855070153061,3],linkCount:1168}