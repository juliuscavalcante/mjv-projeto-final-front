import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { Mechanic } from "../../../model/mechanic";
import { MechanicService } from "../../../service/mechanic.service";

@Component({
  selector: 'app-mechanic-delete',
  templateUrl: './mechanic-delete.component.html',
  styleUrls: ['./mechanic-delete.component.css']
})
export class MechanicDeleteComponent implements OnInit {

  mechanic: Mechanic = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profiles:     [],
    birthDate:    ''
  }

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

  delete(): void {
    this.service.delete(this.mechanic.id).subscribe(() => {
      this.toast.success('Mechanic successfully deleted', 'Delete');
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
}
