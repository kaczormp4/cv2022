import * as React from 'react';
import { FC } from 'react';
import ShopPage from './components/shopPage/ShopPage';
import WelcomePage from './components/welcomePage/WelcomePage';

const App:FC = () => {
    const content = <>
        <WelcomePage/>
        <ShopPage/>
    </>

    return content
}

export default App;