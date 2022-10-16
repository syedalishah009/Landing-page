import React from 'react'
import './fontomStart.css'

const FontomStarter = () => {
  return (
    <div className="news">
    <img src="images/back-news.png" alt="" className="back-img" />
    <img src="images/back-news-m.png" alt="" className="back-img back-img-m" />
    <div className="news-det">
        <div className="heading">
            <h1>FantomStarter news</h1>
        </div>
        <div className="news-para">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className="news-cards">
            {/* Cards */}
            <div className="news-card">
                <img className='news-card-img' src="images/news-card.png" alt="card img" />
                <div className="news-card-det">
                    <p className="article-sm">Medium Article - Jan 2, 2022</p>
                    <h4 className='news-card-head'>Projet Review Competition SAVAGE - Win up to 28500 $SAVG tokens</h4>
                    <p className="news-card-brief">Written or Video Project Reviews Project reviews are an integral part of “Doing Your Own Research” (DYOR), which is something we strive to promote at Fantom- Starter. Here is your opportunity to win up to 28000 $SAVG by sharing your research with the community! …</p>
                    <a href="" className="read-more">Read more - 2 min read</a>
                </div>
            </div>

            <div className="news-card">
                <img className='news-card-img' src="images/news-card.png" alt="card img" />
                <div className="news-card-det">
                    <p className="article-sm">Medium Article - Jan 2, 2022</p>
                    <h4 className='news-card-head'>Projet Review Competition SAVAGE - Win up to 28500 $SAVG tokens</h4>
                    <p className="news-card-brief">Written or Video Project Reviews Project reviews are an integral part of “Doing Your Own Research” (DYOR), which is something we strive to promote at Fantom- Starter. Here is your opportunity to win up to 28000 $SAVG by sharing your research with the community! …</p>
                    <a href="" className="read-more">Read more - 2 min read</a>
                </div>
            </div>

            <div className="news-card">
                <img className='news-card-img' src="images/news-card.png" alt="card img" />
                <div className="news-card-det">
                    <p className="article-sm">Medium Article - Jan 2, 2022</p>
                    <h4 className='news-card-head'>Projet Review Competition SAVAGE - Win up to 28500 $SAVG tokens</h4>
                    <p className="news-card-brief">Written or Video Project Reviews Project reviews are an integral part of “Doing Your Own Research” (DYOR), which is something we strive to promote at Fantom- Starter. Here is your opportunity to win up to 28000 $SAVG by sharing your research with the community! …</p>
                    <a href="" className="read-more">Read more - 2 min read</a>
                </div>
            </div>

            
            
        </div>

    </div>

</div>
  )
}

export default FontomStarter