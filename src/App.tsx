import * as React from 'react';
import { FC, useState } from 'react';
import ShopPage from './components/shopPage/ShopPage';
import WelcomePage from './components/welcomePage/WelcomePage';
import Modal from './components/modal/Modal';
import ProductFullView from './components/shopPage/components/ProductFullView/ProductFullView';

const App: FC = () => {
    const content = <>
        <WelcomePage />
        <ShopPage />
        <Modal>
            <ProductFullView />
        </Modal>
    </>

    return content
}

export default App;