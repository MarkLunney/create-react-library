import React from 'react';
import Example from './Example'

class ExampleLifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { onSubmit, count } = this.props;
        e.preventDefault();

        if (onSubmit) {
            onSubmit(count);
        }
    }

    render() {
        const { title, count, buttonText } = this.props;
        return <Example title={title} count={count} buttonText={buttonText} handleClick={this.handleClick} />;
    }
}

export default ExampleLifecycle;
