function CommentList({ comments, onEdit, onDelete }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.content}
          <button onClick={() => onEdit(comment)}>Edit</button>
          <button onClick={() => onDelete(comment.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
