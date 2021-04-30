export const useTableColumnWidths = (lines: string[][], maxWidths?: Array<number | undefined>) => {
  if (lines.length === 0) {
    return [0];
  }

  return '.'.repeat(lines[0].length).split('').map(_ => 0)
    .map((_, columnId) => {
      let columnWidth = 0;

      for (const line of lines) {
        const cell = line[columnId];
        columnWidth = Math.max(columnWidth, cell.length + 3);
      }

      const colMaxWidth = maxWidths?.[columnId];

      return colMaxWidth === undefined ? columnWidth : Math.min(colMaxWidth, columnWidth);
    });
};
