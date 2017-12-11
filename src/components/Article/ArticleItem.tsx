import * as React from 'react';

const ArticleItem = function ({tagName}: {tagName?: string}) {
  return (
    <div>
      <h3><a href="/jstt/bj/2017-07-13/784.html">【心路历程】请不要在设计这条路上徘徊啦</a></h3>
      <figure><img src={require('../../images/img_1.jpg')} alt="【心路历程】请不要在设计这条路上徘徊啦" /></figure>
      <ul>
        <p> 我整理了一下网友给我的来信，如果你还在踌躇不前，不妨来看看，到底要不要坚持下去！我也欢迎大家给我来信，希望能帮到更多人。</p>
        <a title="【心路历程】请不要在设计这条路上徘徊啦" href="/jstt/bj/2017-07-13/784.html" target="_blank" className="readmore">阅读全文&gt;&gt;</a>
      </ul>
      <p className="dateview"><span>2017-07-13</span><span>作者：</span><span>个人博客：[<a href="/jstt/bj/">心得笔记</a>]</span></p>
    </div>
  );
};

const BlogList = function () {
  return (
    <div className="bloglist f_l" >
      {[1, 2, 3].map((item, index) => {
        return <ArticleItem key={index} />;
      })}
    </div>
  );
};

export { BlogList };
export default ArticleItem;