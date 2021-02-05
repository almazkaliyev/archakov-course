/* eslint-disable react/jsx-max-props-per-line */
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
  nextFormStep,
  prevFormStep,
  setPaymentMethodData,
} from '../../../store/actionCreators';
import {
  activePaymentMethodSelector,
  paymentMethodsSelector,
} from '../../../store/selectors';
import Card from '../../Card';

export default () => {
  const dispatch = useDispatch();
  const methods = useSelector(paymentMethodsSelector);
  const activeMethod = useSelector(activePaymentMethodSelector);

  const onPrevHandle = () => dispatch(prevFormStep());
  const onCompleteHandle = () => dispatch(nextFormStep());
  const onSelectHandle = (title) => dispatch(setPaymentMethodData(title));

  return (
    <Paper component="form" style={{ padding: 16 }}>
      <Typography style={{ marginBottom: 24 }} variant="h6">
        Способ оплаты
      </Typography>
      <Grid alignItems="center" container justify="center" spacing={4}>
        <Grid container item spacing={3}>
          {methods &&
            methods.map(({ title, image }) => (
              <Grid item key={title} sm={6} xs={12}>
                <Card
                  active={activeMethod === title}
                  image={image}
                  onClick={onSelectHandle}
                  title={title}
                />
              </Grid>
            ))}
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={3}>
            <Button
              disableElevation
              fullWidth
              onClick={onPrevHandle}
              size="large"
            >
              Назад
            </Button>
          </Grid>
          <Grid item xs={9}>
            <Button
              color="primary"
              disabled={activeMethod === ''}
              disableElevation
              fullWidth
              onClick={onCompleteHandle}
              size="large"
              variant="contained"
            >
              Далее
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
