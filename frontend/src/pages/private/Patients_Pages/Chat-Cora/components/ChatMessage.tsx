import React from "react";
import { ReactTyped } from "react-typed";

interface MessageProps {
  sender: "user" | "bot";
  message: string;
}

const ChatMessage: React.FC<{ message: MessageProps }> = ({ message }) => (
  <div
    className={`flex ${
      message.sender === "bot" ? "justify-start" : "justify-end"
    } mb-4 cursor-pointer`}
  >
    {message.sender === "bot" && (
      <>
        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2">
          <img
            src="Ellipse_136.png"
            alt="Bot Avatar"
            className="w-4 h-4 rounded-full"
          />
        </div>
        <ReactTyped
          strings={[message.message]}
          showCursor={false}
          typeSpeed={5}
          className="flex max-w-80 rounded-lg p-3 gap-3 bg-light-color text-[#1F4A69]"
        />
      </>
    )}
    {message.sender === "user" && (
      <>
        <div className="flex max-w-80 rounded-lg p-3 gap-3 bg-[#D9FFE3] text-[#1F4A69]'">
          <p>{message.message}</p>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center ml-2">
          <img
            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
            alt="User Avatar"
            className="w-4 h-4 rounded-full"
          />
        </div>
      </>
    )}
  </div>
);

export default ChatMessage;
