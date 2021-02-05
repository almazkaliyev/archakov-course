import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import OrderForm from './components/OrderForm';
import Stepper from './components/Stepper';

const useStyles = makeStyles({
  root: {
    minWidth: '320px',
    paddingTop: 16,
    paddingBottom: 16,
    boxSizing: 'border-box',
  },
});

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Stepper />
      <OrderForm />
    </Container>
  );
};
