import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Manager } from "../../../model/manager";
import { ManagerService } from "../../../service/manager.service";

@Component({
  selector: 'app-manager-create',
  templateUrl: './manager-create.component.html',
  styleUrls: ['./manager-create.component.css']
})
export class ManagerCreateComponent implements OnInit {

  manager: Manager = {
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
      private service: ManagerService,
      private toast: ToastrService,
      private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.manager).subscribe(() => {
      this.addProfile(0);
      this.toast.success('Successfully registered manager', 'Register');
      this.router.navigate(['manager']);
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
    if(this.manager.profiles.includes(profile)) {
      this.manager.profiles.splice(this.manager.profiles.indexOf(profile));
    } else {
      this.manager.profiles.push(profile);
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
