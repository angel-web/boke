import * as React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className="container">
      <div className="con_content">
        <div className="about_box">
          <h2 className="nh1"><span>您现在的位置是：<Link to="/" >网站首页</Link>>><a href="javascript: void(0)" target="_blank">个人相册</a></span><b>个人相册</b></h2>
          <div className="lispic">
            <ul>
              {
                ['01', '02', '03', '04', '03', '06', '01', '02'].map((item, index) => {
                return <li key={index}><Link to="/"><img src={require(`../../images/${item}.jpg`)} /><span>图片展示</span></Link></li>;
              })
              }
            </ul>
          </div>
          <div className="pagelist">页次：1/1 每页25 总数10<a href="javascript: void(0)">首页</a><a href="javascript: void(0)">上一页</a><a href="javascript: void(0)">下一页</a><a href="javascript: void(0)">尾页</a></div>
        </div>
      </div>
      <div className="blank" />
    </div>
  );
}