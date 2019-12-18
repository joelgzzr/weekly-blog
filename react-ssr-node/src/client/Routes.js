import App from './App';
import Home from './pages/Home'
import First from './pages/First'

export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                ...Home,
                exact: true
            },
            {
                path: '/first',
                ...First
            }
        ]
    }
];
