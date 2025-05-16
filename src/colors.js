const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const lightHighContrastColors = require("@primer/primitives/dist/json/colors/light_high_contrast.json");
const lightColorblindColors = require("@primer/primitives/dist/json/colors/light_colorblind.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const darkHighContrastColors = require("@primer/primitives/dist/json/colors/dark_high_contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/json/colors/dark_colorblind.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");

function getColors(theme) {

  switch(theme) {
    case "light":

      // Temp override until Primitives are updated
      lightColors.success.emphasis = "#1f883d";
      lightColors.btn.primary.bg = lightColors.success.emphasis;
      lightColors.btn.primary.hoverBg = lightColors.scale.green[5];
      lightColors.fg.default = "#1f2328";
      lightColors.fg.muted = "#656d76";

      return lightColors;
    case "light_high_contrast":
      return lightHighContrastColors;
    case "light_colorblind":
        return lightColorblindColors;
    case "dark":
      // Temp override until Primitives are updated
      darkColors.fg.default = "#e6edf3";
      darkColors.fg.muted = "#7d8590";
      darkColors.accent.fg = "#2f81f7";
      darkColors.severe.subtle = "rgba(219, 109, 40, 0.1)";
      darkColors.danger.subtle = "rgba(248, 81, 73, 0.1)";
      darkColors.done.subtle = "rgba(163, 113, 247, 0.1)";
      darkColors.sponsors.subtle = "rgba(219, 97, 162, 0.1)";

      return darkColors;
    case "dark_high_contrast":
      return darkHighContrastColors;
    case "dark_colorblind":
      return darkColorblindColors;
    case "dark_dimmed":
      return dimmedColors;
    case "rider":
      // Clone dark colors as a starting point
      const riderColors = JSON.parse(JSON.stringify(darkColors));
      
      // Configure with GitHub_Dark colors from the JetBrains theme
      // Background and main UI colors
      riderColors.canvas.default = "#1e1e1e"; // CONSOLE_BACKGROUND_KEY from XML
      riderColors.canvas.inset = "#252526";   // From theme.json UI background
      riderColors.canvas.overlay = "#252526"; // Match inset for consistency
      
      // Text colors
      riderColors.fg.default = "#c9d1d9";     // DEFAULT_COMMA from XML
      riderColors.fg.muted = "#8b949e";       // DEFAULT_DOC_COMMENT from XML
      
      // Highlight colors
      riderColors.accent.fg = "#79c0ff";      // CARET_COLOR from XML
      
      // Line highlight
      riderColors.codemirror.activelineBg = "#303030"; // CARET_ROW_COLOR from XML
      
      // Selection background
      riderColors.accent.muted = "#245187";  // SELECTION_BACKGROUND from XML
      
      // Syntax highlighting colors based on the GitHub_Dark.xml
      
      // Functions (purple/lilac in original theme)
      riderColors.scale.purple[2] = "#d2a8ff"; // DEFAULT_FUNCTION_DECLARATION from XML
      riderColors.scale.purple[3] = "#d2a8ff"; // For token colors using scale.purple[3]
      riderColors.scale.purple[5] = "#d2a8ff"; // For token colors using scale.purple[5] (light themes)
      riderColors.scale.purple[6] = "#d2a8ff"; // For token colors using scale.purple[6] (light themes)
      
      // Keywords (red in original theme)
      riderColors.scale.red[2] = "#ff7b72";   // For token colors using scale.red[2]
      riderColors.scale.red[3] = "#ff7b72";   // DEFAULT_KEYWORD from XML
      riderColors.scale.red[5] = "#ff7b72";   // For token colors using scale.red[5] (light themes)
      riderColors.scale.red[6] = "#ff7b72";   // For token colors using scale.red[6] (light themes)
      
      // Error highlighting
      riderColors.scale.red[7] = "#ffa198";   // For error highlighting (light themes)
      
      // Strings (light blue in original theme)
      riderColors.scale.blue[1] = "#a5d6ff";  // DEFAULT_STRING from XML
      riderColors.scale.blue[8] = "#a5d6ff";  // For token colors using scale.blue[8] (light themes)
      
      // Variables/identifiers (orange in original theme)
      riderColors.scale.orange[2] = "#ffa657"; // DEFAULT_IDENTIFIER from XML
      riderColors.scale.orange[6] = "#ffa657"; // For token colors using scale.orange[6] (light themes)
      
      // Types/constants (blue in original theme)
      riderColors.scale.blue[2] = "#79c0ff";  // DEFAULT_CONSTANT from XML
      riderColors.scale.blue[6] = "#79c0ff";  // For token colors using scale.blue[6] (light themes)
      
      // Comments (gray in original theme)
      riderColors.scale.gray[3] = "#8b949e";  // DEFAULT_DOC_COMMENT from XML
      riderColors.scale.gray[4] = "#8b949e";  // For token colors using scale.gray[4]
      riderColors.scale.gray[5] = "#8b949e";  // For token colors using scale.gray[5] (light themes)
      
      // HTML/XML tags (green in original theme)
      riderColors.scale.green[1] = "#7ee787"; // HTML_TAG_NAME from XML
      riderColors.scale.green[2] = "#7ee787"; // For token colors using scale.green[2]
      riderColors.scale.green[6] = "#7ee787"; // For token colors using scale.green[6] (light themes)
      
      // Terminal colors - match console colors from JetBrains theme
      riderColors.ansi.black = "#484f58";       // CONSOLE_BLACK_OUTPUT background
      riderColors.ansi.blackBright = "#6e7681"; // CONSOLE_DARKGRAY_OUTPUT background
      riderColors.ansi.white = "#b1bac4";       // CONSOLE_WHITE_OUTPUT background
      riderColors.ansi.whiteBright = "#f0f6fc"; // CONSOLE_WHITE_OUTPUT foreground
      riderColors.ansi.blue = "#58a6ff";        // CONSOLE_BLUE_OUTPUT foreground
      riderColors.ansi.blueBright = "#79c0ff";  // CONSOLE_BLUE_BRIGHT_OUTPUT foreground
      riderColors.ansi.cyan = "#39c5cf";        // CONSOLE_CYAN_OUTPUT foreground
      riderColors.ansi.cyanBright = "#56d4dd";  // CONSOLE_CYAN_BRIGHT_OUTPUT foreground 
      riderColors.ansi.green = "#3fb950";       // CONSOLE_GREEN_OUTPUT foreground
      riderColors.ansi.greenBright = "#56d364"; // CONSOLE_GREEN_BRIGHT_OUTPUT foreground
      riderColors.ansi.magenta = "#bc8cff";     // CONSOLE_MAGENTA_OUTPUT foreground
      riderColors.ansi.magentaBright = "#d2a8ff"; // CONSOLE_MAGENTA_BRIGHT_OUTPUT foreground
      riderColors.ansi.red = "#ff7b72";         // CONSOLE_RED_OUTPUT foreground
      riderColors.ansi.redBright = "#ffa198";   // CONSOLE_RED_BRIGHT_OUTPUT foreground
      riderColors.ansi.yellow = "#d29922";      // CONSOLE_YELLOW_OUTPUT foreground
      riderColors.ansi.yellowBright = "#e3b341";// CONSOLE_YELLOW_BRIGHT_OUTPUT foreground
      
      return riderColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
