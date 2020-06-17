export default (state = {}, action) => {
  switch (action.type) {
    case 'ARTICLE_PAGE_LOADED':
      return {
        ...state,
        article: action.payload[0].article,
        // TODO payload comments
        comments: []
      };
    case 'ARTICLE_PAGE_UNLOADED':
      return {};
    default:
      return state;
  }
}
