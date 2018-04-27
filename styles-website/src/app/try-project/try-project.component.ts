import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-try-project',
  templateUrl: './try-project.component.html',
  styleUrls: ['./try-project.component.scss']
})
export class TryProjectComponent implements OnInit {

  projectName: string;
  
  constructor(private route: ActivatedRoute) { 
  
    this.route.params.subscribe(res => this.projectName = res.projectID);
    
  }

  ngOnInit() {
  
    this.readFile(this.projectName);
    this.startCanvas(this.projectName);
  }
  
  startCanvas(fileName){
      
      
  }
    
  readFile(filename){
  
    var filepath = null;
    var container = document.getElementById("instructionsBox");
    var allText = null;
    
    switch(filename){
            
        case "jaguar":
            
            filepath = "/assets/texts/jaguarHelp.txt";
            break;
            
        case "droneZone":
            
            filepath = "/assets/texts/droneZoneHelp.txt";
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
