import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

type modalProps = {
	onclose: () => void;
};


const ModalHeader = ()=> (
	<div className="space-y-4 mb-10">
		<motion.span
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
			className="block text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold"
		>
			Reservation Confirmed
		</motion.span>

		<motion.h1
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
			className="font-headline text-3xl md:text-4xl text-primary tracking-tight"
		>
			Success
		</motion.h1>

		<motion.p
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
			className="font-headline italic text-xl md:text-xl text-on-surface-variant font-light leading-relaxed"
		>
			Your sanctuary has been reserved, Julian.
		</motion.p>
	</div>
)

const ReservationDetails = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ delay: 0.7 }}
		className="w-full space-y-6 mb-12"
	>
		{/* Decorative Divider */}
		<div className="h-1px w-12 bg-secondary/30 mx-auto" />

		<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-[11px] tracking-[0.2em] uppercase font-bold text-primary">
			<div className="flex flex-col items-center">
				<span className="text-on-surface-variant font-medium mb-2">
					Reservation Number
				</span>
				<span className="text-sm tracking-normal">
					#NR-8829-2024
				</span>
			</div>

			{/* Vertical Divider for Desktop */}
			<div className="hidden md:block h-8 w-px bg-outline/20" />

			<div className="flex flex-col items-center">
				<span className="text-on-surface-variant font-medium mb-2">
					Status
				</span>
				<span className="flex items-center gap-2 text-sm tracking-normal">
					<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
					Confirmed & Secured
				</span>
			</div>
		</div>

		{/* Decorative Divider */}
		<div className="h-px w-12 bg-secondary/30 mx-auto" />
	</motion.div>

)


function ConfirmReservation({ onclose }: modalProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
			className="bg-surface-lowest w-full max-w-160 rounded-sm shadow-2xl overflow-y-auto max-h-[calc(100vh-4rem)] flex flex-col items-center text-center px-6 py-12 md:px-16 md:py-20 border border-outline/1"
		>
			{/* Success Icon Animation */}
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					delay: 0.3,
					type: "spring",
					stiffness: 200,
					damping: 15,
				}}
				className="mb-8"
			>
				<CheckCircle2 className="w-12 h-12 text-secondary stroke-[1.5px]" />
			</motion.div>

			{/* Header Section */}
			<ModalHeader/>

			{/* Reservation Details Box */}
			<ReservationDetails/>

			{/* Informational Text */}
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
				className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-85 mb-12 font-light"
			>
				A confirmation email with your digital key and check-in
				instructions has been sent to your inbox. We look forward to
				your arrival.
			</motion.p>

			{/* Action Buttons */}
			<div className="flex flex-col w-full gap-4 mb-12">
				<motion.button
					whileHover={{ scale: 1.01 }}
					whileTap={{ scale: 0.98 }}
					onClick={onclose}
					className="w-full bg-primary text-surface-lowest py-4 px-8 rounded-sm font-bold text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-neutral-800 flex items-center justify-center gap-2 group cursor-pointer"
				>
					Return to Home
					<ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
				</motion.button>
			</div>
		</motion.div>
	);
}

export default ConfirmReservation;
