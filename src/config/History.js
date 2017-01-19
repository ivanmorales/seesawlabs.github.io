
import { useRouterHistory } from 'react-router';

import { createHistory } from 'history';
import url from 'url';

const homepagePath = process.env.PUBLIC_URL;
const homepagePathname = homepagePath ? url.parse(homepagePath).pathname : '/';

const BrowserHistory = useRouterHistory(createHistory)({
  basename: homepagePathname
});

export default BrowserHistory;
