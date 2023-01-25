import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function NewsComp() {
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("business");

  const [news, setNews] = useState([]);
  let navigate = useNavigate(); 


 
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f1311508f16040f7ae5617372ab377ff`)
    .then(response => response.json())
      .then(res =>{
        console.log(res)
        setNews(res.articles);
      } )

      .catch(err => console.error(err));

  },[category,country])



  // useEffect(() => {
    
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-BingApis-SDK': 'true',
  //       'X-RapidAPI-Key': '2f99074611msh9768442af2730e9p161fb4jsn8e331777f95d',
  //       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
  //     .then(response => response.json())
  //     .then(res =>{
  //       console.log(res)
  //       setNews(res.value);
  //     } )

  //     .catch(err => console.error(err));


  // }, [])
  


  return (
    <div>
      <div className="news-selector">
        <div>
          <select 
           value={country}
           onChange={(e) => setCountry(e.target.value)} 
           >
            <option value="us">US</option>
            <option value="in">India</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div>
          <select
          value={category}
          onChange={(e) => setCategory(e.target.value)} 
          >
            <option value="business">business</option>
            <option value="entertainment">entertainment</option>
            <option value="general">general</option>
          </select>
        </div>
      </div>

      {news.length < 0 && <h3> Not found</h3>}
      <div className="news-container">
        {news.map((ele, ind) => {
          return (
            <div className="news-card" key={ind}>
             
              <div className="news-card-content">
                <h3>{ele.title} </h3>
                <img className="newsImg" src={ele.urlToImage} />
                <p> {ele.description}</p>
              </div>
              <button className="viewmore-btn" onClick={()=> navigate('/viewnews',{state:ele})}> More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsComp;
