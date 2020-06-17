import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import marked from 'marked';

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser 
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => 
    dispatch({ type: 'ARTICLE_PAGE_LOADED', payload }),
  onUnload: () => 
    dispatch({ type: 'ARTICLE_PAGE_UNLOADED' })
});

 class Article extends React.Component {
  componentWillMount() {
    const articleId = this.props.match.params.id;    
    this.props.onLoad(Promise.all([
      agent.Articles.get(articleId)
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.article) {
      return null;
    }

    const markup = { __html: marked(this.props.article.body) };
    const canModify = this.props.currentUser &&
      this.props.currentUser.username === this.props.article.author.username;
    return (
      <div className="article-page">

        <div className="banner">
          <div className="container">

            <h1>{this.props.article.title}</h1>
            {/* TODO article meta component here */}
          </div>
        </div>

        <div className="container page">

          <div className="row article-content">
            <div className="col-xs-12">

              <div dangerouslySetInnerHTML={markup}></div>

                <ul className="tag-list">
                  {
                    this.props.article.tagList.map(tag => (
                      <li
                          className="tag-default tag-pill tag-outline"
                          key={tag}>
                        {tag}
                      </li>
                    ))
                  }
                </ul>

              </div>
            </div>

            <hr />

            <div className="article-actions">
            </div>

            <div className="row">
              {/* TODO comment container here */}
            </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
