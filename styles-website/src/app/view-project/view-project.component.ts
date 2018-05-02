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
    
  private swipeCoord?: [number, number];
  private swipeTime?: number;
  
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
    this.chooseButton(this.projectName);
  }
  
  chooseButton(filename){
      
      var provideLink = false;
      var button = null;
      var text = null;
      
      if(filename === "droneZone" || filename === "jaguar" || filename === "timer"){
          
          provideLink = true;
      }
      
      if(provideLink){
          
          document.getElementById("tempBox").innerHTML = "<a href='http://www.joshuastyles.com/games/{{projectName}}/index.html' target='_blank'><div id='dynamicBTN'><p id='dynamicTXT'>Try Project</p></div></a>"
          
          button = document.getElementById("dynamicBTN");
          text = document.getElementById("dynamicTXT");
          
          button.style.background = "#191919";
          button.style.position = "relative";
          button.style.width = "100%";
          button.style.height = "100%";
          button.style.margin = "0";
          button.style.padding = "0";
          button.style.borderBottom = "1px solid #010101";
          
          text.style.padding = "10% 0 0 0";
          text.style.margin = "0";
          text.style.textAlign = "center";
          text.style.fontSize = "1.2em";
          text.style.fontWeight = "400";
          text.style.userSelect = "none";
      }
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
                
                picCount = 4;
                this.loadPictures(projectName, picCount);
                break;
                
            case "jaguar":
                
                picCount = 7;
                this.loadPictures(projectName, picCount);
                break;
                
            case "tetris":
                
                picCount = 3;
                this.loadPictures(projectName, picCount);
                break;
                
            case "IMClient":
                
                picCount = 4;
                this.loadPictures(projectName, picCount);
                break;
                
            case "IMServer":
                
                picCount = 4;
                this.loadPictures("IMClient", picCount);
                break;
                
            case "draughts":
                
                picCount = 6;
                this.loadPictures(projectName, picCount);
                break;
                
            case "timer":
                
                picCount = 1;
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
        
        for(var i = 1; i <= picCount; i++){
                    
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
    
    swipe(e: TouchEvent, when: string): void {
        
        const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
        const time = new Date().getTime();
        
        if(when === "start"){
        
            this.swipeCoord = coord;
            this.swipeTime = time;
        }
    
        else if(when === "end"){
            
            const direction = [coord[0] = this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            const duration = time - this.swipeTime;
            
            if (duration < 1000){ //Rapid
                if(Math.abs(direction[0]) > 30){ //Long enough
                    if(Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { //Horizontal enough)
                       
                        const swipe = direction[0] < 0 ? 'next' : 'previous';
                        //Do whatever you want with swipe

                        
                        if(swipe == "previous"){
                            
                            this.changeImage(-1);
                        }
                        
                        else if(swipe == "next"){
                            
                            this.changeImage(+1);
                        }
                }
            }
        }
}
}
}
