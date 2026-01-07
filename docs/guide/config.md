## Config

### Excel constructor params

| name   | description         | type                  | optional value | default               |
| ------ | ------------------- | --------------------- | -------------- | --------------------- |
| name   | excel name          | string                |                | `Excel-${Date.now()}` |
| sheets | sheet list in excel | Sheet.SheetInstance[] |                |                       |

### Sheet constructor params

| name          | description     | type                            | optional value | default          |
| ------------- | --------------- | ------------------------------- | -------------- | ---------------- |
| name          | sheet name      | string                          |                | Sheet-${index++} |
| fixedRowIndex | fixed row index | number                          |                | 1                |
| fixedColIndex | fixed col index | number                          |                | 1                |
| rowCount      | row count       | number                          |                | 100              |
| colCount      | col count       | number                          |                | 100              |
| cells         | cells           | Cell.CellInstance[][]           |                |                  |
| mergedCells   | merged cells    | CellRange[]                     |                |                  |
| margin        | canvas margin   | {right: number; bottom: number} |                |                  |
| mode          | render mode     | "edit"\|"view"                  |                |                  |
