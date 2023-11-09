import React from 'react';
import PropTypes from 'prop-types';
import {formatDistanceToNow} from 'date-fns'
import './Task.css';


class Task extends React.Component {
    render() {
        const {itemText} = this.props;
        const formatedDate = formatDistanceToNow(
            new Date(itemText.created),
            {includeSeconds: true}
        )
        const dateToShow = `created ${formatedDate} ago`
        return (
            <>
                <span className="description">{itemText.description}</span>
                <span className="created">{dateToShow}</span>
            </>
        );
    }
}

Task.defaultProps = {
    description: "Do smthing"
}
Task.propTypes = {
    created: PropTypes.number.isRequired,
    description: PropTypes.string
};

export default Task;