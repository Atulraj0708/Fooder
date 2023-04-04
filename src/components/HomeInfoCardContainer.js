import React from 'react';
import HomeInfoCard from './HomeInfoCard';
import {Link} from 'react-router-dom';

function HomeInfoCardContainer() {
    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-dark">
            <Link to="/menu"><HomeInfoCard infoImg="https://wallpapercave.com/wp/wp7029305.jpg" infoTitle="Order your favourite food" infoLink="Menu"/></Link>
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
