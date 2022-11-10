import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import SearchItem from './SearchItem';

const axios = require('axios').default;

function App() {
  const navigate = useNavigate(); 
  const queryParams = new URLSearchParams(window.location.search);
  const keyword = queryParams.get("keyword");
  const [searchInput, setSearchInput] = useState(keyword);
  const [results, setResults] = useState([]);

  const handleKeyPress = event => {
    if(event.key === 'Enter'){
      setSearchInput(event.target.value); //only update the input when the user hits enter
      navigate("/?keyword=" + event.target.value); //to align the current URL with the search keyword
    }
  };

  const handleShare = () => {
    var dummy = document.createElement('input'),
    text = window.location.href;
    //temporary dummy variable is required in order to allow URL to be copied to clipboard (for sharing)
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    navigator.clipboard.writeText(text)
    document.body.removeChild(dummy);
  }

  useEffect(() => { //retrieve response from API gateway
    axios //.get('http://localhost:9000/trips', { //to use JSON server instead
      .get('https://cpodjpfk1m.execute-api.us-east-1.amazonaws.com/dev/trips', { //uses CloudWatch server
        params: {
          keyword: searchInput
        }
      })
      .then(res => {
        console.log(res)
        setResults(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [searchInput])

  return (
    <div className="App">
      <div className="header">
        <p className="big-title">Where we go?</p>
      </div>
      <input onKeyPress={handleKeyPress} defaultValue={keyword} type="text" name="keyword" placeholder="Find and go..."/>
      <button className="btn" onClick={handleShare}><span className="material-symbols-outlined">content_copy</span></button>
      <div>
        {results.map(result =>
          <div key={result.eid} className="search-item-list">
            <SearchItem title={result.title} description={result.description} photos={result.photos} url={result.url} tags={result.tags}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
