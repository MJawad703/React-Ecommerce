import React, { Component } from 'react';
import SHOP_DATA from './shopdata'
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(collection => (
                        <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
                    ))
                }

            </div>
        )
    }
}

export default Shop