import './styles.css';
import React from 'react';
import { loadPosts } from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';

class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    postsPerPage: 20,
    page: 0
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts,
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });

  }

  render() {
    const { posts, postsPerPage, allPosts, page } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts} />

        <input onChange={}
        type="search"></input>
        <div class="button-container">
          <Button
            text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts} />
        </div>

      </section>
    );
  }
}


export default Home;
