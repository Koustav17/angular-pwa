import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form:any = FormGroup;
  title = 'angular-pwa';

  constructor( 
    private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private route: Router
  ) {

  }

  ngOnInit() :void{
    this.loadFrm();
  }

  loadFrm() {
   this.form = this.fb.group({
      username: new FormControl('' , Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  submit(Obj:any) {
    console.log(this.form.valid);
    if(this.form.valid) {
     this._snackBar.open('login successful!', 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
    this.route.navigate(['/dashboard']);
    this.form.reset();
    } else {
      this._snackBar.open('Form is not valid', 'Close', {
        duration: 2000,
        verticalPosition: 'top'
      })
    }
  }
}
