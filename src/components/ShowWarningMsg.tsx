import { toast } from 'react-toastify';
import { FaExclamationTriangle } from 'react-icons/fa';

export const showWarningToast = (message: string) => {
  toast(
    <div className="flex items-center gap-2">
      <FaExclamationTriangle className="text-amber-400 text-sm shrink-0" />
      <span className="text-white font-bold text-xs tracking-wide">
        {message}
      </span>
    </div>,
    {
      toastId: 'plan-full-warning',
      icon: false,
      closeButton: false,
    }
  );
};