import HomePage from '../pages/HomePage';
import WorksItemPage from '../pages/WorksItemPage';

export const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/works/:id',
        element: <WorksItemPage />,
    }
];