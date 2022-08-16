import React from 'react';
import './FeaturedInfo.css';
import {ArrowUpward} from '@material-ui/icons'

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitel">Chiffre d'affaire</span>
            <div className="featuredCapitalContainer">
                <span className="featuredCapital"> 3 Milliards DA</span>
                <span className="featuredCapitalRate"> + 0.25 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub"> Par rapport au dernière année</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitel">Quantité Produire</span>
            <div className="featuredCapitalContainer">
                <span className="featuredCapital"> 650 KWh </span>
                <span className="featuredCapitalRate"> + 0.25 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub"> Par rapport au dernière mois</span>
        </div>

    </div>
  )
}

export default FeaturedInfo;