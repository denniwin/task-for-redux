import { useEffect, useState } from "react";
import {TestApi} from "../../../common/index";
import {Posts} from "@common/index";
import PostItem from "../post-item/PostItem";
import "./postslist.css";

const PostsList = () => {
  const [ms, setMs] = useState<Posts[]>([]);

  useEffect(() => {
    TestApi.GetPosts()
      .then((el) => {
        setMs(el);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container bootdey">
      <div className="col-md-12 bootstrap snippets">
        <div className="panel">
          <div className="panel-body">
            <textarea
              className="form-control"
              placeholder="What are you thinking?"
            ></textarea>
            <div className="mar-top clearfix">
              <button
                className="btn btn-sm btn-primary pull-right"
                type="submit"
              >
                <i className="fa fa-pencil fa-fw"></i> Share
              </button>
              <a className="btn btn-trans btn-icon add-tooltip" href="#!">
                <i className="fa fa-video-camera"></i>
              </a>
              <a className="btn btn-trans btn-icon  add-tooltip" href="#!">
                <i className="fa fa-camera"></i>
              </a>
              <a className="btn btn-trans btn-icon  add-tooltip" href="#!">
                <i className="fa fa-file"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-body">
            {ms && ms.map((el) => <PostItem post={el} key={el.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
