import React from 'react';
import dragon from '../../../assets/dragon/fire.png';

const SecondScoreboard = ({ gameTime }) => (
  <div
    id="second-scoreboard"
    className="absolute w-[530px] h-[30px] top-[71px] left-[695px] bg-[#3b89ff] flex justify-center items-center text-white relative"
  >
    <span className="text-xl">{gameTime}</span> {/* Hiển thị gameTime từ props */}

    <div className="absolute left-0 flex space-x-1">
      {[...Array(4)].map((_, index) => (
        <img
          key={index}
          src={dragon}
          alt="Dragon"
          className="w-[30px] h-[30px] object-contain"
        />
      ))}
    </div>

    <div className="absolute right-0 flex space-x-1">
      {[...Array(4)].map((_, index) => (
        <img
          key={index}
          src={dragon}
          alt="Dragon"
          className="w-[30px] h-[30px] object-contain"
        />
      ))}
    </div>
  </div>
);

export default SecondScoreboard;
