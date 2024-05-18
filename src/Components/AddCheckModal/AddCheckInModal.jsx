
import React, { useState } from 'react';
import "./AddCheckInModal.css";
import vector from "../../assets/Image/Vector.png";

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
          <h2 className="text-black text-lg font-semibold">Add Check In</h2>
          <button className="text-black hover:text-zinc-600" onClick={handleClose}>
            <span aria-hidden="true">X</span>
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-zinc-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            className="mt-1 block text-black w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-zinc-700">
            Upload Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <img
                className="mx-auto h-12 w-12 text-zinc-400"
                src={vector}
                alt="Upload icon"
              />
              <div className="flex justify-center text-sm text-zinc-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span className="block text-center">
                    Click or drag file to this area to upload
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
              <p className="text-xs text-zinc-500 text-center">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button className=" border border-gray-400 rounded-3xl hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4" onClick={handleClose}>
            Cancel
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 rounded-3xl text-white font-bold py-2 px-6 ">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}