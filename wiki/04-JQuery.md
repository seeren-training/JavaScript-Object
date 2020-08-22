# [JQuery](https://jquery.com/)

*  🔖 **Introduction**
*  🔖 **Fonction**
*  🔖 **DOM**
*  🔖 **Ajax**

___

## 📑 Introduction

Jquery propose un ensemble de méthode pour raccourcir la manipulation de l'accès aux données.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/jquery.png)

### 🏷️ **Installation**

Je vous recommande d'utiliser un package manager pour l'installation.

```bash
npm install jquery
```

La librairie est datée et aujourd'hui controversée sur son intérêt réel, en effet des frameworks permettent d'éviter complètement les thématiques DOM et rendent JQuery inutile et obsolète. Cela reste une librairie à connaitre dans le cadre de JavaScript natif.

### 🏷️ **Intégration**

Son intégration en es6 se fait en utilisant l'import.

```js
import $ from "jquery";
```

La variable `$` désigne la librairie JQuery, c'est un alias de `jQuery`.

```js
import jQuery from "jquery";
```

___

## 📑 Fonction

Juery est une fonction. En fonction des arguments passés elle possède des comportements différents.

### 🏷️ **Function**

En passant une fonction, jquery exécutera cette fonction quand le document est chargé.

Utile pour démarrer son application en étant certain que tous les éléments sont accéssibles et les autres librairies disponibles.

```js
$(() => {
    console.log("Le document est prêt");
});
```

### 🏷️ **Selector**

C'est la fonction majeur de JQuery, la recherche dans le document à partir d'un selector.

```js
const element = $("#foo");
```

Il n'y a pas de différence pour récupérer un ou plusieurs éléments.

```js
const elements = $(".foo");
```

### 🏷️ **Tag**

En lui fournissant des éléments HTML en string, la fonction renvoie des éléments HTML encapsulés dans un objet jquery. Cela n'insère pas l'élément dans le document, cela correspond à créer l'élément et il devra ensuite être inséré prorammatiquement.

```js
const element = $("<h1>Title</h1>");
```

### 🏷️ **Object**

Sans argument, Jquery renvoie un objet normalisé...

```js
const obj = $();
```

___

👨🏻‍💻 Manipulation

Utilisez jquery en lui passant une fonction dans un endroit approprié.

___

## 📑 DOM

Le DOM en JavaScript est vraiement une thématique indispensable mais à éviter. Pour ces manipulations JQuery offre des racourcis syntaxiques. Nous allons regarder ce qui peut nous être utile.

### 🏷️ **Accéder aux éléments**

Comme détaillé, en passant un selector à jquery il nous renvoie un objet contenant aucun ou plusieurs éléments.

```js
const elements = $(".foo");
```

### 🏷️ **Modifier des éléments**

La méthode `text` sert à injecter du texte dont les caractères spéciaux sont encodées en entité HTML.

```js
$(".foo").text("Hello");
```

La méthode `html` sert à injecter du contenu HTML.

```js
$(".foo").html("<h1>Hello</h1>");
```

### 🏷️ **Créer des éléments**

Comme détaillé, en passant une balise à jquery il nous renvoie un objet contenant cet élément.

```js
const element = $("<h1>Title</h1>");
```

Il est possible de ne déclarer que partiellement la balise.

```js
const element = $("<h1>");
```

Une fois l'élément créé il doit être inséré.

#### **append**

La méthode append qui insère un élément reçu en arguent en dernier position.

```js
$("body").append(element);
```

#### **before/after**

Les méthodes before et after permettent de positionner avant ou après l'élément qui possède la méthode.

```js
$("#foo").before(element);
```

### 🏷️ **Les attributs**

La méthode `attr` permet à la fois d'affecter et de récupérer des attributs.

#### **set**

A la manière de `setAttribute` vous pouvez affecter une valeur précisée en second argument à un attribut dont le nom est spécifié en premier argument.

```js
element.attr("class", "foo");
```
Il est ausi possible de fournir un objet reprsentant les attributs à ajouter.

```js
attr({
    class: "foo",
    id: "bar"
});
```

#### **get**

A la manière de `getAttribute` vous pouvez récupérer un attribut dont le nom est spécifié en premier argument.

```js
const className = element.attr("class");
```

#### **remove**

A la manière de `removeAttribute` vous pouvez suprimmer un attribut dont le nom est spécifié en premier argument.

```js
element.removeAttr("class");
```

### 🏷️ **Les Evènements**

Les évènements possèdent des racourcis syntaxiques intéressants. 

#### **Ajouter**

Pour la plus part des type d'évènements, une méthode spécifique existe.

```js
element.click(() => {
    console.log("clicked");
});
```

Si un type d'évènement ne possède pas de méthode spécifique il existe une méthode générique.


```js
element.bind("click", () => {
    console.log("clicked");
});
```

#### **Retirer**

Pour enlever tous les écouteurs pour tous les types d'évènements la méthode off est d'actualité.

```js
element.off();
```

Il est possible d'ajouter un type spécifique.

```js
element.off("click");
```

#### **Emettre**

Pour déclancher un évènement il suffit d'invoquer la méthode spécifique.

```js
element.click();
```

D'une façon plus générique la méthode trigger doit être utilisé.

```js
element.trigger("click");
```

___

👨🏻‍💻 Manipulation

Après découverte d'une partie de l'API DOM de jquery, remplacez le JavaScript natif par les fontionnalités fournies par jQuery.

___

## 📑 [Ajax](https://api.jquery.com/jQuery.ajax/)

Une fonctionnalité phare de cette librairie est le raccourcis syntaxique sur le concept ajax.

la méthode `ajax` prend en argument un objet qui décrit la requête. Syntaxiquement vous pouvez être en difficulté sur la suite mais le concept est assez simple.

> La valeur de retour de ajax est un objet de type Promise qui possède la méthode `then`, qui renvoie cette promesse et une méthode `catch` qui en fait de même.

En argument de then une fonction de rappel en cas de succès est attendu, la donée est déjà convertie en objet. En argument de error une fonction de rappel en cas d'erreur est atendue.

```js
$.ajax({
   type: 'GET',
   url: 'some-url',
   headers: {
       "secret-key": "some-secret-key"
   },
   data: JSON.stringify(someModel)
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
```

___

👨🏻‍💻 Manipulation

Utilisez $.ajax pour renre votre application fonctionelle en utilisant un service de stockage.
 Respectez la responsabilité de la couche service et component: le service fait la requête, le composant précise la fonction en cas de succès ou d'erreur.
