import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Forum.css';
import post from '../assets/post.jpeg';

const Post = ({ initialUpvotes }) => {
  const [upvoteCount, setUpvoteCount] = useState(initialUpvotes);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    console.log("Fetching posts...");
    try {
      const response = await axios.get('http://localhost:8080/posts');
      setMessages(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    console.log("Posting message...");
    if (inputText.trim() !== "") {
      try {
        const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOGTeZUsaTLNo5_2wuH9ctCZT3sfu6QcpjoiWGnciXA&s";
        const postTitle = inputText.split(" ").slice(0, 2).join(" "); // Extracting first two words as title
        const postTime = "3 seconds ago"; // Change to 3 seconds ago
  
        const newPost = {
          text: inputText,
          user: "saloni.expl",
          likes: 0,
          upvotes: 0,
          downvotes: 0,
          image: imageUrl,
          title: postTitle,
          time: postTime
        };
  
        await axios.post('http://localhost:8080/posts', newPost);
        fetchPosts(); // Fetch posts again after posting
        setInputText("");
      } catch (error) {
        console.error('Error posting message:', error);
      }
    }
  };
  
  return (
    <div id="posts">
      {/* Display initial post */}
      <div className="post-section">
        <div className="post-content">
          <div className="post-header">
            <div className="post-info">
              <i className="far fa-user-circle"></i>
              <span className="post-reddit">postTitle</span>
              <span className="posted-by">. Posted by </span>
              <span className="post-user">user123</span>
              <span className="post-time">5 hours ago</span>
            </div>
          </div>
          <div className="post-main">
            <span className="post-title">Initial Post Content</span>
            <img src={post} alt="" />
            <span className="post-link"></span>
          </div>
        </div>
      </div>

      {/* Input field for posting */}
      <div className="input-container">
        <input 
          type="text"
          className="transparent-input"
          placeholder="What Happened Just Now?"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="send-btn" onClick={handleSendMessage}>Post</button>
      </div>

      {/* Display fetched posts */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {messages.map((message, index) => (
            <div key={index} className="post-section">
              <div className="post-content">
                <div className="post-header">
                  <div className="post-info">
                    <i className="far fa-user-circle"></i>
                    <span className="post-reddit">postTitle</span>
                    <span className="posted-by">. Posted by </span>
                    <span className="post-user">{message.user}</span>
                    <span className="post-time">5 hours ago</span>
                  </div>
                </div>
                <div className="post-main">
                  <span className="post-title">{message.text}</span>
                  <img src={post} alt="" />
                  <span className="post-link"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
