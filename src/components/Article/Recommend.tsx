import * as React from 'react';
import { ArticleItemProps } from '../../utils/TSInterface';

function Recommend (props: ArticleItemProps) {
  let date: string;
  let time = new Date(props.updateTime || '0');
  date = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDay();
  return (
    <li>
      <a href={props.url}>
        <img src={props.imgUrl || require(`../../images/01.jpg`)} />
        <b>{props.title}</b>
      </a>
      <p>
        <span className="tulanmu">
          <a href="/"><i className="author">{props.author} </i></a>
        </span>
        <span className="tutime">{date}</span>
      </p>
    </li>
  );
}

export default Recommend;
