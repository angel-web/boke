import * as React from 'react';
import { getData } from '../../utils/api';

import { ArticleItemProps } from '../../utils/TSInterface';

const ArticleItem = function (props: ArticleItemProps) {
  console.log(props);
  return (
    <div>
      <h3>{props.title}</h3>
      <figure><img src={props.imgUrl || require('../../images/react_img.png')} alt={props.title} /></figure>
      <ul>
        <p>{props.description}</p>
        <a title="【心路历程】请不要在设计这条路上徘徊啦" href={props.url} target="_blank" className="readmore">阅读全文&gt;&gt;</a>
      </ul>
      <p className="dateview"><span>{props.updateTime}</span><span>作者：{props.author}</span><span>个人博客：[<a href="/jstt/bj/">心得笔记</a>]</span></p>
    </div>
  );
};

class BlogList extends React.Component<object, {articleList: object[]}> {
  constructor (props: object) {
    super(props);
    this.state = {articleList: []};
  }

  async componentWillMount () {
    let articleLists = await getData('/api/article/list');
    this.setState({articleList: articleLists || []});
  }

  render () {
    return (
      <div className="bloglist f_l" >
        {this.state.articleList.map((item: ArticleItemProps, index: number) => {
          return <ArticleItem key={item.id} {...item} />;
        })}
      </div>
    );
  }
}
export { BlogList };
export default ArticleItem;