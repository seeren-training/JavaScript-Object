# Syntaxe

*  🔖 **Class**
*  🔖 **Attributs**
*  🔖 **Méthodes**
*  🔖 **Manipulation**
*  🔖 **Staticité**

___

## 📑 Class

Dans la programmation orientée objet, une classe est un code  extensible pour créer des objets, fournissant des valeurs (variables ou attributs) et des de comportement (fonctions ou méthodes).

Donc c'est un espace de code identifié pour stocker des variables et des fonctions. Il est possible de demander un nouvel exemplaire de cet espace de code.

### 🏷️ **Nommage**

* Les classes se nomment en utilisant le `PascalCase`.

* Les fichiers se nomment en utilisant le `kebab-case`.

### 🏷️ **Déclaration**

Une classe se déclare avec le mot `class`.

```js
class MyClass { }
```

### 🏷️ **Import/export**

Dans le fichier d'une classe vous allez pouvoir déclarer des variables/attributs et des fonctions/méthodes. Mais vous ne voulez pas utiliser directement la classe dans ce fichier. Vous voulez généralement utiliser une classe dans un autre fichier que celui ou elle est déclarée. `L'import/export est utile pour utiliser un membre importé depuis un autre fichier ou il est exporté`.

*foo.js*

```js
export class Foo { }
```

*index.js*

```js
import { Foo } from './foo';

console.log(Foo);
```

> Utiliser au maximum l'autocomplétion de votre IDE pour ne pas avoir à écrire l'import.

### 🏷️ **Instanciation**

Voyez la classe comme un modèle de code dont vous pouvez obtenir un exemplaire. Un prototype que l'on ne manipule pas et dont l'on souhaite un exemplaire.

> Ainsi une classe est un prototype qu'il faut instancier avec l'opérateur new pour obtenir un objet.

```js
const foo = new Foo();
```

En instanciant notre classe, un objet est construit. L'avantage est qu'une classe stock des états avec les variables/attributs et des comportements avec des méthodes. Nous pourrons alors faire varier ces états unitairement en utilisant l'objet. 


![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/object.jpg)

Par exemple une classe Car peut produire de nombreuses Cars différentes qui se distingues par des états différents, donc une valeur différente pour un attribut déclarés dans la classe.

```js
const polo = new Car();
polo.type = "Polo";

const mini = new Car();
mini.type = "Mini";
```
L'attribut de la classe reste neutre et sa valeur inchangé quand une instance, un objet est manipulé.

### 🏷️ **Constructeur**

Le constructeur d'une classe est semblable à une fonction mais elle a un comportement et un objectif particulier. Son objectif est de construire l'objet en spécifiant ses attributs et leur valeurs. Un constructeur se déclare avec l'identifiant `constructor`.

```js
class Foo {

    constructor () {
        console.log("Foo est instancié");
    }

}
```

Elle est appelée quand la classe est instanciée,

```js
const foo = new Foo();
```

Le constructeur comme une fonction accepte des arguments entrants.

```js
class Car {

    constructor (type) {
        console.log(type);
    }

}
```

```js
const mini = new Car("mini");
```

___

👨🏻‍💻 Manipulation

**Déclarez et exportez les classes** pour les fichiers que vous avez créé précédemment. Pour les components et les services, utilisez cette terminologie en suffixe (HomeComponent, CarService). **Déclarez un constructeur** dans chaque classe.

___

## 📑 Attributs

Les attributs sont déclarés dans la classe et possédés par les instances, ils représentent l'état de ce dernier. En bref, les attributs stockent des informations sur l'instance et sont similaires à des variables mais qui appartiennent à l'objet.

### 🏷️ **Déclaration**

Pour manipuler un attribut ou une méthode d'un objet il faut utiliser le mot this. En effet, l'attribut ou la méthode appartient à l'objet, le mot this représente cet objet, l'objet en cours de manipulation au sein de la classe.

```js
export class Car {

    constructor(type) {
        this.type = type;
        this.color = null;
    }

}
```

### 🏷️ **Utilisation**

Pour manipuler un attribut dans la classe il faut utiliser le mot this, en dehors il faut évidement utiliser l'objet le possédant.

```js
const mini = new Car("mini");
console.log(mini.type);
```

### 🏷️ **Documentation**

JavaScript n'est pas typé, par commodité je vous conseil de documenter votre code source pour profiter d'une autocomplétion plus agréable dans votre éditeur de code.

```js
/**
 * @type {String}
 */
