import { Component, OnInit } from '@angular/core';
import { IDetails } from "./details";
import { DetailsService } from "./details.service";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  details: IDetails[];

  constructor(private detailsService : DetailsService) { }

  ngOnInit(): void {
    console.log("Details.component working.");
    this.detailsService.getDetails().subscribe(
      details => {
        this.details = details;
      }
    );
  }

}
