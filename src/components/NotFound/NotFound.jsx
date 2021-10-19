import React, {useContext} from 'react';
import not_found from '../../assets/images/not_found.png'
import './index.scss';
import {AuthContext} from "../../context";

const NotFound = () => {
    const {setIs404Page} = useContext(AuthContext);
    setIs404Page(true);
    return (
        <div>
            <img src={not_found} className="not-found-image"/>
        </div>
    );
};

export default NotFound;