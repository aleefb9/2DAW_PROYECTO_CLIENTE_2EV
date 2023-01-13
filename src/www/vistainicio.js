import {Vista} from './vista.js'

export class VistaInicio extends Vista{
	/**
	 * Constructor de la clase vista inicio
	 * @param {*} controler 
	 * @param {*} divInicio 
	 */
	constructor(controler, divInicio){
		super(divInicio)
		this.controlador = controler

		/**
		 * Declaración elementos html
		 */
		this.botonListar = divInicio.getElementsByTagName('button')[0]
		this.botonAlta = divInicio.getElementsByTagName('button')[1]

		this.botonListar.onclick = this.pulsarListar.bind(this)
       	this.botonAlta.onclick = this.pulsarAlta.bind(this)
	}


	/**
     * Método pulsar botón juego
     */
	pulsarListar(){
        this.controlador.pulsarBotonListar()
    }
	
	/**
     * Método pulsar botón ranking
	*/
	pulsarAlta(){
        this.controlador.pulsarBotonAlta()
    }
}