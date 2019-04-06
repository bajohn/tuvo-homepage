import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  techArr = [
    {
      name: 'OSISoft PI',
      imgSrc: './assets/img/osipi.jpeg'
    },
    {
      name: 'IBM Maximo',
      imgSrc: './assets/img/ibm-maximo.png'
    },
    {
      name: 'Angular',
      imgSrc: './assets/img/angular.svg'
    },
    {
      name: 'Docker',
      imgSrc: './assets/img/docker.svg'
    },
    {
      name: 'Nginx',
      imgSrc: './assets/img/Nginx_logo.svg'
    },
    {
      name: 'Python',
      imgSrc: './assets/img/Python.svg'
    },
    {
      name: 'Mongo',
      imgSrc: './assets/img/mongodb.svg'
    },
    {
      name: 'Golang',
      imgSrc: './assets/img/Go_Logo.svg'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
