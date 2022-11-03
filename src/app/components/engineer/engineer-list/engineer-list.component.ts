import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Engineer } from "../../../model/engineer";
import { EngineerService } from "../../../service/engineer.service";

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})
export class EngineerListComponent implements OnInit {

  ELEMENT_DATA: Engineer[] = []

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'birthDate', 'actions'];
  dataSource = new MatTableDataSource<Engineer>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
      private service: EngineerService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Engineer>(response);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


