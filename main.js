//Parte 1: Definición de Clases
// • Persona: Base para todos los tipos. Atributos: nombre, apellidos, número de
// identificación, estado civil.

// • Empleado: Derivada de Persona. Atributos adicionales: año de incorporación,
// número de despacho.

// • Estudiante: Derivada de Persona. Atributo específico: curso matriculado.

// • Profesor: Derivada de Empleado. Atributo específico: departamento.

// • Personal de Servicio: Derivada de Empleado. Atributo específico: sección asignada.

// Parte 2: Métodos Requeridos
// • Cambio de estado civil.
// • Reasignación de despacho.
// • Cambio de curso, departamento, y sección.
// • Impresión de información.

class Persona {
    #nombre;    // el numeral hace que el parametro sea privado, lo que hace que no se pueda modificar desde afuera
    #apellido;
    #id;
    #estadoCivil;
    constructor(nombre,apellido,id,estadoCivil) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#id = id;
        this.#estadoCivil = estadoCivil;
    }

    cambiarEstadoCivil (nuevoEstado) {
        this.#estadoCivil = nuevoEstado
    }
};

class Empleado extends Persona {
    añoDeIncorporacion;
    numDespacho;
    constructor(nombre,apellidos,id,estadoCivil,añoDeIncorporacion,numDespacho) {
        super(nombre,apellidos,id,estadoCivil)
        this.añoDeIncorporacion = añoDeIncorporacion;
        this.numDespacho = numDespacho;
    }
};

class Estudiante extends Persona {
    cursoMatriculado;
    constructor(nombre,apellido,id,estadoCivil,cursoMatriculado) {
        super(nombre,apellido,id,estadoCivil,)
        this.cursoMatriculado = cursoMatriculado; // this hace referencia al objeto mismo
    }

}; 
let lucas = new Estudiante ('lucas','azócar',123456789,'soltero');
let meli = new Estudiante ('meli','Ulloa',123456789,'soltero')

class Profesor extends empleado {
    constructor(nombre,apellido,id,estadoCivil,añoDeIncorporacion,numDespacho,departamento) {
        super(nombre,apellido,id,estadoCivil,añoDeIncorporacion,numDespacho)
        this.departamento = departamento;
    }
};

class PersonalServicio extends empleado {
    constructor(nombre,apellido,id,estadoCivil,añoDeIncorporacion,numDespacho,seccionAdicional) {
        super(nombre,apellido,id,estadoCivil,añoDeIncorporacion,numDespacho)
        this.seccionAdicional = seccionAdicional;
    }

};

class CentroEducativo {
    nombre;
    estudiantes;                    //Estoy creando la clase "CentroEducativo" con sus parametros
    profesores;
    personalesServicio;

    constructor(nombre) {
        this.nombre = nombre;
        this.estudiantes = []; //constructor es un metodo especial en una clase que se utiliza para inicializar objetos
        this.profesores = [];
        this.personalesServicio = [];
    };

    altaEstudiante (unEstudiante) {    //cree un metodo que toma como parametro a unEstudiante y lo añadi a estudiante
        this.estudiantes.push(unEstudiante)
    };

    altaProfesor (unProfesor) {
        this.profesores.push(unProfesor)
    };

    altaPersonalServicio (UnPersonal) {
        this.personalesServicio.push(unPersonal)
    };

};

// let its = new CentroEducativo('itsCipolletti');

// its.altaEstudiante('lucas')

// let profesor = new profesores('Lucho');

// profesor.altaProfesor('Lucho');

// let personal = new personales ('betty');

// personal.altaPersonalServicio('betty');



















