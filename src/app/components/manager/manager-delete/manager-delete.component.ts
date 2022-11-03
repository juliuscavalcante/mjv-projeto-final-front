import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { ManagerService } from "../../../service/manager.service";
import { Manager } from "../../../model/manager";

@Component({
  selector: 'app-manager-delete',
  templateUrl: './manager-delete.component.html',
  styleUrls: ['./manager-delete.component.css']
})
export class ManagerDeleteComponent implements OnInit {

  manager: Manager = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profiles:     [],
    birthDate:    ''
  }

  constructor(
      private service: ManagerService,
      private toast: ToastrService,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.manager.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.manager.id).subscribe(response => {
      response.profiles = [];
      this.manager = response;
    });
  }

  delete(): void {
    this.service.delete(this.manager.id).subscribe(() => {
      this.toast.success('Manager successfully deleted\'', 'Delete');
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
}
