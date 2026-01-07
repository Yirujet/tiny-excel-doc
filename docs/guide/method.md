### Description of available methods on the sheet instance.

**setSelectionCellsStyle**

> Set the style of the selected cells.

```js
setSelectionCellsStyle(selectedCells, cellStyle);
```

> Parameter Description

```js
// selectedCells：The selected cell range, and the accepted data types.
[number, number, number, number];

// cellStyle：Cell style configuration object, accepted types
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

> Set the image data for the cell.

```js
setCellImageMeta(cell, image);
```

> Parameter Description

```js
// cell：Cell object
// image：Image object, accepted type: File
```

**setCellMeta**

> Set the cell's metadata; the cell will be rendered according to the metadata type and value.

```js
setCellMeta(cell, cellMeta, needDraw);
```

> Parameter Description

```js
// cell：Cell object
// cellMeta：Cell metadata object, accepted types: CellTextMeta | CellImageMeta | CellDiagonalMeta | null
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

// needDraw：Whether to redraw immediately; accepted type: boolean
```

**merge**

> Merge cells

```js
merge([minRowIndex, maxRowIndex, minColIndex, maxColIndex]);
```

**unmerge**

> Cancel merge

```js
unmerge([minRowIndex, maxRowIndex, minColIndex, maxColIndex]
```

**getCell**

> Get the cell object.

```js
getCell(rowIndex, colIndex);
```

**adjust**

> Correcting the layout: This method is commonly used to adjust the sheet layout when the cell data is modified, causing changes to the cell's width and height.

**clearCellMeta**

> Clear the cell
