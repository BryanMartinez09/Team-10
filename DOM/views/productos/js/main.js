const $productos = document.getElementById('productos');

const $arrayProductos = [
    {
        id: 1,
        nombre: 'Café Monte',   
        descripcion: 'Café Monte es un café de alta calidad, cultivado en las montañas de Guatemala. Su sabor suave y aroma intenso lo hacen perfecto para cualquier momento del día.',
        precio: 5.99,
        imagen: './assets/cafedemonte.jpg',
        categoria: 'Café',  
        stock: 100,
        destacado: true,
        fechaCreacion: '2023-01-01',
        fechaActualizacion: '2023-01-01'
    },
    {
        id: 2,
        nombre: 'Café Monte Descafeinado',
        descripcion: 'Café Monte Descafeinado ofrece el mismo sabor y aroma que el café regular, pero sin la cafeína. Ideal para quienes buscan disfrutar de un buen café sin los efectos estimulantes.',
        precio: 6.49,
        imagen: './assets/cafedemonte.jpg',
        categoria: 'Café',
        stock: 50,
        destacado: false,
        fechaCreacion: '2023-01-02',
        fechaActualizacion: '2023-01-02'
    },
    {
        id: 3,
        nombre: 'Café Monte Orgánico',
        descripcion: 'Café Monte Orgánico es cultivado sin pesticidas ni químicos, garantizando un producto saludable y respetuoso con el medio ambiente. Su sabor es intenso y puro.',
        precio: 7.99,
        imagen: './assets/cafedemonte.jpg',
        categoria: 'Café',
        stock: 75,
        destacado: true,
        fechaCreacion: '2023-01-03',
        fechaActualizacion: '2023-01-03'
    }   
    ,
    {
        id: 4,
        nombre: 'Café Monte Espresso',
        descripcion: 'Café Monte Espresso es perfecto para los amantes del café fuerte. Su sabor robusto y su aroma intenso lo convierten en la elección ideal para un espresso perfecto.',
        precio: 8.49,
        imagen: './assets/cafedemonte.jpg',
        categoria: 'Café',
        stock: 30,
        destacado: false,
        fechaCreacion: '2023-01-04',
        fechaActualizacion: '2023-01-04'
    },
    {
        id: 5,
        nombre: 'Café Monte Gourmet',
        descripcion: 'Café Monte Gourmet es una mezcla exclusiva de granos seleccionados a mano, ofreciendo un sabor único y sofisticado. Ideal para ocasiones especiales.',
        precio: 9.99,
        imagen: './assets/cafedemonte.jpg',
        categoria: 'Café',
        stock: 20,
        destacado: true,
        fechaCreacion: '2023-01-05',
        fechaActualizacion: '2023-01-05'
    },  
    {
        id: 6,
        nombre: 'Café Monte Aromático',
        descripcion: 'Café Monte Aromático es conocido por su fragancia envolvente y su sabor equilibrado. Perfecto para disfrutar en cualquier momento del día.',
        precio: 5.49,
        imagen: './assets/cafedemonte.jpg',
        categoria: 'Café',
        stock: 60,
        destacado: false,
        fechaCreacion: '2023-01-06',
        fechaActualizacion: '2023-01-06'
    },
    {
        id: 7,
        nombre: 'Café Monte Clásico',
        descripcion: 'Café Monte Clásico es la opción perfecta para quienes buscan un café tradicional con un sabor familiar y reconfortante.',
        precio: 4.99,
        imagen: './assets/cafedemonte.jpg',
        categoria: 'Café',
        stock: 80,
        destacado: true,
        fechaCreacion: '2023-01-07',
        fechaActualizacion: '2023-01-07'
    },
    {
        id: 8,
        nombre: 'Café Monte Premium',
        descripcion: 'Café Monte Premium es una selección de granos de alta calidad, ofreciendo un sabor excepcional y una experiencia de café inigualable.',
        precio: 10.99,
        imagen: './assets/cafedemonte.jpg',
        categoria: 'Café',
        stock: 15,
        destacado: false,
        fechaCreacion: '2023-01-08',
        fechaActualizacion: '2023-01-08'
    }


];
$arrayProductos.forEach(producto => {
    const $productoCard = document.createElement('div');
    $productoCard.classList.add('card', 'col-md-4', 'm-1', 'shadow', 'p-1','col-lg-4', 'col-sm-12','h-50');
    $productoCard.setAttribute('data-aos', 'fade-up');

    $productoCard.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="card-image h-50">
        <div class="card-body">
            <h2 class="card-title">${producto.nombre}</h2>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
            <button class="btn btn-primary">Añadir al carrito</button>
        </div>
    `;

    $productos.appendChild($productoCard);
});