this.type = type;

/**
 * @type {String}
 */
this.color = null;
```

Nous observerons la documentation du constructeur et des méthodes dans une autre partie.

___

👨🏻‍💻 Manipulation

**Déclarez et documentez les attributs de vos modèles**. Vérifiez votre syntaxe en exécutant votre programme et en **logant leur instances**.

___

## 📑 Méthodes

Les méthodes sont déclarés dans la classe et possédés par les instances, ils représentent le comportement de ce dernier. En bref, les méthodes sont similaires à des fonctions mais qui appartiennent à l'objet.

### 🏷️ **Déclaration**

Les méthodes se déclarent de façon semblable au constructeur. Les arguments sont optionnels et par défaut la valeur de retour est undefined.

```js
export class Car {

    constructor(type) {
        this.type = type;
    }

    start(delay) {
        console.log(`The Car ${this.type} start in ${delay} minutes`);
        return true;
    }

}
```

### 🏷️ **Utilisation**

Uné méthode peut accéder aux attributs et aux autres méthodes via le mot `this` et peut posséder des variables locales, disponibles dans la méthode uniquement, comme ses arguments par exemple.

```js
const mini = new Car("mini");
mini.start(5);
```

### 🏷️ **Documentation**

Je vous conseil de documenter vos méthodes pour savoir à l'appel quels sont les types de valeurs attendues ainsi que le type de retour. Vous pouvez décrire le comportement attendu.

```js
/**
 * Start the Car
 * 
 * @param {Number} delay 
 * @returns {Boolean} 
 */
start(delay) {
    return true;
}
```

___

## 📑 Manipulation

C'est un moment important sur lequel nous prendrons le temps. Il faut adapter nos connaissances syntaxiques aux nouvelles acquises. Pour ces différentes manipulations n'intégrez pas la thématique HTTP.

### 👨🏻‍💻 **Components**

Souvenez vous de la responsabilité de la couche component.

* Proposer dans vos composants **une méthode** responsable de faire un rendu graphique.
* Implémentez la solutions retenues en utilisant certainement la couche model.

Un affichage doit avoir lieu.

### 👨🏻‍💻 **Templates**

La mise en forme peut embouteiller vos composants, souvenez vous de l'import/export.

* Proposer une solution afin de **séparer le template du component**.
* Implémentez la solutions retenues en utilisant certainement la couche modele.

### 👨🏻‍💻 **Services**

Souvenez vous de la responsabilité de la couche service.

* Proposer dans vos services des méthodes utiles pour la gestion des models.
* Implémentez les solutions retenues et vérifiez les en exécutant votre code.
* Utilisez vos services dans les composants.

___

## 📑 Staticité

Vous êtes face à un problème de partage de référence. Les composants doivent partager la même instance d'un service pour partager la même donnée et que les affichages et manipulations soient cohérente. La staticité peut nous aider à résoudre ce pronblème.

### 🏷️ **Déclaration**

La staticité change l'appartenance d'une méthode en la faisant appartenir à la casse et pas à l'objet.

```js
export class Foo {

    static hello() {
        console.log("Helloe")
    }

}
```


### 🏷️ **Utilisation**

L'appel de la méthode ne se fait plus à partir de l'objet mais à partir de la classe.

```js
Foo.hello();
```

Comme une méthode statique appartient à la classe, la méthode n'a pas connaissance de l'instance en cours de manipulation et ne peut utiliser le mot this. En l’absence du this, il faut utiliser des variables et les portées pour maintenir un état pour la classe.

```js
const data = {};

export class Foo {

    static getData() {
        return data;
    }

}
```

Avec cette solution, la donnée accédée de façon statique peut être la même partout à travers l'application car elle appartient à la classe et pas à l'objet.

___

👨🏻‍💻 Manipulation

**Utilisez la staticité** pour régler votre problème de partage des données entre les composants.
En dehors de la problématique des requêtes HTTP,**rendez votre application fonctionnelle** en intégrant les évènements. Prenez le temps pour répéter la manipulation de composants, de modèles et prennez de l'aisance sur cette nouvelle syntaxe.
