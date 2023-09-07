---
Projet: Symbiose
Type: Idée
date: 2023-07-31
tags:
- idée
- code
- beta
- symbiose
---
   
# Header :   
   
Le jeu devra d'abord être en phase béta avant d'être mis en libre accès à sa sortie. Cela dit, le jeu étant payant, il faut que le mode béta soit **et** utile à l'équipe pour avoir des retours techniques, artistiques et de Game Design **et** ne pas dévoiler trop du jeu pour donner envie et garder un intérêt à l'utilisateur de l'acheter. Ce fichier servira donc à discuter quelle méthode on peut utiliser pour faire ces deux choses le mieux possible   
   
   
-------------------------------------------------------------------------------   
# Body   
   
##  Code de blocage   
   
### Concept    
   
Pour éviter de devoir travailler sur 2 versions, car le jeu, même en béta recevra des mises à jours (textures, cartes supplémentaires, équilibrage, ...) l'idée serait de mettre un code dans le jeu qui, une fois tapé permet de jouer à la version complète du jeu. Ainsi, les proches collaborateurs pourront tester le jeu dans la version complète, et la version en ligne, elle, sera limitée tant qu'on a pas tapé le code.   
   
### Avantages   
   
   
- On ne travaille que sur une seule version    
- Les mises à jours concerneront tout le monde mais on est sur que les beta testeurs seront bloqué à un moment et ne verront pas plus que ce qu'on veut   
- Les proches et nous peuvent accéder à tout ce qu'on a fait   
   
### Désavantage   
   
   
- Le leak du code   
- Le datamining   
   
### Mise en place   
   
Le seul moyen de débloquer l'entièreté du jeu sur le build (dans Unity, il suffira de cocher une case), sera d'entrer une séquence de touche. Si elle est encodée dans l'ordre, il ne fera plus écrit "béta" en bas à gauche de l'écran mais "release". Cela prouvera qu'on a bien tapé le code. Une fois ceci fait, on pourra jouer au même jeu que les développeurs. par conte, si ce n'est pas fait, et qu'on reste en mode beta, on aura accès au jeu normalement jusqu'au choix entre la [Guerre](/not_created.md) et la [Paix](/not_created.md). Une fois ce choix fait, on pourra continuer à faire des parties à l'infini, on débloquera la mécanique de [donjon](/not_created.md), mais il sera impossible d'accéder aux histoires annexes, de débloquer de nouveaux [objectif](/not_created.md), de nouveaux [deck](/not_created.md) ni d'avancer dans le [Scénario Principal](../../../Cr%C3%A9ations/Symbiose/GameDesign/Sc%C3%A9nario/Histoire/Sc%C3%A9nario%20Principal.md).  Notre progression sera stoppé à ce niveau là, qui est un état de *middle-game*.    
   
   
---------------------------------------------------------------------------   
# Footer   
   
##### Tags   
`{_obsidian_pattern_tag_idée}` `{_obsidian_pattern_tag_code}` `{_obsidian_pattern_tag_beta}` `{_obsidian_pattern_tag_symbiose}`    
   
*créé le 2023-07-31 à 14:29*