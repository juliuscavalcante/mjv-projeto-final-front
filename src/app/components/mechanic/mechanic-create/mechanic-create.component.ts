import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Mechanic } from "../../../model/mechanic";
import { MechanicService } from "../../../service/mechanic.service";

@Component({
  selector: 'app-mechanic-create',
  templateUrl: './mechanic-create.component.html',
  styleUrls: ['./mechanic-create.component.css']
})
export class MechanicCreateComponent implements OnInit {

  mechanic: Mechanic = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profiles:     [],
    birthDate:    ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.required]);
  email: FormControl = new FormControl(null, Validators.email);
  password: FormControl = new FormControl(null, Validators.minLength(3));
  birthDate: FormControl = new FormControl(null, Validators.required);

  constructor(
      private service: MechanicService,
      private toast: ToastrService,
      private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.mechanic).subscribe(() => {
      this.addProfile(1);
      this.toast.success('Successfully registered mechanic', 'Register');
      this.router.navigate(['mechanic']);
    }, ex => {
      console.log(ex);
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  addProfile(profile: any): void {
    if(this.mechanic.profiles.includes(profile)) {
      this.mechanic.profiles.splice(this.mechanic.profiles.indexOf(profile));
    } else {
      this.mechanic.profiles.push(profile);
    }
  }

  fieldValidation(): boolean {
    return this.name.valid &&
        this.cpf.valid &&
        this.email.valid &&
        this.password.valid &&
        this.birthDate.valid;
  }
}
