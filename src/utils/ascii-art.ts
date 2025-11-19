/**
 * ASCII Art Library for Terminal Cyberpunk Theme
 * Collection of reusable ASCII art patterns and utilities
 */

export const ASCII_ART = {
  // Box borders
  BORDERS: {
    TOP_LEFT: '┌',
    TOP_RIGHT: '┐',
    BOTTOM_LEFT: '└',
    BOTTOM_RIGHT: '┘',
    HORIZONTAL: '─',
    VERTICAL: '│',
    DOUBLE_HORIZONTAL: '═',
    DOUBLE_VERTICAL: '║',
  },

  // Dividers
  DIVIDERS: {
    SINGLE: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    DOUBLE: '═══════════════════════════════',
    DOTTED: '・・・・・・・・・・・・・・・・・',
  },

  // Status indicators
  STATUS: {
    ONLINE: '●',
    OFFLINE: '○',
    PROCESSING: '◉',
    SUCCESS: '✓',
    ERROR: '✗',
    WARNING: '⚠',
  },

  // Bullets and arrows
  BULLETS: {
    TRIANGLE: '▸',
    CIRCLE: '•',
    SQUARE: '▪',
    ARROW_RIGHT: '→',
    ARROW_LEFT: '←',
    CHEVRON_RIGHT: '>',
    CHEVRON_LEFT: '<',
  },

  // Loading animation frames
  LOADING: {
    BLOCKS: ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'],
    SPINNER: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    DOTS: ['⠁', '⠂', '⠄', '⡀', '⡈', '⡐', '⡠'],
  },
};

/**
 * Creates a bordered box around text
 */
export function createBox(text: string, width?: number): string {
  const lines = text.split('\n');
  const maxLength = width || Math.max(...lines.map(l => l.length));

  const top = `┌${'─'.repeat(maxLength + 2)}┐`;
  const bottom = `└${'─'.repeat(maxLength + 2)}┘`;
  const content = lines.map(line =>
    `│ ${line.padEnd(maxLength)} │`
  ).join('\n');

  return `${top}\n${content}\n${bottom}`;
}

/**
 * Creates a divider with optional text
 */
export function createDivider(text?: string, width: number = 60): string {
  if (!text) {
    return '━'.repeat(width);
  }

  const padding = Math.max(0, width - text.length - 4);
  const leftPad = Math.floor(padding / 2);
  const rightPad = Math.ceil(padding / 2);

  return `${'━'.repeat(leftPad)} ${text} ${'━'.repeat(rightPad)}`;
}

/**
 * Creates a loading bar
 */
export function createLoadingBar(
  progress: number, // 0-100
  width: number = 30,
  filled: string = '█',
  empty: string = '░'
): string {
  const filledWidth = Math.round((progress / 100) * width);
  const emptyWidth = width - filledWidth;

  return `[${filled.repeat(filledWidth)}${empty.repeat(emptyWidth)}] ${progress}%`;
}

/**
 * Creates a data table with ASCII borders
 */
export function createTable(
  headers: string[],
  rows: string[][],
  columnWidths?: number[]
): string {
  const widths = columnWidths || headers.map((h, i) =>
    Math.max(h.length, ...rows.map(r => r[i]?.length || 0))
  );

  const separator = '─'.repeat(widths.reduce((a, b) => a + b + 3, 1));
  const headerRow = '│ ' + headers.map((h, i) =>
    h.padEnd(widths[i])
  ).join(' │ ') + ' │';

  const dataRows = rows.map(row =>
    '│ ' + row.map((cell, i) =>
      (cell || '').padEnd(widths[i])
    ).join(' │ ') + ' │'
  ).join('\n');

  return `┌${separator}┐\n${headerRow}\n├${separator}┤\n${dataRows}\n└${separator}┘`;
}

/**
 * Logo templates - customize for your project
 */
export const LOGO_TEMPLATES = {
  // BSIDE logo (for landing pages)
  BSIDE: `
██████╗        ███████╗██╗██████╗ ███████╗
██╔══██╗       ██╔════╝██║██╔══██╗██╔════╝
██████╔╝ ===== ███████╗██║██║  ██║█████╗
██╔══██╗ ===== ╚════██║██║██║  ██║██╔══╝
██████╔╝       ███████║██║██████╔╝███████╗
╚═════╝        ╚══════╝╚═╝╚═════╝ ╚══════╝

          BLOG v1.0.0
     Terminal Cyberpunk Interface`,

  // Small BSIDE logo
  SMALL: `
┌─────────────────┐
│    B-SIDE       │
│    BLOG         │
└─────────────────┘
  `.trim(),

  // Text-based logo (faster loading)
  TEXT: `
┌─────────────────┐
│   B-SIDE BLOG   │
│   Terminal UI   │
└─────────────────┘
  `.trim(),
};

/**
 * Example usage in React/Next.js:
 *
 * import { createBox, ASCII_ART, LOGO_TEMPLATES } from './ascii-art';
 *
 * // In your component:
 * <pre className="text-cyan font-mono text-sm">
 *   {LOGO_TEMPLATES.LARGE_S}
 * </pre>
 *
 * <div className="font-mono text-xs">
 *   {ASCII_ART.STATUS.ONLINE} System Online
 * </div>
 *
 * <pre className="font-mono text-sm">
 *   {createBox('Welcome to the terminal', 40)}
 * </pre>
 */
