# [JQuery](https://jquery.com/)

*  🔖 **Introduction**
*  🔖 **DOM**
*  🔖 **Ajax**

___

## 📑 Introduction

Déjà installé avec Bootstrap dans nos projets. Jquery propose un ensemble de méthode pour raccourcir la manipulation de l'accès aux données.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/jquery.png)

La librairie est datée et aujourd'hui controversée sur son intérêt réel, en effet des frameworks permettent d'éviter complètement les thématiques DOM et rendent JQuery inutile et obsolète. Cela reste une librairie à connaitre dans le cadre de JavaScript natif.
___

## 📑 DOM

JQuery est pratique pour manipuler l'API DOM. Assez verbeuse et soufrant parfois de problème de compatibilité, JQuery propose des alternatives syntaxiques. Les thématiques qui nous intéressent sont celles que nous avons observés:

* [Accéder aux éléments](https://api.jquery.com/category/traversing/tree-traversal/): https://api.jquery.com/category/traversing/tree-traversal/
* [Modifier les éléments](https://api.jquery.com/category/manipulation/): https://api.jquery.com/category/manipulation/
* [Accéder aux attributs](https://api.jquery.com/attr/): https://api.jquery.com/attr/
* [Ajouter des évènements](https://api.jquery.com/category/events/): https://api.jquery.com/category/events/

___

👨🏻‍💻 Manipulation

Après lecture de la documentation, remplacez vos instructions par les raccourcis proposés par la librairie.

___

## 📑 [Ajax](https://api.jquery.com/jQuery.ajax/)

Une fonctionnalité phare de cette librairie est le raccourcis syntaxique sur le concept ajax.

### 🏷️ **GET**

```js
$.ajax({
   type: 'GET',
   url: 'some-url',
   success: (data) => mySucessFunction(data),
   error: (error) => myErrorFunction(error)
});
```

### 🏷️ **Post**

```js
$.ajax({
    type: 'POST',
    url: 'some-url',
    data: JSON.stringify(myModel),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: (data) => mySucessFunction(data),
    error: (error) => myErrorFunction(error)
});
```

### 🏷️ **Post File**

```js
$.ajax({
    type : 'POST',
    url: 'some-url',
    data : formData,
    processData: false,
    contentType: false,
    success: (data) => mySucessFunction(data),
    error: (error) => myErrorFunction(error)
});
```

___

👨🏻‍💻 Manipulation

Utilisez $.ajax et ses variantes en remplacement de vos manipulations de XMLHttpRequest.