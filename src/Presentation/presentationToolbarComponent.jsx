import React, {Component} from 'react';
import SlideNumberComponent from "./slideNumberComponent";

class PresentationToolbarComponent extends Component {
    render() {
        return (
            <div className='toolbar'>
                <ul>
                    {
                        Array(this.props.numberOfSlides).fill().map((slideNumber, index) => {
                            return <li><SlideNumberComponent selectSlide={this.props.selectSlide} number={index} selected={index === this.props.selectedSlide}/></li>
                        })
                    }
                </ul>
            </div>
        );
    }

    handleKeyboardClick = (event) => {
        const { selectedSlide, numberOfSlides, selectSlide} = this.props;
        switch (event.keyCode) {
            case 37: // left arrow
                if(selectedSlide > 0){
                    selectSlide(selectedSlide-1);
                }
                break;
            case 39: // right arrow
                if((selectedSlide+1) < numberOfSlides){
                    selectSlide(selectedSlide+1);
                }
                break;
            default:
                return;
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyboardClick)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardClick)
    }
}

export default PresentationToolbarComponent;