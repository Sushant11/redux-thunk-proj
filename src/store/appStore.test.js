import { browserHistory } from 'react-router-dom';

import appStore from './appStore';

describe('Store --- configureStore', () => {
  it('runs without errors', () => {
    const store = appStore({}, browserHistory);
    expect(store).toBeDefined();
  });
});
