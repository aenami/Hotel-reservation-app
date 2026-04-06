import { motion } from "framer-motion";
import { Bed, Calendar, Users, X } from "lucide-react";

type modalProps = {
	onclose: () => void;
	setStep: () => void;
};

function PreConfirmation({ onclose, setStep }: modalProps) {
	//const [isOpen, setIsOpen] = useState(true);

	const handlerConfirmation = () => {
		setStep();
	};

	return (
		<div className="flex items-center justify-center p-4 min-h-screen">
			{/* Modal Card Container */}
			<motion.div
				initial={{ opacity: 0, scale: 0.98, y: 10 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
			>
				{/* Close Button (Optional - can be removed if handled by parent) */}
				<button className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-md rounded-full text-white md:hidden hover:bg-white/30 transition-colors">
					<X size={20} />
				</button>

				{/* LEFT SIDE: Imagery Section */}
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
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

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

				{/* RIGHT SIDE: Content Section */}
				<div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col bg-white">
					{/* Header */}
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

					{/* Details Body */}
					<div className="space-y-8">
						{/* Suite Info */}
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
									Royal Ocean Suite
								</h3>
								<p className="font-sans text-xs text-neutral-500 mt-0.5">
									Sanctuary Alpha Wing • Floor 12
								</p>
							</div>
						</motion.div>

						{/* Dates & Guests Grid */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="grid grid-cols-2 gap-6 py-6 border-t border-neutral-100"
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
										Oct 24 — Oct 31, 2024
									</p>
								</div>
							</div>
							<div className="space-y-1">
								<p className="font-sans text-[0.55rem] uppercase tracking-[0.15em] text-neutral-400 font-bold">
									Guests
								</p>
								<div className="flex items-center gap-2 text-neutral-800">
									<Users
										size={12}
										className="text-neutral-400"
									/>
									<p className="font-sans text-xs md:text-sm font-medium">
										2 Adults
									</p>
								</div>
							</div>
						</motion.div>

						{/* Price Breakdown */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="space-y-3 pt-6 border-t border-neutral-100"
						>
							<div className="flex justify-between items-center text-xs">
								<span className="text-neutral-500">
									7 Nights @ $1,200.00
								</span>
								<span className="font-medium text-neutral-900">
									$8,400.00
								</span>
							</div>
							<div className="flex justify-between items-center text-xs">
								<span className="text-neutral-500">
									Resort Fees & Taxes (15%)
								</span>
								<span className="font-medium text-neutral-900">
									$1,260.00
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
									$9,660.00
								</span>
							</div>
						</motion.div>
					</div>

					{/* Footer Actions */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className="mt-10 space-y-5"
					>
						<div className="flex flex-col sm:flex-row gap-3">
							<button onClick={onclose}
							className="flex-1 py-3.5 px-5 border border-neutral-200 rounded-lg font-sans text-[0.65rem] font-bold uppercase tracking-[0.15em] text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 cursor-pointer">
								Edit Details
							</button>
							<button onClick={handlerConfirmation}
							className="flex-[1.5] py-3.5 px-5 bg-black text-white rounded-lg font-sans text-[0.65rem] font-bold uppercase tracking-[0.15em] hover:bg-neutral-800 transition-all duration-300 shadow-lg shadow-black/10 active:scale-[0.98] cursor-pointer">
								Confirm Reservation
							</button>
						</div>

						<div className="flex items-center justify-center md:justify-start gap-2">
							<div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
							<p className="font-sans text-[0.55rem] uppercase tracking-[0.1em] text-emerald-600 font-bold">
								Free cancellation before Oct 17, 2024.
							</p>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}

export default PreConfirmation;
