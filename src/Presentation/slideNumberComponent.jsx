import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SlideNumberComponent extends Component {
    render() {
        const { number, selectSlide, selected } = this.props;
        return (
            <div className={`slide-number ${selected ? 'selected' : ''}`} onClick={() => selectSlide(number)}>
                {number+1}
            </div>
        );
    }
}

SlideNumberComponent.propTypes = {
    number: PropTypes.string.isRequired,
    selectedSlide: PropTypes.func,
    selected: PropTypes.bool
};

export default SlideNumberComponent;