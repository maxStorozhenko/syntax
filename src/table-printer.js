/**
 * The MIT License (MIT)
 * Copyright (c) 2015-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

import Table from 'cli-table3';

/**
 * Wrapper class over `cli-table3` with default options preset.
 */
export default class TablePrinter {
  constructor(options) {
    return new Table(
      Object.assign({}, options, {
        style: {
          head: ['blue'],
          border: ['gray'],
        },
      })
    );
  }
}
