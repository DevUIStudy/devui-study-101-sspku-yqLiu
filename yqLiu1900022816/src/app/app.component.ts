import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingType } from 'ng-devui/loading';
import { originSource, SourceType } from '../mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //表格的数据
  pagerSource = JSON.parse(JSON.stringify(originSource));
  sortableDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  filterList2 = [
    {
      name: 'Clear',
      value: 'Clear',
    }, {
      name: 'Male',
      value: 'Male',
    }, {
      name: 'Female',
      value: 'Female',
    }];
  filterList = [
    {
      name: 'Mark',
      value: 'Mark'
    },
    {
      name: 'Jacob',
      value: 'Jacob'
    },
    {
      name: 'Danni',
      value: 'Danni'
    },
    {
      name: 'green',
      value: 'green'
    },
    {
      name: 'po',
      value: 'po'
    },
    {
      name: 'john',
      value: 'john'
    },

  ];
  filterListMulti = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  sortedColumn = [{
    field: 'lastName',
    direction: 'ASC'
  }];
  hideColumn = ['hidden'];
  total = 20;
  next = 1;
  complete = false;
  lazyDataSource = [];
  loading: LoadingType;


  //tab的数据
  title = 'yqLiu1900022816';
  restrictOneOpen = false;
  menu = [{
    title: '内容一',
    children: [
      { title: '子内容1' },
      { title: '子内容2' },
      { title: '子内容3' },
    ]
  }, {
    title: '内容二（超长长长长长长长长长长长长长长内容测试）',
    children: [
      { title: '子内容1（超长长长长长长长长长长长长长长内容测试' },
      { title: '子内容2' },
      { title: '子内容3' },
    ]
  }, {
    title: '内容三（默认展开）',
    open: true,
    children: [
      { title: '子内容1(禁用)', disabled: true },
      { title: '子内容2(默认激活)', active: true },
      { title: '子内容3' },
    ]
  }, {
    title: '内容四（没有子项）'
  }, {
    title: '内容五（禁用）',
    disabled: true,
    children: [
    ]
  }, {
    title: '内容六（动态加载）',
    needLoadChildren: true,
    loading: false,
    children: [
    ]
  }];



  constructor(private ref: ChangeDetectorRef) { }
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
  changePageContent($event) {
    this.sortableDataSource = this.pagerSource.slice(($event.pageIndex - 1) * $event.pageSize, $event.pageIndex * $event.pageSize - 1);
  }

  multiSortChange(multiSort) {
    console.log('multiSort selected', multiSort);
  }

  onResize(event) {
    console.log(event);
  }

  filterChangeRadio($event) {
    if ($event.name === 'Clear') {
      this.sortableDataSource = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
      return;
    }
    const filterList = $event.name;
    const dataDisplay = [];
    JSON.parse(JSON.stringify(originSource.slice(0, 6))).map(item => {
      if (filterList.includes(item.gender)) {
        dataDisplay.push(item);
      }
    });
    this.sortableDataSource = dataDisplay;
  }

  filterChangeMultiple($event) {
    const filterList = $event.map(item => item.name);
    const dataDisplay = [];
    JSON.parse(JSON.stringify(originSource.slice(0, 6))).map(item => {
      if (filterList.includes(item.firstName)) {
        dataDisplay.push(item);
      }
    });
    this.sortableDataSource = dataDisplay;
  }

  beforeFilter = (currentValue) => {
    console.log(currentValue);
    this.filterListMulti = this.filterList;
    this.ref.detectChanges();
    return true;
  }
}
