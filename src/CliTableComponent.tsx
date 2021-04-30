import React, { useState } from 'react';
import { EventEmitter } from 'ayemitter';
import Table from 'cli-table';
import { Text } from 'ink';
import { useEventChangeHandler } from 'ayemitter-hook';
import { TableOptions } from './TableOptions';
import { useTableColumnWidths } from './useTableColumnWidth';

export const CliTableComponent: React.FC<{
  logEmitter: EventEmitter<string[]>,
  options?: Partial<TableOptions>;
}> = props => {
  const [lines, setLines] = useState<string[][]>([]);
  const colWidths = useTableColumnWidths(lines, props.options?.colWidths);

  useEventChangeHandler(props.logEmitter, line => {
    setLines(oldLines => [...oldLines, line]);
  });

  const table = new Table({
    ...props.options,
    colWidths
  });

  for (const line of lines) {
    table.push(line);
  }

  return (
    <Text>
      {table.toString()}
    </Text>
  )
}