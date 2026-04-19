import { type selectedRoomTypes } from "../../../types/dataTypes"

type typeRoom = {
    dataTypeRoom: selectedRoomTypes,
}

function SelectedRoom({dataTypeRoom}: typeRoom) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h3 className="font-bold">{dataTypeRoom.name}</h3>
                <span className="">{dataTypeRoom.amount} x ${dataTypeRoom.price} / NIGHT</span>
            </div>
            <span className="font-bold">${dataTypeRoom.amount*dataTypeRoom.price}</span>
        </div >
    )
}

export default SelectedRoom
