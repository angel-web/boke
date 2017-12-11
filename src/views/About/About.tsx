import * as React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className="container">
      <div className="con_content">
        <div className="about_box">
          <h2 className="nh1"><span>您现在的位置是：<Link to="/" >网站首页</Link>>><a href="#" target="_blank">信息浏览</a></span><b>个人简介</b></h2>
          <div className="f_box">
            <p className="a_title">个人简介</p>
            <p className="p_title" />
          </div>
          <ul className="about_content">
            <p> 人生就是一个得与失的过程，而我却是一个幸运者，得到的永远比失去的多。生活的压力迫使我放弃了轻松的前台接待，放弃了体面的编辑，换来虽有些蓬头垢面的工作，但是我仍然很享受那些熬得只剩下黑眼圈的日子，因为我在学习使用Photoshop、Flash、Dreamweaver、ASP、PHP、JSP...中激发了兴趣，然后越走越远....</p>
            <p><img src={require('../../images/01.jpg')} /></p>
            <p>“冥冥中该来则来，无处可逃”。 </p>
          </ul>
        </div>
      </div>
      <div className="blank" />
    </div>
  );
}