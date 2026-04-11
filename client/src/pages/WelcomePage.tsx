import { Header } from '../components/Header';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, ArrowRight } from "lucide-react";
import { MantineProvider, createTheme, Text,  Stack, Popover,UnstyledButton } from '@mantine/core';

import { DatePicker } from '@mantine/dates';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';

const theme = createTheme({
  fontFamily: 'Manrope, sans-serif',
  headings: {
    fontFamily: 'Noto Serif, serif',
  },
  colors: {
    brand: [
      '#f9f9f7', // 0
      '#f4f4f2', // 1
      '#eeeeec', // 2
      '#e2e3e1', // 3
      '#76777d', // 4
      '#45464d', // 5
      '#775a19', // 6 (secondary)
      '#5d4201', // 7
      '#261900', // 8
      '#000000', // 9 (primary)
    ],
  },
  primaryColor: 'brand',
});


const ArrivalCard = () => {
  const timePresets = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
  const [arrivalDate, setArrivalDate] = useState<Date | null>(new Date(2024, 9, 24));
  const [arrivalTime, setArrivalTime] = useState('02:00 PM');
  
  const hanlderChangeDate = (date: string | null) => {
    if(!date) return;
    setArrivalDate( new Date(date) )
  }

  return (
    <div className="bg-surface-lowest p-8">
      <div className="flex items-center gap-2 text-secondary mb-6">
        <CalendarIcon size={14} />
        <span className="font-bold text-[10px] uppercase tracking-[0.15em]">Arrival</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Stack gap={4}>
          <Text size="xs" fw={700} tt="uppercase" lts="0.1em" c="dimmed">Date</Text>
          <Popover position="bottom-start" shadow="md">
            <Popover.Target>
              <UnstyledButton className="border-b border-outline/20 py-1 font-headline text-xl hover:border-secondary transition-colors">
                {arrivalDate ? dayjs(arrivalDate).format('MMM DD, YYYY') : 'Select date'}
              </UnstyledButton>
            </Popover.Target>
            <Popover.Dropdown p={0}>
              <DatePicker value={arrivalDate} minDate={ new Date() } onChange={ (value) => hanlderChangeDate(value)  } />
            </Popover.Dropdown>
          </Popover>
        </Stack>

        <Stack gap={4}>
          <Text size="xs" fw={700} tt="uppercase" lts="0.1em" c="dimmed">Check-in Time</Text>
          <Popover position="bottom-end" shadow="md">
            <Popover.Target>
              <UnstyledButton className="border-b border-outline/20 py-1 font-headline text-xl text-secondary flex items-center justify-between hover:border-secondary transition-colors">
                {arrivalTime}
              </UnstyledButton>
            </Popover.Target>
            <Popover.Dropdown p="xs">
              <Stack gap={4}>
                {timePresets.map(t => (
                  <UnstyledButton
                    key={t}
                    onClick={() => setArrivalTime(t)}
                    className={`px-4 py-2 text-sm rounded hover:bg-surface-low transition-colors ${arrivalTime === t ? 'bg-secondary/10 text-secondary font-bold' : ''}`}
                  >
                    {t}
                  </UnstyledButton>
                ))}
              </Stack>
            </Popover.Dropdown>
          </Popover>
        </Stack>
      </div>
      <Text size="10px" fs="italic" c="dimmed" mt="md">Standard check-in begins at 02:00 PM</Text>
    </div>
  )
}  

