import { Component, OnInit } from '@angular/core';
import { Driver } from "../../../model/driver";
import { DriverService } from "../../../service/driver.service";
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent implements OnInit {

  driver: Driver = {
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
      private service: DriverService,
      private toast: ToastrService,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.driver.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.driver.id).subscribe(response => {
      response.profiles = [];
      this.driver = response;
    });
  }

  update(): void {
    this.service.update(this.driver).subscribe(() => {
      this.addProfile(1);
      this.toast.success('Driver successfully updated\'', 'Update');
      this.router.navigate(['driver']);
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
    if(this.driver.profiles.includes(profile)) {
      this.driver.profiles.splice(this.driver.profiles.indexOf(profile));
    } else {
      this.driver.profiles.push(profile);
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
