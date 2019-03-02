import { Component, Input, AfterViewInit, ViewChild, Directive, ElementRef, EventEmitter, Output } from "@angular/core";
import { MenuRoute } from "../../model/menu.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
	@Input() body: any;

	@Input() nombreUsuario: string;
	@Input() tipoUsuario: string;
	@Input() imagenUrl: string;
	@Input() routesMenu: MenuRoute[];

	@Output() goToRoute = new EventEmitter<string>();

	@Output() goToProfile = new EventEmitter<boolean>();
	@Output() goToMessages = new EventEmitter<boolean>();
	@Output() logout = new EventEmitter<boolean>();

	@ViewChild(MenuComponent, {read: ElementRef}) dynamic: ElementRef;

	constructor() {}

	onRoute(r: string){
		this.goToRoute.emit(r);
	}

	ngAfterViewInit(): void {
		const div = document.createElement('div');
		div.innerHTML = this.body;
		const scriptElements = [];
		const scriptNodes = div.querySelectorAll('script');
		for (let i = 0; i < scriptNodes.length; i++) {
			const scriptNode = scriptNodes[i];
			// Create a new script element so HTML5 will execute it upon adding to DOM
			const scriptElement = document.createElement('script');
			// Copy all the attributes from the original script element
			for (let aI = 0; aI < scriptNode.attributes.length; aI++) {
				scriptElement.attributes.setNamedItem(<Attr>scriptNode.attributes[aI].cloneNode());
			}
			// Add any content the original script element has
			const scriptContent = document.createTextNode(scriptNode.textContent);
			scriptElement.appendChild(scriptContent);
			// Remove the original script element
			scriptNode.remove();
			// add the new element to the list
			scriptElements.push(scriptElement);
		}
	}
}
