# Compiler

*  🔖 **ES6**
*  🔖 **Transpiller**
*  🔖 **Bundler**
*  🔖 **Installation**

> Ce chapitre à l'objectif de nous faire comprendre les enjeuts de la compilation du langage JavaScript, la notion de bundler et l'installation d'outils nous permettant de compiler et d'assembler.
___

## 📑 [ES6](https://www.ecma-international.org/ecma-262/6.0/index.html)

ES6 est la 6 ème version du standard ECMA Script. Cette version apporte un lot de nouvelles fonctionnalités dont cette partie tente de décrire les problématiques qu'elle soulève et des solutions à mettre en place.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/js-classes.jpg)

### 🏷️ **ECMAScript**

ECMAScript est un ensemble de normes concernant les langages de programmation de type script et standardisées par Ecma International. Il s'agit donc d'un standard, dont les spécifications sont mises en œuvre dans différents langages de script, comme JavaScript ou ActionScript. C'est un langage de programmation orienté prototype. 

Nommée ES2015, la version d'ECMAScript 6 a été publiée en juin 2015

**Son support par les navigateurs évolue progressivement**, mais il est possible d'utiliser un transcompilateur (tel que Babel) vers ES5 pour développer dès aujourd'hui en ES6. 

### 🏷️ **Compatibilité**

5 ans plus tard, le support de cette version reste partielle, bien que les script de type module permettre d'importer des valeurs exporté en récupérant le script distant et en ne l'exécutant qu'une fois, les ressources nécessaires pour exécuter un programme mis à l'échelle sont importante. La pratique correspond à assembler les différents scripts en amont.

___

## 📑 [Transpiller](https://babeljs.io/)

Un compilateur source à source, transpileur ou transcompilateur est un type de compilateur qui prend le code source d'un langage de programmation et le compile dans un autre langage de programmation.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/babel.png)

### 🏷️ **Babel**

Avec babel, le code que vous écrivez est transformé et ne s'exécute pas directement. L'impact est qu'il faut compiller à chaque fois que vous modifiez votre code, cela nécessite alors un process en ode développement.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/compile.png)

___

## 📑 [Bundler](https://webpack.js.org/)

L'utilisation de transpiler peut être normalisé avec un outil de type module bundler.

Il prend les dépendances et génère un graphe de dépendances permettant aux développeurs d'utiliser une approche modulaire pour leurs besoins de développement d'applications Web. Il permet de définir des règles, des plugins, etc., pour un projet, il remplace ou complète les task runner comme `gulp` ou `grunt`. L'avantage est d'avoir son code et ses dépendances regroupés dans un espace distribuable facilitant le déploiement.

### 🏷️ **Webpack**

Webpack est un bundler de modules JavaScript open-source. Il est principalement conçu pour JavaScript, mais il peut transformer les actifs frontaux tels que HTML, CSS et images si les chargeurs correspondants sont inclus. webpack prend des modules avec des dépendances et génère des actifs statiques représentant ces modules.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/webpack.png)

___

## 📑 Installation

Nous allons installer le transpileur `babel`, le configurer pour le module bundler` webpack` puis incorporer le préprocesseur `sass` et le chargeur à chaud` browser-sync` pour plus de commodité

### 🏷️ **Init**

```bash
npm init
```

### 🏷️ **Install**

Cet environnement demande une recherche et un respect des procédures d'installation des outils cités.

```bash
npm install @babel/core @babel/preset-env @babel/register babel-loader browser-sync browser-sync-webpack-plugin css-loader file-loader mini-css-extract-plugin node-sass raw-loader sass-loader style-loader webpack webpack-cli --save-dev
```

### 🏷️ **Configuration**

Les packages installés nécessitent une configuration à détailler.

#### **Babel** 

`Babel` a besoin d'une configuration, nous pouvons spécifier une configuration relative au fichier à la racine du répertoire du projet.

*.babelrc`*

```js
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

#### **Webpack**

Nous devons étendre la configuration de configuration par défaut de `WebPack`, nous pouvons spécifier une configuration de fichier à la racine du projet. Nous allons spécifier les points d'entrée pour les fichiers JavaScript et Sass puis le répertoire de sortie. Nous allons spécifier des chargeurs puis configurer des plugins comme `BrowserSyncPlugin` pour le serveur de développement.

*webpack.config.js*

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        './src/app.js',
        './src/app.scss',
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'raw-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    watchOptions: {
        ignored: [
            /node_modules/,
            /dist/,
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['./index.html'],
            server: {
                baseDir: './',
                middleware: (req, res, next) => (-1 === req.url.indexOf('.') && '/' !== req.url
                    ? res.end(res.writeHead(302, { Location: '/' }))
                    : next()),
            },
        }),
    ],
};
```

#### **Scripts**

Nous pouvons spécifier des scripts dans le fichier package.json comme raccourci vers les instructions webpack cli dans l'attribut scripts.

*package.json*

```json
"scripts": {
    "start": "webpack --mode development --watch",
    "build": "webpack --mode production"
},
```

Les scripts que vous stokez peuvent s'exécuter de la façon suivante: `npm start` exécute le script associé à 'start'. Ce mot possède un traitement particulier, pour les noms de scripts personnalisés comme 'build' il faut l’exécuter avec `npm run build`.s

#### **Fichiers**

La configuration attendue que vous ayez la structure de fichiers suivante, adaptez-vous au besoin. Créez les fichiers manquants.

```bash
|_ dist
|_ src
   |_ app.js
   |_ app.scss
|_ .babelrc
|_ index.html
|_ package.json
|_ webpack.config.js
```

Incorporez le style et le script dans le fichier index.html.

*index.html*

```html
<link rel="stylesheet" type="text/css" href="dist/app.css" />
```
```html
<script type="text/javascript" src="dist/app.js"></script>
```

La pile est prête à être utilisée, commencez le développement en exécutant les scripts. Les fichiers générés sont dans le dossier dist lorsque vous enregistrez pour les modifications, vous pouvez les utiliser en toute sécurité  la syntaxe es6.

```bash
npm start
```

___

👨🏻‍💻 Manipulation

Installez, exécutez et décrivez votre environnement de développement

___