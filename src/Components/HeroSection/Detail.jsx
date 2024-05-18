import React, { useState } from "react";
import Card from "../../assets/Image/Card.webp";

export default function AddCheckInModal({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="bg-white mt-44 p-6 rounded-lg shadow-lg max-w-lg mx-auto my-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-lg font-semibold">Detail</h2>
          <button className="text-black hover:text-black" onClick={handleClose}>
            <span aria-hidden="true">X</span>
          </button>
        </div>
        <div className="my-10 mx-3 grid grid-cols-2 gap-4">
          <div className="text-container">
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium text-black">Booking ID</div>
              <div className="text-black  ">12345678</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium text-black">Rooms</div>
              <div className="text-black  ">4</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium text-black">Number of Guests</div>
              <div className="text-black  ">4</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium text-black">Booked Date</div>
              <div className="text-black  ">12-03-2024</div>
            </div>
          </div>
          <img
            className="image mr-2 rounded-3xl"
            src={Card}
            alt="Booking Image"
          />
        </div>
        <div className="flex justify-end space-x-3">
          <button
            className="border border-gray-400 rounded-3xl hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 rounded-3xl text-white font-bold py-2 px-6">
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
