import React from 'react';

interface MyButtonProps {
  label: string;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default MyButton;
