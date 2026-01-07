### sheet 实例上的可用方法说明

**setSelectionCellsStyle**

> 设置所选单元格的样式

```js
setSelectionCellsStyle(selectedCells, cellStyle);
```

> 参数说明

```js
// selectedCells：选中的单元格区域，接受的类型
[number, number, number, number];

// cellStyle：单元格样式配置对象，接受的类型
{
  text?: {
    fontFamily: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    backgroundColor: string;
    color: string;
    align: string;
  };
  border?: {
    solid: boolean;
    color: string;
    bold: boolean;
  };
}
```

**setCellImageMeta**

> 设置单元格的图像数据

```js
setCellImageMeta(cell, image);
```

> 参数说明

```js
// cell：单元格对象
// image：图像对象，接受的类型：File
```

**setCellMeta**

> 设置单元格的元数据，单元格将根据元数据类型及值进行渲染

```js
setCellMeta(cell, cellMeta, needDraw);
```

> 参数说明

```js
// cell：单元格对象
// cellMeta：单元格元数据对象，接受的类型：CellTextMeta | CellImageMeta | CellDiagonalMeta | null
export type CellTextMetaData = string;

export type CellTextMeta = CellMeta<"text", CellTextMetaData>;

export type CellImageMetaFill = "fill" | "contain" | "cover" | "none";

export type CellImageMetaData = {
  img: CanvasImageSource,
  width: number,
  height: number,
  fit: CellImageMetaFill,
};

export type CellImageMeta = CellMeta<"image", CellImageMetaData>;

export type CellDiagonalMetaData = {
  direction: "top-left" | "top-right" | "bottom-left" | "bottom-right",
  value: string[],
};

export type CellDiagonalMeta = CellMeta<"diagonal", CellDiagonalMetaData>;

export interface CellMeta<T, D> {
  type: T;
  data: D;
  [key: string]: any;
}

export type Meta = CellTextMeta | CellImageMeta | CellDiagonalMeta | null;

// needDraw：是否立即重绘，接受的类型：boolean
```

**merge**

> 合并单元格

```js
merge([minRowIndex, maxRowIndex, minColIndex, maxColIndex]);
```

**unmerge**

> 取消合并

```js
unmerge([minRowIndex, maxRowIndex, minColIndex, maxColIndex]
```

**getCell**

> 获取单元格对象

```js
getCell(rowIndex, colIndex);
```

**adjust**

> 修正布局，常用场景是设置的单元格数据会此单元格的宽高会发生变化后，调用此方法修正 sheet 的布局

**clearCellMeta**

> 清空单元格
