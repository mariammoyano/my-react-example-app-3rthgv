
import ArticleList from '../ArticleList';
import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';

const mapStateToProps = state => ({
  ...state.articleList
});

const mapDispatchToProps = dispatch => ({
  onSetPage: (p) => dispatch({
    type: 'SET_PAGE',
    page: p,
    payload: agent.Articles.all(p)
  })
});

const MainView = props => {
  const onSetPage = page => props.onSetPage(page);
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

        <li className="nav-item">
          <a
            href=""
            className="nav-link active">
            Global Feed
          </a>
        </li>

        </ul>
      </div>

      <ArticleList
        articles={props.articles}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
        onSetPage={onSetPage} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
