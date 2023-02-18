import React, { useState } from "react";

function DiscussionForum() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  function handleCommentChange(event) {
    setNewComment(event.target.value);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
    setComments([...comments, {text: newComment, replies: []}]);
    setNewComment("");
  }

  function handleReplySubmit(event, index) {
    event.preventDefault();
    const reply = event.target.reply.value;
    const newComments = [...comments];
    newComments[index].replies.push(reply);
    setComments(newComments);
  }

  return (
    <div className="max-w-2xl mx-auto mt-4 p-4 bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-2">Discussion Forum</h1>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="space-y-2">
            <p>{comment.text}</p>
            <div className="space-y-2">
              {comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="text-sm pl-4">
                  <p>{reply}</p>
                  <hr />
                </div>
              ))}
            </div>
            <form onSubmit={(event) => handleReplySubmit(event, index)}>
              <textarea name="reply" className="w-full h-16 p-2 bg-gray-100 rounded-md" placeholder="Add a reply" />
              <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Post Reply</button>
            </form>
            <hr />
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="w-full h-24 p-4 bg-gray-100 rounded-md"
          placeholder="Add a comment"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Post Comment</button>
      </form>
    </div>
  );
}

export default DiscussionForum;