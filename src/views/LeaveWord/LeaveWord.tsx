import * as React from 'react';
import Developing from '../../components/Develop/Developing';
import { Link } from 'react-router-dom';

export default function () {
  return (
  <div className="container">
    <div className="con_content">
      <div className="about_box">
        <h2 className="nh1"><span>您现在的位置是：<Link to="/" >网站首页</Link>>><a href="#" target="_blank">信息浏览</a></span><b>留言板</b></h2>
        <div className="f_box">
          <p className="p_title" />
        </div>
        <div className="about_content">
          <Developing />
        </div>
      </div>
    </div>
    <div className="blank" />
  </div>);
}
