import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { RequestService } from "../../../service/request.service";
import { MechanicService } from "../../../service/mechanic.service";
import { EngineerService } from "../../../service/engineer.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Mechanic } from "../../../model/mechanic";
import { Request } from "../../../model/request";
import { Engineer } from "../../../model/engineer";

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = {
    priority:       '',
    status:         '',
    title:          '',
    notes:          '',
    engineer:       '',
    mechanic:       '',
    mechanicName:   '',
    engineerName:   '',
  }

  mechanics: Mechanic[] = []
  engineers: Engineer[] = []


  priority: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  title: FormControl = new FormControl(null, [Validators.required])
  notes: FormControl = new FormControl(null, [Validators.required])
  engineer: FormControl = new FormControl(null, [Validators.required])
  mechanic: FormControl = new FormControl(null, [Validators.required])


  constructor(
      private requestService: RequestService,
      private mechanicService: MechanicService,
      private engineerService: EngineerService,
      private toastService: ToastrService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.findAllMechanics();
    this.findAllEngineer();
  }

  create(): void {
    this.requestService.create(this.request).subscribe(request => {
      this.toastService.success('Request created successfully', 'New Request');
      this.router.navigate(['requests']);
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  findAllMechanics(): void {
    this.mechanicService.findAll().subscribe(request => {
      this.mechanics = request;
    })
  }

  findAllEngineer(): void {
    this.engineerService.findAll().subscribe(request => {
      this.engineers = request;
    })
  }

  fieldValidation(): boolean {
    return this.priority.valid &&
        this.status.valid &&
        this.title.valid &&
        this.notes.valid &&
        this.engineer.valid &&
        this.mechanic.valid
  }

}