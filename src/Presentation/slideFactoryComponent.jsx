import React, {Component} from 'react';
import SlideComponent from "./slideComponent";

class SlideFactoryComponent extends Component {

    render() {
        const { slide } = this.props;
        return (
            <SlideComponent transitionKey={slide.title}>
                <div className='slide-title'>{slide.title}</div>
                <div className='slide-content'>
                    {this.buildContentElement(slide.contentType,slide.content,slide.additionalContent)}
                </div>
            </SlideComponent>
        );
    }

    componentDidUpdate() {
        if(this.props.slide.contentType === 'text&code') {
            const script = document.createElement("script");
            const el = document.getElementById('script-content');
            script.src = this.props.slide.additionalContent;
            script.async = true;

            el.appendChild(script);
        }
    }

    buildContentElement = (contentType,content,additionalContent) => {
        switch (contentType) {
            case 'text':
                return content;
            case 'list':
                return <ul>
                    {
                        content.map(item => <li>{item}</li>)
                    }
                </ul>;
            case 'text&code':
                return <div>
                    <div>{content}</div>
                    <div id='script-content' className='source-code'/>
                </div>;
            case 'text&img':
                return <div>
                    <div>{content}</div>
                    <div className={`content-img ${additionalContent}`}/>
                </div>;
        }
    };
}

export default SlideFactoryComponent;