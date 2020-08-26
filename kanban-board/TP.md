# 🎓  TP - JavaScript es6

**You will be evaluated on your ability to meet the following 📝 functional goals.**

You can use variable, conditionnal, loop, function, DOM, event, AJAX, `webpack`, `class` , `attribut`, `method` and `component based architecture` on a tematic you choose.

## 🐥 Previously

> You've work on the display of encapsulated component with template, model and service layout: what a discovering.

## 🦆 Now

> You're gonna continue on the envrironnement and interaction tematic before to persist data.

___

### 👨🏻‍💻 Environnement

> What do you think about materialize integration? We make links to `node_modules`, a so heavy folder that we will never deploy on a server and we make a link to google fonts to retrieve icons so without the internet: no icons...

📝 Install icons.

📝 Embeed properly materialize css and icons with your `scss` entry point.

📝 Embeed properly materialize js with your `js` entry point.

📝 Remove materialize and icons links on the index.html.

📝 Install Jquery.

🔗 [@see material-design-icons](https://www.npmjs.com/package/material-design-icons)

🔗 [@see material-design-icons stackoverflow](https://stackoverflow.com/questions/50692153/how-do-i-reference-google-material-design-icons-after-npm-install)

🔗 [@see materialize stackoverflow](https://stackoverflow.com/questions/34435926/how-to-include-materialize-css-npm-package-with-webpack)

🔗 [@see jquery](https://www.npmjs.com/package/jquery)

*~Thank's webpack!~*

___

### 👨🏻‍💻 Interaction

> Let's move some columns!

📝 Onclick the '**add**' button must `add a column` on the column list then `refresh the column list view`.

📝 Onclick the '**delete**' button must `remove a column` on the column list then `refresh the column list view`.

💣 Take care about the `this` value when you do not use arrow functions!

*~Thank's DOM~*

___

At this point, the array management is done then you can create, and delete columns.

___

## 🐱 Next

### **Remember**

Web service for json storage: [@see jsonbin](https://jsonbin.io/)

* Login with google or `github` account
* Create a 'bin' (an adress for storage) with some data

```json
{ "data": [] }
```

* Check what is you 'api key' for security access [@see api-keys](https://jsonbin.io/api-keys)

* Read the doc and use it [@see api-reference](https://jsonbin.io/api-reference)

___

### 👨🏻‍💻 Storage

> We need to store our data!

📝 When you **create** or **delete** a column, **update the data** on the web service.

📝 When you **display** the column list you have to **read the data** from the web service then display it.

### **Discover**

You can make this with `XMLHttpRequest` but it's time to discover a shortcut provided by the library `JQuery`!

📝 Read about the syntaxe detail: https://github.com/seeren-training/JavaScript-Object/wiki/04#-ajax

What is the advantage: simplicity and the capacity to make a request in a class and make an action on success or error in an other class. 

*Import JQuery*

```js
import { $ } from 'jquery';
```

*Make request in a service method*

```js
return $.ajax({
   type: 'PUT',
   url: 'some-url',
   headers: {
       "secret-key": "some-secret-key"
   },
   data: JSON.stringify(someModel)
})
```

*Make your refresh on the component when you have to...*

```js
service
  .method()
  .then((data) => { console.log("success", data) })
  .catch((error) => { console.log("error", error); });
```

*~Thank's JQuery~*

> You really do all these task!? Think about user experience with a **loading experience**...

___

## 🕕 Manage your time

There is some logic coming to target your functional goal!

## 🎯 Let's focus