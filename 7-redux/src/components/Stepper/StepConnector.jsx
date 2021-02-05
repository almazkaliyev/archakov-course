import MuiStepConnector from '@material-ui/core/StepConnector';
import { withStyles } from '@material-ui/core/styles';

export default withStyles(({ palette }) => ({
  alternativeLabel: {
    top: 15,
    left: 'calc(-50% + 15px)',
    right: 'calc(50% + 15px)',
  },
  active: {
    '& $line': {
      backgroundColor: palette.primary.main,
    },
  },
  completed: {
    '& $line': {
      backgroundColor: palette.primary.dark,
    },
  },
  line: {
    height: 2,
    border: 0,
    backgroundColor: palette.text.secondary,
  },
}))(MuiStepConnector);
