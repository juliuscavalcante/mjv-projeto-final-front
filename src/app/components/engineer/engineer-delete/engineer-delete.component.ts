import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {Engineer} from "../../../model/engineer";
import {EngineerService} from "../../../service/engineer.service";

@Component({
  selector: 'app-engineer-delete',
  templateUrl: './engineer-delete.component.html',
  styleUrls: ['./engineer-delete.component.css']
})
export class EngineerDeleteComponent implements OnInit {

  engineer: Engineer = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profiles:     [],
    birthDate:    ''
  }

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

  delete(): void {
    this.service.delete(this.engineer.id).subscribe(() => {
      this.toast.success('Engineer successfully deleted\'', 'Delete');
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
}
