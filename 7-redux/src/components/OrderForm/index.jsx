import { useSelector } from 'react-redux';

import { activeStepSelector } from '../../store/selectors';
import Result from './Result';
import Confirmation from './steps/Confirmation';
import Contacts from './steps/Contacts';
import DeliveryMethod from './steps/DeliveryMethod';
import PaymentMethod from './steps/PaymentMethod';

export default () => {
  const activeStep = useSelector(activeStepSelector);

  switch (activeStep) {
    case 0:
      return <Contacts />;
    case 1:
      return <DeliveryMethod />;
    case 2:
      return <PaymentMethod />;
    case 3:
      return <Confirmation />;
    case 4:
      return <Result type="success" />;
    default:
      return <Result type="error" />;
  }
};
