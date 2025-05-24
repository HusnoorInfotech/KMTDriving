import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-md mx-auto p-6 shadow-2xl rounded-3xl bg-white text-[#3D2C2A] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
        >
          &times;
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
