import { Component, Input, AfterViewInit, ViewChild, Directive, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { TutorRepository } from '../model/tutor.repository';

@Component({
	moduleId: module.id,
	templateUrl: "tutor.component.html"
})
export class TutorComponent implements AfterViewInit {
	@Input() body: any;
	@ViewChild(TutorComponent, {read: ElementRef}) dynamic: ElementRef;

	constructor( private repository: TutorRepository, private router: Router ) { }

	getTutor() {
		if(this.repository.getSesion() === undefined ){
			console.log('login');
			this.router.navigate(['login']);
		}
		return this.repository.getDatosTutor();
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