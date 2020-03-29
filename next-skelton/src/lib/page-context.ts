import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
      dark: grey[600],
      light: grey[50],
    },
    secondary: {
      main: grey[500],
    },
    text: {
      primary: '#fafafa',
      secondary: '#757575',
    },
  },
});
