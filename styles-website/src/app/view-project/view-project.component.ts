import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {

  projectName: string;
  
  constructor(private route: ActivatedRoute) { 
  
    this.route.params.subscribe(res => this.projectName = res.projectID);
    //this.projectName = res.projectID;
    
    console.log("THE PROJECT IS: " + this.projectName);
  }

  ngOnInit() {
  
    console.log("inited");
    
    this.readFile(this.projectName);
    this.readTechFile(this.projectName);
  }
  
  readFile(filename){
  
    var filepath = null;
    var container = document.getElementById("projectInfoBox");
    var allText = null;
    
    switch(filename){
            
        case "jaguar":
            filepath = "/assets/texts/jaguar.txt";
            break;
            
        case "droneZone":
            filepath = "/assets/texts/droneZone.txt";
            break;
            
        case "aesthetic":
            filepath = "/assets/texts/aesthetic.txt";
            break;
            
        case "IMClient":
            filepath = "/assets/texts/IMClient.txt";
            break;
            
    }
    
    this.handleRequest(container, filepath);
   }
   
   readTechFile(filename){
  
    var filepath = null;
    var container = document.getElementById("projectTechBox");
    var allText = null;
    
    switch(filename){
            
        case "jaguar":
            filepath = "/assets/texts/jaguarTech.txt";
            break;
            
        case "droneZone":
            filepath = "/assets/texts/droneZoneTech.txt";
            break;
            
        case "aesthetic":
            filepath = "/assets/texts/aestheticTech.txt";
            break;
            
        case "IMClient":
            filepath = "/assets/texts/IMClientTech.txt";
            break;
            
    }
    
    this.handleRequest(container, filepath);
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
