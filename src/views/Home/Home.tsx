import * as React from 'react';
import { BlogList } from '../../components/Article/ArticleItem';

export default function () {
  return (
    <div className="container container-home">
      <div className="container">
          <BlogList />
          <div className="r_box f_r">
            <div className="tit01">
              <h3 className="tit">关注我</h3>
              <div className="gzwm">
                <ul>
                  <li><a className="email" href="#" target="_blank">我的电话</a></li>
                  <li><a className="qq" href="#mailto:admin@admin.com" target="_blank">我的邮箱</a></li>
                  <li><a className="tel" href="#" target="_blank">我的QQ</a></li>
                  <li><a className="prize" href="#">个人奖项</a></li>
                </ul>
              </div>
            </div>
            <div className="tuwen">
              <h3 className="tit">图文推荐</h3>
              <ul>
                {
                  [1, 2, 3, 4].map(item => {
                    return <li key={item}><a href="/"><img src={require(`../../images/0${item}.jpg`)} /><b>住在手机里的朋友</b></a>
                      <p><span className="tulanmu"><a href="/">手机配件</a></span><span className="tutime">2015-02-15</span></p>
                    </li>;
                  })
                }
              </ul>
            </div>
            <div className="ph">
              <h3 className="tit">点击排行</h3>
              <ul className="rank">
                <li><a href="/jstt/bj/2017-07-13/784.html" title="【心路历程】请不要在设计这条路上徘徊啦" target="_blank">【心路历程】请不要在设计这条路上徘徊啦</a></li>
                <li><a href="/news/s/2016-05-20/751.html" title="IP要突破2000+了" target="_blank">IP要突破2000+了</a></li>
                <li><a href="/jstt/web/2015-07-03/749.html" title="帝国cms首页、自定义页面如何实现分页" target="_blank">帝国cms首页、自定义页面如何实现分页</a></li>
                <li><a href="/jstt/web/2015-02-25/745.html" title="【已评选】给我模板PSD源文件，我给你设计HTML！" target="_blank">【已评选】给我模板PSD源文件，我给你设计HTML！</a></li>
                <li><a href="/jstt/bj/2015-02-14/744.html" title="【郑重申明】本站只提供静态模板下载！" target="_blank">【郑重申明】本站只提供静态模板下载！</a></li>
                <li><a href="/news/s/2015-01-23/741.html" title="【孕期日记】生活本该如此" target="_blank">【孕期日记】生活本该如此</a></li>
                <li><a href="/jstt/bj/2015-01-09/740.html" title="【匆匆那些年】总结个人博客经历的这四年…" target="_blank">【匆匆那些年】总结个人博客经历的这四年…</a></li>
                <li><a href="/jstt/web/2015-01-01/739.html" title=" 2014年度优秀个人博客排名公布" target="_blank"> 2014年度优秀个人博客排名公布</a></li>
                <li><a href="/jstt/web/2014-12-18/736.html" title="2014年度优秀个人博客评选活动" target="_blank">2014年度优秀个人博客评选活动</a></li>
                <li><a href="/jstt/css3/2014-12-09/734.html" title="使用CSS3制作文字、图片倒影" target="_blank">使用CSS3制作文字、图片倒影</a></li>
                <li><a href="/jstt/css3/2014-11-18/733.html" title="【分享】css3侧边栏导航不同方向划出效果" target="_blank">【分享】css3侧边栏导航不同方向划出效果</a></li>
                <li><a href="/jstt/bj/2014-11-06/732.html" title="分享我的个人博客访问量如何做到IP从10到600的(图文)" target="_blank">分享我的个人博客访问量如何做到IP从10到600的(图文)</a></li>
              </ul>
            </div>
            <div className="ad"> <img src="images/03.jpg" /> </div>
          </div>
        </div>
    </div>
  );
}