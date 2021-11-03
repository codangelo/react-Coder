const productos = [
    { id: 1, titulo: "Master Origins Colombia", descripcion: "AFRUTADO Y VIBRANTE", precio: 1000, img: "https://via.placeholder.com/150", stock: "3", categ:"cafe" },
    { id: 2, titulo: "Nicaragua La Cumplida", descripcion: "AFRUTADO Y DULCE", precio: 2000, img: "https://via.placeholder.com/150", stock: "10", categ:"cafe" },
    { id: 3, titulo: "Vanilla Éclair", descripcion: "VANILLA", precio: 1100, img: "https://via.placeholder.com/150", stock: "5", categ:"cafe"},
    { id: 4, titulo: "Master Origins Colombia", descripcion: "AFRUTADO Y VIBRANTE", precio: 1000, img: "https://via.placeholder.com/150", stock: "3", categ:"cafe" },
    { id: 5, titulo: "Nicaragua La Cumplida", descripcion: "AFRUTADO Y DULCE", precio: 2000, img: "https://via.placeholder.com/150", stock: "10", categ:"cafe" },
    { id: 100, titulo: "Creatista Plus", descripcion: "Maquina premium", precio: 50000, img: "https://via.placeholder.com/150", stock: "5", categ:"maquinas" },
    { id: 200, titulo: "Lattissima Pro", descripcion: "Desc Maquina 2", precio: 40000, img: "https://via.placeholder.com/150", stock: "5", categ:"maquinas" },
    { id: 300, titulo: "CitiZ", descripcion: "Desc Maquina 3", precio: 25000, img: "https://via.placeholder.com/150", stock: "5", categ:"maquinas" },
    { id: 700, titulo: "Aeroccino4 Chrome", descripcion: "Desc Accesorio 1", precio: 4000, img: "https://via.placeholder.com/150", stock: "5", categ:"accesorios" },
    { id: 900, titulo: "VERTUO Coffee Mugs", descripcion: "Desc accesorio 2", precio: 5000, img: "https://via.placeholder.com/150", stock: "5", categ:"accesorios" },
]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})

export default getFetch