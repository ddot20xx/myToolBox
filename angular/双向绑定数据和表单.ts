import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lx1',
  templateUrl: './lx1.component.html',
  styleUrls: ['./lx1.component.scss']
})
export class Lx1Component implements OnInit {
  showImg = true;
  list = [
    {
      title: 'demo1',
      show: true
    },
    {
      title: 'demo2',
      show: true
    },
    {
      title: 'demo3',
      show: true
    },
  ];

  inputdata = '';
  radiores = 'male'

  city_list = ['郑州', '上海', '北京']
  city: string = '北京';

  habits = [
    {
      title: '吃饭',
      checked: false
    },
    {
      title: '看书',
      checked: false
    },
    {
      title: '旅游',
      checked: false
    }
  ]

  article: any;

  constructor() { }

  ngOnInit() {
  }

  switchimg() {
    this.showImg = !this.showImg
  }

  getData() {
    // const input: any = document.getElementById('input1')
    // console.log(input.value)

    console.log(this.inputdata);
  }

  getradio() {
    console.log(this.radiores);
  }

  getselect() {
    console.log(this.city)
  }

  getAllChecked() {
    console.log(this.habits)
  }

  getChecked() {
    const res = this.habits.filter(habit => habit.checked === true)
    if (res.length > 0) {
      console.log(res)
    } else {
      console.log('没有爱好')
    }

  }

  gettextarea() {
    console.log(this.article)
  }

}
