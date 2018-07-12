import { compose, applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [
    thunk
];

// Depending on the environment, optionally add logging middleware.
if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`);

    var logger = createLogger({
        collapsed: true
    });

    // Note: logging middleware must always be the last middleware to add to ensure correct logging.
    middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;