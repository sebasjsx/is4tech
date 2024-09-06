import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

export interface Person {
  id: number;
  name: string;
  age: number;
}

const PEOPLE_DATA: Person[] = [
  { id: 1, name: 'Sebas Abad', age: 18 },
  { id: 2, name: 'Llanel Escobar', age: 4 },
  { id: 3, name: 'Omar Castillo', age: 20 },
  { id: 4, name: 'Camila Rosales', age: 30 },
  { id: 5, name: 'William Ramirez', age: 27 },
  { id: 6, name: 'Alison Ramirez', age: 23 },
  { id: 7, name: 'Isabela Argueta', age: 14 },
  { id: 8, name: 'Fernanda Veliz', age: 17 },
  { id: 9, name: 'David Balcarcel', age: 18 },
  { id: 10, name: 'Anderson Aifan', age: 31 },
  { id: 11, name: 'Rodrigo Diaz', age: 13 },
  { id: 12, name: 'Gabriela Martinez', age: 15 },
];

@Component({
  selector: 'table-people',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginator, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new MatTableDataSource(PEOPLE_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  search(event: Event) {
    let inputValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = inputValue;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
