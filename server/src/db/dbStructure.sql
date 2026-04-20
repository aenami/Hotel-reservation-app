-- -------------------------
-- ----SIMPLE TABLESS ------
-- -------------------------

-- 01 usuario
CREATE TABLE usuario(
    id_usuario NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    apellido_usuario VARCHAR(60) NOT NULL,
    fecha_nacimiento_usuario DATE,
    telefono_usuario VARCHAR(20),
    email_usuario VARCHAR(100) NOT NULL UNIQUE,
    password_usuario VARCHAR(100) NOT NULL,
    procedencia_usuario VARCHAR(50),
    rol_usuario VARCHAR(30) DEFAULT 'huesped' NOT NULL,

    -- LOGIC CONSTRAINTS
    CONSTRAINT chk_rol_usuario CHECK(rol_usuario IN ('admin','huesped'))
);



-- 02 TIPO DE HABITACION
CREATE TABLE tipoHabitacion(
    id_tipoHabitacion NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre_tipoHabitacion VARCHAR(40) NOT NULL,
    descripcion_tipoHabitacion VARCHAR(200) NOT NULL,
    precio_tipoHabitacion NUMBER(10,2) NOT NULL,
    capacidad_tipoHabitacion NUMBER NOT NULL, 

    -- RESTRICCIONES
    CONSTRAINT chk_precio_positivo CHECK (precio_tipoHabitacion > 0),
    CONSTRAINT chk_capacidad_positiva CHECK (capacidad_tipoHabitacion > 0)
);

-- --------------------------
-- ------COMPLEX TABLES------
-- --------------------------

-- 03 RESERVA
CREATE TABLE reserva(
    id_reserva NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    checkin_reserva DATE NOT NULL,
    checkout_reserva DATE NOT NULL,
    estado_reserva VARCHAR(20) DEFAULT 'AGENDADA' NOT NULL,
    observaciones_reserva VARCHAR(300),

    id_titular_reserva NUMBER,

    -- RESTRICCIONES
    CONSTRAINT chk_estado_reserva CHECK(estado_reserva IN ('AGENDADA', 'EN CURSO', 'CANCELADA', 'FINALIZADA')),

    -- RELACIONES
    CONSTRAINT fk_id_titular_reserva FOREIGN KEY (id_titular_reserva) REFERENCES usuario(id_usuario)
);

-- 04 ACOMPAÑANTE
CREATE TABLE acompanante(
    id_acompanante NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre_acompanante VARCHAR(50) NOT NULL,
    apellido_acompanante VARCHAR(60) NOT NULL,
    documento_acompanante VARCHAR(30) NOT NULL UNIQUE,
    telefono_acompanante VARCHAR(20),
    procedencia_acompanante VARCHAR(50),

    id_reserva_acompanante  NUMBER NOT NULL,
    
    -- RELACIONES
    CONSTRAINT fk_id_reserva_acompanante FOREIGN KEY (id_reserva_acompanante) REFERENCES Reserva(id_reserva)

);

-- 05 Factura
CREATE TABLE factura(
    id_factura NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    fecha_pago_factura DATE,
    monto_factura NUMBER(10,2) NOT NULL,
    estado_pago_factura VARCHAR(20) DEFAULT 'PENDIENTE' NOT NULL,
    metodo_pago_factura VARCHAR(20) NOT NULL,

    id_reserva_factura NUMBER NOT NULL,

    -- RELACIONES
    CONSTRAINT fk_id_reserva_factura FOREIGN KEY (id_reserva_factura) REFERENCES Reserva(id_reserva),

    -- RESTRICCIONES
    CONSTRAINT chk_estado_pago_factura CHECK(estado_pago_factura IN ('PENDIENTE', 'PAGADO')),
    CONSTRAINT chk_metodo_pago_factura CHECK(metodo_pago_factura IN ('tarjeta','efectivo'))
);

-- 06 HABITACION
CREATE TABLE Habitacion(
    id_habitacion NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    piso_habitacion NUMBER NOT NULL,

    id_tipo_habitacion NUMBER NOT NULL,

    -- RELACIONES
    CONSTRAINT fk_tipo_habitacion FOREIGN KEY (id_tipo_habitacion) REFERENCES TipoHabitacion(id_tipoHabitacion),
    -- RESTRICCIONES
    CONSTRAINT chk_piso_habitacion CHECK(piso_habitacion > 0)
);

-- 07 Huesped-reserva-habitacion
CREATE TABLE huespedHabitacion(
    id_huespedHabitacion NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    
    id_reserva_huespedHabitacion NUMBER NOT NULL,
    id_habitacion_huespedHabitacion NUMBER NOT NULL,
    id_usuario_huespedHabitacion  NUMBER,
    id_acompanante_huespedHabitacion NUMBER,

    -- RELACIONES
    CONSTRAINT fk_id_reserva_huespedHabitacion FOREIGN KEY (id_reserva_huespedHabitacion) REFERENCES reserva(id_reserva),
    CONSTRAINT fk_id_habitacion_huespedHabitacion FOREIGN KEY (id_habitacion_huespedHabitacion) REFERENCES habitacion(id_habitacion),
    CONSTRAINT fk_id_usuario_huespedHabitacion FOREIGN KEY (id_usuario_huespedHabitacion) REFERENCES usuario(id_usuario),
    CONSTRAINT fk_id_acompanante_huespedHabitacion FOREIGN KEY (id_acompanante_huespedHabitacion) REFERENCES acompanante(id_acompanante),

    -- RESTRICCION
    CONSTRAINT chk_persona_huespedHabitacion CHECK (
    id_usuario_huespedHabitacion IS NOT NULL OR id_acompanante_huespedHabitacion IS NOT NULL)
);