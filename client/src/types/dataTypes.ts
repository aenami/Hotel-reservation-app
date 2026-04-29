export type Rooms = {
  id: number;
  name: string;
  price: number;
  capacity: number;
}

export type selectedRoomTypes = {
  roomType: number,
  amount: number,
  name: string,
  price: number,
}

export type Reservations = {
  check_in: string;
  check_out: string;
  rooms: selectedRoomTypes[];
}
