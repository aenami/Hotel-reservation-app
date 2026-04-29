import { type Reservations } from '../../types/dataTypes'

function Upcoming(props: {data: Reservations}) {
    const dataRoom = props.data;

    return (
        <div>
            <span>{dataRoom.check_in}</span>
        </div>
    )
}

export default Upcoming
