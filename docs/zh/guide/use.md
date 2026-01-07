## 快速上手

本节将介绍如何在项目中使用 tiny-excel。

### 引入 tiny-excel

> npm

```shell
npm i tiny-excel -S
```

### 使用方式

引入 excel 组件

```js
import Excel from "tiny-excel";
```

渲染

```js
const app = document.querySelector("#app");
const excel = new Excel("test");
excel.mount(app);
```
