import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  msg = '我是news组件';
  username: string = '张三';
  public message: any;
  public students: number = 123456;
  public userInfo: object = {
    username: 'Jack',
    age: 22,
  };
  public content = '<strong>这是一个strong标签</strong>';
  constructor() {
    this.message = '这是给属性赋值--（改变属性的值）';
    console.log(this.msg);
    this.msg = 'msg改变之后的值';
  }

  // 定义数组
  public arr: any = ['213', '34', '6756'];

  public userlist: any[] = [
    {
      username: '张三',
      age: 22,
    },
    {
      username: '张四',
      age: 22,
    },
    {
      username: '张五',
      age: 22,
    },
  ];

  public cars: any[] = [
    {
      carName: '宝马',
      list: [
        {
          title: '宝马x1',
          price: '10万',
        },
        {
          title: '宝马x2',
          price: '20万',
        },
        {
          title: '宝马x3',
          price: '30万',
        },
      ],
    },
    {
      carName: '奥迪',
      list: [
        {
          title: '奥迪Q1',
          price: '10万',
        },
        {
          title: '奥迪Q2',
          price: '20万',
        },
        {
          title: '奥迪Q3',
          price: '30万',
        },
      ],
    },
  ];
}
