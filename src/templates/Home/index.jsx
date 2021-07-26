import './styles.css';
import React from 'react';
import { loadPosts } from '../../utils/load-posts';
import Posts from '../../components/Posts';

class Home extends React.Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={ posts } />
      </section>
    );
  }
}


export default Home;
