import React from 'react';
import '../collectionPreview/collectionPreview.style.scss'
import CollectionItem from '../collectionItem/collectionItems.component'

const CollectionPreview = ({ title, items }) =>
(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, imageUrl, price, name }) =>
                    <CollectionItem key={id} imageUrl={imageUrl} price={price} name={name} />
                )}
        </div>
    </div>
)

export default CollectionPreview