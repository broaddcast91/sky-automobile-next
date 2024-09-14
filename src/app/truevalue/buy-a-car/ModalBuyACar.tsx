"use client";
import React from "react";

interface ModalBuyACarProps {
  showBuyCarEnq: boolean;
  setShowBuyCarEnq: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBuyACar: React.FC<ModalBuyACarProps> = ({
  showBuyCarEnq,
  setShowBuyCarEnq,
}) => {
  const handleOnClose = (e: any) => {
    if (e.target.id === "container") setShowBuyCarEnq(false);
  };

  console.log(showBuyCarEnq); // This should correctly log the state value.
  if (!showBuyCarEnq) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 flex items-center justify-center z-[100] backdrop-blur-[3px] overflow-hidden bg-black bg-opacity-50"
    >
      <div className="bg-gray-100 w-full max-w-[45rem] rounded py-4 m-2 md:py-6 select-none">
        Modal Test Drive
      </div>
    </div>
  );
};

export default ModalBuyACar;


