## 配置

### Excel 配置参数

| 参数   | 说明                  | 类型                  | 可选值 | 默认值                |
| ------ | --------------------- | --------------------- | ------ | --------------------- |
| name   | Excel 名称            | string                |        | `Excel-${Date.now()}` |
| sheets | Excel 中的 sheet 列表 | Sheet.SheetInstance[] |        |                       |

### Sheet 配置参数

| 参数          | 说明           | 类型                            | 可选值 | 默认值           |
| ------------- | -------------- | ------------------------------- | ------ | ---------------- |
| name          | Sheet 名称     | string                          |        | Sheet-${index++} |
| fixedRowIndex | 冻结行终止行号 | number                          |        | 1                |
| fixedColIndex | 冻结列终止列号 | number                          |        | 1                |
| rowCount      | 行数           | number                          |        | 100              |
| colCount      | 列数           | number                          |        | 100              |
| cells         | 单元格数据     | Cell.CellInstance[][]           |        |                  |
| mergedCells   | 合并单元格数据 | CellRange[]                     |        |                  |
| margin        | 画布边距       | {right: number; bottom: number} |        |                  |
| mode          | 渲染模式       | "edit"\|"view"                  |        |                  |
