import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

const NotFound = () => {
    return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={ <Link to={`/#/`} className="ant-btn">
                    Go Back to Home
                </Link>}
            />
    );
};

export default NotFound;
