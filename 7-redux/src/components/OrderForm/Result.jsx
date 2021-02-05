import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SuccessIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import clsx from 'clsx';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
    },
    success: {
      color: '#23cc91',
    },
    error: {
      color: '#cc4323',
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  }),
  { name: 'ResultCard' }
);

export default ({ type }) => {
  const classes = useStyles();

  if (type && type === 'success') {
    return (
      <Paper className={clsx(classes.root, classes.success)}>
        <SuccessIcon className={classes.icon} />
        <Typography>Заказ успешно оформлен</Typography>
      </Paper>
    );
  }

  if (type && type === 'error') {
    return (
      <Paper className={clsx(classes.root, classes.error)}>
        <ErrorIcon className={classes.icon} />
        <Typography>Что-то пошло не так</Typography>
      </Paper>
    );
  }

  return null;
};
