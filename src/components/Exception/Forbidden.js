import React from 'react';
import {Link} from 'react-router-dom';
import {Result} from 'antd';

const Forbidden = () => {
    return (
        <div key="1">
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Link to={`/#/`} className="ant-btn">
                    Go Back to Home
                </Link>}
            />
        </div>
    );
};

export default Forbidden;
