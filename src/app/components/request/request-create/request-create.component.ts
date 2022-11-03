import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  priority: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  title: FormControl = new FormControl(null, [Validators.required])
  description: FormControl = new FormControl(null, [Validators.required])
  engineer: FormControl = new FormControl(null, [Validators.required])
  mechanic: FormControl = new FormControl(null, [Validators.required])


  constructor() { }

  ngOnInit(): void {
  }

  fieldValidation(): boolean {
    return this.priority.valid &&
        this.status.valid &&
        this.title.valid &&
        this.description.valid &&
        this.engineer.valid &&
        this.mechanic.valid
  }

}