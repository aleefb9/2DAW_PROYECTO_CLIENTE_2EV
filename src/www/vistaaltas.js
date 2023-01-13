import {Vista} from './vista.js'

export class VistaAltas extends Vista{
	/**
	 * Constructor de la clase vista juego
	 * @param {*} controler 
	 * @param {*} divAltas
	 */
	constructor(controler, divAltas){
		super(divAltas)
		this.conrolador = controler
	}
	
}