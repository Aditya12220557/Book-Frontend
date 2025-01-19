
// src/config/theme.js
import { colors } from './Colorsolors';

export const theme = {
  colors,
  button: {
    primary: {
      bg: `bg-${colors.primary.main}`,
      text: `text-${colors.text.white}`,
      hover: `hover:bg-${colors.primary.hover}`,
      border: `border-${colors.primary.main}`,
    },
    secondary: {
      bg: `bg-${colors.background.primary}`,
      text: `text-${colors.text.primary}`,
      hover: `hover:bg-${colors.secondary[100]}`,
      border: `border-${colors.secondary.main}`,
    }
  },
  card: {
    base: `bg-${colors.background.primary} rounded-lg shadow-lg`,
    highlighted: `bg-${colors.primary.main} text-${colors.text.white}`,
  },
  section: {
    primary: `bg-${colors.background.primary}`,
    secondary: `bg-${colors.background.secondary}`,
  }
};
