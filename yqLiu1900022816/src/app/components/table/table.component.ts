import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';
import { SourceType, originSource } from '../../../mock-data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {



  ngOnInit() {
  }
}