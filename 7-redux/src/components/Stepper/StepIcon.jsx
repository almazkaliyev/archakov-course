import { makeStyles } from '@material-ui/core/styles';
import ContactDataIcon from '@material-ui/icons/AccountCircleRounded';
import CompleteOrderIcon from '@material-ui/icons/CheckRounded';
import ShipmentMethodIcon from '@material-ui/icons/LocalShippingRounded';
import PaymentMethodIcon from '@material-ui/icons/PaymentRounded';
import clsx from 'clsx';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.text.secondary,
    zIndex: 1,
    color: palette.primary.contrastText,
    width: 32,
    height: 32,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: palette.primary.main,
  },
  completed: {
    backgroundColor: palette.primary.dark,
  },
}));

export default ({ icon, active, completed }) => {
  const classes = useStyles();

  const icons = {
    1: <ContactDataIcon fontSize="small" />,
    2: <ShipmentMethodIcon fontSize="small" />,
    3: <PaymentMethodIcon fontSize="small" />,
    4: <CompleteOrderIcon fontSize="small" />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(icon)]}
    </div>
  );
};
