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
import OneCategoryView from './components/OneCategoryView/OneCategoryView';

const ShopPage: FC = () => {
    return (
        <div className="ShopPageContainer">
            <div className={`SP_MainWiew Mobile`}>
                <LeftMenuNavi mobile={false} />
                <div className={`rightContentContainer RCCMobile`}>
                    <SearchbarAndNavi />
                    <div className="ContentMainBox">
                        <Routes>
                            <Route path="/cv2022" element={<MainInfoView />} />
                            <Route path="/home" element={<HomeView />} />
                            <Route path="/shopcategories" element={<CategoriesView />} >
                                <Route path=":categoryId" element={<OneCategoryView />} />
                            </Route>
                            <Route path="/search" element={<SortedAndFiltredViev />} />
                            <Route path="/shopcart" element={<CartView />} />
                            <Route path="/shopsettings" element={<SettingViews />} />
                            <Route path="/checkout" element={<CheckoutView />} />
                        </Routes>
                    </div>
                </div>
                <LeftMenuNavi mobile={true} />
            </div>
        </div>
    )
}

export default ShopPage

