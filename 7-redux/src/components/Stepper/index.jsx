import { useSelector } from 'react-redux';

import MuiStep from '@material-ui/core/Step';
import MuiStepLabel from '@material-ui/core/StepLabel';
import MuiStepper from '@material-ui/core/Stepper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { activeStepSelector, stepsSelector } from '../../store/selectors';
import MobileStepper from './Mobile';
import StepConnector from './StepConnector';
import StepIcon from './StepIcon';

const useStyles = makeStyles(
  {
    root: {
      backgroundColor: 'transparent',
      padding: '24px 10px',
    },
  },
  { name: 'MuiStepper' }
);

const useStepLabelStyles = makeStyles(
  ({ palette }) => ({
    label: {
      '&$completed': {
        color: palette.text.secondary,
      },
    },
    completed: {},
  }),
  { name: 'MuiStepLabel' }
);

export default () => {
  const classes = useStyles();
  const stepLabelClasses = useStepLabelStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const steps = useSelector(stepsSelector);
  const activeStep = useSelector(activeStepSelector);

  if (activeStep < 0 || activeStep >= steps.length) {
    return null;
  }

  if (isMobile) {
    return <MobileStepper activeStep={activeStep} steps={steps} />;
  }

  return (
    <MuiStepper
      activeStep={activeStep}
      alternativeLabel
      classes={classes}
      connector={<StepConnector />}
    >
      {steps.map((label) => (
        <MuiStep key={label}>
          <MuiStepLabel classes={stepLabelClasses} StepIconComponent={StepIcon}>
            {label}
          </MuiStepLabel>
        </MuiStep>
      ))}
    </MuiStepper>
  );
};
