import { Component, OnInit } from '@angular/core';
import { Hero } from './character';

@Component({
  selector: 'app-my-picture',
  templateUrl: './my-picture.component.html',
  styleUrls: ['./my-picture.component.css']
})
export class MyPictureComponent implements OnInit {

  heros = [
    new Hero(
      'Iron Man',
      'http://nerdist.com/wp-content/uploads/2017/05/2EtGTBg.jpg',
      `Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963).`
    ),
    new Hero(
      'Hulk',
      'https://cdn3.whatculture.com/images/2017/07/f35a22604066078f-600x400.jpg',
      `
      Hulk is a 2003 American superhero drama film based on the fictional Marvel Comics character of the same name. Ang Lee directed the film, which stars Eric Bana as Dr. Bruce Banner, as well as Jennifer Connelly, Sam Elliott, Josh Lucas, and Nick Nolte. The film explores the origins of Bruce Banner, who after a lab accident involving gamma radiation finds himself able to turn into a huge green-skinned monster whenever he gets angry
      `
    ),
    new Hero(
      'Captain',
      'https://boygeniusreport.files.wordpress.com/2014/04/captain-america.jpg?quality=98&strip=all',
      `
      Captain America is a fictional character appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period
      `
    ),
    new Hero(
      'Spider Man',
      'http://cdn2-www.superherohype.com/assets/uploads/gallery/spider-man-homecoming/spiderman0001_1.jpg',
      `Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and writer-artist Steve Ditko, and first appeared ..`
    ),

  ];
  imgSrc = 'https://www.google.co.in/logos/doodles/2017/googles-19th-birthday-5117501686939648.5-l.png';
  desc = '';
  constructor() { }

  ngOnInit() {
  }

  onCharacterClick(her: number) {
    switch (her) {
      case 1:
        this.imgSrc = this.heros[0].avtar;
        this.desc =  this.heros[0].desc;
        break;
      case 2:
      this.imgSrc = this.heros[1].avtar;
      this.desc =  this.heros[1].desc;
        break;
      case 3:
      this.imgSrc = this.heros[2].avtar;
      this.desc =  this.heros[2].desc;
        break;
      case 4:
      this.imgSrc = this.heros[3].avtar;
      this.desc =  this.heros[3].desc;
        break;

      default:
        break;
    }
  }
}
