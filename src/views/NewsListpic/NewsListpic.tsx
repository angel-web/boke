import * as React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className="container">
      <div className="con_content">
        <div className="about_box">
          <h2 className="nh1"><span>您现在的位置是：<Link to="/" target="_blank">网站首页</Link>>><a href="javascript: void(0)" target="_blank">个人日记</a></span><b>个人日记</b></h2>
          <ul className="dtxw box">
            {[ '01', '02', '03', '04', '01', '03'].map((item, index) => {
              return (
                <li key={index}>
                  <div className="dttext f_l">
                    <div className="dttext_z">
                      <h2><a href="/">个人博客模板古典系列之——江南墨卷</a></h2>
                      <p>个人博客模板古典系列之——江南墨卷个人博客模板古典系列之——江南墨卷个人博客模板古典系列之——江南墨卷原汁原味重现经典....</p>
                      <span>2017-3-10</span>
                    </div>
                  </div>
                  <div className="xwpic f_r"><a href="/"><img src={require(`../../images/${item}.jpg`)} /></a></div>
                </li>
              );
            })} 
          </ul>
          <div className="pagelist">页次：1/1 每页25 总数10<a href="javascript: void(0)">首页</a><a href="javascript: void(0)">上一页</a><a href="javascript: void(0)">下一页</a><a href="javascript: void(0)">尾页</a></div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
}