import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  
  checkID(id){
  
    var projectID = id;
    var infobox = document.getElementById("infoContainer");
    
    switch(projectID){
    
        case "jaguar":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>Jaguar shit</div>"
        break;
        
        case "tetris":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>Tetris shit</div>"
        break;
    }
    
  }

}
