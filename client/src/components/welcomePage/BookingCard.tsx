import { useState } from 'react';
import { Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
//import { Button } from './Button';
import { motion } from 'framer-motion';
import { Popover } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import dayjs from 'dayjs';

function BookingCard() {
    const [checkIn, setCheckIn] = useState<Date | null>(new Date(2024, 9, 24));
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const hanlderCheckIn = () => {
        setCheckIn(new Date(2024, 9, 24))
    }

    const hanlderCheckOut = () => {
        setCheckOut(new Date(2024, 9, 24))
    }

    return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4, duration: 0.6 }}
			className="space-y-12"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline/10 rounded-xl overflow-hidden shadow-2xl">
				{/* Arrival Card */}
				<div className="bg-surface-lowest p-8 flex flex-col gap-6">
					<div className="flex items-center gap-3 text-secondary">
						<CalendarIcon size={14} />
						<span className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold">
							Arrival
						</span>
					</div>
					<div className="space-y-4">
						<Popover position="bottom" withArrow shadow="md">
							<Popover.Target>
								<div className="relative cursor-pointer group">
									<input
										className="w-full bg-transparent border-0 border-b border-outline/30 font-serif text-2xl py-2 focus:ring-0 focus:border-secondary transition-colors cursor-pointer"
										readOnly
										type="text"
										value={
											checkIn
												? dayjs(checkIn).format(
														"MMM DD, YYYY",
													)
												: "Select date"
										}
									/>
									<div className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all group-hover:w-full" />
								</div>
							</Popover.Target>
							<Popover.Dropdown className="p-0 border-none bg-surface-lowest shadow-2xl">
								<DatePicker
									value={checkIn}
									onChange={hanlderCheckIn}
									color="dark"
									className="p-4"
								/>
							</Popover.Dropdown>
						</Popover>
						<div className="flex items-center justify-between">
							<span className="text-on-surface-variant font-sans text-xs">
								Standard Check-in
							</span>
							<span className="text-secondary font-bold text-sm">
								02:00 PM
							</span>
						</div>
					</div>
				</div>

				{/* Departure Card */}
				<div className="bg-surface-lowest p-8 flex flex-col gap-6">
					<div className="flex items-center gap-3 text-secondary">
						<CalendarIcon size={14} />
						<span className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold">
							Departure
						</span>
					</div>
					<div className="space-y-4">
						<Popover position="bottom" withArrow shadow="md">
							<Popover.Target>
								<div className="relative cursor-pointer group">
									<input
										className="w-full bg-transparent border-0 border-b border-outline/30 font-serif text-2xl py-2 focus:ring-0 focus:border-secondary transition-colors cursor-pointer"
										placeholder="Select date"
										readOnly
										type="text"
										value={
											checkOut
												? dayjs(checkOut).format(
														"MMM DD, YYYY",
													)
												: ""
										}
									/>
									<div className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all group-hover:w-full" />
								</div>
							</Popover.Target>
							<Popover.Dropdown className="p-0 border-none bg-surface-lowest shadow-2xl">
								<DatePicker
									value={checkOut}
									onChange={hanlderCheckOut}
									color="dark"
									minDate={checkIn || undefined}
									className="p-4"
								/>
							</Popover.Dropdown>
						</Popover>
						<div className="flex items-center justify-between">
							<span className="text-on-surface-variant font-sans text-xs">
								Standard Check-out
							</span>
							<span className="text-secondary font-bold text-sm">
								11:00 AM
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                <motion.button className='items-center justify-center rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 bg-primary text-white shadow-xl shadow-black/10 hover:bg-primary/80 px-6 py-4 cursor-pointer'>
                    Proceed to Booking
                </motion.button>

                <motion.button className='inline-flex items-center justify-center rounded-sm font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 text-secondary hover:text-secondary/80 p-0 cursor-pointer gap-2'>
                    Explore All Suites
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
            </div>
		</motion.div>
	);
}

export default BookingCard
