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
      riderColors.fg.muted = "#8b949e";      // DEFAULT_DOC_COMMENT from XML
      
      // Highlight colors
      riderColors.accent.fg = "#79c0ff";     // CARET_COLOR from XML
      
      // Syntax highlighting colors based on the GitHub_Dark.xml
      
      // Functions (purple/lilac in original theme)
      riderColors.scale.purple[2] = "#d2a8ff"; // DEFAULT_FUNCTION_DECLARATION
      
      // Keywords (red in original theme)
      riderColors.scale.red[3] = "#ff7b72";   // DEFAULT_KEYWORD
      
      // Strings (light blue in original theme)
      riderColors.scale.blue[1] = "#a5d6ff";  // DEFAULT_STRING
      
      // Variables/identifiers (orange in original theme)
      riderColors.scale.orange[2] = "#ffa657"; // DEFAULT_IDENTIFIER
      
      // Types/constants (blue in original theme)
      riderColors.scale.blue[2] = "#79c0ff";  // DEFAULT_CONSTANT
      
      // Comments (gray in original theme)
      riderColors.scale.gray[3] = "#8b949e";  // DEFAULT_DOC_COMMENT
      
      // HTML/XML tags (green in original theme)
      riderColors.scale.green[1] = "#7ee787"; // HTML_TAG_NAME
      
      // Active line background
      riderColors.codemirror.activelineBg = "#303030"; // CARET_ROW_COLOR from XML
      
      return riderColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
