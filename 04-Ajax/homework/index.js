$("boton").click(()=>{
    
    let lista = $("#lista");

    lista.empty();
    // lista.innerHTML = " ";

    $.get("http://localhost:5000/amigos", data => {


        for (let i = 0; i < data.length; i++) {
         // crear elemento li
         let li = document.createElement("li");
         // ponerle como text
         li.textContent = `Nombre: ${data[i].name}, Edad: ${data[i].age}` ;
         // append
         lista.appendChild(li);
        }
    })
});

