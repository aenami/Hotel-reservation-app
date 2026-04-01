INSERT INTO usuario (nombre_usuario, apellido_usuario, fecha_nacimiento_usuario, telefono_usuario, email_usuario, password_usuario, procedencia_usuario, rol_usuario)
VALUES ('Juan', 'Pérez', DATE '1998-05-12', '3001234567', 'juan@example.com', '123456', 'Colombia', 'admin');

INSERT INTO usuario (nombre_usuario, apellido_usuario, fecha_nacimiento_usuario, telefono_usuario, email_usuario, password_usuario, procedencia_usuario)
VALUES ('María', 'Gómez', DATE '2000-08-20', '3019876543', 'maria@example.com', 'abcdef', 'Colombia');

INSERT INTO usuario (nombre_usuario, apellido_usuario, email_usuario, password_usuario, rol_usuario)
VALUES ('Carlos', 'Ramírez', 'carlos@example.com', 'pass123', 'huesped');



INSERT INTO tipoHabitacion (nombre_tipoHabitacion, descripcion_tipoHabitacion, precio_tipoHabitacion, capacidad_tipoHabitacion)
VALUES ('Individual', 'Habitación para una persona', 100000, 1);

INSERT INTO tipoHabitacion (nombre_tipoHabitacion, descripcion_tipoHabitacion, precio_tipoHabitacion, capacidad_tipoHabitacion)
VALUES ('Doble', 'Habitación para dos personas', 180000, 2);

INSERT INTO tipoHabitacion (nombre_tipoHabitacion, descripcion_tipoHabitacion, precio_tipoHabitacion, capacidad_tipoHabitacion)
VALUES ('Suite', 'Habitación de lujo con sala', 350000, 4);



INSERT INTO habitacion (piso_habitacion, id_tipo_habitacion)
VALUES (1, 1);

INSERT INTO habitacion (piso_habitacion, id_tipo_habitacion)
VALUES (2, 2);

INSERT INTO habitacion (piso_habitacion, id_tipo_habitacion)
VALUES (3, 3);



INSERT INTO reserva (checkin_reserva, checkout_reserva, estado_reserva, observaciones_reserva, id_titular_reserva)
VALUES (DATE '2026-04-01', DATE '2026-04-05', 'AGENDADA', 'Primera reserva', 1);

INSERT INTO reserva (checkin_reserva, checkout_reserva, estado_reserva, id_titular_reserva)
VALUES (DATE '2026-04-02', DATE '2026-04-06', 'EN CURSO', 2);

INSERT INTO reserva (checkin_reserva, checkout_reserva, estado_reserva, id_titular_reserva)
VALUES (DATE '2026-04-10', DATE '2026-04-12', 'FINALIZADA', 3);



INSERT INTO acompanante (nombre_acompanante, apellido_acompanante, documento_acompanante, telefono_acompanante, procedencia_acompanante, id_reserva_acompanante)
VALUES ('Laura', 'Martínez', 'DOC123', '3005551111', 'Colombia', 1);

INSERT INTO acompanante (nombre_acompanante, apellido_acompanante, documento_acompanante, id_reserva_acompanante)
VALUES ('Pedro', 'López', 'DOC456', 2);



INSERT INTO factura (fecha_pago_factura, monto_factura, estado_pago_factura, metodo_pago_factura, id_reserva_factura)
VALUES (SYSDATE, 500000, 'PAGADO', 'tarjeta', 1);

INSERT INTO factura (monto_factura, estado_pago_factura, metodo_pago_factura, id_reserva_factura)
VALUES (300000, 'PENDIENTE', 'efectivo', 2);



-- Usuario ocupando habitación
INSERT INTO huespedHabitacion (id_reserva_huespedHabitacion, id_habitacion_huespedHabitacion, id_usuario_huespedHabitacion)
VALUES (1, 1, 1);

-- Acompañante ocupando habitación
INSERT INTO huespedHabitacion (id_reserva_huespedHabitacion, id_habitacion_huespedHabitacion, id_acompanante_huespedHabitacion)
VALUES (1, 1, 1);

-- Otro usuario
INSERT INTO huespedHabitacion (id_reserva_huespedHabitacion, id_habitacion_huespedHabitacion, id_usuario_huespedHabitacion)
VALUES (2, 2, 2);