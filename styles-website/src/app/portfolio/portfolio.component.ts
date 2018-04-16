import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
  
  projectID: string = "jaguar";
  
  constructor() {

  }

  ngOnInit() {
  
  }
  
  checkID(id){
  
    var projID = id;
    var infobox = document.getElementById("infoContainer");
    var filepath = null;
    
    switch(projID){
    
        case "droneZone":
            infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>...</div>"
            this.changeID("droneZone");
            filepath = "/assets/texts/droneZoneTech.txt";
            break;
        
        case "tetris":
            infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>...</div>"
            this.changeID("tetris");
            filepath = "/assets/texts/tetrisTech.txt";
            break;
        
        case "jaguar":
            infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>...</div>"
            this.changeID("jaguar");
            filepath = "/assets/texts/jaguarTech.txt";
            break;
        
        case "IMClient":
            infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>...</div>"
            this.changeID("IMClient");
            filepath = "/assets/texts/IMClientTech.txt";
            break;
        
        case "IMServer":
            infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>...</div>"
            this.changeID("IMServer");
            filepath = "/assets/texts/IMServerTech.txt";
            break;
        
        case "draughts":
            infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>...</div>"
            this.changeID("draughts");
            filepath = "/assets/texts/draughtsTech.txt";
            break;
        
        case "timer":
            infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>...</div>"
            this.changeID("timer");
            filepath = "/assets/texts/timerTech.txt";
            break;
        
        case "aesthetic":
            infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>...</div>"
            this.changeID("aesthetic");
            filepath = "/assets/texts/aestheticTech.txt";
            break;
    }
    
    this.handleRequest(infobox, filepath);
  }
  
  changeID(newID){
  
    this.projectID = newID;
    console.log("New ID = " + this.projectID);
  }
  
   //Function for handling the XMLHttpRequest for reading text files for content.
   handleRequest(container, filepath){
   
    var allText = null;
    var raw = new XMLHttpRequest(); // create a request
    raw.open("GET", filepath, true); // open file
    raw.onreadystatechange = function (){ // file is ready to read
        if(raw.readyState === 4){
            if(raw.status === 200 || raw.status == 0){
                allText = raw.responseText;
                console.log("" + allText) // can be also console.logged, of course.
                
                //Fill in the box with the new text.
                container.innerHTML = "" + allText;
            }
        }
    }
    raw.send(null); // return control
   }

}
