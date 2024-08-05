import React from "react";

const ChatPresentation: React.FC = () => (
  <div>
    <div className="flex mb-4 cursor-pointer">
      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2">
        <img
          src="Ellipse_136.png"
          alt="User Avatar"
          className="w-4 h-4 rounded-full"
        />
      </div>
      <div className="flex max-w-80 bg-white rounded-lg p-3 gap-3">
        <p className="text-[#1F4A69]">
          ¡Hola! 💫 Qué gusto verte por aquí, mi nombre es Cora!
        </p>
      </div>
    </div>

    <div className="flex mb-4 cursor-pointer">
      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2">
        <img
          src="Ellipse_136.png"
          alt="User Avatar"
          className="w-4 h-4 rounded-full"
        />
      </div>
      <div className="flex max-w-80 bg-white rounded-lg p-3 gap-3">
        <p className="text-[#1F4A69]">
          No soy un reemplazo de un profesional de la salud. No puedo
          diagnosticar ni recomendar medicaciones. No estoy capacitado para
          situaciones de emergencia.
        </p>
      </div>
    </div>
  </div>
);

export default ChatPresentation;
