import React, { Fragment } from 'react';
import { Header } from '../Header';
import camera from '../../assets/img/camera.svg';
import './style.scss';

export const AddNews =()=> (
  <Fragment>
    <Header />
    <div className='add-news-wrapper'>
      <div className='button-wrapper'>
        <button
          type='button'
          className='cancel-button'
        >
        Cancel
        </button>
        <button
          type='button'
          className='save-button'
        >
       Save
        </button>
      </div>
      <div className='upload-photo-bg'>
        <div className='red-circle'>
          <img src={camera} alt='camera' />
        </div>
        <label className='custom-input'>
          Add picture
          <input
            type='file'
            name='imgupload'
          />
        </label>
      </div>
      <div className='alt-img-name'>
        <label htmlFor='alt-name-input'>Alt</label>
        <input
          type='text'
          id='alt-name-input'
          placeholder='Alternitive text for picture'
        />
      </div>
      <div className='title'>
        <label htmlFor='title-input'>Article Headline</label>
        <input
          type='text'
          id='title-input'
          placeholder='Name'
        />
      </div>
      <div className='text'>
        <label htmlFor='text-input'>Alt</label>
        <textarea
          type='text'
          id='text-input'
          placeholder='Please add text here'
        />
      </div>
    </div>
  </Fragment>
);
