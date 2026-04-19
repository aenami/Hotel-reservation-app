import SelectedRoom from "./Summary/SelectedRoom";
import { useBookingStore } from "../../store/booking";

type propsResumeReserv = {
	modal: () => void;
}

function ResumReservation({ modal }: propsResumeReserv) {
	const roomTypes = useBookingStore(state => state.roomTypes)

	const confirmReservation = () => {
		modal()
	}

	return (
		<aside className="sticky top-20 max-h-150">
			<div className="flex flex-col p-8 bg-white rounded-md gap-6 mt-14">
				<h2 className="font-bold font-headline text-2xl">Reservation summary</h2>

				<div className="flex flex-col gap-6">
					{roomTypes.map(room => room.amount > 0 ? <SelectedRoom dataTypeRoom={room}/> : null )}
				</div>

				<hr />

				<div className="flex justify-between">
					<h3>Total Amount</h3>
					<h1 className="font-bold text-3xl">$1,380</h1>
				</div>

				<button onClick={confirmReservation}
				className="bg-black rounded-sm px-10 py-4 text-white cursor-pointer">COMPLETE RESERVATIONS</button>
			</div>
		</aside>
	);
}

export default ResumReservation;
