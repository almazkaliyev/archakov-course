/* eslint-disable react/jsx-max-props-per-line */
import { useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { stepperProgressValueSelector } from '../../store/selectors';

const useStyles = makeStyles({
  root: {
    padding: 16,
  },
  currentStepName: {
    fontWeight: 'bold',
  },
});

export default ({ activeStep, steps }) => {
  const classes = useStyles();
  const progressValue = useSelector(stepperProgressValueSelector);

  return (
    <Grid className={classes.root} container justify="flex-start" spacing={3}>
      <Grid item style={{ display: 'inline-flex' }}>
        <Box display="inline-flex" position="relative">
          <CircularProgress
            size={50}
            thickness={5}
            value={progressValue}
            variant="determinate"
          />
          <Box
            alignItems="center"
            bottom={0}
            display="flex"
            justifyContent="center"
            left={0}
            position="absolute"
            right={0}
            top={0}
          >
            <Typography color="textSecondary" variant="caption">
              {`${activeStep + 1}/${steps.length}`}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Typography className={classes.currentStepName}>
          {steps[activeStep]}
        </Typography>
        {activeStep + 1 < steps.length && (
          <Typography color="textSecondary" variant="caption">
            Далее: {steps[activeStep + 1]}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
