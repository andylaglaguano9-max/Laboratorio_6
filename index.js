const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simulación de base de datos en memoria
const usuarios = [];
let productos = [
  { id: 1, nombre: 'Rick Sanchez', descripcion: 'Científico loco y alcohólico, el hombre más inteligente del universo.', precio: 5000.00, stock: 1, imagen: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
  { id: 2, nombre: 'Morty Smith', descripcion: 'Nieto de Rick, siempre metido en problemas interdimensionales.', precio: 6.50, stock: 999, imagen: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
  { id: 3, nombre: 'Mr. Meeseeks', descripcion: 'Presiona el botón para invocar a un Mr. Meeseeks. ¡La existencia es dolor!', precio: 150.00, stock: 10, imagen: 'https://rickandmortyapi.com/api/character/avatar/242.jpeg' }
];

// Rutas de Autenticación
app.post('/auth/register', (req, res) => {
  const { nombre, correo, password } = req.body;
  if (!correo || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }
  const existe = usuarios.find(u => u.correo === correo);
  if (existe) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }
  
  usuarios.push({ nombre, correo, password });
  res.status(201).json({ message: 'Usuario registrado correctamente' });
});

app.post('/auth/login', (req, res) => {
  const { correo, password } = req.body;
  const usuario = usuarios.find(u => u.correo === correo && u.password === password);
  
  if (!usuario) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }

  // Simulamos un JWT falso para que el frontend funcione perfecto
  const fakeToken = Buffer.from(`${correo}-simulated-jwt-token-123456`).toString('base64');
  res.json({ token: fakeToken, message: 'Inicio de sesión exitoso' });
});

// Rutas de Productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

app.post('/api/productos', (req, res) => {
  const nuevoProducto = {
    id: Date.now(),
    ...req.body
  };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

app.put('/api/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos[index] = { id, ...req.body };
    res.json(productos[index]);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

app.delete('/api/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  productos = productos.filter(p => p.id !== id);
  res.json({ message: 'Producto eliminado correctamente' });
});

// Rutas básicas
app.get('/', (req, res) => res.json({ message: 'Servidor listo con CORS habilitado' }));
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(port, () => {
  console.log(`Servidor mock ejecutandose en http://localhost:${port}`);
});