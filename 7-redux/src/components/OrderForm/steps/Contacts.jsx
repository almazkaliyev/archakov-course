/* eslint-disable react/jsx-max-props-per-line */
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { setContactsData } from '../../../store/actionCreators';
import { contactsDataSelector } from '../../../store/selectors';
import { contactsSchema } from './validation';

export default () => {
  const defaultValues = useSelector(contactsDataSelector);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(contactsSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setContactsData(data));
  };

  return (
    <Paper
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      style={{ padding: 16 }}
    >
      <Typography style={{ marginBottom: 24 }} variant="h6">
        Контактные данные
      </Typography>
      <Grid alignItems="center" container justify="center" spacing={4}>
        <Grid container item spacing={3}>
          <Grid
            alignItems="stretch"
            container
            item
            justify="space-between"
            spacing={3}
          >
            <Grid item sm={6} xs={12}>
              <TextField
                error={!!errors.firstName}
                fullWidth
                helperText={errors.firstName && errors.firstName.message}
                id="first-name"
                inputRef={register}
                label="Имя"
                name="firstName"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                error={!!errors.lastName}
                fullWidth
                helperText={errors.lastName && errors.lastName.message}
                id="second-name"
                inputRef={register}
                label="Фамилия"
                name="lastName"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid
            alignItems="stretch"
            container
            item
            justify="space-between"
            spacing={3}
          >
            <Grid item sm={4} xs={12}>
              <TextField
                error={!!errors.country}
                fullWidth
                helperText={errors.country && errors.country.message}
                id="country"
                inputRef={register}
                label="Страна"
                name="country"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                error={!!errors.city}
                fullWidth
                helperText={errors.city && errors.city.message}
                id="city"
                inputRef={register}
                label="Город"
                name="city"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                error={!!errors.phone}
                fullWidth
                helperText={errors.phone && errors.phone.message}
                id="phone-number"
                inputRef={register}
                label="Номер телефона"
                name="phone"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            disabled={!formState.isValid || formState.isSubmitting}
            disableElevation
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Далее
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
