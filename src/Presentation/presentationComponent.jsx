import React, {Component} from 'react';
import SlideFactoryComponent from "./slideFactoryComponent";
import PresentationToolbarComponent from "./presentationToolbarComponent";

class PresentationComponent extends Component {
    render() {
        const { slides, selectedSlide, selectSlide } = this.props;
        return (
            <div className='presentation'>
                <SlideFactoryComponent slide={slides[selectedSlide]}/>
                <PresentationToolbarComponent selectSlide={selectSlide} numberOfSlides={slides.length} selectedSlide={selectedSlide}/>
            </div>
        );
    }
}

export default PresentationComponent;