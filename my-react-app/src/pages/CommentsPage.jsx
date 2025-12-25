import { useEffect, useState } from "react";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment
} from "../api/comments";

function CommentsPage() {
  const TASK_ID = 1;
  const [comments, setComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    const loadComments = async () => {
      const res = await getComments(TASK_ID);
      setComments(res.data);
    };

    loadComments();
  }, []);

  const handleAddOrUpdate = async (data) => {
    if (selectedComment) {
      await updateComment(selectedComment.id, data);
      setSelectedComment(null);
    } else {
      await addComment(TASK_ID, data);
    }

    const res = await getComments(TASK_ID);
    setComments(res.data);
  };

  const handleDelete = async (id) => {
    await deleteComment(id);
    const res = await getComments(TASK_ID);
    setComments(res.data);
  };

  return (
    <div>
      <h2>Comments</h2>

      <CommentForm
        onSubmit={handleAddOrUpdate}
        selectedComment={selectedComment}
      />

      <CommentList
        comments={comments}
        onEdit={setSelectedComment}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default CommentsPage;
