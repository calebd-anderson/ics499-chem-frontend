import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-validation-modal',
    templateUrl: './validation-modal.component.html',
    standalone: false
})
export class ValidationModalComponent {

  constructor(public dialogRef: MatDialogRef<ValidationModalComponent>) { }

  public confirmMessage: string;
  public wasSuccessful: string;
  public isLoggedIn: string;
}
