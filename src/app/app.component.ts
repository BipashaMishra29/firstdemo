import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='puja'
  college='IEM'
  degree='BCA'
  passout=2023
  arr=["amitava","iosajah","undefined"];
  products=[
    {
      brand:"SONY",
      price:40000,
      screensize:43
    
    },
    
      
    {
      brand:"SAMSUNG",
      price:42000,
      screensize:50
    },
    {
      brand:"LG",
      price:50000,
      screensize:55
    },
    {
      brand:"MI",
      price:10000,
      screensize:33
    },
    {
      brand:"Philips",
      price:35000,
      screensize:63
    }
  ];
  fun1()
  {
    console.log('HI I AM ANGULAR FUNTION!!!')
    alert('I am a function')
  console.log(this.products[0].brand)
  }
  

  

  





}
