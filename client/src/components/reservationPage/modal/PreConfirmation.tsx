import { motion } from "framer-motion";
import { Bed, Calendar } from "lucide-react";
import { useBookingStore } from "../../../store/booking";
import { useShallow } from "zustand/shallow";
import { type selectedRoomTypes } from "../../../types/dataTypes";
import dayjs from "dayjs";
import { type Dayjs } from "dayjs";
import { reservationService } from "../../../services/reservationService";
import { tokenManager } from "../../../utils/tokenManager";

type modalProps = {
	onclose: () => void;
	setStep: () => void;
	setIdReservation: (id: string) => void;
};

type bookingData = {
	arrivalDate: Dayjs;
	departureDate: Dayjs;
	rooms: selectedRoomTypes[];
}

type footerProps = {
	onclose: () => void;
	setStep: () => void;
	setIdReservation: (id:string) => void; 
}

type typeRooms = {
	dataRoom: selectedRoomTypes,
}

//---------------------PARTES DEL MODAL-------------------
const LeftSideModal = () => (
	<div className="relative w-full md:w-[40%] h-56 md:h-auto overflow-hidden group">
		<motion.img
			initial={{ scale: 1.1 }}
			animate={{ scale: 1 }}
			transition={{ duration: 1.5, ease: "easeOut" }}
			src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000"
			alt="Royal Ocean Suite"
			className="w-full h-full object-cover"
			referrerPolicy="no-referrer"
		/>
		{/* Gradient Overlay */}
		<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

		{/* Bottom Overlay Text */}
		<div className="absolute bottom-6 left-6 right-6 text-white">
			<motion.p
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="font-sans text-[0.6rem] uppercase tracking-[0.25em] mb-1.5 opacity-70 font-semibold"
			>
				Reserved Suite
			</motion.p>
			<motion.h2
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
				className="font-serif text-2xl md:text-3xl tracking-tight leading-tight"
			>
				Awaiting your arrival
			</motion.h2>
		</div>
	</div>
);

const ModalHeader = () => (
	<header className="mb-8">
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}
			className="inline-block font-sans text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 mb-2 font-bold"
		>
			Final Confirmation Required
		</motion.span>
		<motion.h1
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.3 }}
			className="font-serif text-2xl md:text-3xl text-neutral-900 tracking-tight"
		>
			Review Your Reservation
		</motion.h1>
	</header>
);

const ModalSuiteInfo = ({dataRoom}: typeRooms) => (
	<motion.div
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ delay: 0.4 }}
		className="flex items-start gap-4"
	>
		<div className="p-2.5 bg-neutral-50 rounded-lg">
			<Bed
				className="text-neutral-700"
				size={20}
				strokeWidth={1.5}
			/>
		</div>
		<div>
			<h3 className="font-serif text-lg text-neutral-900">
				{dataRoom.name}
			</h3>
			<p className="font-sans text-xs text-neutral-500 mt-0.5">
				Sanctuary Alpha Wing 
			</p>
		</div>
		<div className="flex justify-center items-center">
			<span className="">{dataRoom.amount}</span>
		</div>
	</motion.div>
);

const ModalPriceBreakDown = ({arrivalDate, departureDate, rooms}:bookingData) => {
	const nights = departureDate.startOf('day').diff(arrivalDate.startOf('day'), 'day') +1

	let subTotal = 0;
	for (const room of rooms) {
		subTotal = subTotal + room.price * room.amount
	}

	const taxes = subTotal*0.15;
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
			className="space-y-3 border-t border-neutral-100"
		>
			<div className="flex justify-between items-center text-xs">
				<span className="text-neutral-500">
					{nights} Nights 
				</span>
				<span className="font-medium text-neutral-900">
					${subTotal}
				</span>
			</div>
			<div className="flex justify-between items-center text-xs">
				<span className="text-neutral-500">
					Resort Fees & Taxes (15%)
				</span>
				<span className="font-medium text-neutral-900">
					${taxes}
				</span>
			</div>

			{/* Total */}
			<div className="flex justify-between items-end pt-4 mt-1 border-t border-neutral-100">
				<div className="space-y-0.5">
					<p className="font-sans text-[0.6rem] uppercase tracking-[0.15em] font-bold text-neutral-900">
						Total Amount
					</p>
					<p className="text-[0.55rem] text-neutral-400 italic">
						Inclusive of all taxes
					</p>
				</div>
				<span className="font-serif text-2xl text-neutral-900">
					${subTotal + taxes}
				</span>
			</div>
		</motion.div>
	)
}

