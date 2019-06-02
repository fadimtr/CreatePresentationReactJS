import React, {Component} from 'react';
import PresentationComponent from './presentationComponent';
import slidesMetadata from './slidesMetadata';

class PresentaionContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSlide:0,
            slides: slidesMetadata
        }
    }
    render() {
        return (
            <PresentationComponent slides={this.state.slides} selectedSlide={this.state.selectedSlide}
                                   selectSlide={(number) => this.setState({ selectedSlide:number})}/>
        );
    }
}

export default PresentaionContainer;