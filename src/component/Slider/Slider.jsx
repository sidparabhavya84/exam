import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Slide.css';

function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <div className='images d-flex align-items-center'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h1 className='text-dark'>Welcome To <br /> Helendo Store</h1>
                                    <p className='text-dark'>  Many desktop publishing packages and web page editors now use  <br /> Lorem Ipsum as their default model text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='image d-flex align-items-center'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h1 className='text-dark'>Welcome To <br /> Helendo Store</h1>
                                    <p className='text-dark'>  Many desktop publishing packages and web page editors now use  <br /> Lorem Ipsum as their default model text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='img d-flex align-items-center'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h1 className='text-dark'>Welcome To <br /> Helendo Store</h1>
                                    <p className='text-dark'>  Many desktop publishing packages and web page editors now use  <br /> Lorem Ipsum as their default model text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider