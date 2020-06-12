const defaultState = {
  appName: 'conduit',
  articles: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state
      };
    default:
      return state;
  }

};
