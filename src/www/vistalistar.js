import {Vista} from './vista.js'

export class VistaListar extends Vista{
	/**
	 * Constructor de la clase vista juego
	 * @param {*} controler 
	 * @param {*} divListar
	 */
	constructor(controler, divListar){
		super(divListar)
		this.conrolador = controler
	}
	
}