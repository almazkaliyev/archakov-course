import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#16b573',
      contrastText: '#000',
    },
    secondary: {
      main: '#f94d1f',
      contrastText: '#000',
    },
    text: {
      primary: 'rgba(255, 255, 255, .9)',
      secondary: '#92bab6',
    },
    background: {
      paper: '#0b2b33',
      default: '#07111a',
    },
  },
  shape: {
    borderRadius: 6,
  },
  overrides: {
    MuiPaper: {
      outlined: {
        borderColor: '#0a3835',
      },
    },
    MuiButton: {
      contained: {
        '&$disabled': {
          color: 'rgba(0, 0, 0, .4)',
          backgroundColor: 'rgba(146, 186, 182, .3)',
        },
      },
    },
  },
});
