import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import {TestApi} from "../../common/index";
import {Comments, Posts, User} from "@common/index";
import CommentItem from "../comment-item/CommentItem";
import avatar from "../img/avatar.png";

const PostItem = ({ post }: { post: Posts }) => {
  
  
  const [user, setUser] = useState<User>();
  const [comments, setComment] = useState<Comments[]>([]);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    TestApi.GetAuthor(post.userId)
      .then((el) => {
        setUser(el);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [post]);

  useEffect(() => {
    TestApi.GetComment(post.id)
      .then((el) => {
        setComment(el);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [post]);

  const showComments = () => {
    setIsShow((prev) => !prev);
  };

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
            <a
              className="btn btn-sm btn-default btn-hover-success"
              href="#!About"
            >
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#005eff"}} />
            </a>
            <a className="btn btn-sm btn-default btn-hover-danger" href="#!">
              <FontAwesomeIcon icon={faThumbsDown} />
            </a>
          </div>
          <button
            className="btn btn-sm btn-default btn-hover-success"
            onClick={showComments}
          >
            {!isShow ? "Show comments" : "Hide comments"}
          </button>
        </div>
        <hr />

        {isShow &&
          comments &&
          comments.map((el) => <CommentItem key={el.id} data={el} />)}
      </div>
    </div>
  );
};

export default PostItem;
