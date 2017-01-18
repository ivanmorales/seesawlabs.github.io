import { SECTIONS_GET } from './../actions'
import { processes } from './../data/processes';

const SectionReducer = (state = {
  processes
}, action) => {
  switch (action.type) {
    case SECTIONS_GET:
      state = {
        ...state,
        result: [1,2,3]
      };
      break;
    default:
      state = {
        ...state,
        result: []
      };
      break;
  }
  return state;
};

export default SectionReducer;
