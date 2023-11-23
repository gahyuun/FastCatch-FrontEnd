import { toast, ToastPosition, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './commonToastLayout.scss';

type toastTheme = 'success' | 'error' | 'info';

interface toastOptionI {
  autoClose: number;
  hideProgressBar: boolean;
  closeButton: boolean;
  position: ToastPosition;
  style: {
    backgroundColor: string;
    color: string;
    gap: string;
    padding: string;
    borderRadius: string;
    fontSize: string;
  };
}

interface toastPropI {
  theme: toastTheme,
  message: string
}

const CommonToastLayout = ({theme, message}: toastPropI) => {
  const [isVisible, setIsVisible] = useState(false);
  let backgroundColor = '';

  const showToast = () => {
    setIsVisible(true);
    backgroundColor = theme === 'success' ? '#0CBC72' : (theme === 'error' ? '#EE5151' : '#5C656C');
    
    const toastOptions: toastOptionI = {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false,
      position: "top-center",
      style: {
        backgroundColor,
        color: 'white',
        gap: '8px',
        padding: '10px 24px',
        borderRadius: '8px',
        fontSize: '14px',
      },
    };

    switch (theme) {
      case 'info':
        toast.info(message, toastOptions);
        break;
      case 'error':
        toast.error(message, toastOptions);
        break;
      case 'success':
        toast.success(message, toastOptions);
        break;
      default:
        break;
    }
  };

  return {
    showToast,
    ToastContainer: isVisible && <ToastContainer/>
  };
};

export default CommonToastLayout;