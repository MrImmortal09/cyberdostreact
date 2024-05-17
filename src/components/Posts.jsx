import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Forum.css'; 
import post from '../assets/post.jpeg';

const Post = ({ initialUpvotes }) => {
  const [upvoteCount, setUpvoteCount] = useState(initialUpvotes);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replyIndex, setReplyIndex] = useState(null);
  const [nestedReplyText, setNestedReplyText] = useState("");
  const [nestedReplyIndex, setNestedReplyIndex] = useState({ parentIndex: null, replyIndex: null });
  const [hasJoined, setHasJoined] = useState(false);
  const [image, setImage] = useState(null);

  const handleUpvote = () => {
    setUpvoteCount(prevCount => prevCount + 1);
  };

  const handleDownvote = () => {
    setUpvoteCount(prevCount => prevCount - 1);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleNestedReplyChange = (e) => {
    setNestedReplyText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "" || image) {
      setMessages([...messages, { text: inputText, user: "saloni.expl", likes: 0, upvotes: 0, downvotes: 0, replies: [], image }]);
      setInputText("");
      setImage(null);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleReplyClick = (index) => {
    setReplyIndex(index);
  };

  const handleNestedReplyClick = (parentIndex, replyIndex) => {
    setNestedReplyIndex({ parentIndex, replyIndex });
  };

  const handleReplySend = () => {
    if (replyText.trim() !== "") {
      const updatedMessages = [...messages];
      updatedMessages[replyIndex].replies.push({ text: replyText, user: "saloni.expl", upvotes: 0, downvotes: 0, replies: [] });
      setMessages(updatedMessages);
      setReplyIndex(null);
      setReplyText("");
    }
  };

  const handleNestedReplySend = () => {
    const { parentIndex, replyIndex } = nestedReplyIndex;
    if (nestedReplyText.trim() !== "") {
      const updatedMessages = [...messages];
      updatedMessages[parentIndex].replies[replyIndex].replies.push({ text: nestedReplyText, user: "saloni.expl", upvotes: 0, downvotes: 0 });
      setMessages(updatedMessages);
      setNestedReplyIndex({ parentIndex: null, replyIndex: null });
      setNestedReplyText("");
    }
  };

  const handleJoinClick = () => {
    setHasJoined(true);
  };

  return (
    <div id="posts">
      <div className="input-container">
        <input 
          type="file" 
          id="imageInput" 
          style={{ display: 'none' }} 
          onChange={handleImageChange} 
        />
        <label htmlFor="imageInput" className="add-image">+</label>
        <input
          type="text"
          className="transparent-input"
          placeholder="What Happened Just Now?"
          value={inputText}
          onChange={handleInputChange}
        />
        <button className="send-btn" onClick={handleSendMessage}>Post</button>
      </div>
      <div className="post-section">
        <div className="post-side">
          <i className="fa fa-arrow-up side-arrow up-arrow" onClick={handleUpvote}></i>
          <span className="upvote-count">{upvoteCount}</span>
          <i className="fa fa-arrow-down side-arrow down-arrow" onClick={handleDownvote}></i>
        </div>
        <div className="post-content">
          <div className="post-header">
            <div className="post-info">
              <i className="far fa-user-circle"></i>
              <span className='post-reddit'>postTitle</span>
              <span className="posted-by">. Posted by </span>
              <span className="post-user">user123</span>
              <span className="post-time">5 hours ago</span>
            </div>
            <div className="post-join">
              {!hasJoined && (
                <button className="join" onClick={handleJoinClick}>Join</button>
              )}
              {hasJoined && (
                <span className="joined">Joined</span>
              )}
            </div>
          </div>
          <div className="post-main">
            <span className="post-title">Loremipsumdolor sit amet, consectetur adipiscing elit. Sed imperdiet diam vel dui commodo, ut hendrerit mi tempor. Nunc non odio mollis, tincidunt ante convallis</span>
            <img src={post} alt="" />
            <span className="post-link"></span>
          </div>
          <div className="post-footer">
            <div className="post-comments">
              <i className="fas fa-comment-alt"></i>
              <span className='post-comment-count'>10k comments</span>
            </div>
            <div className="post-share">
              <i className="fas fa-share"></i>
              <span className="share-post">Share</span>
            </div>
            <div className="post-save">
              <i className="fas fa-bookmark"></i>
              <span className="save-post">Save</span>
            </div>
            <div className="post-more">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </div>
      </div>
      {hasJoined && (
        <div className="comments-section">
          {messages.map((message, index) => (
            <div key={index} className="comment">
              <div className="post-side">
                <i className="fa fa-arrow-up side-arrow up-arrow"></i>
                <span className="upvote-count">{message.upvotes}</span>
                <i className="fa fa-arrow-down side-arrow down-arrow"></i>
              </div>
              <div className="comment-content">
                <div className="post-header">
                  <div className="post-info">
                    <i className="far fa-user-circle"></i>
                    <span className="post-user">{message.user}</span>
                    <span className="post-time">just now</span>
                  </div>
                </div>
                <div className="comment-text">
                  {message.text}
                  {message.image && <img src={message.image} alt="Attached" className="attached-image" />}
                </div>
                <div className="comment-footer">
                  <button onClick={() => handleReplyClick(index)}>Reply</button>
                </div>
                {replyIndex === index && (
                  <div className="reply-input">
                    <input type="text" value={replyText} onChange={handleReplyChange} placeholder="Add a reply..." />
                    <button onClick={handleReplySend}>Send</button>
                  </div>
                )}
                {message.replies.map((reply, replyIndex) => (
                  <div key={replyIndex} className="nested-reply">
                    <div className="reply-text">{reply.text}</div>
                    <button onClick={() => handleNestedReplyClick(index, replyIndex)}>Reply</button>
                    {nestedReplyIndex.parentIndex === index && nestedReplyIndex.replyIndex === replyIndex && (
                      <div className="nested-reply-input">
                        <input type="text" value={nestedReplyText} onChange={handleNestedReplyChange} placeholder="Add a nested reply..." />
                        <button onClick={handleNestedReplySend}>Send</button>
                      </div>
                    )}
                    {reply.replies.map((nestedReply, nestedReplyIndex) => (
                      <div key={nestedReplyIndex} className="nested-reply">
                        <div className="nested-reply-text">{nestedReply.text}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
