import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ChangeDetectorRef } from '@angular/core';
import { SourceType, originSource } from '../../../mock-data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 10)));
  dataTableOptions = {
    columns: [
        {
            field: 'firstName',
            header: 'First Name',
            fieldType: 'text'
        },
        {
            field: 'lastName',
            header: 'Last Name',
            fieldType: 'text'
        },
        {
            field: 'gender',
            header: 'gender',
            fieldType: 'text'
        },
        {
            field: 'dob',
            header: 'Date of birth',
            fieldType: 'date'
        }
    ]
};



  //tab的数据
  title = 'yqLiu1900022816';
  restrictOneOpen = false;
  menu = [{
    title: '通用设置',
    children: [
      { title: '设置1' },
      { title: '设置2' },
      { title: '设置3' },
    ]
  }, {
    title: '项目管理',
    open: true,
    children: [
      { title: '项目设置模板' ,active: true},
      { title: '设置项目创建者' },
      { title: '项目成员管理' },
    ]
  }, {
    title: '编译构成',

    children: [
      { title: '子内容1(禁用)', disabled: true },
      { title: '子内容2(默认激活)',  },
      { title: '子内容3' },
    ]
  }, {
    title: '私有依赖库'
  }];

  /* 分页 */ 

  pager3 = {
    total: 648,
    pageIndex: 1,
    pageSize: 10
  };
  tab1acticeID = 'tab1';

  constructor(private ref: ChangeDetectorRef){

  }
  ngOnInit() {
  }
  itemClick(event) {
    console.log('item click' + JSON.stringify(event));
  }
  menuToggle(event) {
    console.log('menu toggle' + JSON.stringify(event));

    if (event.open && event.item.needLoadChildren) {
      event.item.loading = true;
      setTimeout(() => {
        event.item.children = [
          { title: '子内容1' },
          { title: '子内容2' }
        ];
        event.item.needLoadChildren = false;
        event.item.loading = false;
      }, 1000);
    }
  }
  setTotal(number) {
    this.pager3.total = number;
  }

  setIndex(number: number) {
    this.pager3.pageIndex = number;
    console.log(this.pager3.pageIndex);
  }

}
