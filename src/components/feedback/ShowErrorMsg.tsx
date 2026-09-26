import { toast } from 'react-toastify';
import { FaExclamationCircle } from 'react-icons/fa';

const ShowErrorToast = (message: string) => {
  toast.error(
    <div className="flex items-center gap-2.5">
      <FaExclamationCircle className="text-red-500 text-base shrink-0" />
      <span className="text-white font-extrabold text-sm tracking-wide">
        {message}
      </span>
    </div>,
    {
      icon: false,
      closeButton: false,
    }
  );
};

export default ShowErrorToast;