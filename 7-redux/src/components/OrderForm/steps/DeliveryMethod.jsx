/* eslint-disable react/jsx-max-props-per-line */
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
  nextFormStep,
  prevFormStep,
  setDeliveryMethodData,
} from '../../../store/actionCreators';
import {
  activeDeliveryMethodSelector,
  deliveryMethodsSelector,
} from '../../../store/selectors';
import Card from '../../Card';

export default () => {
  const dispatch = useDispatch();
  const methods = useSelector(deliveryMethodsSelector);
  const activeMethod = useSelector(activeDeliveryMethodSelector);

  const onPrevHandle = () => dispatch(prevFormStep());
  const onCompleteHandle = () => dispatch(nextFormStep());
  const onSelectHandle = (title) => dispatch(setDeliveryMethodData(title));

  return (
    <Paper component="form" style={{ padding: 16 }}>
      <Typography style={{ marginBottom: 24 }} variant="h6">
        Способ доставки
      </Typography>
      <Grid alignItems="center" container justify="center" spacing={4}>
        <Grid container item spacing={3}>
          {methods &&
            methods.map(({ title, period, image }) => (
              <Grid item key={title} sm={6} xs={12}>
                <Card
                  active={activeMethod === title}
                  caption={`Срок доставки: ${period}`}
                  image={image}
                  onClick={onSelectHandle}
                  title={title}
                />
              </Grid>
            ))}
        </Grid>
        <Grid container item spacing={2}>
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
