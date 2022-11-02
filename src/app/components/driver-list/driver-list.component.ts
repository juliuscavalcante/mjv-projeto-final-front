import {Component, OnInit, ViewChild} from '@angular/core';
import { Driver} from "../../model/driver";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  ELEMENT_DATA: Driver[] = [
    {
      id: 1,
      name: 'Hamilton',
      cpf: '469.268.880-78',
      email: 'hamilton@email.com',
      password: '123',
      profiles: ['1'],
      birthDate: '05/01/1996'
    }
  ]

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'birthDate', 'actions'];
  dataSource = new MatTableDataSource<Driver>(this.ELEMENT_DATA);



  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
