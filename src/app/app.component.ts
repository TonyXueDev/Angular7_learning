import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'myapp';
  public title = '假的星际争霸';
  public imgSrc = 'favicon.ico';

  getVal() {
    return '这是函数getVal的返回值';
  }

  btnClick() {
    alert('测试事件绑定！');
  }
}
