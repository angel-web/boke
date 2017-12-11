import * as React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <div  className="navigation">
          <ul className="menu">
            <li>
              <Link to="/home" >网站首页</Link>
            </li>
            <li><a href="javascript: void(0)">关于我</a>
              <ul>
                <li>
                  <Link to="/about">个人日记</Link>
                </li>
                <li>
                  <Link to="/listpic">个人相册</Link>
                </li>
              </ul>
            </li>
            <li><a href="javascript: void(0)">我的日记</a>
              <ul>
                <li>
                  <Link to="/newslistpic">个人日记</Link>
                </li>
                <li>
                  <Link to="/newslistpic">学习笔记</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/newslistpic">技术文章</Link>
            </li>
            <li>
              <Link to="/newslistpic">给我留言</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;