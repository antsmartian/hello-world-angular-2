//import the Component and bootsrtap from angular fw
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

/*
  Placing this annotations above our
  class turns that into an Angular component!

  selector: It defines our name of our component
            which we can use to refer in our html file. 

  template : This specifies the angular component
	     what to be displayed while its rendered.

  {{}} : The name property inside the {{}} defines the data
	 binding that our component has.
*/
@Component({
  selector: 'hello-world',
  template: `<h1>Hello {{ name }}!</h1>`
})
class HelloWorldComponent {
  constructor() {
    this.name = 'Angular 2';
  }
}

//This will instantiates our hello-world
//component. Note that, Angular creates the 
//instance of our HelloWorldComponent, not 
//by us
bootstrap(HelloWorldComponent);

