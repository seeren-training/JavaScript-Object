# Service

## Template update
 * button `add`
 * button `remove` sur chaque column

## addEventListener
 * Cherche l'élément dans le document (dans le composant)
 * `addEventListener` pose un problème, vous evez fixer la valeur du this avec une fonction flechée.

```js
culumn.addEventListener("click", () => {
this.removeColumn();
});
 ```
##

* Add: au click ça ajoute une column et l'affichage se rafraichit.
    * Vous devez utiliser le service pour créer une column.
    * Appeler display relance l'affichage (attention à innerHTML += qui ajoute au lien de remplacer le  contenu)








