import powers from './powers.js';
const chosen = "data-chosen";

class TreeJournal extends JournalSheet {
  static maxCapacity = 34;
  static bonus1Cap = 16;
  static bonus2Cap = 29;

  static next = new Map();
  static prev = new Map([
    ["ap11", "core"],
    ["ap12", "ap11"],
    ["ap13", "ap12"],
    ["ap21", ""],
    ["ap22", "ap21"],
    ["ap23", "ap22"],
    ["ap31", ""],
    ["ap32", "ap31"],
    ["ap33", "ap32"],
    ["pp1", ""],
    ["pp2", "pp1"],
    ["pp3", "pp2"],
    ["ch1", ""],
    ["ch2", "ch1"],
    ["ch3", "ch2"],
  ]);
  static cost = new Map([
    ["ap11", 3],
    ["ap12", 4],
    ["ap13", 5],
    ["ap21", 3],
    ["ap22", 4],
    ["ap23", 5],
    ["ap31", 3],
    ["ap32", 4],
    ["ap33", 5],
    ["pp1", 3],
    ["pp2", 4],
    ["pp3", 5],
    ["ch1", 3],
    ["ch2", 4],
    ["ch3", 6],
    ["b1", TreeJournal.bonus1Cap],
    ["b2", TreeJournal.bonus2Cap],
  ]);
  
  
  constructor(data, options) {
    super(data, options);
    prev.forEach ( function(value, key) {
      next.set(value, key);
    })
    this.currentCapacity = 0;
    this.user = "none";
    
    
    updateSkillTree();
  }

  static setSelectedStatus(user, id, chosenStatus, borderEl, nameEl, textEl) {
    if( chosenStatus == true ) {
      borderEl.style = "border-style: 3px solid rgba(0, 240, 0, 0.8)";
      textEl.innerHTML = "<p>" + getPower(user, id) + "</p>";
      nameEl.innerHTML = "<h4>" + getPower(user, id+"Name") + "</h4>";
    }
    else {
      borderEl.style = "border-style: 3px solid rgba(0, 240, 0, 0.8)";
      textEl.innerHTML = "";
      nameEl.innerHTML = "";
    }
  }

	static get defaultOptions() {
    const options = super.defaultOptions;
    options.classes.push('skill-tree');
    return options;
	}


  getPower(usr, name) {
    let power = powers.get(usr).get(name);
    return power;
  }

  static init() {
    DocumentSheetConfig.registerSheet(JournalEntryPage, "skill-tree", { types: ["base"],	makeDefault: false });
    EntitySheetConfig.updateDefaultSheets(game.settings.get("core", "sheetClasses"));
  }
  
  activateListeners(html, enhancedjournal) {
    super.activateListeners(html);
   
    var gItems = html.find('.gItem');
    for (var i=0; i < gItems.length; i++) {
      gItems[i].onmouseover = function(event) { this.mOver(event);};
      gItems[i].onmouseout = function(event) { this.mLeave(event);};
      if (!gItems[i].classList.contains("bonus")) {
        gItems[i].onclick  = function(event) { this.mClick(event);};
      }
    }
  }
  
  updateSkillTree() {
    var uItems = html.find(".invis");
    if (uItems != null && uItems.length > 0) {
      var username = uItems[0].id;
      html.find("#"+"bgContainer").classList.add(username+"bg");
      html.find("#"+"core").src="modules/skill-trees/styles/icons/"+ username + "/core.png";
      html.find("#"+"core").setAttribute(chosen, "true");
      html.find("#"+"currentCapacity").innerHTML = this.currentCapacity;
      html.find("#"+"maxCapacity").innerHTML = TreeJournal.maxCapacity;
      html.find("#"+"ap1Name").innerHTML = "<h5>" + getPower(username, "coreName") + "</h5>";
      html.find("#"+"ap1").innerHTML = "<p>" + getPower(username, "core") + "</p>";
      html.find("#"+"WeaponName").innerHTML = "<h4>" + getPower(username, "WeaponName") + "</h4>";
      html.find("#"+"titleArea").innerHTML = "<h3>" + getPower(username, "WeaponName") + "</h3>";
      html.find("#"+"baseText").innerHTML = "<p>" + getPower(username, "baseText") + "</p>";
      html.find("#"+"ap11").classList.add(username+"ap11");
      html.find("#"+"ap12").classList.add(username+"ap12");
      html.find("#"+"ap13").classList.add(username+"ap13");
      html.find("#"+"ap21").classList.add(username+"ap21");
      html.find("#"+"ap22").classList.add(username+"ap22");
      html.find("#"+"ap23").classList.add(username+"ap23");
      html.find("#"+"ap31").classList.add(username+"ap31");
      html.find("#"+"ap32").classList.add(username+"ap32");
      html.find("#"+"ap33").classList.add(username+"ap33");
      html.find("#"+"pp1").classList.add(username+"pp1");
      html.find("#"+"pp2").classList.add(username+"pp2");
      html.find("#"+"pp3").classList.add(username+"pp3");
    }
    this.user = username;
  }

  
  
