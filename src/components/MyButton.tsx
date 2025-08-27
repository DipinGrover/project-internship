import React from 'react';

type HelloButtonProps = {
  label: string;
  onClick?: () => void;
};

const HelloButton: React.FC<HelloButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default HelloButton;
