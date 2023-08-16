import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { GetComment, GetPostAuthor } from "../../../api/posts.api";
import { Comments } from "../../../models/comments";
import { Posts } from "../../../models/posts";
import { User } from "../../../models/user";
import CommentItem from "../comment-item/CommentItem";
import avatar from "../img/avatar.png";

const PostItem = ({ post }: {post: Posts}) => {

  const [user, setUser] = useState<User>()
  const [comments, setComment] = useState<Comments[]>([])
  const [isShow, setIsShow] = useState<boolean>(false)
  
  useEffect(() => {
    GetPostAuthor(post.userId)
      .then(el => {
        setUser(el);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [post])
    
  useEffect(() => {
    GetComment(post.id)
      .then(el => {
        setComment(el);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [post])

  const showComments = () => {
    setIsShow(prev => !prev)
  }

  return (
    <div className="media-block">
      <a className="media-left" href="#!">
        <img className="img-circle img-sm" alt="Profile" src={avatar} />
      </a>
      <div className="media-body">
        <div className="mar-btm">
          <a
            href="#!"
            className="btn-link text-semibold media-heading box-inline"
          >
            {user && user.name}
          </a>
        </div>
        <h5>{post.title}</h5>
        <p>{post.body} </p>
        <div className="pad-ver">
          <div className="btn-group">
            <a className="btn btn-sm btn-default btn-hover-success" href="#!About">
            <FontAwesomeIcon icon={faThumbsUp} style={{color: "#005eff",}} />
            </a>
            <a className="btn btn-sm btn-default btn-hover-danger" href="#!">
            <FontAwesomeIcon icon={faThumbsDown} />
            </a>
          </div>
            <button  className="btn btn-sm btn-default btn-hover-success" onClick={showComments}>
            {!isShow ? 'Show comments' : 'Hide comments'}
          </button>
        </div>
        <hr />
        
        {isShow && (comments && comments.map(el => <CommentItem key={el.id} data={el}/>))}
      </div>
    </div>
  );
};

export default PostItem;
