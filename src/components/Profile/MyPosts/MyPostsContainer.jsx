import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  posts: state.profilePage.posts,
});

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);

export default MyPostsContainer;