   mOver(event) {
    var eTarget = event.target;
    if (eTarget != null) {
      html.find("#tItem").innerHTML = "<h4>" + getPower(this.user, eTarget.id+"Name") + "("+cost.get(eTarget.id)+"):</h4><p>" + getPower(this.user, eTarget.id) + "</p>";
      var target = html.find("#"+eTarget.id);
      if (target != null) {
        target.style = "border-style: 3px solid rgba(0, 240, 0, 0.8)";
      }
    }
  }

  mClick(event) {
    var eTarget = event.target;
    if (eTarget != null) {
      var clicked = html.find("#"+eTarget.id);
      if (clicked != null) {
        var previousChosen = html.find("#"+prev.get(eTarget.id));
        var nextChosen = html.find("#"+next.get(eTarget.id));
        
        var isValidToChoose = (previousChosen == null) || (!clicked.hasAttribute(chosen) && this.currentCapacity + cost.get(eTarget.id) <= TreeJournal.maxCapacity && previousChosen.hasAttribute(chosen));
        var isValidToUnchoose = (clicked.hasAttribute(chosen) && (nextChosen == null || !nextChosen.hasAttribute(chosen)));
        
        if (clicked.hasAttribute(chosen) && isValidToUnchoose) {
          this.currentCapacity = this.currentCapacity - cost.get(eTarget.id);
          clicked.removeAttribute(chosen);
          setSelectedStatus(this.user, eTarget.id, false, html.find("#"+eTarget.id), html.find("#"+eTarget.id.substring(0, eTarget.id.length-1)+"Name"), html.find("#"+eTarget.id.substring(0, eTarget.id.length-1)));
       
          if (this.currentCapacity < TreeJournal.bonus2Cap) {
            html.find("#"+"b2").style.border = "3px solid rgba(0, 0, 0, 0.8)";
            html.find("#"+"bonus").innerHTML = "";
            html.find("#"+"b2").removeAttribute(chosen);
          }
          if (this.currentCapacity < TreeJournal.bonus1Cap) {
            html.find("#"+"b1").style.border = "3px solid rgba(0, 0, 0, 0.8)";
            html.find("#"+"bonus").innerHTML = "";
            html.find("#"+"b1").removeAttribute(chosen);
          }	
        }
        else if(!clicked.hasAttribute(chosen) && isValidToChoose) {
          this.currentCapacity = this.currentCapacity + cost.get(eTarget.id);
          clicked.style.border = "3px solid rgba(0, 0, 240, 0.8)";
          clicked.setAttribute(chosen, "true");
          html.find("#"+eTarget.id.substring(0, eTarget.id.length-1)).innerHTML = "<p>" + getPower(this.user, eTarget.id) + "</p>";
          html.find("#"+eTarget.id.substring(0, eTarget.id.length-1)+"Name").innerHTML = "<h4>" + getPower(this.user, eTarget.id+"Name") + "</h4>";
          if (this.currentCapacity >= TreeJournal.bonus1Cap) {
            html.find("#"+"b1").style.border = "3px solid rgba(0, 0, 240, 0.8)";
            html.find("#"+"bonus").innerHTML = getPower(this.user, "b1");
            html.find("#"+"b1").setAttribute(chosen, "true");
          }
          if (this.currentCapacity >= TreeJournal.bonus2Cap) {
            html.find("#"+"b2").style.border = "3px solid rgba(0, 0, 240, 0.8)";
            html.find("#"+"bonus").innerHTML = getPower(this.user, "b2");
            html.find("#"+"b2").setAttribute(chosen, "true");
          }
        }
        html.find("#"+"currentCapacity").innerHTML = this.currentCapacity;
      }
    }
  }

  mLeave(event) {
    html.find("#"+"tItem").innerHTML = "";
    var eTarget = event.target;
    if (eTarget != null) {
      var target = html.find("#"+eTarget.id);
      if (target != null) {
        if (target.hasAttribute("data-chosen")) {
          target.style = "border-style: 3px solid rgba(0, 0, 240, 0.8)";
        }
        else {
          target.style = "border-style: 3px solid rgba(0, 0, 0, 0.8)";
        }
      }
    }
  }
  
  async _render(force, options = {}) {
    await super._render(force, options);
    updateSkillTree();
  }
}

Hooks.on("preDocumentSheetRegistrarInit", (settings) => {
    settings["JournalEntry"] = true;
});

Hooks.on("ready", async function() {
  if (game.modules.get("lib-wrapper")?.active) {
    libWrapper.register("skill-trees", "JournalSheet.prototype._onClickDocumentName", clickDocumentName, "MIXED");
    console.log('Initializing Skill Tree Journal');
    TreeJournal.init();
    console.log("skill-tree Journals | Ready.")
  }
});