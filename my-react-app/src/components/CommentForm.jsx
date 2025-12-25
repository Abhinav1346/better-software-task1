import { useState } from "react";

function CommentForm({ onSubmit, selectedComment }) {
  const [content, setContent] = useState(
    selectedComment ? selectedComment.content : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">
        {selectedComment ? "Update Comment" : "Add Comment"}
      </button>
    </form>
  );
}

export default CommentForm;
