fetch('menu.json')
//Que hace? Esta linea inicia la carga del archivo menu.json. fetch es una funcion  de JavaScript que facilita la realizacion de solicitudes de red, como obtener datos de un archivo o un endpoint de API.
//Como funcina? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, si no un objeto de respuesta que incluye varios detalles sobre la respuesta misma.  
.then(response => response.json())
//Que hace? Esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto JavaScript (esto asume que el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato JSON.
then(data=>{
    const menuContainer = document.getElementById('menuContainer');
    //Que hace? Aqui se procesan los datos datos JSON ya convertidos. Se obtiene una referencia a contenidos del menu en el HTML mediante getElementById('menuContainer'), y luego se itera sobre los elementos (categorias) del menu.
    data.items.forEach(category => {
        const categoryTittle = document.createElement('h2');
        //Que hace? Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se añade esta titulo al contenedor del menu.
        categoryTittle.textContent = category.category;
        menuContainer.appendChild(categoryTittle);
        const table = document.createElement('table');
        //Que hace? Se cre un elemento table para cada categoria. Ademas se prepara el encabezado(tableHead) con las columnas pertinentes. tableBody se inicializa vacio y se llenara con los elementos de la categoria.
        const tableHead = `<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>`;
        let tableBody= '';
        //Como funciona? Para cada categoria en los datos, se realizan varios pasos: Crear un titulo para la categoria <h2> parta el titulo de la categoria, se establece su contenido de texto al nombre de lqa categoria (category.category), luego se agrega al contenedor del menu).
        //Crear una tabla para los elementos de esas categorias: se genera una tabla para cada categoria (priemro se define el encabezado de la tabla <tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>).

        category.items.forEach(item =>{
            tableBody += `<tr>
                <td><img src="${item.image} alt="${item.name}"</td>
                <td>${item.name} - "${item.description}"</td>
                <td>${item.price}</td>
            </tr>`;
        })
    });
})
