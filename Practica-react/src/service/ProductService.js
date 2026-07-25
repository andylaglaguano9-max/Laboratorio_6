import api from '../API/axios';

// Función auxiliar para obtener el token en cada petición
const getHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const obtenerProductos = async () => {
    try {
        const response = await api.get('/api/productos', getHeaders());
        return response.data;
    }   
    catch (error) {
        console.error('Error al obtener los productos:', error);
    }
};

export const obtenerProductoPorId = async (id) => {
    try {
        const response = await api.get(`/api/productos/${id}`, getHeaders());
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error);
    }
};

export const crearProducto = async (producto) => {
    try {
        const response = await api.post('/api/productos', producto, getHeaders());
        return response.data;
    } catch (error) {
        console.error('Error al crear el producto:', error);
    }
};

export const actualizarProducto = async (id, producto) => {
    try {
        const response = await api.put(`/api/productos/${id}`, producto, getHeaders());   
        return response.data;
    } catch (error) {
        console.error(`Error al actualizar el producto con ID ${id}:`, error);
    }
};

export const eliminarProducto = async (id) => {
    try {
        const response = await api.delete(`/api/productos/${id}`, getHeaders());
        return response.data;
    } catch (error) {
        console.error(`Error al eliminar el producto con ID ${id}:`, error);
    }
};