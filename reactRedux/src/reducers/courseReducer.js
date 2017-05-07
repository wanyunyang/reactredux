export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [...state,  /*Spread out the array*/
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