const DepartureCard = () => {
  const timePresets = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [departureTime, setDepartureTime] = useState('11:00 AM');

  const hanlderChangeDate = (date: string | null) => {
    if(!date) return
    setDepartureDate(new Date(date) )
  }

  return (
    <div className="bg-surface-lowest p-8">
      <div className="flex items-center gap-2 text-secondary mb-6">
        <CalendarIcon size={14} />
        <span className="font-bold text-[10px] uppercase tracking-[0.15em]">Departure</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Stack gap={4}>
          <Text size="xs" fw={700} tt="uppercase" lts="0.1em" c="dimmed">Date</Text>
          <Popover position="bottom-start" shadow="md">
            <Popover.Target>
              <UnstyledButton className="border-b border-outline/20 py-1 font-headline text-xl hover:border-secondary transition-colors">
                {departureDate ? dayjs(departureDate).format('MMM DD, YYYY') : 'Select date'}
              </UnstyledButton>
            </Popover.Target>
            <Popover.Dropdown p={0}>
              <DatePicker value={departureDate} minDate={ new Date() } onChange={ (dateSelected) => hanlderChangeDate(dateSelected) } />
            </Popover.Dropdown>
          </Popover>
        </Stack>

        <Stack gap={4}>
          <Text size="xs" fw={700} tt="uppercase" lts="0.1em" c="dimmed">Check-out Time</Text>
          <Popover position="bottom-end" shadow="md">
            <Popover.Target>
              <UnstyledButton className="border-b border-outline/20 py-1 font-headline text-xl text-secondary flex items-center justify-between hover:border-secondary transition-colors">
                {departureTime}
              </UnstyledButton>
            </Popover.Target>
            <Popover.Dropdown p="xs">
              <Stack gap={4}>
                {timePresets.map(t => (
                  <UnstyledButton
                    key={t}
                    onClick={() => setDepartureTime(t)}
                    className={`px-4 py-2 text-sm rounded hover:bg-surface-low transition-colors ${departureTime === t ? 'bg-secondary/10 text-secondary font-bold' : ''}`}
                  >
                    {t}
                  </UnstyledButton>
                ))}
              </Stack>
            </Popover.Dropdown>
          </Popover>
        </Stack>
      </div>
      <Text size="10px" fs="italic" c="dimmed" mt="md">Standard check-out is at 11:00 AM</Text>
    </div>
  )
}


function WelcomePage() {
  
  return (
    <MantineProvider theme={theme}>
      <div className="min-h-screen bg-surface selection:bg-secondary/20">
        
        {/* HEADER */}
        <Header/>

        <main className="relative pt-20 min-h-screen flex flex-col lg:flex-row">
          
          {/* LEFT CONTENT */}
          <section className="flex-1 px-6 lg:px-24 py-12 lg:py-24 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <span className="inline-block font-sans text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                Your Curated Journey
              </span>
              
              <h2 className="font-headline text-5xl lg:text-7xl leading-[1.1] tracking-tight mb-12">
                Welcome back, Julian.<br />
                <span className="italic text-secondary font-light">Your sanctuary awaits.</span>
              </h2>

              {/* BOOKING CARDS */}
              <div className="grid grid-cols-1 sm:w-2xl md:grid-cols-2 gap-px bg-outline/10 rounded-xl shadow-2xl shadow-black/5 mb-12 border border-outline/5">
                
                {/* ARRIVAL CARD */}
                <ArrivalCard/>

                {/* DEPARTURE CARD */}
                <DepartureCard/>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row items-center gap-8 mb-16">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-black/10 hover:bg-primary/90 transition-all"
                >
                  Proceed to Booking
                </motion.button>
                <button className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] group">
                  Explore All Suites
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* MEMBER EXCLUSIVE CARD */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-sm p-8 bg-surface-lowest/60 backdrop-blur-xl rounded-xl border border-white/40 shadow-lg"
              >
                <h3 className="font-headline italic text-xl mb-3">Member Exclusive</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Enjoy complimentary concierge airport transfers for all Reserve members this season.
                </p>
                <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary border-b border-secondary/30 pb-1 hover:text-secondary/70 transition-colors">
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </section>

          {/* RIGHT IMAGE SECTION */}
          <section className="hidden lg:block absolute top-0 right-0 w-[45%] h-full">
            <div className="absolute inset-0 bg-linear-to-r from-surface via-surface/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
              alt="Luxury Hotel Lobby" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </section>
        </main>

      </div>
    </MantineProvider>
  );

}

export default WelcomePage
