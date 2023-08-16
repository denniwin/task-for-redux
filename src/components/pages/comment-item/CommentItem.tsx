import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {Comments} from "@common/index";
import avatar from "../img/avatar.png";

const CommentItem = ({data}: {data: Comments}) => {
  return (
    <div>
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
              {data.name}
            </a>
          </div>
          <p>{data.body}</p>
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
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
