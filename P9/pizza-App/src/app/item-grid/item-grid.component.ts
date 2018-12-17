import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.css']
})
export class ItemGridComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  
  pizzas: any[] = [
    {  name: 'Italianpizza',price:30 },
    {  name: 'Maxican pizza', price:50 },
    {  name: 'Indian pizza',price:60 },
    {  name: 'Italian pizza',price:30 },
    {  name: 'Maxican pizza', price:50 },
    {  name: 'Indian pizza',price:60 }
   
  ];
  selectedItem:string;
  ngOnInit() {
    this.route.queryParams.subscribe((param:Params)=>{
      this.selectedItem=param['selectedValue'];

    });
    console.log(this.selectedItem);
  }

  navigate(itemName:string){
    this.router.navigate(['/'+this.selectedItem,itemName],{relativeTo:this.route});
   // console.log(itemName);
}

}