const ModalFooter = ({ onclose, setStep, setIdReservation}: footerProps) => {
	const user = tokenManager.getUser()
	const [arrivalDate, arrivalTime, departureDate, departureTime, roomTypes, comments] = useBookingStore(useShallow(state => [state.arrivalDate, state.arrivalTime, state.departureDate, state.departureTime, state.roomTypes, state.comments]))

	const arrivalDateComplete = new Date(dayjs(arrivalDate)
	.set('hour', dayjs(arrivalTime).hour())
	.set("minute", dayjs(arrivalTime).minute())
  	.set("second", dayjs(arrivalTime).second())
  	.toDate());

	const departureDateComplete = new Date(dayjs(departureDate)
	.set('hour', dayjs(departureTime).hour())
	.set("minute", dayjs(departureTime).minute())
  	.set("second", dayjs(departureTime).second())
  	.toDate());

	const handlerConfirmation = async () => {
		//1. Usar el servicio para insertar la booking
		try {
			// Creamos el payload
			const payload = {
				arrivalDate: arrivalDateComplete,
				departureDate: departureDateComplete,
				rooms: roomTypes,
				comments,
				idUser: parseInt(user.id),
			}

			const data = await reservationService.insertBooking(payload)
			setIdReservation(data.id)
		} catch (error) {
			if(error instanceof Error) {
				console.log(error.message)
			}else{
				console.log('Error desconocido al insertar la reserva')
			}
		} finally {
			setStep();
		}
		
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.7 }}
			className="mt-10 space-y-5"
		>
			<div className="flex flex-col sm:flex-row gap-3">
				<button
					onClick={onclose}
					className="flex-1 py-3.5 px-5 border border-neutral-200 rounded-lg font-sans text-[0.65rem] font-bold uppercase tracking-[0.15em] text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 cursor-pointer"
				>
					Edit Details
				</button>
				<button
					onClick={handlerConfirmation}
					className="flex-[1.5] py-3.5 px-5 bg-black text-white rounded-lg font-sans text-[0.65rem] font-bold uppercase tracking-[0.15em] hover:bg-neutral-800 transition-all duration-300 shadow-lg shadow-black/10 active:scale-[0.98] cursor-pointer"
				>
					Confirm Reservation
				</button>
			</div>

			<div className="flex items-center justify-center md:justify-start gap-2">
				<div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
				<p className="font-sans text-[0.55rem] uppercase tracking-widest text-emerald-600 font-bold">
					Free cancellation one day before the selected check-in date
				</p>
			</div>
		</motion.div>
	)
}

function PreConfirmation({ onclose, setStep, setIdReservation }: modalProps) {
	const arrivalDate = dayjs(useBookingStore(state => state.arrivalDate))
	const departureDate = dayjs(useBookingStore(state => state.departureDate))
	const roomTypes = useBookingStore(state => state.roomTypes)

	const arrivalMonth =  dayjs().month(arrivalDate.month()+1).format('MMMM')
	const departureMonth = dayjs().month(departureDate.month()+1).format('MMMM')
	const year = arrivalDate.year()

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.98, y: 10 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
		>
			{/* LEFT SIDE: Imagery Section */}
			<LeftSideModal />

			{/* RIGHT SIDE: Content Section */}
			<div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col bg-white max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<ModalHeader />

				{/* Details Body */}
				<div className="space-y-8">

					{/* Suite Info */}
					<div className="flex flex-wrap gap-4">
						{roomTypes.map(room => room.amount > 0 ? <ModalSuiteInfo key={room.name} dataRoom={room} />:null)}
					</div>

					{/* Dates & Guests Grid */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="grid grid-cols-2 gap-6 py-4 border-t border-neutral-100"
					>
						<div className="space-y-1">
							<p className="font-sans text-[0.55rem] uppercase tracking-[0.15em] text-neutral-400 font-bold">
								Dates
							</p>
							<div className="flex items-center gap-2 text-neutral-800">
								<Calendar
									size={12}
									className="text-neutral-400"
								/>
								<p className="font-sans text-xs md:text-sm font-medium">
									{arrivalMonth} {arrivalDate.day()} -  {departureMonth} {departureDate.day()}, {year}
								</p>
							</div>
						</div>
					</motion.div>

					{/* Price Breakdown */}
					<ModalPriceBreakDown arrivalDate={arrivalDate} departureDate={departureDate} rooms={roomTypes}/>
				</div>

				{/* Footer Actions */}
				<ModalFooter onclose={onclose} setStep={setStep} setIdReservation={setIdReservation}/>
			</div>
		</motion.div>

	);
}

export default PreConfirmation;
