import {formatDistanceToNow} from 'date-fns'
import './Task.css';

const Task = ({itemText}) => {
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


export default Task;