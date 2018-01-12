import Home from '../views/Home/Home';
import About from '../views/About/About';
import Listpic from '../views/Listpic/Listpic';
import NewsListpic from '../views/NewsListpic/NewsListpic';
import Article from '../views/Article/Article';
import LeaveWord from '../views/LeaveWord/LeaveWord';

const Router = [
  {component: Home, path: '/home'},
  {component: About, path: '/about'},
  {component: Listpic, path: '/listpic'},
  {component: NewsListpic, path: '/newslistpic'},
  {component: Article, path: '/article'},
  {component: LeaveWord, path: '/leaveword'}
];

export default Router;