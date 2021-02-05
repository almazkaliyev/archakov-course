/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

export const contactsSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .matches(/^$|^[a-zA-Zа-яА-я _-]+$/, 'Проверьте правильность')
    .required('Обязательное поле'),
  lastName: yup
    .string()
    .trim()
    .matches(/^$|^[a-zA-Zа-яА-я _-]+$/, 'Проверьте правильность')
    .required('Обязательное поле'),
  country: yup
    .string()
    .trim()
    .matches(/^$|^[a-zA-Zа-яА-я _-]+$/, 'Проверьте правильность')
    .required('Обязательное поле'),
  city: yup
    .string()
    .trim()
    .matches(/^$|^[a-zA-Zа-яА-я _-]+$/, 'Проверьте правильность')
    .required('Обязательное поле'),
  phone: yup
    .string()
    .trim()
    .matches(/^$|^((\+7|7|8){1}([0-9]){10})$/, 'Проверьте правильность')
    .required('Обязательное поле'),
});
