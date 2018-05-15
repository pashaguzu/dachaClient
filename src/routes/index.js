/**
 * Created by Павел on 03.04.2018.
 */

import Loadable from '../components/Loadable';

export const asyncServices = (store) => {
    return (
        Loadable({
            loader: () => import('../routes/Services'),
            modules: ['../routes/Services'],
        webpack: () => [require.resolveWeak('../routes/Services')],
})
    );
}

export const asyncGallery = (store) => {
    return (
        Loadable({
            loader: () => import('../routes/Gallery'),
            modules: ['../routes/Gallery'],
        webpack: () => [require.resolveWeak('../routes/Gallery')],
})
    );
}
export const asyncStartPage = (store) => {
    return (
        Loadable({
            loader: () => import('../routes/StartPage'),
            modules: ['../routes/StartPage'],
        webpack: () => [require.resolveWeak('../routes/StartPage')],
})
    );
}