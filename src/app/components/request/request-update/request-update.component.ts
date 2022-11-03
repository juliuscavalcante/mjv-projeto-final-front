import { Component, OnInit } from '@angular/core';
import { Engineer } from "../../../model/engineer";
import { Request } from "../../../model/request";
import { Mechanic } from "../../../model/mechanic";
import { FormControl, Validators } from "@angular/forms";
import { RequestService } from "../../../service/request.service";
import { MechanicService } from "../../../service/mechanic.service";
import { EngineerService } from "../../../service/engineer.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-request-update',
  templateUrl: './request-update.component.html',
  styleUrls: ['./request-update.component.css']
})
export class RequestUpdateComponent implements OnInit {

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
      private route: ActivatedRoute,

  ) { }


  ngOnInit(): void {
    this.request.id = this.route.snapshot.paramMap.get('id');
    this.findAllCustomers();
    this.findAllTechnician();
  }

  findById(): void {
    this.requestService.findById(this.request.id).subscribe(request => {
      this.request = request;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  update(): void {
    this.requestService.create(this.request).subscribe(request => {
      this.toastService.success('Request upated successfully', 'Upate Request');
      this.router.navigate(['requests']);
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  findAllCustomers(): void {
    this.mechanicService.findAll().subscribe(request => {
      this.mechanics = request;
    })
  }

  findAllTechnician(): void {
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

  returnStatus(status: any): string {
    if (status == '0') {
      return 'OPEN'
    } else if  (status == '1') {
      return 'PROGRESS'
    } else {
      return 'CLOSED'
    }
  }

  returnPriority(priority: any): string {
    if (priority == '0') {
      return 'LOW'
    } else if  (priority == '1') {
      return 'MEDIUM'
    } else {
      return 'HIGH'
    }
  }
}

