---
date: 17/07/2023
projet: Moi
tags:
- guide
- dataview
- code
- documentation
- obsidian
type: Cours
---
   
# Header :   
DataView est le plugin installé sur [Obsidian](/not_created.md) qui permet de faire des sortes de Querry SQL au sein même du [Vault](/not_created.md).    
   
   
-------------------------------------------------------------------------------   
# Body   
   
## Meta-data   
On peut à l'aide de DataView stocker dans les meta-data du fichier [Markdown](../../Tutoriels/Obsidian/Markdown.md) en utilisant des balise tout en haut du fichier des données qui vont ensuite pouvoir être récupérée avec des Querry et affichée sous forme de tableau.   
   
Pour ça on peut utiliser 2 lignes de 3 tirets et stocker nos données entre les deux comme suis :   
   
```sql
--- 
author: "Edgar Allan Poe" 
published: 1845 
tags: poems 
---

```
   
   
Une autre solution pour le même résultat est cette manière de faire :   
   
````sql
#poems #TheRaven From [author:: Edgar Allan Poe], written in (published:: 1845)
````
   
   
*Dans mon cas, je vais utiliser un mix des tags et des meta-data dans le header !*   
   
## Query   
   
Une fois ceci fait, on peut faire des query dans un document [Markdown](../../Tutoriels/Obsidian/Markdown.md) à l'image d'une requête SQL. On peut suivre cette manière de faire :   
   
```sql
dataview 
LIST 
```
   
   
Cette commande va lister TOUS les fichier de notre vault.   
   
```sql
dataview 
LIST 
FROM #poems 
WHERE author = "Edgar Allan Poe" 
```
   
   
Cette commande va lister tous les fichiers du vault ayant de tag *poems* avec la donnée *auteur* valant *Edgar Allan Poe*.   
   
On peut enfin afficher certains champs dans un tableau grâce à la query *TABLE* comme suis    
```sql
dataview 
TABLE author, published, file.inlinks AS "Mentions" 
FROM #poems 
```
   
   
Il y a même moyen de rentrer encore plus dans le détail avec des fonction dans la query comme dans l'exemple qui suis :   
```sql
dataview 
TABLE author, date(now).year - published AS "Age in Yrs", length(file.inlinks) AS "Counts of Mentions" 
FROM #poems 
```
   
   
## Plus d'infos...   
   
Il y a 4 types de résultats que l'on peut obtenir :   
   
   
- Des listes   
- Des tableaux   
- Des Checklists   
- Des Calendriers   
   
Plus d'info sur comment tout ceci marche sur [Documentation Officielle](https://blacksmithgu.github.io/obsidian-dataview/queries/query-types/)   
   
   
---------------------------------------------------------------------------   
# Footer   
   
##### Tags   
`{_obsidian_pattern_tag_guide}` `{_obsidian_pattern_tag_dataview}` `{_obsidian_pattern_tag_code}` `{_obsidian_pattern_tag_documentation}` `{_obsidian_pattern_tag_obsidian}`    
   
*créé le 2023-07-17 à 15:24*