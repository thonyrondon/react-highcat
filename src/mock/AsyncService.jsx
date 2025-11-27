export const articulos = [
  {
    id: "01",
    name: "Arena TKPet",
    description: "Arena aglomerable con perlas olor a manzana",
    stock: 12,
    price: 30000,
    img: "../img/tk.png",
    category: "arena",
  },
  {
    id: "02",
    name: "Galletas Cambo",
    description: "Galletas sabor atún y pavo",
    stock: 15,
    price: 38000,
    img: "../img/canbo_gato.png",
    category: "alimentos",
  },
  {
    id: "03",
    name: "Remera de Bob Esponja",
    description: "Tu gato va a vivir en el Fondo de Bikini",
    stock: 2,
    price: 50000,
    img: "../img/gatoesponja.jpg",
    category: "ropa",
  },
  {
    id: "04",
    name: "Arena Klin",
    description: "Arena aglomeradora eficiente con olor a canela y clavo",
    stock: 15,
    price: 25000,
    img: "../img/arenaklin.jpg",
    category: "arena",
  },
  {
    id: "05",
    name: "Paté Catxtreme",
    description: "Delicioso sabor a salmón",
    stock: 13,
    price: 20000,
    img: "../img/catxtreme.jpg",
    category: "alimentos",
  },
  {
    id: "06",
    name: "Buzo color rojo",
    description: "Tu gato va a estar abrigado y te amara más que nunca",
    stock: 4,
    price: 65000,
    img: "../img/buzogatuno.jpg",
    category: "ropa",
  },
];

export const leerArticulos = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente nuevamente");
      } else {
        resolve(articulos);
      }
    }, 2000);
  });
};

export const getOneArt = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let art = articulos.find((articulo) => articulo.id === id);
      resolve(art);
    }, 2000);
  });
};
