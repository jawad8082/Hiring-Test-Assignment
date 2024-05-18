import React, { useState } from "react";
import logo from "../../assets/Image/logo.png";
import bg from "../../assets/Image/Bg.png";
import profile from "../../assets/Image/profile.png";
import Card from "../../assets/Image/Card.webp";
import help from "../../assets/Image/Info.png";
import notification from "../../assets/Image/notification.png";
import AddCheckInModal from "../AddCheckModal/AddCheckInModal";
import Detail from "./Detail";
import data from './data.json';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const { cards } = data;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDetail = (card) => {
    setCurrentCard(card);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setCurrentCard(null);
  };

  return (
    <div className="bg-white">
      <div className="bg-white shadow-md p-2 flex rounded-3xl  justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="rounded-full"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
            Feedback
          </button>
          <button className="text-zinc-500">
            <img
              src={notification}
              alt="Notification Icon"
              className="inline"
            />
          </button>
          <button className="text-zinc-500">
            <img
              src={help}
              alt="Help Icon"
              className="inline"
            />
          </button>
          <div className="relative">
            <img
              src={profile}
              alt="User Avatar"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div
          className="rounded-3xl text-white p-5 text-left"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "250px",
            position: "relative",
            backgroundColor: "rgb(42 39 45 / 54%)"
          }}
        >
          <h1 className="text-4xl mt-4 font-bold">Hi! 👋 James Doe</h1>
          <p className="text-2xl">Lorem ipsum dolor sit amet, something important to say here</p>
          <button
            className="mt-8 bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-5 rounded-3xl"
            onClick={handleOpenModal}
          >
            Add Check In
          </button>
          {isModalOpen && <AddCheckInModal onClose={handleCloseModal} />}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className="relative">
              <img className="rounded-lg w-full z-10" src={Card} alt={card.name} />
              {card.checkedIn && (
                <button className="absolute top-2 right-2 bg-purple-500 hover:bg-purple-700 text-white py-2 px-3 rounded-full text-sm"  onClick={() => handleOpenDetail(card)}>
                  Checked In
                </button>
              )}
            </div>
            <div className="mt-4 text-left">
              <h2 className="text-xl font-bold">{card.name}</h2>
              <p className="text-zinc-500">{card.date}</p>
            </div>

            {isDetailOpen && currentCard?.id === card.id && <Detail onClose={handleCloseDetail} />}
            <div className="flex items-center mt-4">
              <img className="w-10 h-10 rounded-full mr-2" src={profile} alt="Profile Picture" />
              <div>
                <p className="text-lg text-black"><span className="font-semibold">Owner: </span> {card.owner.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
