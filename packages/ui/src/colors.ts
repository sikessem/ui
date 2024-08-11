import tailwindColors from "tailwindcss/colors";

export type ColorName = keyof typeof tailwindColors;
export type ColorValue = string;
export type ColorValues = Record<string | number, ColorValue>;
export type RequiredColorVariants = {
  default: ColorValue;
  light: ColorValues;
  dark: ColorValues;
};
export type ColorVariants = Partial<RequiredColorVariants>;

export { tailwindColors };

export const cssColors = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
} as const;

export default {
  pure: {
    light: tailwindColors.white,
    dark: tailwindColors.black,
  },
  slate: tailwindColors.slate[500],
  "slate-4": {
    light: tailwindColors.slate[400],
    dark: tailwindColors.slate[600],
  },
  "slate-3": {
    light: tailwindColors.slate[300],
    dark: tailwindColors.slate[700],
  },
  "slate-2": {
    light: tailwindColors.slate[200],
    dark: tailwindColors.slate[800],
  },
  "slate-1": {
    light: tailwindColors.slate[100],
    dark: tailwindColors.slate[900],
  },
  "slate-0": {
    light: tailwindColors.slate[50],
    dark: tailwindColors.slate[950],
  },
  gray: tailwindColors.gray[500],
  "gray-4": {
    light: tailwindColors.gray[400],
    dark: tailwindColors.gray[600],
  },
  "gray-3": {
    light: tailwindColors.gray[300],
    dark: tailwindColors.gray[700],
  },
  "gray-2": {
    light: tailwindColors.gray[200],
    dark: tailwindColors.gray[800],
  },
  "gray-1": {
    light: tailwindColors.gray[100],
    dark: tailwindColors.gray[900],
  },
  "gray-0": {
    light: tailwindColors.gray[50],
    dark: tailwindColors.gray[950],
  },
  zinc: tailwindColors.zinc[500],
  "zinc-4": {
    light: tailwindColors.zinc[400],
    dark: tailwindColors.zinc[600],
  },
  "zinc-3": {
    light: tailwindColors.zinc[300],
    dark: tailwindColors.zinc[700],
  },
  "zinc-2": {
    light: tailwindColors.zinc[200],
    dark: tailwindColors.zinc[800],
  },
  "zinc-1": {
    light: tailwindColors.zinc[100],
    dark: tailwindColors.zinc[900],
  },
  "zinc-0": {
    light: tailwindColors.zinc[50],
    dark: tailwindColors.zinc[950],
  },
  neutral: tailwindColors.neutral[500],
  "neutral-4": {
    light: tailwindColors.neutral[400],
    dark: tailwindColors.neutral[600],
  },
  "neutral-3": {
    light: tailwindColors.neutral[300],
    dark: tailwindColors.neutral[700],
  },
  "neutral-2": {
    light: tailwindColors.neutral[200],
    dark: tailwindColors.neutral[800],
  },
  "neutral-1": {
    light: tailwindColors.neutral[100],
    dark: tailwindColors.neutral[900],
  },
  "neutral-0": {
    light: tailwindColors.neutral[50],
    dark: tailwindColors.neutral[950],
  },
  stone: tailwindColors.stone[500],
  "stone-4": {
    light: tailwindColors.stone[400],
    dark: tailwindColors.stone[600],
  },
  "stone-3": {
    light: tailwindColors.stone[300],
    dark: tailwindColors.stone[700],
  },
  "stone-2": {
    light: tailwindColors.stone[200],
    dark: tailwindColors.stone[800],
  },
  "stone-1": {
    light: tailwindColors.stone[100],
    dark: tailwindColors.stone[900],
  },
  "stone-0": {
    light: tailwindColors.stone[50],
    dark: tailwindColors.stone[950],
  },
  red: tailwindColors.red[500],
  "red-4": {
    light: tailwindColors.red[400],
    dark: tailwindColors.red[600],
  },
  "red-3": {
    light: tailwindColors.red[300],
    dark: tailwindColors.red[700],
  },
  "red-2": {
    light: tailwindColors.red[200],
    dark: tailwindColors.red[800],
  },
  "red-1": {
    light: tailwindColors.red[100],
    dark: tailwindColors.red[900],
  },
  "red-0": {
    light: tailwindColors.red[50],
    dark: tailwindColors.red[950],
  },
  orange: tailwindColors.orange[500],
  "orange-4": {
    light: tailwindColors.orange[400],
    dark: tailwindColors.orange[600],
  },
  "orange-3": {
    light: tailwindColors.orange[300],
    dark: tailwindColors.orange[700],
  },
  "orange-2": {
    light: tailwindColors.orange[200],
    dark: tailwindColors.orange[800],
  },
  "orange-1": {
    light: tailwindColors.orange[100],
    dark: tailwindColors.orange[900],
  },
  "orange-0": {
    light: tailwindColors.orange[50],
    dark: tailwindColors.orange[950],
  },
  amber: tailwindColors.amber[500],
  "amber-4": {
    light: tailwindColors.amber[400],
    dark: tailwindColors.amber[600],
  },
  "amber-3": {
    light: tailwindColors.amber[300],
    dark: tailwindColors.amber[700],
  },
  "amber-2": {
    light: tailwindColors.amber[200],
    dark: tailwindColors.amber[800],
  },
  "amber-1": {
    light: tailwindColors.amber[100],
    dark: tailwindColors.amber[900],
  },
  "amber-0": {
    light: tailwindColors.amber[50],
    dark: tailwindColors.amber[950],
  },
  yellow: tailwindColors.yellow[500],
  "yellow-4": {
    light: tailwindColors.yellow[400],
    dark: tailwindColors.yellow[600],
  },
  "yellow-3": {
    light: tailwindColors.yellow[300],
    dark: tailwindColors.yellow[700],
  },
  "yellow-2": {
    light: tailwindColors.yellow[200],
    dark: tailwindColors.yellow[800],
  },
  "yellow-1": {
    light: tailwindColors.yellow[100],
    dark: tailwindColors.yellow[900],
  },
  "yellow-0": {
    light: tailwindColors.yellow[50],
    dark: tailwindColors.yellow[950],
  },
  lime: tailwindColors.lime[500],
  "lime-4": {
    light: tailwindColors.lime[400],
    dark: tailwindColors.lime[600],
  },
  "lime-3": {
    light: tailwindColors.lime[300],
    dark: tailwindColors.lime[700],
  },
  "lime-2": {
    light: tailwindColors.lime[200],
    dark: tailwindColors.lime[800],
  },
  "lime-1": {
    light: tailwindColors.lime[100],
    dark: tailwindColors.lime[900],
  },
  "lime-0": {
    light: tailwindColors.lime[50],
    dark: tailwindColors.lime[950],
  },
  green: tailwindColors.green[500],
  "green-4": {
    light: tailwindColors.green[400],
    dark: tailwindColors.green[600],
  },
  "green-3": {
    light: tailwindColors.green[300],
    dark: tailwindColors.green[700],
  },
  "green-2": {
    light: tailwindColors.green[200],
    dark: tailwindColors.green[800],
  },
  "green-1": {
    light: tailwindColors.green[100],
    dark: tailwindColors.green[900],
  },
  "green-0": {
    light: tailwindColors.green[50],
    dark: tailwindColors.green[950],
  },
  emerald: tailwindColors.emerald[500],
  "emerald-4": {
    light: tailwindColors.emerald[400],
    dark: tailwindColors.emerald[600],
  },
  "emerald-3": {
    light: tailwindColors.emerald[300],
    dark: tailwindColors.emerald[700],
  },
  "emerald-2": {
    light: tailwindColors.emerald[200],
    dark: tailwindColors.emerald[800],
  },
  "emerald-1": {
    light: tailwindColors.emerald[100],
    dark: tailwindColors.emerald[900],
  },
  "emerald-0": {
    light: tailwindColors.emerald[50],
    dark: tailwindColors.emerald[950],
  },
  teal: tailwindColors.teal[500],
  "teal-4": {
    light: tailwindColors.teal[400],
    dark: tailwindColors.teal[600],
  },
  "teal-3": {
    light: tailwindColors.teal[300],
    dark: tailwindColors.teal[700],
  },
  "teal-2": {
    light: tailwindColors.teal[200],
    dark: tailwindColors.teal[800],
  },
  "teal-1": {
    light: tailwindColors.teal[100],
    dark: tailwindColors.teal[900],
  },
  "teal-0": {
    light: tailwindColors.teal[50],
    dark: tailwindColors.teal[950],
  },
  cyan: tailwindColors.cyan[500],
  "cyan-4": {
    light: tailwindColors.cyan[400],
    dark: tailwindColors.cyan[600],
  },
  "cyan-3": {
    light: tailwindColors.cyan[300],
    dark: tailwindColors.cyan[700],
  },
  "cyan-2": {
    light: tailwindColors.cyan[200],
    dark: tailwindColors.cyan[800],
  },
  "cyan-1": {
    light: tailwindColors.cyan[100],
    dark: tailwindColors.cyan[900],
  },
  "cyan-0": {
    light: tailwindColors.cyan[50],
    dark: tailwindColors.cyan[950],
  },
  sky: tailwindColors.sky[500],
  "sky-4": {
    light: tailwindColors.sky[400],
    dark: tailwindColors.sky[600],
  },
  "sky-3": {
    light: tailwindColors.sky[300],
    dark: tailwindColors.sky[700],
  },
  "sky-2": {
    light: tailwindColors.sky[200],
    dark: tailwindColors.sky[800],
  },
  "sky-1": {
    light: tailwindColors.sky[100],
    dark: tailwindColors.sky[900],
  },
  "sky-0": {
    light: tailwindColors.sky[50],
    dark: tailwindColors.sky[950],
  },
  blue: tailwindColors.blue[500],
  "blue-4": {
    light: tailwindColors.blue[400],
    dark: tailwindColors.blue[600],
  },
  "blue-3": {
    light: tailwindColors.blue[300],
    dark: tailwindColors.blue[700],
  },
  "blue-2": {
    light: tailwindColors.blue[200],
    dark: tailwindColors.blue[800],
  },
  "blue-1": {
    light: tailwindColors.blue[100],
    dark: tailwindColors.blue[900],
  },
  "blue-0": {
    light: tailwindColors.blue[50],
    dark: tailwindColors.blue[950],
  },
  indigo: tailwindColors.indigo[500],
  "indigo-4": {
    light: tailwindColors.indigo[400],
    dark: tailwindColors.indigo[600],
  },
  "indigo-3": {
    light: tailwindColors.indigo[300],
    dark: tailwindColors.indigo[700],
  },
  "indigo-2": {
    light: tailwindColors.indigo[200],
    dark: tailwindColors.indigo[800],
  },
  "indigo-1": {
    light: tailwindColors.indigo[100],
    dark: tailwindColors.indigo[900],
  },
  "indigo-0": {
    light: tailwindColors.indigo[50],
    dark: tailwindColors.indigo[950],
  },
  violet: tailwindColors.violet[500],
  "violet-4": {
    light: tailwindColors.violet[400],
    dark: tailwindColors.violet[600],
  },
  "violet-3": {
    light: tailwindColors.violet[300],
    dark: tailwindColors.violet[700],
  },
  "violet-2": {
    light: tailwindColors.violet[200],
    dark: tailwindColors.violet[800],
  },
  "violet-1": {
    light: tailwindColors.violet[100],
    dark: tailwindColors.violet[900],
  },
  "violet-0": {
    light: tailwindColors.violet[50],
    dark: tailwindColors.violet[950],
  },
  purple: tailwindColors.purple[500],
  "purple-4": {
    light: tailwindColors.purple[400],
    dark: tailwindColors.purple[600],
  },
  "purple-3": {
    light: tailwindColors.purple[300],
    dark: tailwindColors.purple[700],
  },
  "purple-2": {
    light: tailwindColors.purple[200],
    dark: tailwindColors.purple[800],
  },
  "purple-1": {
    light: tailwindColors.purple[100],
    dark: tailwindColors.purple[900],
  },
  "purple-0": {
    light: tailwindColors.purple[50],
    dark: tailwindColors.purple[950],
  },
  fuchsia: tailwindColors.fuchsia[500],
  "fuchsia-4": {
    light: tailwindColors.fuchsia[400],
    dark: tailwindColors.fuchsia[600],
  },
  "fuchsia-3": {
    light: tailwindColors.fuchsia[300],
    dark: tailwindColors.fuchsia[700],
  },
  "fuchsia-2": {
    light: tailwindColors.fuchsia[200],
    dark: tailwindColors.fuchsia[800],
  },
  "fuchsia-1": {
    light: tailwindColors.fuchsia[100],
    dark: tailwindColors.fuchsia[900],
  },
  "fuchsia-0": {
    light: tailwindColors.fuchsia[50],
    dark: tailwindColors.fuchsia[950],
  },
  pink: tailwindColors.pink[500],
  "pink-4": {
    light: tailwindColors.pink[400],
    dark: tailwindColors.pink[600],
  },
  "pink-3": {
    light: tailwindColors.pink[300],
    dark: tailwindColors.pink[700],
  },
  "pink-2": {
    light: tailwindColors.pink[200],
    dark: tailwindColors.pink[800],
  },
  "pink-1": {
    light: tailwindColors.pink[100],
    dark: tailwindColors.pink[900],
  },
  "pink-0": {
    light: tailwindColors.pink[50],
    dark: tailwindColors.pink[950],
  },
  rose: tailwindColors.rose[500],
  "rose-4": {
    light: tailwindColors.rose[400],
    dark: tailwindColors.rose[600],
  },
  "rose-3": {
    light: tailwindColors.rose[300],
    dark: tailwindColors.rose[700],
  },
  "rose-2": {
    light: tailwindColors.rose[200],
    dark: tailwindColors.rose[800],
  },
  "rose-1": {
    light: tailwindColors.rose[100],
    dark: tailwindColors.rose[900],
  },
  "rose-0": {
    light: tailwindColors.rose[50],
    dark: tailwindColors.rose[950],
  },
};
