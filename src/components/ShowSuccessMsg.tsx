import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';

const ShowSuccessToast = (message: string) => {
  toast.success(
    <div className="flex items-center gap-2.5">
      <FaCheckCircle className="text-[#a6e22e] text-base shrink-0" />
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

export default ShowSuccessToast;