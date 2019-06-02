import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SlideComponent extends Component {

    render() {
        const { children, transitionKey } = this.props;
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={true}
                transitionLeave={false}>

                <div className='slide' key={transitionKey}>
                    {children}
                </div>
            </ReactCSSTransitionGroup>

        );
    }
}

export default SlideComponent;