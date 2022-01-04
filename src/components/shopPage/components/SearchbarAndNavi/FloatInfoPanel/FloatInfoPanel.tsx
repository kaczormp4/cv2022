import * as React from 'react';
import { FC, useState } from 'react';
import './FloatInfoPanel.scss';

interface messages {
    recipient: string,
    topic: string,
    content: string,
    icon: any
}
const FloatInfoPanel: FC<messages> = ({ recipient, topic, content, icon }: messages) => {
    const [infoPanelContextState, openInfoPanelContext] = useState<boolean>(false);

    return (
        <div className="floatInfoPanelRow">
            <div onClick={() => openInfoPanelContext(!infoPanelContextState)}>
                {icon}<span>{recipient}</span>
            </div>
            {
                infoPanelContextState &&
                <div className="floatInfoPanelContext" onClick={() => openInfoPanelContext(!infoPanelContextState)}>
                    <p>{topic}</p>
                    <span>{content}</span>
                </div>
            }
        </div>
    )
}

export default FloatInfoPanel
