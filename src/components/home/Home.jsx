import React from 'react';

import LoginForm from '../../containers/LoginFormContainer';

const Home = () => {
    return (
        <div>
            <div className="title">
                HOME
            </div>
            <div className="blocks">
                <LoginForm />
            </div>
        </div>
    );
}

export default Home;
