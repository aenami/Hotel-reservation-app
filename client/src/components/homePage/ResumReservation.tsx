function ResumReservation() {
	return (
		<aside className="overflow-y-auto">
			<div className="flex flex-col p-8 bg-white rounded-md gap-6">
				<h2 className="font-bold font-headline text-2xl">Reservation summary</h2>

				<div className="flex justify-between items-center">
					<div>
						<h3 className="font-bold">Royal Ocean Suite</h3>
						<span>1 x $1200 / NIGHT</span>
					</div>
					<span className="font-bold">$1200</span>
				</div>

				<hr />

				<div className="flex justify-between">
					<h3>Total Amount</h3>
					<h1 className="font-bold text-3xl">$1,380</h1>
				</div>

				<button className="bg-black rounded-sm px-10 py-4 text-white ">COMPLETE RESERVATIONS</button>
			</div>
		</aside>
	);
}

export default ResumReservation;
