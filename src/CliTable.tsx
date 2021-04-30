import { render } from 'ink';
import React from 'react';
import { EventEmitter } from 'ayemitter';
import { TableOptions } from './TableOptions';
import { CliTableComponent } from './CliTableComponent';
import { doubleBorder, noBorder } from './tableBorderCharacters';

export class CliTable {
  private renderResult?: ReturnType<typeof render>;
  private logEmitter = new EventEmitter<string[]>();

  constructor(
    private options: Partial<TableOptions> = {}
  ) {
  }

  public static createNoBorderTable(options?: Partial<TableOptions>) {
    const table = new CliTable({...options, chars: noBorder});
    table.render();
    return table;
  }

  public static createSingleBorderTable(options?: Partial<TableOptions>) {
    const table = new CliTable({...options});
    table.render();
    return table;
  }

  public static createDoubleBorderTable(options?: Partial<TableOptions>) {
    const table = new CliTable({...options, chars: doubleBorder});
    table.render();
    return table;
  }

  public render() {
    this.renderResult = render(<CliTableComponent logEmitter={this.logEmitter} options={this.options} />);
  }

  public log(...line: string[]) {
    this.logEmitter.emit(line);
  }

  public unmount() {
    this.renderResult?.unmount();
  }

  public cleanup() {
    this.renderResult?.cleanup();
  }

  public clear() {
    this.renderResult?.clear();
  }
}