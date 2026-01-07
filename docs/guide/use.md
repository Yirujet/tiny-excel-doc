## Get started quickly

This section will introduce how to use tiny-excel in your project.

### Install tiny-excel

> npm

```shell
npm i tiny-excel -S
```

### How to use

Import the Excel component.

```js
import Excel from "tiny-excel";
```

Rendering

```js
const app = document.querySelector("#app");
const excel = new Excel("test");
excel.mount(app);
```
