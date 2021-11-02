const productos = [
    { id: 1, titulo: "Master Origins Colombia", descripcion: "AFRUTADO Y VIBRANTE", precio: 1000, img: "https://via.placeholder.com/150", stock: "3", categ:"cafe" },
    { id: 2, titulo: "Nicaragua La Cumplida", descripcion: "AFRUTADO Y DULCE", precio: 2000, img: "https://via.placeholder.com/150", stock: "10", categ:"cafe" },
    { id: 3, titulo: "Vanilla Éclair", descripcion: "VANILLA", precio: 1100, img: "https://via.placeholder.com/150", stock: "5" },
    { id: 4, titulo: "Master Origins Colombia", descripcion: "AFRUTADO Y VIBRANTE", precio: 1000, img: "https://via.placeholder.com/150", stock: "3", categ:"cafe" },
    { id: 5, titulo: "Nicaragua La Cumplida", descripcion: "AFRUTADO Y DULCE", precio: 2000, img: "https://via.placeholder.com/150", stock: "10", categ:"cafe" },
    { id: 100, titulo: "Vanilla Éclair", descripcion: "VANILLA", precio: 1100, img: "https://via.placeholder.com/150", stock: "5", categ:"maquinas" },
    { id: 200, titulo: "Vanilla Éclair", descripcion: "VANILLA", precio: 1100, img: "https://via.placeholder.com/150", stock: "5", categ:"maquinas" },
    { id: 300, titulo: "Vanilla Éclair", descripcion: "VANILLA", precio: 1100, img: "https://via.placeholder.com/150", stock: "5", categ:"maquinas" }
]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})

export default getFetch