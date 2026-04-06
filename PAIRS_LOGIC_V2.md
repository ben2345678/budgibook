# Couples V2 — logique propre

## Problème actuel
Actuellement, les couples sont créés à la main avec deux noms tapés au clavier. Cela crée des erreurs, des doublons et des couples non reliés aux vrais oiseaux.

## Objectif V2
Chaque couple doit être lié à de vrais oiseaux déjà enregistrés dans BudgiBook.

## Règle
Un couple =
- 1 mâle existant
- 1 femelle existante
- éventuellement une note

## Comportement attendu
### Lors de la création d’un couple
BudgiBook doit :
1. lire la liste des oiseaux enregistrés
2. filtrer les oiseaux mâles
3. filtrer les oiseaux femelles
4. permettre de sélectionner un mâle existant
5. permettre de sélectionner une femelle existante
6. enregistrer le couple

## Pourquoi c’est important
Cela permet :
- d’éviter les fautes de nom
- d’éviter les doublons
- d’avoir une vraie logique d’élevage
- de pouvoir ensuite relier facilement les nichées aux bons couples

## Ce qu’il faudra ensuite
Après cette amélioration :
1. lier les nichées aux vrais couples
2. améliorer l’affichage du dashboard
3. préparer plus tard les photos et la vraie version vendable

## Règle produit
Toujours garder le système simple et rapide à utiliser.
