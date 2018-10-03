/**
 *
 * Asynchronously loads the component for InnerMenu
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
