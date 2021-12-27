import * as React from 'react';
import './ShopPage.scss';
import LeftMenuNavi from './components/LeftMenuNavi/LeftMenuNavi';
import SearchbarAndNavi from './components/SearchbarAndNavi/SearchbarAndNavi';
import HomeView from './components/HomeView/HomeView';
import CategoriesView from './components/CategoriesView/CategoriesView';
import CartView from './components/CartView/CartView';
import { Routes, Route } from "react-router-dom";
import SettingViews from './components/SettingsView/SettingViews';
import { FC } from 'react';

const ShopPage:FC = () => {
    return (
        <div className="ShopPageContainer">
            <div className="SP_MainWiew">
                <LeftMenuNavi />
                <div className="rightContentContainer">
                    <SearchbarAndNavi />
                    <div className="ContentMainBox">
                        <Routes>
                            <Route path="/" element={<HomeView />} />
                            <Route path="/shopcategories" element={<CategoriesView />} />
                            <Route path="/shopcart" element={<CartView />} />
                            <Route path="/shopsettings" element={<SettingViews />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage

