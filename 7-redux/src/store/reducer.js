import * as ActionType from './actionTypes';

const initialState = {
  isLoading: false,
  activeStep: 0,
  steps: [
    'Основная информация',
    'Способ доставки',
    'Способ оплаты',
    'Подтверждение',
  ],
  deliveryMethods: [
    {
      title: 'DHL',
      period: '5-7 дней',
      image:
        'https://olatorera.com/wp-content/sabai/File/files/9b7d31e9e61aefda9d9932a510dd3f95.png',
    },
    {
      title: 'FedEx',
      period: '5-7 дней',
      image:
        'https://www.pngitem.com/pimgs/m/4-41925_fedex-logo-fedex-hd-png-download.png',
    },
    {
      title: 'UPS',
      period: '7-11 дней',
      image:
        'https://www.ohiobar.org/globalassets/home/member-benefits/ups/ups-logo-2014---small-rgb.jpg',
    },
    {
      title: 'Почта России',
      period: '300 дней и ночей',
      image:
        'https://icdn.lenta.ru/images/0000/0165/000001655648/pic_1358668888.jpg',
    },
  ],
  paymentMethods: [
    {
      title: 'VISA',
      image:
        'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0014/5140/brand.gif?itok=I-QAxA7y',
    },
    {
      title: 'MasterCard',
      image:
        'https://cdn.vox-cdn.com/thumbor/6v89As4DbkgYpHhH_eYLbv-zkE0=/0x64:1000x731/1400x933/filters:focal(0x64:1000x731):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/50124045/mastercard_logo.0.png',
    },
  ],
  formData: {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    phone: '',
    deliveryMethod: '',
    paymentMethod: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PREV_FORM_STEP:
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };

    case ActionType.NEXT_FORM_STEP:
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };

    case ActionType.SET_CONTACTS_DATA:
      return {
        ...state,
        activeStep: state.activeStep + 1,
        formData: { ...state.formData, ...action.payload },
      };

    case ActionType.SET_DELIVERY_METHOD:
      return {
        ...state,
        formData: { ...state.formData, deliveryMethod: action.payload },
      };

    case ActionType.SET_PAYMENT_METHOD:
      return {
        ...state,
        formData: { ...state.formData, paymentMethod: action.payload },
      };

    case ActionType.CREATE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionType.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activeStep: 4,
      };

    case ActionType.CREATE_ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
        activeStep: -1,
      };

    default:
      return state;
  }
};
