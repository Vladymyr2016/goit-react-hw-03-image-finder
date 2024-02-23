import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import FeatchInfo from './services/FeatchInfo';

class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      const { hits } = await FeatchInfo();

      this.setState({ items: hits });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
        <ImageGallery hits={items} />
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}
export default App;
