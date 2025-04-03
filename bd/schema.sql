CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  nombre TEXT,
  rol TEXT CHECK (rol IN ('ciudadano', 'auditor', 'admin')) NOT NULL
);

CREATE TABLE fondos (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  monto_total NUMERIC NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT NOW()
);

CREATE TABLE auditorias (
  id SERIAL PRIMARY KEY,
  fondo_id INT REFERENCES fondos(id),
  usuario_id INT REFERENCES usuarios(id),
  descripcion TEXT,
  fecha TIMESTAMP DEFAULT NOW()
);

CREATE TABLE denuncias (
  id SERIAL PRIMARY KEY,
  usuario_id INT REFERENCES usuarios(id),
  fondo_id INT REFERENCES fondos(id),
  descripcion TEXT NOT NULL,
  estado TEXT DEFAULT 'pendiente',
  fecha TIMESTAMP DEFAULT NOW()
);

INSERT INTO usuarios (email, password, nombre, rol) VALUES (
  'admin@demo.com', '$2a$10$xFvLrIrJEVsvnhIVYiLMTOqAXRfST2k4HT5M8W6rl3zPv.kBlaU7i', 'Admin', 'admin'
);
