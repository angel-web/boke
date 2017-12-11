import Home from '../views/Home/Home';
import About from '../views/About/About';
import Listpic from '../views/Listpic/Listpic';
import NewsListpic from '../views/NewsListpic/NewsListpic';

const Router = [
  {component: Home, path: '/home'},
  {component: About, path: '/about'},
  {component: Listpic, path: '/listpic'},
  {component: NewsListpic, path: '/newslistpic'}
];

export default Router;