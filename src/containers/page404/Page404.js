import React from 'react';
import EmptyPage from '../../components/common/EmptyPage';
import { ReactComponent as WarningSVG } from '../../assets/svg/warningLg.svg';

export const Page404 = () => {
    return (
        <EmptyPage
            isFullScreen={true}
			IconComponent={WarningSVG}
        />
    )   
}


