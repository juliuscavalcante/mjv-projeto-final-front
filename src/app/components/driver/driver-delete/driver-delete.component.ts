import { Component, OnInit } from '@angular/core';
import { Driver } from "../../../model/driver";
import { DriverService } from "../../../service/driver.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-driver-delete',
  templateUrl: './driver-delete.component.html',
  styleUrls: ['./driver-delete.component.css']
})
export class DriverDeleteComponent implements OnInit {

  driver: Driver = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profiles:     [],
    birthDate:    ''
  }

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

  delete(): void {
    this.service.delete(this.driver.id).subscribe(() => {
      this.toast.success('Driver successfully deleted\'', 'Delete');
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
}
