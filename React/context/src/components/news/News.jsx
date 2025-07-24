import React from 'react'
import { newsData } from '../../assets/data'


function News(){
    return(
        <>
          {newsData.map((news)=>
                <div className="" key={news.id}>
                    <h1>{news.title}</h1>
                    <p>{news.news}</p>

                </div>
            )
        }
        
        
        </>

      
    )
}


export default News