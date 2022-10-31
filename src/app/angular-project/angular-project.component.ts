import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
//import { FaceSnap } from './FaceSnap';

@Component({
  selector: 'app-angular-project',
  templateUrl: './angular-project.component.html',
  styleUrls: ['./angular-project.component.scss']
})

export class AngularProjectComponent implements OnInit{
 
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit(): void {
    
    this.buttonText ="Oh snaps";
  }

  onAddId() {
    this.faceSnap.id++;
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.id++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.id--;
      this.buttonText = 'Oh Snap!';
    }
  }

}
