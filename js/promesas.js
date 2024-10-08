// const baseDatos =[ /*seria nomina de productos*/
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "PH001",
//         descripcion: "Papel Higienico",
//         presentacion: "Pack",
//         umc: 40,
//         precioPorUmc: 20000,
//         precioUnitario: 20000 / 40,
//       },
//       {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "TOA001",
//         descripcion: "Toalla de papel",
//         presentacion: "Pack",
//         umc: 2,
//         precioPorUmc: 14000,
//         precioUnitario: 14000 / 2,
//       },
//       {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         presentacion: "Bidón",
//         umc: 5,
//         precioPorUmc: 5000,
//         precioUnitario: 5000 / 5,
//       },
//       {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         presentacion: "Pack",
//         umc: 250,
//         precioPorUmc: 12500,
//         precioUnitario: 12500 / 250,
//       },
//       {
//         categoria: "Trapos",
//         codigo: "00004",
//         descripcion: "Trapo de piso",
//         presentacion: "Unidad",
//         umc: 1,
//         precioPorUmc: 1000,
//         precioUnitario: 1000 / 1,
//       },
//       {
//         categoria: "Desodorantes / Desinfectantes líquidos",
//         codigo: "00005",
//         descripcion: "Desodorante Cherry",
//         presentacion: "Bidón",
//         umc: 5,
//         precioPorUmc: 6500,
//         precioUnitario: 6500 / 5,
//       },
//       {
//         categoria: "Ceras y lustradores",
//         codigo: "00006",
//         descripcion: "Blem pisos plastificados",
//         presentacion: "Bidón",
//         umc: 5,
//         precioPorUmc: 18000,
//         precioUnitario: 18000 / 5,
//       },

//  ]

//  const pedirProductos = () => {
//     return new Promise ((resolve, reject) => {
//          setTimeout(() => {
//             resolve (baseDatos);
//          }, 1500); 
//     })
//  }
// const url = "https://jsonplaceholder.typicode.com/posts"

// fetch(url)
// .then((resp) => resp.json())
// .then((data) => console.log(data))

// const url = "https://jsonplaceholder.typicode.com/posts"

// let nuestroPost = {
//     userId: 1,
//     title: "00006",
//     body: "Blem pisos plastificados",
    
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
//     body: JSON.stringify(nuestroPost)
// })

// .then((resp) => resp.json())
// .then((data) => console.log(data))
