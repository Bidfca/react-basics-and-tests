import './styles.css';
import React from 'react';
import PostCard from '../../components/PostCard';
import { loadPosts } from '../../utils/load-posts';

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
        <div className="posts">
          {posts.map(({ cover, title, id, body }) => (
            <PostCard
              title={ title }
              cover={ cover }
              id={ id }
              body={ body } />
          ))}
        </div>
      </section>
    );
  }
}


export default Home;
