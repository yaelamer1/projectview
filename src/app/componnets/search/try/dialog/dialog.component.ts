import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
export interface DialogData {
    animal: string;
    name: string;
  }
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    animal: string | undefined;
    name: string | undefined;
  
    constructor() {}
    ngOnInit(): void {}
    // openDialog(): void {
    //   const dialogRef = this.dialog.open(DialogOverviewComponent, {
    //     width: '250px',
    //     data: {name: this.name, animal: this.animal}
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     this.animal = result;
    //   });
    // }
  

}