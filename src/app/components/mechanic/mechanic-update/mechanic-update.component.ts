import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { MechanicService } from "../../../service/mechanic.service";
import { Mechanic } from "../../../model/mechanic";

@Component({
  selector: 'app-mechanic-update',
  templateUrl: './mechanic-update.component.html',
  styleUrls: ['./mechanic-update.component.css']
})
export class MechanicUpdateComponent implements OnInit {

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
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.mechanic.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.mechanic.id).subscribe(response => {
      response.profiles = [];
      this.mechanic = response;
    });
  }

  update(): void {
    this.service.update(this.mechanic).subscribe(() => {
      this.addProfile(1);
      this.toast.success('Mechanic successfully updated', 'Update');
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
