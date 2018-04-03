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