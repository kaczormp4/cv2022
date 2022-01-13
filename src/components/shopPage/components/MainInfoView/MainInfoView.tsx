import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './MainInfoView.scss';

const MainInfoView: FC = () => {
    return (
        <>
            <div className="Section">This is example shop page system, try to use it :)</div>
            <div className="SectionContent">
                <div className="Content bold">1. Go To <Link to='home'>HOME</Link> to view offers</div>
                <div className="Content SM"> - Click "ADD TO CART" Button to add item to cart</div>
                <div className="Content SM"> - Click to product image to open FULL VIEW</div>
                <div className="Content SM"> - Full viewed products will be added to "Recently viewed by you"</div>
                <div className="Content SM"> - if you add the maximum number of available products the button will be disabled</div>

                <div className="Content bold">2. Go To <Link to='shopcategories'>CATEGORIES</Link> to view categories</div>
                <div className="Content SM"> - Choose your favourite category then you will see ALL available products from this category</div>

                <div className="Content bold">3. Go To <Link to='shopcart'>CART</Link> to see the products you added</div>
                <div className="Content SM"> - From CART you can directly increase the number of products</div>
                <div className="Content SM"> - Click to product image to open FULL VIEW</div>
                <div className="Content SM"> - Subtract the number of products into zero, then remove the product from the CART</div>
                <div className="Content SM"> - In the upper right corner you can see TOTAL PRICE and "GO TO CHECKOUT" button ( only when count of products is greater than zero )</div>
                <div className="Content SM bold"> - Click "GO TO CHECKOUT" to go to the transaction summary</div>
                <div className="Content SM "> - You can see summary of the transactions</div>
                <div className="Content SM "> - Click "BUY AND PAY" to clear your CART and go back to this page</div>

                <div className="Content bold">4. Go To <Link to='shopsettings'>SETTINGS</Link> to edit USER settings</div>
                <div className="Content ">* you can also open User setting  by clicking in user Avatar/ User name and click in the upper right corner* </div>
                <div className="Content SM"> - You can see all USER SETTINGS</div>
                <div className="Content SM"> - Click "EDIT INFO" to edit user info</div>
                <div className="Content SM"> - Click "CLOSE EDIT MODE" to close editor</div>

                <div className="Content bold">5. Click on the  <Link to='search'>SEARCH ENGINE</Link>at the top of the store to search products</div>
                <div className="Content SM"> - Type text in inmput and search products</div>
                <div className="Content SM"> - You search by product name and category</div>

                <div className="Content bold">6. Click on the envelope/bell at the upper right corner to see messages</div>
                <div className="Content SM"> - Type text in inmput and search products</div>

                <div className="Content bold">7. Click <Link to='search'>LOG OUT</Link> to clear your CART and go back to this page </div>
            </div>
            <div className="Section">Technical information</div>
            <div>
                <div className="Content"> - products are stored in aray in data/products.tsx file</div>
                <div className="Content"> - categorias are stored in aray in data/categories.tsx file</div>
                <div className="Content SM"> product category must be one of the available categories </div>
                <div className="Content"> - states of: modal (FULL PRODUCT VIEV), search engine, cart,user profile and history are stored in redux </div>
                <div className="Content"> - aplication views are changed by react router </div>

            </div>
        </>
    )
}

export default MainInfoView
