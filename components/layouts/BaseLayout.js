import React, {Fragment} from 'react';
import Header from "../shared/Header";


const BaseLayout = (props) => {
    return (
        <Fragment>
            <Header title={'HEADER'} />
            {props.children}
        </Fragment>
    )
}
export default BaseLayout;