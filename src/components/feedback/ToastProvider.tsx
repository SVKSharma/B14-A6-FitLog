'use client';

import { ToastContainer, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom vertical glide transition
const TopGlide = cssTransition({
  enter: 'toast-glide-in',
  exit: 'toast-glide-out',
  appendPosition: false,
});

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      transition={TopGlide}
      theme="dark"
      toastClassName="relative flex p-3.5 min-h-[56px] rounded-2xl justify-between items-center bg-[#181a20] border border-gray-800 text-white font-bold text-sm shadow-[0_12px_30px_rgba(0,0,0,0.35)] cursor-pointer mb-2"
    />
  );
};

export default ToastProvider;