/* eslint-disable react/jsx-max-props-per-line */
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import LoadingBar from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { prevFormStep } from '../../../store/actionCreators';
import { createOrder } from '../../../store/actions';
import { formDataSelector, isLoadingSelector } from '../../../store/selectors';
import Divider from '../../Divider';

export default () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const orderData = useSelector(formDataSelector);

  const onPrevHandle = () => dispatch(prevFormStep());
  const onCompleteHandle = () => dispatch(createOrder(orderData));

  return (
    <Paper component="form" style={{ padding: 16 }}>
      <Typography style={{ marginBottom: 24 }} variant="h6">
        Подтверждение данных
      </Typography>
      <Grid alignItems="center" container justify="center" spacing={4}>
        <Grid
          container
          item
          spacing={2}
          style={{ paddingLeft: 24, paddingRight: 24 }}
        >
          <Grid container item justify="space-between" xs={12}>
            <Grid item>
              <Typography>Получатель</Typography>
            </Grid>
            <Grid item>
              <Typography>
                {orderData.country}, {orderData.city}, {orderData.firstName}{' '}
                {orderData.lastName}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container item justify="space-between" xs={12}>
            <Grid item>
              <Typography>Контактный телефон</Typography>
            </Grid>
            <Grid item>
              <Typography>{orderData.phone}</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container item justify="space-between" xs={12}>
            <Grid item>
              <Typography>Доставщик</Typography>
            </Grid>
            <Grid item>
              <Typography>{orderData.deliveryMethod}</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container item justify="space-between" xs={12}>
            <Grid item>
              <Typography>Способ оплаты</Typography>
            </Grid>
            <Grid item>
              <Typography>{orderData.paymentMethod}</Typography>
            </Grid>
          </Grid>
        </Grid>
        {isLoading ? (
          <Grid alignItems="center" container item justify="center">
            <LoadingBar />
          </Grid>
        ) : (
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
                disableElevation
                fullWidth
                onClick={onCompleteHandle}
                size="large"
                variant="contained"
              >
                Оплатить
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};
