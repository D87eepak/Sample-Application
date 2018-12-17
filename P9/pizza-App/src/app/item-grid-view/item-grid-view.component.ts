import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-item-grid-view',
  templateUrl: './item-grid-view.component.html',
  styleUrls: ['./item-grid-view.component.css']
})
export class ItemGridViewComponent implements OnInit {

  selectedItem:string;
  images : any[] = [ {"name":"Italizan Pizza","url":"assets/images/ITalizan_Pizza.jpg"}];
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.selectedItem=this.route.snapshot.params['name'];
    console.log(this.selectedItem);
    
  }

}
const IMAGES=[

  {"name":"Italizan Pizza","url":"assets/images/ITalizan_Pizza.jpg"}
]
