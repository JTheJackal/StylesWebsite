import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {

  constructor() { 
  
  }

  ngOnInit() {
  
    console.log("inited");
    
    this.readFile("jaguar");
    this.readTechFile("jaguar");
  }
  
  readFile(filename){
  
    var filepath = null;
    var container = document.getElementById("projectInfoBox");
    var allText = null;
    
    if(filename == "jaguar"){
    
        filepath = "/assets/jaguar.txt";
    }
    
    this.handleRequest(container, filepath);
   }
   
   readTechFile(filename){
  
    var filepath = null;
    var container = document.getElementById("projectTechBox");
    var allText = null;
    
    if(filename == "jaguar"){
    
        filepath = "/assets/jaguarTech.txt";
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
