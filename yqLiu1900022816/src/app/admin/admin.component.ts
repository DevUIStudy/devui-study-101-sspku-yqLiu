import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingType } from 'ng-devui/loading';
import { originSource, SourceType } from '../../mock-data';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  //表格的数据
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
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



  constructor(private ref: ChangeDetectorRef) { }

ngOnInit() {
  }
  tab1acticeID = 'tab2';

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

}


