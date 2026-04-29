import { type Reservations } from "../../types/dataTypes"

function Cancelled(props: {data: Reservations}) {
  const dataRoom = props.data;

  return (
    <div>
      <span>{dataRoom.check_in}</span>
    </div>
  )
}

export default Cancelled
