import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content , onDeleteComment}: CommentProps) => {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/marcelovdsm.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelo Victor</strong>
              <time title='27 de março ás 10:59' dateTime='2023-03-27 10:59:34'>Cerca de 1h atrás</time>
              
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}