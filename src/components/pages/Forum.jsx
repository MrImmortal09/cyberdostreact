import React, { useState } from "react";
import "./App.css";
// import yes from "../../assets/im";
// import no from "./images/no.png";
import profile from "../../assets/profile.jpg";

function Forum() {
  const [messages, setMessages] = useState([
    { text: "I recently heard about the payment scanner scam, gosh it hurts to see all these conveniences being used in the wrong direction", user: "Anonymous1", likes: 0, upvotes: 0, downvotes: 0, showReplyButton: true },
    { text: "Even my poor friend got screwed by this, he didn't know we don't need to scan anything to receive payments in any case", user: "Anonymous2", likes: 0, upvotes: 0, downvotes: 0, showReplyButton: true }
  ]);
  
  const [inputText, setInputText] = useState("");
  const [chosenEmoticon, setChosenEmoticon] = useState("");
  const [active, setActive] = useState(false);
  const [replyIndex, setReplyIndex] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setActive(true);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, user: "saloni.expl", likes: 0, upvotes: 0, downvotes: 0 }]);
      setInputText("");
      setActive(false);
    }
  };

  const handleEmoticonSelect = (emoticon) => {
    setChosenEmoticon(emoticon);
    setInputText(inputText + emoticon);
  };

  const handleLikeClick = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  const handleUpvoteClick = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].upvotes += 1;
    setMessages(updatedMessages);
  };

  const handleDownvoteClick = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].downvotes += 1;
    setMessages(updatedMessages);
  };

  const handleReplyClick = (index) => {
    setReplyIndex(index);
  
    const updatedMessages = messages.map((message, i) => {
      if (i === index) {
        return { ...message, showReplyButton: false };
      } else {
        return message;
      }
    });
  
    setMessages(updatedMessages);
  };

  const handleReplyUpvote = (messageIndex, replyIndex) => {
    const updatedMessages = [...messages];
    updatedMessages[messageIndex].replies[replyIndex].upvotes += 1;
    setMessages(updatedMessages);
  };
  
  const handleReplyDownvote = (messageIndex, replyIndex) => {
    const updatedMessages = [...messages];
    updatedMessages[messageIndex].replies[replyIndex].downvotes += 1;
    setMessages(updatedMessages);
  };
  
  

  const handleReplySend = () => {
    if (replyText.trim() !== "") {
      const updatedMessages = [...messages];
      updatedMessages[replyIndex].replies = updatedMessages[replyIndex].replies || [];
      updatedMessages[replyIndex].replies.push({ text: replyText, user: "saloni.expl", upvotes: 0, downvotes: 0 }); // Add upvotes and downvotes properties
      setMessages(updatedMessages);
      setReplyIndex(null);
      setReplyText("");
    }
  };
  

  return (
    <div className="app">
      <div className="panel">
        <h2>Discussion Forum</h2>
        <button>Recent Posts</button>
        <button>Trending Topics</button>
        <button>Featured Posts</button>
      </div>
      <div className="main">
        <div className="input-container">
          <div className="add-image">+</div>
          <input
            type="text"
            className="transparent-input"
            placeholder="What Happened Just Now?"
            value={inputText}
            onChange={handleInputChange}
          />
          <div className="emoticons">
            <span role="img" aria-label="Happy" onClick={() => handleEmoticonSelect("😊")}>😊</span>
            <span role="img" aria-label="Sad" onClick={() => handleEmoticonSelect("😢")}>😢</span>
            <span role="img" aria-label="Heart" onClick={() => handleEmoticonSelect("❤")}>❤️</span>
          </div>
          <button className="send-btn" onClick={handleSendMessage}>Post</button>
        </div>
        <div className="chat">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p>{message.user}: {message.text}</p>
              <div className="reaction-buttons">
                <button className="upvote-btn" onClick={() => handleUpvoteClick(index)}>▲ {message.upvotes}</button>
                <button className="downvote-btn" onClick={() => handleDownvoteClick(index)}>▼ {message.downvotes}</button>
                <button className={`reply-btn ${message.showReplyButton ? '' : 'hide'}`} onClick={() => handleReplyClick(index)}>Reply</button>
                
                {replyIndex === index && (
                  <div className="reply-box">
                    <input
                      type="text"
                      className="reply-input"
                      placeholder="Type your reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <button className="reply-send-btn" onClick={handleReplySend}>Send</button>
                  </div>
                )}
              </div>
              {message.replies && message.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="reply">
                  <p>{reply.user}: {reply.text}</p>
                  <div className="reaction-buttons">
                    <button className="upvote-btn" onClick={() => handleReplyUpvote(index, replyIndex)}>▲ {reply.upvotes}</button>
                    <button className="downvote-btn" onClick={() => handleReplyDownvote(index, replyIndex)}>▼ {reply.downvotes}</button>
                  </div>
                </div>
              ))}

            </div>
          ))}
        </div>
      </div>
      <div className="profile">
        <div className="user-profile">
          <img src={profile} alt="Profile icon" />
          <h3>saloni.expl</h3>
          <div className="details">
            {active ? <span className="active-dot"></span> : <span className="inactive-dot"></span>}
            <p>{active ? "Active" : "Inactive"}</p>
          </div>
          <button className="activity-btn">My Posts Activity</button>
        </div>
      </div>
    </div>
  );
}

export default Forum;
