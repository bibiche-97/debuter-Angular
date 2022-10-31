import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!:FaceSnap[];
 /* mySnap!:FaceSnap;
  myfirstSnap!:FaceSnap;
  myLastSnap!:FaceSnap;
  myOtherSnap!:FaceSnap;*/
  ngOnInit(){
    /*this.mySnap = {firstName:"Abibatou",lastName:"Diouf",adress:"Ngascop",createdDate: new Date(),imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',id:9,location:'Paris'};
    this.myfirstSnap = {firstName:"Ndeye Aissatou",lastName:"Ndiaye",adress:"Barry",createdDate:new Date(),imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',id:8};
    this.myLastSnap = {firstName:"Ablaye",lastName:"Faye",adress:"Kaolack",createdDate: new Date(),imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',id:19};
    this.myOtherSnap ={ firstName:"Cheikh Yankhouba ",lastName:"Cisse",adress:"Rufisque",createdDate:new Date(),imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',id:209,location:'Dakar'};
  */
 this.faceSnaps = [
  {firstName:"Abibatou",lastName:"Diouf",adress:"Ngascop",createdDate: new Date(),imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',id:9,location:'Paris'},
  {firstName:"Ndeye Aissatou",lastName:"Ndiaye",adress:"Barry",createdDate:new Date(),imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',id:8},
 {firstName:"Ablaye",lastName:"Faye",adress:"Kaolack",createdDate: new Date(),imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',id:19,location:'Dakar'},
  { firstName:"Cheikh Yankhouba ",lastName:"Cisse",adress:"Rufisque",createdDate:new Date(),imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',id:209},

 ];
  }
 

 // title = 'Angular-project';
}
