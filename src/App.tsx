import * as React from 'react';
import { FC, useState } from 'react';
import ShopPage from './components/shopPage/ShopPage';
import WelcomePage from './components/welcomePage/WelcomePage';
import Modal from './components/modal/Modal';
import { selectmodalReducer } from './redux/modalReducer';
import { useSelector } from 'react-redux';

const App: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    // const open = useSelector(selectmodalReducer);
    const modalProps = {
        isOpen: open,
        handleOnClose: () => setOpen(false),
    }
    const content = <>
        <WelcomePage />
        <ShopPage />
        <button onClick={() => setOpen(true)}>OPEN</button>
        <Modal {...modalProps}>
            Current
        </Modal>
    </>

    return content
}

export default App;