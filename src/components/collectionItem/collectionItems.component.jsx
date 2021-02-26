import React from 'react'
import '../collectionItem/collection-item.style.scss'

const CollectionItem = ({ name, imageUrl, price }) => (
    <div className="collection-item">
        <div className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
    </div>
)

export default CollectionItem