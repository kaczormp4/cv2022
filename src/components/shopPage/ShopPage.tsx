import * as React from 'react';
import './ShopPage.scss';
import LeftMenuNavi from './components/LeftMenuNavi/LeftMenuNavi';
import SearchbarAndNavi from './components/SearchbarAndNavi/SearchbarAndNavi';
import HomeView from './components/HomeView/HomeView';
import MainInfoView from './components/MainInfoView/MainInfoView';
import CategoriesView from './components/CategoriesView/CategoriesView';
import CartView from './components/CartView/CartView';
import SortedAndFiltredViev from './components/SortedAndFiltredViev/SortedAndFiltredViev';
import { Routes, Route, useParams } from "react-router-dom";
import SettingViews from './components/SettingsView/SettingViews';
import { FC } from 'react';
import CheckoutView from './components/CheckoutView/CheckoutView';

const ShopPage: FC = () => {
    return (
        <div className="ShopPageContainer">
            <div className="SP_MainWiew">
                <LeftMenuNavi />
                <div className="rightContentContainer">
                    <SearchbarAndNavi />
                    <div className="ContentMainBox">
                        <Routes>
                            <Route path="/" element={<MainInfoView />} />
                            <Route path="/home" element={<HomeView />} />
                            {/* <Route path="/shopcategories" element={<CategoriesView />} >
                                <Route path=":categoryId" element={<SortedAndFiltredViev />} />
                            </Route> */}
                            <Route path="/shopcategories" element={<SortedAndFiltredViev />} />
                            <Route path="/shopcart" element={<CartView />} />
                            <Route path="/shopsettings" element={<SettingViews />} />
                            <Route path="/checkout" element={<CheckoutView />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage

