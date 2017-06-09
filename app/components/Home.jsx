import React, { Component } from 'react'
import { Link } from 'react-router'
import Faces from './Faces'

export default class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (


            // <!-- Full Page Image Background Carousel Header -- >
            <header id="myCarousel" className="carousel slide">
                {/*<!-- Indicators -->*/}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                {/*<!-- Wrapper for Slides -->*/}
                <div className="carousel-inner">
                    <div className="item active">
                        {/*<!-- Set the first background image using inline CSS below. -->*/}
                        <div className="fill" style="background-image:url('http://placehold.it/1900x1080&text=Slide One');"></div>
                        <div className="carousel-caption">
                            <h2>Caption 1</h2>
                        </div>
                    </div>
                    <div className="item">
                        {/*<!-- Set the second background image using inline CSS below. -->*/}
                        <div className="fill" style="background-image:url('http://placehold.it/1900x1080&text=Slide Two');"></div>
                        <div className="carousel-caption">
                            <h2>Caption 2</h2>
                        </div>
                    </div>
                    <div className="item">
                        <div className="fill" style="background-image:url('http://placehold.it/1900x1080&text=Slide Three');"></div>
                        <div className="carousel-caption">
                            <h2>Caption 3</h2>
                        </div>
                    </div>
                </div>

                {/*<!-- Controls -->*/}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="icon-prev"></span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="icon-next"></span>
                </a>

            </header>



        )
    }


}
