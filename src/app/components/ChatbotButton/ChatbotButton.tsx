'use client';
import React, { useState } from 'react';
import './ChatbotButton.css';
import Image from 'next/image';
import { ChatCenteredDots, X } from 'phosphor-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Show floating button only when modal is closed */}
      {!isOpen && (
        <button className="chatbot-btn" onClick={toggleChat}>
          <ChatCenteredDots className="chat-icon" size={24} color="white" weight="fill" />
        </button>
      )}

      {/* Chatbot Modal */}
      <div className={`chatbot-modal ${isOpen ? 'show' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <ChatCenteredDots className="chat-header-icon" size={18} weight="fill" />
            <span>Conversation(s)</span>
          </div>
          {/* Close Button */}
          <button className="close-btn" onClick={toggleChat}>
            <X size={18} weight="bold" />
          </button>
        </div>

        <div className="chatbot-body">
          {/* Image styled as icon */}
          <Image
            className="bot-icon"
            src="/images/pinterestt.png"
            alt="Chatbot Character"
            width={100}
            height={100}
          />
          <p>No previous conversation</p>
          <button className="chat-now-btn">
            <ChatCenteredDots size={16} weight="fill" /> Chat Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;
