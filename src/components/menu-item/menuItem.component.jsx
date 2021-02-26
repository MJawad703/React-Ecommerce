import React from 'react';
import './menuItem.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="bg-image" style={{
                backgroundImage: `url(${imageUrl})`
        }} ></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
    </div>
)





export default withRouter(MenuItem);