import React from 'react';
import './SearchItem.css';

function SearchItem(props) {

  return (
    <div className="card-div-row" key={props.eid}>
      <div><img className="mainImg" src={props.photos[0]} alt={props.title} /></div>
      <div className="card-div-col">
        <a className="title-href" href={props.url}><h2>{props.title}</h2></a>
        <p className="truncated-text">{props.description}</p>
        <div className="card-div-col">
        <a href={props.url}>
          <p className="read-more-href">
            Read more
          </p>
        </a>
        <div className='tags'>
          <h5>Category - </h5>
          {props.tags.map((tag, i, tags) => {
            if (i + 1 === tags.length) {
              return <span key={i}><h5>and </h5><a className="tag-href" href={"/?keyword="+tag}><h5>{tag}</h5></a></span>;
            } else {
              return <span key={i}><a className="tag-href" href={"/?keyword="+tag}><h5>{tag}</h5></a><h5>, </h5></span>;
            }
          }
          )}
        </div>
        </div>
        <div className="card-div-row">
          <img className="smallImg" src={props.photos[1]} alt="hi" />
          <img className="smallImg" src={props.photos[2]} alt="hi" />
          <img className="smallImg" src={props.photos[3]} alt="hi" />
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
