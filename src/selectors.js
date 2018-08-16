import _ from 'lodash';

/**
 * Returns the first error messages for actions.
 * We assume when any request fails on a page that requires multiple API calls,
 * we shows the first error.
 */
export const createErrorMessageSelector = actions => state => _(actions)
  .map(action => _.get(state, `api.error.${action}`))
  .compact()
  .first() || '';

/**
 * Returns true only when all actions is not loading
 */
export const createLoadingSelector = actions => state => _(actions)
  .some(action => _.get(state, `api.loading.${action}`));
