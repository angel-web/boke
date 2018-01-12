import * as React from 'react';
import { BlogList } from '../../components/Article/ArticleItem';
import Recommend from '../../components/Article/Recommend';
import { getData } from '../../utils/api';
import { ArticleItemProps } from '../../utils/TSInterface';

class Home extends React.Component<{}, {recommendArticle: Array<ArticleItemProps>, articleList: Array<ArticleItemProps>}> {
  constructor (props: {}) {
    super(props);
    this.state = {
      recommendArticle: [],
      articleList: []
    };
  }

  async componentWillMount () {
    let articleList = await getData('/api/article/list');
    let recommendArticle = await getData('/api/article/list/recommend');
    console.log(recommendArticle);
    this.setState({recommendArticle, articleList});
  }
  render () {
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
                    this.state.recommendArticle.map(item => {
                      return <Recommend key={item.id} {...item}/>;
                    })
                  }
                </ul>
              </div>
              <div className="ph">
                <h3 className="tit">点击排行</h3>
                <ul className="rank">
                  {
                    this.state.articleList.map(item => {
                      return (<li key={item.id}>
                        <a href={item.url} title={item.title} target="_blank">{item.title}</a>
                      </li>);
                    })
                  }
                  
                </ul>
              </div>
              <div className="ad"> <img src="images/03.jpg" /> </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;