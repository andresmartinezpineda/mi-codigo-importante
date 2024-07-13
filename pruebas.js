const persona = {
    nombre: 'andres',
    apellido: 'martinez',
    familia: ['myriam', ' marcela', ' viviana', ' david'],
    pareja: {
        nombre: 'jazmin',
        apellido: 'jara',
        familia: ['nestor betancourt', ' linda jara', ' teresa jara']
    },
    sumar:function(x,y) {
        let resultado = x + y;
        return resultado
    }
}

delete persona.apellido

persona.deporte = 'basketball'
console.log(persona)
