/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

// TODO constrain eslint import/no-unresolved rule to this block
// Load the manifest.json file and the .htaccess file
import 'file?name=img/[name].[ext]!./manifest.json';  // eslint-disable-line import/no-unresolved
import 'file?name=img/[name].[ext]!./.htaccess';      // eslint-disable-line import/no-unresolved
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-57x57.png';
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-60x60.png';
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-72x72.png';
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-76x76.png';
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-114x114.png';
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-120x120.png';
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-144x144.png';
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-152x152.png';
import 'file?name=img/[name].[ext]!./img/apple-touch-icon-180x180.png';
import 'file?name=img/[name].[ext]!./img/favicon-32x32.png';
import 'file?name=img/[name].[ext]!./img/android-chrome-192x192.png';
import 'file?name=img/[name].[ext]!./img/favicon-96x96.png';
import 'file?name=img/[name].[ext]!./img/favicon-16x16.png';
import 'file?name=img/[name].[ext]!./img/safari-pinned-tab.svg';
import 'file?name=img/[name].[ext]!./img/favicon.ico';
import 'file?name=img/[name].[ext]!./img/mstile-144x144.png';
import 'file?name=img/[name].[ext]!./img/browserconfig.xml';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import configureStore from './store';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/lib/sanitize.css';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
import { selectLocationState } from 'containers/App/selectors';
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: selectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
import App from 'containers/App';
import createRoutes from './routes';
const rootRoute = {
    component: App,
    childRoutes: createRoutes(store),
};

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={history}
            routes={rootRoute}
            render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())
      }
        />
    </Provider>,
    document.getElementById('app')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import { install } from 'offline-plugin/runtime';
install();
