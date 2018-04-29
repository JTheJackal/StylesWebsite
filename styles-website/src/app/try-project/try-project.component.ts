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
      
      var filepath = "http://www.joshuastyles.com/games/" + fileName;
      var scripts = null;
      var loaded = null;
      var container = document.getElementById("gameDiv");
      
      switch(fileName){
              
          case "droneZone":
              
              scripts = new Array(18);
              loaded = new Array(18);
              
              scripts = this.createScriptElements(scripts.length, scripts);
              
              console.log("Number of scripts: " + scripts.length);
 
              scripts[0].setAttribute("src", "https://www.gstatic.com/firebasejs/3.6.9/firebase.js");
              scripts[1].setAttribute("src", "https://www.gstatic.com/firebasejs/3.6.1/firebase-app.js");
              scripts[2].setAttribute("src", "https://www.gstatic.com/firebasejs/3.6.1/firebase-auth.js");
              scripts[3].setAttribute("src", "https://www.gstatic.com/firebasejs/3.6.1/firebase-database.js");
              scripts[4].setAttribute("src", "" + filepath + "/" + "JS/phaser/phaser.js");
              scripts[4].onload = this.verify(scripts[4]);
              scripts[5].setAttribute("src", "" + filepath + "/" + "JS/objects/player.js");
              scripts[5].onload = this.verify(scripts[5]);
              scripts[6].setAttribute("src", "" + filepath + "/" + "JS/objects/trackSprite.js");
              //scripts[6].onload = document.body.appendChild(scripts[6]);
              scripts[7].setAttribute("src", "" + filepath + "/" + "JS/objects/level.js");
              //scripts[7].onload = document.body.appendChild(scripts[7]);
              scripts[8].setAttribute("src", "" + filepath + "/" + "JS/objects/drone.js");
              //scripts[8].onload = document.body.appendChild(scripts[8]);
              scripts[9].setAttribute("src", "" + filepath + "/" + "JS/HighScoreSystem/HighScoreSystem.js");
              //scripts[9].onload = document.body.appendChild(scripts[9]);
              scripts[10].setAttribute("src", "" + filepath + "/" + "JS/states/highScores.js");
              scripts[11].setAttribute("src", "" + filepath + "/" + "JS/states/boot.js");
              //scripts[11].onload = document.body.appendChild(scripts[11]);
              scripts[12].setAttribute("src", "" + filepath + "/" + "JS/states/load.js");
              //scripts[12].onload = document.body.appendChild(scripts[12]);
              scripts[13].setAttribute("src", "" + filepath + "/" + "JS/states/splash.js");
              //scripts[13].onload = document.body.appendChild(scripts[13]);
              scripts[14].setAttribute("src", "" + filepath + "/" + "JS/states/menu.js");
              //scripts[14].onload = document.body.appendChild(scripts[14]);
              scripts[15].setAttribute("src", "" + filepath + "/" + "JS/states/play.js");
              //scripts[15].onload = document.body.appendChild(scripts[15]);
              scripts[16].setAttribute("src", "" + filepath + "/" + "JS/states/about.js");
              //scripts[16].onload = document.body.appendChild(scripts[16]);
              scripts[17].setAttribute("src", "" + filepath + "/" + "JS/states/game.js");
              //scripts[17].onload = document.body.appendChild(scripts[17]);
              scripts[17].onload = this.verify(scripts[17]);
              
              
              console.log("Number of scripts found: " + scripts.length);
              break;
              
          case "jaguar":
              
              filepath = "/games/jaguar/index.html";
              break;
      }
  }

  createScriptElements(num, scripts){
      
      //Automate the creation of script elements and set their attribute to Javascript.
      for(var i = 0; i < num; i++){
          
          scripts[i] = document.createElement("script");
          //scripts[i].setAttribute("type", "text/javascript");
      }
      
      console.log("Script elements created.");
      
      return scripts;
  }
    
  verify(script){
      
      console.log("Script has loaded");
      console.log(script);
      
      document.body.appendChild(script);
  }

  appendScripts(num, scripts){
      
      //Automate the appending of scripts to the head of the document.
      for(var i = 0; i < num; i++){
          
          console.log("Attempting to append script: " + i);
          console.log(scripts[i]);
          
          document.body.appendChild(scripts[i]);
          document.getElementsByTagName("head")[0].appendChild(scripts[i]);
      }
      
      console.log("All " + num + " scripts appended to head.")
  }
    
  //Function for handling the XMLHttpRequest for reading text files for content.
   runGame(container, filepath){
   
        var allText = null;
        var raw = new XMLHttpRequest(); // create a request

        raw.open("GET", filepath, true); // open file
        raw.onreadystatechange = function (){ // file is ready to read
            if(raw.readyState === 4){
                if(raw.status === 200 || raw.status == 0){
                    allText = raw.responseText;

                    //Fill in the box with the new text.
                    container.innerHTML = allText;
                }
            }
        }
        raw.send(null); // return control
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
                //console.log("" + allText) // can be also console.logged, of course.
                
                //Fill in the box with the new text.
                container.innerHTML = "" + allText;
            }
        }
    }
    raw.send(null); // return control
   }

}
