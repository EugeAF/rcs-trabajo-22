/*var persona = {
    nombre: "Eugenia",
    edad: 14,
    mascota: {
        nombre: "Manchas",
        edad: 5,
        cumplirAños: function(){
            persona.mascota.edad++;
            persona.mascota.mostrarCumpleaños();
        },
        mostrarCumpleaños: function(){
            alert("Feliz cumpleaños "+ persona.mascota.nombre + ". Tenes " + persona.mascota.edad + " años.");
        }
    }   
}*/

var autosFord = [ {
    modelo: "Ka Freestyle",
    color: "bronce",
    anio: 2021,
    poliza: {
        nombre: "Te Cuido",
        numero: 1234,
        mostrarPoliza: function(){
           alert(autosFord[0].poliza.numero);
        }
    }
},{
    modelo: "Mondeo",
    color: "gris",
    anio: 2021,
    poliza: {
        nombre: "Cuidando",
        numero: 4321,
        mostrarPoliza: function(){
           alert(autosFord[1].poliza.numero);
        }
    }
},{
    modelo: "Ka",
    color: "negro",
    anio: 2021,
    poliza: {
        nombre: "Cuidamos",
        numero: 741,
        mostrarPoliza: function(){
           alert(autosFord[2].poliza.numero);
        }
    }
},{
    modelo: "Mustang",
    color: "negro",
    anio: 2021,
    poliza: {
        nombre: "Cuidar",
        numero: 852,
        mostrarPoliza: function(){
           alert(autosFord[3].poliza.numero);
        }
    }
}
]
