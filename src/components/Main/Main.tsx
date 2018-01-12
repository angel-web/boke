import * as React from 'react';
import NavBar from '../NavBar/NavBar';
class Main extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <header>
          <div className="headtop" />
          <div className="contenttop">
            <div className="logo f_l">小白世界——江南墨卷</div>
            <div className="search f_r">
              <form method="post" name="searchform" id="searchform">
                <input name="keyboard" id="keyboard" className="input_text" defaultValue="请输入关键字" type="text" />
                <input name="Submit" className="input_submit" defaultValue="搜索" type="submit" />
              </form>
            </div>
            <div className="blank" />
            <NavBar />
          </div>
        </header>
        <div className="jztop" />
        {this.props.children || <div className="container">
          <div className="bloglist f_l">
            <h3><a href="/jstt/bj/2017-07-13/784.html">【心路历程】请不要在设计这条路上徘徊啦</a></h3>
            <figure><img src={require('../../images/img_1.jpg')} alt="【心路历程】请不要在设计这条路上徘徊啦" /></figure>
            <ul>
              <p> 我整理了一下网友给我的来信，如果你还在踌躇不前，不妨来看看，到底要不要坚持下去！我也欢迎大家给我来信，希望能帮到更多人。</p>
              <a title="【心路历程】请不要在设计这条路上徘徊啦" href="/jstt/bj/2017-07-13/784.html" target="_blank" className="readmore">阅读全文&gt;&gt;</a>
            </ul>
            <p className="dateview"><span>2017-07-13</span><span>作者：</span><span>个人博客：[<a href="/jstt/bj/">心得笔记</a>]</span></p>
            <h3><a href="/jstt/bj/2015-01-09/740.html">【匆匆那些年】总结个人博客经历的这四年…</a></h3>
            <figure><img src={require('../../images/img_2.jpg')} alt="【匆匆那些年】总结个人博客经历的这四年…" /></figure>
            <ul>
              <p>博客从最初的域名购买，到上线已经有四年的时间了，这四年的时间，有笑过，有怨过，有悔过，有执着过，也有放弃过…但最后还是坚持了下来，时间如此匆匆，等再回过头已来不及去弥补</p>
              <a title="【匆匆那些年】总结个人博客经历的这四年…" href="/jstt/bj/2015-01-09/740.html" target="_blank" className="readmore">阅读全文&gt;&gt;</a>
            </ul>
            <p className="dateview"><span>2015-01-09</span><span>作者：杨青</span><span>个人博客：[<a href="/jstt/bj/">心得笔记</a>]</span></p>
            <h3><a href="/jstt/bj/2014-11-06/732.html">分享我的个人博客访问量如何做到IP从10到600的(图文)</a></h3>
            <figure><img src={require('../../images/img_3.jpg')} alt="分享我的个人博客访问量如何做到IP从10到600的(图文)" /></figure>
            <ul>
              <p>我的个人博客总共展示了三个版本，界面也经历了由“简单”到“复杂”再到“简单”，颜色从“色泽单一”到“五彩斑斓”再到“局部点缀”的过程。原来一年一个版本！而每次改版的契机都是被百度惩罚！界面不要频繁更换！好好检查代码，有没有冗余、结构有没有不合理的地方。</p>
              <a title="分享我的个人博客访问量如何做到IP从10到600的(图文)" href="/jstt/bj/2014-11-06/732.html" target="_blank" className="readmore">阅读全文&gt;&gt;</a>
            </ul>
            <p className="dateview">
              <span>2015-01-09</span><span>作者：杨青</span>
              <span>个人博客：[<a href="/jstt/bj/">心得笔记</a>]</span>
            </p>
          </div>
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
                    return <li key={item}><a href="/"><img src={require(`../../images/0${item}.jpg`)} /><b>{item}住在手机里的朋友</b></a>
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
        </div>}
        <div className="jzend" />
          <footer>
            <div className="footer">
              <div>
                <p style={{textAlign: 'center'}}>备案号：豫ICP备17050473</p>
              </div>
              <div>
                <p style={{textAlign: 'center'}}>
                  本网站样式来源于<a style={{color: '#ccc'}} href="http://www.yangqq.com/download/div/2017-07-16/785.html" target="_blank">杨青个人博客模板</a>
                </p>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

export default Main;