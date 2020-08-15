# Architecture

*  🔖 **Problème**
*  🔖 **Composant**
*  🔖 **Model**
*  🔖 **Service**

___

## 📑 Problème

Nous avons l'environnement pour partir à l'abordage de la programmation objet, mais sans règles, sans cadre il sera difficile d'atteindre un objectif. 

Nous allons aborder 3 notions pour cadrer notre développement et nous sensibiliser à des concepts fondamentaux présents sur de nombreux frameworks avant d'étudier la syntaxe objet qui sera mise en applications sur ces notions pour atteindre nos objectifs fonctionnels.

___

## 📑 Composant

Un composant à la responsabilité de produire un affichage et de gérer son interaction (les évènements en rapport avec son interaction). **Chaque composant possède un dossier qui lui est propre et contient au minimum une classe. Il est courant d'avoir un fichier de template et un fichier de style pour chaque composant** afin de ne pas stocker toutes ces informations dans le fichier JavaScript.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/component.jpg)

Un composant n'est pas forcement une page, c'est un espace d'affichage qui peut être une partie de la page, cela dépend de votre découpe.

```bash
src
|_app.js
|_app.scss
|_home
    |_home.component.html.js
    |_home.component.js
    |_home.component.scss
|_contact
    |_contact.component.html.js
    |_contact.component.js
    |_contact.component.scss
        |_form
            |_form.component.html.js
            |_form.component.js
            |_form.component.scss
```

___

👨🏻‍💻 Manipulation

Proposer une organisation en créant les fichiers pour chaque composant de votre projet sans créer de sous composants.

___

## 📑 Model

Les composants doivent éventuellement partager et afficher des structures de données réfléchies au préalable: les modèles. Le modèle à la responsabilité de proposer une structure d'information, pas plus. Un modèle est un sujet à manipuler via l'affichage et possède des attributs pertinents pour le système.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/model.jpg)

> Les modèles sont généralement partagés par plusieurs composants.

```bash
src
|_shared
    |_models
      |book.model.js
```

___

👨🏻‍💻 Manipulation

Proposer une organisation en créant les fichiers pour chaque model de votre projet.

___


## 📑 Service

La programmation par composant pose un certain problème: les différents composants doivent souvent partager le même modèle.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/service.jpg)

La couche service à la responsabilité de partager les modèles entre les différents composants et de fournir des méthodes pour le manipuler.

```bash
src
|_shared
    |services
      |book.service.js
```

Le service possède le modèle et propose d'être responsable des opérations de création, édition, suppression, lecture. Pour réussir cela, les composants doivent posséder le même exemplaire du service.

___

👨🏻‍💻 Manipulation

Proposer une organisation en créant les fichiers pour chaque service de votre projet.

___
