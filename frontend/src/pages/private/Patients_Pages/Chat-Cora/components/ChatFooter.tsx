import React from "react";

interface ChatFooterProps {
  isTyping: boolean;
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  submitMessageUser: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ChatFooter: React.FC<ChatFooterProps> = ({
  isTyping,
  newMessage,
  setNewMessage,
  submitMessageUser,
}) => (
  <footer className="bg-[#1F4A69] border-t border-gray-300 p-4 absolute bottom-0 w-full">
    <form className="flex items-center" onSubmit={submitMessageUser}>
      <input
        disabled={isTyping}
        onChange={(e) => setNewMessage(e.target.value)}
        type="text"
        name="message"
        value={newMessage}
        placeholder="Escribe aquí..."
        className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
      />
      <button
        disabled={isTyping}
        type="submit"
        className={`${
          isTyping && "disabled:brightness-90 cursor-not-allowed"
        } bg-indigo-500 text-white py-2 px-4 flex justify-center items-center   rounded-md ml-2 `}
      >
        Enviar
      </button>
    </form>
  </footer>
);

export default ChatFooter;
