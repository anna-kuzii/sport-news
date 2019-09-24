import React, { Component, Fragment } from 'react';
import { Header } from '../../../components/Header';
import camera from '../../../assets/img/camera.svg';
import './style.scss';
import { connect } from 'react-redux';
import { addArticle } from '../action';
import ScrollToTop from '../../../components/ScrollToTop';

class AddNews extends Component {
  constructor(props) {
    super(props);

    this.state ={
      imageURL: '',
      image: null,
      alt: '',
      title: '',
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancelButton = this.handleCancelButton.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeImg(e) {
    this.setState({
      imageURL: URL.createObjectURL(e.target.files[0]),
      [e.target.name]: e.target.files[0],
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData();

    const { image, alt, title, text } = this.state;
    const { firstName, lastName, addArticle } = this.props;
    const author = `${firstName} ${lastName}`;

    fd.append('author', author);
    fd.append('image', image);
    fd.append('alt', alt);
    fd.append('title', title);
    fd.append('text', text);

    addArticle(fd);
  }

  handleCancelButton(e) {
    e.preventDefault();
    this.setState({
      imageURL: '',
      image: null,
      alt: '',
      title: '',
      text: '',
    });
  }

  render() {
    const { imageURL, alt, title, text } = this.state;
    const { error } = this.props;

    let imgPreview = null;


    imageURL ? imgPreview = (
      <img
        className='img-prewiew'
        src={imageURL}
        alt='preview'
      />
    )
      : imgPreview = (
        <label className='custom-input'>
          <div className='upload-photo-bg'>
            <div className='circle'>
              <img src={camera} alt='camera' />
            </div>
            Add image
            <input
              type='file'
              name='image'
              onChange={this.handleChangeImg}
            />
          </div>
        </label>
      );

    return (
      <Fragment>
        <ScrollToTop />
        <Header />
        <div className='add-news-wrapper'>
          <div className='button-wrapper'>
            <button
              type='button'
              className='cancel-button'
              onClick={this.handleCancelButton}
            >
        Cancel
            </button>
            <button
              type='button'
              className='save-button'
              onClick={this.handleSubmit}
            >
       Save
            </button>
          </div>
          { error
                        && <span className='add-news-error'>{error}</span>

          }
          {imgPreview}
          <div className='alt-name-form'>
            <label htmlFor='alt-name-input'>Alt</label>
            <input
              type='text'
              id='alt-name-input'
              name='alt'
              placeholder='Alternitive text for picture'
              value={alt}
              onChange={this.handleChange}
            />
          </div>
          <div className='title-form'>
            <label htmlFor='title-input'>Article Headline</label>
            <input
              type='text'
              id='title-input'
              name='title'
              placeholder='Name'
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className='text-form'>
            <label htmlFor='text-input'>Content</label>
            <textarea
              id='text-input'
              name='text'
              value={text}
              placeholder='Please add text here'
              onChange={this.handleChange}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ login: { user: { firstName, lastName } }, addArticleReducer: { error } }) => ({
  firstName,
  lastName,
  error,
});

const actionCreators = {
  addArticle,
};

export default connect(mapStateToProps, actionCreators)(AddNews);
