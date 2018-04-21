import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {

  projectName: string;
    
  slideIndex: number = 1;
  
  constructor(private route: ActivatedRoute) { 
  
    this.route.params.subscribe(res => this.projectName = res.projectID);
    //this.projectName = res.projectID;
    
    //console.log("THE PROJECT IS: " + this.projectName);
  }

  ngOnInit() {
  
    console.log("inited");
    
    this.buildGallery(this.projectName);
    this.readFile(this.projectName);
    this.readTechFile(this.projectName);
    this.showSlide(this.slideIndex);
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
            
        case "IMServer":
            filepath = "/assets/texts/IMServer.txt";
            break;
            
        case "draughts":
            filepath = "/assets/texts/draughts.txt";
            break;
            
        case "tetris":
            filepath = "/assets/texts/tetris.txt";
            break;
            
        case "timer":
            filepath = "/assets/texts/timer.txt";
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
            
        case "IMServer":
            filepath = "/assets/texts/IMServerTech.txt";
            break;
            
        case "draughts":
            filepath = "/assets/texts/draughtsTech.txt";
            break;
            
        case "tetris":
            filepath = "/assets/texts/tetrisTech.txt";
            break;
            
        case "timer":
            filepath = "/assets/texts/timerTech.txt";
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
                    //console.log("" + allText) // can be also console.logged, of course.

                    //Fill in the box with the new text.
                    container.innerHTML = "" + allText;
                }
            }
        }
        raw.send(null); // return control
    }
    
    buildGallery(projectName){
        
        var filepath = null;
        var picCount = 0;
        
        switch(projectName){
                
            case "droneZone":
                
                picCount = 5;
                this.loadPictures(projectName, picCount);
                break;
                
            case "jaguar":
                
                picCount = 7;
                this.loadPictures(projectName, picCount);
                break;
                
            case "tetris":
                
                picCount = 0;
                this.loadPictures(projectName, picCount);
                break;
                
            case "IMClient":
                
                picCount = 0;
                this.loadPictures(projectName, picCount);
                break;
                
            case "IMServer":
                
                picCount = 0;
                this.loadPictures(projectName, picCount);
                break;
                
            case "draughts":
                
                picCount = 0;
                this.loadPictures(projectName, picCount);
                break;
                
            case "timer":
                
                picCount = 0;
                this.loadPictures(projectName, picCount);
                break;
                
            case "AA":
                
                picCount = 0;
                this.loadPictures(projectName, picCount);
                break;
        }
    }
    
    loadPictures(projectName, picCount){
        
        var container = document.getElementById("gallery");
        
        for(var i = 1; i < picCount; i++){
                    
            container.innerHTML += "<img src='/assets/pictures/" + projectName + "/" + i + ".png' id='image" + i + "' />" 

            document.getElementById("image" + i).classList.add("slides");
            document.getElementById("image" + i).style.width = "100%";
            document.getElementById("image" + i).style.height = "100%";
            document.getElementById("image" + i).classList.add("animated");
        }
    }
    
    changeImage(num){
        
        this.showSlide(this.slideIndex += num);
    }
    
    showSlide(num){
        
        var index;
        var allSlides = document.getElementsByClassName("slides");
        
        if(num > allSlides.length){
            
            //Return the slideshow to the first image.
            this.slideIndex = 1;
        }
        
        if(num < 1){
            
            //Return the slideshow to the last image.
            this.slideIndex = allSlides.length;
        }
        
        for(index = 0; index < allSlides.length; index++){
            
            (<HTMLElement>allSlides[index]).style.display = "none";
        }
        
        (<HTMLElement>allSlides[this.slideIndex-1]).style.display = "block";
    }

}
