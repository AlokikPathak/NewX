import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.page.html',
  styleUrls: ['./create-story.page.scss']
})
export class CreateStoryPage implements OnInit {


  public form: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  public dialogResult: any;

  ngOnInit() {
    this.form = this.fb.group ( {
      title: [null , Validators.compose ( [ Validators.required ] )] , description: [null , Validators.compose ( [ Validators.required ] )],
    } );
  }

  // Getter method for Form fields value
  get f(){
    return this.form.controls;
  }

  /**
   * Purpose: Creates a new Story, after validation
   */
  onSubmit(){
    console.log("title:", this.f.title.value+ this.f.description.value);
    this.openDialog();
  }

  /**
   * Purpose: Pops-up dialog stating the Story created
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '400px',
      data: {message: 'Hi! your story is created.'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult = result;
    });
  }

}


@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
})
export class ConfirmationDialog {

  constructor(
    private _router: Router,
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onClose(): void {
    console.log('Dialog closed');
    this.dialogRef.close();
    this._router.navigate(['']);
  }

}