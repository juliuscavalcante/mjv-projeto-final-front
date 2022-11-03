import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {Engineer} from "../../../model/engineer";
import {EngineerService} from "../../../service/engineer.service";

@Component({
  selector: 'app-engineer-update',
  templateUrl: './engineer-update.component.html',
  styleUrls: ['./engineer-update.component.css']
})
export class EngineerUpdateComponent implements OnInit {

  engineer: Engineer = {
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
      private service: EngineerService,
      private toast: ToastrService,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.engineer.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.engineer.id).subscribe(response => {
      response.profiles = [];
      this.engineer = response;
    });
  }

  update(): void {
    this.service.update(this.engineer).subscribe(() => {
      this.addProfile(1);
      this.toast.success('Engineer successfully updated\'', 'Update');
      this.router.navigate(['engineer']);
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
    if(this.engineer.profiles.includes(profile)) {
      this.engineer.profiles.splice(this.engineer.profiles.indexOf(profile));
    } else {
      this.engineer.profiles.push(profile);
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
