import React from 'react';

function HomeInfoCard({infoImg, infoTitle, infoLink}) {
    return (
        <div className="card homeInfoCard text-center">
  <img className="card-img-top" src={infoImg} alt=""/>
  <div className="card-body p-3">
    <h3 className="card-title">{infoTitle}</h3>
    <p className="lead card-link"><b>{infoLink}</b><i className="bi bi-arrow-right"></i></p>
  </div>
</div>
    )
}

export default HomeInfoCard
