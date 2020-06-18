import React from 'react';
import { connect } from 'react-redux';
import agent from '../agent';
import ArticleList from './ArticleList';

const mapStateToProps = state => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile  
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: 'PROFILE_PAGE_LOADED', payload }),
  onUnload: () => dispatch({ type: 'PROFILE_PAGE_UNLOADED' })  
});

class Profile extends React.Component {
  componentWillMount() {    
    this.props.onLoad(Promise.all([
      agent.Profile.get(this.props.match.params.username),
      agent.Articles.byAuthor(this.props.match.params.username)
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const profile = this.props.profile;
    if (!profile) {
      return null;
    }

    const isUser = this.props.currentUser &&
      this.props.profile.username === this.props.currentUser.username;

    return (
      <div className="profile-page">

        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">

                <img src={profile.image} className="user-img" />
                <h4>{profile.username}</h4>
                <p>{profile.bio}</p>

                {/* TODO edit profile */}
                {/* TODO follow button */}

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">

              <div className="articles-toggle">
                {/* TODO tabs */}
              </div>

            <ArticleList
              articles={this.props.articles} />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile as Profile, mapStateToProps as mapStateToProps };
