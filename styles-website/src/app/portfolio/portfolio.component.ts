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
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>Drone Zone stuff</div>"
        this.changeID("droneZone");
        break;
        
        case "tetris":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>Tetris stuff</div>"
        this.changeID("tetris");
        break;
        
        case "jaguar":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>Jaguar stuff</div>"
        this.changeID("jaguar");
        filepath = "/assets/jaguarTech.txt";
        break;
        
        case "IMClient":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>IM Client stuff</div>"
        this.changeID("IMClient");
        break;
        
        case "IMServer":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>IM Server stuff</div>"
        this.changeID("IMServer");
        break;
        
        case "draughts":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>Draughts stuff</div>"
        this.changeID("draughts");
        break;
        
        case "timer":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>Timer stuff</div>"
        this.changeID("timer");
        break;
        
        case "aesthetic":
        infobox.innerHTML = "<div class='infoContainer color-light' id='infoContainer'>Anaesthetic Aesthetic stuff</div>"
        this.changeID("aesthetic");
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
