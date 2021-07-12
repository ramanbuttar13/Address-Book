import { combineReducers } from 'redux';
import { ui } from './uiReducer';
import { homepage } from './homepageReducer'
const rootReducer = combineReducers({
  ui,
  homepage
});

export default rootReducer;
