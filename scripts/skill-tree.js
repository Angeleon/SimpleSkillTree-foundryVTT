import { powers } from './powers.js';
const chosen = "data-chosen";

class TreeJournal extends JournalSheet {
  static ID = "skill-trees";
  static maxCapacity = 34;
  static bonus1Cap = 16;
  static bonus2Cap = 32;

  static next = new Map();
  static prev = new Map([
    ["ap11", "core"],
    ["ap12", "ap11"],
    ["ap13", "ap12"],
    ["ap21", "core"],
    ["ap22", "ap21"],
    ["ap23", "ap22"],
    ["ap31", "core"],
    ["ap32", "ap31"],
    ["ap33", "ap32"],
    ["pp1", "core"],
    ["pp2", "pp1"],
    ["pp3", "pp2"],
    ["ch1", "core"],
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
    TreeJournal.prev.forEach ( function(value, key) {
      TreeJournal.next.set(value, key);
    });
    this.currentCapacity = 0;
    this.user = "none";
    this.chosen = new Map([["ap11", false], ["ap12", false], ["ap13", false],
                           ["ap21", false], ["ap22", false], ["ap23", false],
                           ["ap31", false], ["ap32", false], ["ap33", false],
                           ["pp1", false], ["pp2", false], ["pp3", false],
                           ["ch1", false], ["ch2", false], ["ch3", false]
                          ]);
  }

  /**
   * @override
   */
  getData(options) {
    let data = super.getData(options);
    this.chosen.set("ap11", data.document.getFlag("skill-trees", "ap11"));
    this.chosen.set("ap12", data.document.getFlag("skill-trees", "ap12"));
    this.chosen.set("ap13", data.document.getFlag("skill-trees", "ap13"));
    this.chosen.set("ap21", data.document.getFlag("skill-trees", "ap21"));
    this.chosen.set("ap22", data.document.getFlag("skill-trees", "ap22"));
    this.chosen.set("ap23", data.document.getFlag("skill-trees", "ap23"));
    this.chosen.set("ap31", data.document.getFlag("skill-trees", "ap31"));
    this.chosen.set("ap32", data.document.getFlag("skill-trees", "ap32"));
    this.chosen.set("ap33", data.document.getFlag("skill-trees", "ap33"));
    this.chosen.set("ch1", data.document.getFlag("skill-trees", "ch1"));
    this.chosen.set("ch2", data.document.getFlag("skill-trees", "ch2"));
    this.chosen.set("ch3", data.document.getFlag("skill-trees", "ch3"));
    this.chosen.set("pp1", data.document.getFlag("skill-trees", "pp1"));
    this.chosen.set("pp2", data.document.getFlag("skill-trees", "pp2"));
    this.chosen.set("pp3", data.document.getFlag("skill-trees", "pp3"));
    console.log( this.chosen );
    return data;
  }

  /**
   * @override
   */
  async _updateObject(event, formData) {
    await super._updateObject(event, formData);
    this.object.setFlag("skill-trees", "ap11", this.chosen.get("ap11"));
    this.object.setFlag("skill-trees", "ap12", this.chosen.get("ap12"));
    this.object.setFlag("skill-trees", "ap13", this.chosen.get("ap13"));
    this.object.setFlag("skill-trees", "ap21", this.chosen.get("ap21"));
    this.object.setFlag("skill-trees", "ap22", this.chosen.get("ap22"));
    this.object.setFlag("skill-trees", "ap23", this.chosen.get("ap23"));
    this.object.setFlag("skill-trees", "ap31", this.chosen.get("ap31"));
    this.object.setFlag("skill-trees", "ap32", this.chosen.get("ap32"));
    this.object.setFlag("skill-trees", "ap33", this.chosen.get("ap33"));
    this.object.setFlag("skill-trees", "ch1", this.chosen.get("ch1"));
    this.object.setFlag("skill-trees", "ch2", this.chosen.get("ch2"));
    this.object.setFlag("skill-trees", "ch3", this.chosen.get("ch3"));
    this.object.setFlag("skill-trees", "pp1", this.chosen.get("pp1"));
    this.object.setFlag("skill-trees", "pp2", this.chosen.get("pp2"));
    this.object.setFlag("skill-trees", "pp3", this.chosen.get("pp3"));
  }
  
  static setSelectedStatus(user, id, chosenStatus, borderEl, nameEl, textEl) {
    var cost = 0;
    if( chosenStatus == true ) {
      borderEl.setAttribute(chosen, "true");
      borderEl.style.border = "3px solid rgba(0, 0, 240, 0.8)";
      textEl.innerHTML = "<p>" + TreeJournal.getPower(user, id) + "</p>";
      nameEl.innerHTML = "<h4>" + TreeJournal.getPower(user, id+"Name") + "</h4>";
      cost = cost - TreeJournal.cost.get(id);
    }
    else {
      borderEl.removeAttribute(chosen);
      borderEl.style.border = "3px solid rgba(0, 0, 0, 0.8)";
      textEl.innerHTML = "";
      nameEl.innerHTML = "";
      cost = TreeJournal.cost.get(id);
    }
    
    return cost;
  }

	static get defaultOptions() {
    const options = super.defaultOptions;
		options.baseApplication = "JournalSheet";
    options.classes.push('skill-trees');
    return options;
	}


  static getPower(usr, name) {
    let power = powers.get(usr).get(name);
    return power;
  }
  
  updateCurrentCapacity(value, key) {
    if(value == true) {
      this.currentCapacity = this.currentCapacity + TreeJournal.cost.get(key);
    }
  }

  updateSkillTree() {
    var uItems = $("div.invis", document);
    if (uItems != null && uItems.length > 0) {
      var username = uItems[0].id;
      this.user = username;
      document.getElementById("bgContainer").classList.add(username+"bg");
      document.getElementById("core").src="modules/skill-trees/styles/icons/"+ username + "/core.png";
      document.getElementById("core").setAttribute(chosen, "true");
      document.getElementById("maxCapacity").innerHTML = TreeJournal.maxCapacity;
      document.getElementById("ap1Name").innerHTML = "<h5>" + TreeJournal.getPower(username, "coreName") + "</h5>";
      document.getElementById("ap1").innerHTML = "<p>" + TreeJournal.getPower(username, "core") + "</p>";
      document.getElementById("WeaponName").innerHTML = "<h4>" + TreeJournal.getPower(username, "WeaponName") + "</h4>";
      document.getElementById("titleArea").innerHTML = "<h3>" + TreeJournal.getPower(username, "WeaponName") + "</h3>";
      document.getElementById("baseText").innerHTML = "<p>" + TreeJournal.getPower(username, "baseText") + "</p>";
      document.getElementById("ap11").classList.add(username+"ap11");
      document.getElementById("ap12").classList.add(username+"ap12");
      document.getElementById("ap13").classList.add(username+"ap13");
      document.getElementById("ap21").classList.add(username+"ap21");
      document.getElementById("ap22").classList.add(username+"ap22");
      document.getElementById("ap23").classList.add(username+"ap23");
      document.getElementById("ap31").classList.add(username+"ap31");
      document.getElementById("ap32").classList.add(username+"ap32");
      document.getElementById("ap33").classList.add(username+"ap33");
      document.getElementById("pp1").classList.add(username+"pp1");
      document.getElementById("pp2").classList.add(username+"pp2");
      document.getElementById("pp3").classList.add(username+"pp3");
      
      this.currentCapacity = 0;
      TreeJournal.setSelectedStatus(username, "ap11", this.chosen.get("ap11"), document.getElementById("ap11"),  $("#ap1Name")[0], $("#ap1")[0]);
      TreeJournal.setSelectedStatus(username, "ap12", this.chosen.get("ap12"), document.getElementById("ap12"),  $("#ap1Name")[0], $("#ap1")[0]);
      TreeJournal.setSelectedStatus(username, "ap13", this.chosen.get("ap13"), document.getElementById("ap13"),  $("#ap1Name")[0], $("#ap1")[0]);
      TreeJournal.setSelectedStatus(username, "ap21", this.chosen.get("ap21"), document.getElementById("ap21"),  $("#ap1Name")[0], $("#ap2")[0]);
      TreeJournal.setSelectedStatus(username, "ap22", this.chosen.get("ap22"), document.getElementById("ap22"),  $("#ap2Name")[0], $("#ap2")[0]);
      TreeJournal.setSelectedStatus(username, "ap23", this.chosen.get("ap23"), document.getElementById("ap23"),  $("#ap2Name")[0], $("#ap2")[0]);
      TreeJournal.setSelectedStatus(username, "ap31", this.chosen.get("ap31"), document.getElementById("ap31"),  $("#ap3Name")[0], $("#ap3")[0]);
      TreeJournal.setSelectedStatus(username, "ap32", this.chosen.get("ap32"), document.getElementById("ap32"),  $("#ap3Name")[0], $("#ap3")[0]);
      TreeJournal.setSelectedStatus(username, "ap33", this.chosen.get("ap33"), document.getElementById("ap33"),  $("#ap3Name")[0], $("#ap3")[0]);
      TreeJournal.setSelectedStatus(username, "pp1", this.chosen.get("pp1"), document.getElementById("pp1"),  $("#ppName")[0], $("#pp")[0]);
      TreeJournal.setSelectedStatus(username, "pp2", this.chosen.get("pp2"), document.getElementById("pp2"),  $("#ppName")[0], $("#pp")[0]);
      TreeJournal.setSelectedStatus(username, "pp3", this.chosen.get("pp3"), document.getElementById("pp3"),  $("#ppName")[0], $("#pp")[0]);
      TreeJournal.setSelectedStatus(username, "ch1", this.chosen.get("ch1"), document.getElementById("ch1"),  $("#chName")[0], $("#ch")[0]);
      TreeJournal.setSelectedStatus(username, "ch2", this.chosen.get("ch2"), document.getElementById("ch2"),  $("#chName")[0], $("#ch")[0]);
      TreeJournal.setSelectedStatus(username, "ch3", this.chosen.get("ch3"), document.getElementById("ch3"),  $("#chName")[0], $("#ch")[0]);

      // calculate current Capacity
      this.chosen.forEach(this.updateCurrentCapacity, this);

      document.getElementById("currentCapacity").innerHTML = this.currentCapacity;
      
      if (this.currentCapacity >= TreeJournal.bonus1Cap) {
        $("#b1")[0].style.border = "3px solid rgba(0, 0, 240, 0.8)";
        $("#bonus")[0].innerHTML = TreeJournal.getPower(this.user, "b1");
        $("#b1")[0].setAttribute(chosen, "true");
      }
      if (this.currentCapacity >= TreeJournal.bonus2Cap) {
        $("#b2")[0].style.border = "3px solid rgba(0, 0, 240, 0.8)";
        $("#bonus")[0].innerHTML = TreeJournal.getPower(this.user, "b2");
        $("#b2")[0].setAttribute(chosen, "true");
      }
      
      var gItems = $('div.gItem', document);
      for (var i=0; i < gItems.length; i++) {
        gItems[i].onmouseenter = this.mOver.bind(this);
        gItems[i].onmouseleave = this.mLeave.bind(this);
        if (!gItems[i].classList.contains("bonus")) {
          gItems[i].onclick = this.mClick.bind(this);
        }
      }
    }
 
  }

  async _render(force, options) {
    await super._render(force, options);
    this.updateSkillTree();
  }
  
   mOver(event) {
    var eTarget = event.target;
    if (eTarget != null) {
      var tItem = $("#tItem");
      var aTtItem = tItem[0];
      aTtItem.innerHTML = "<h4>" + TreeJournal.getPower(this.user, eTarget.id+"Name") + "("+TreeJournal.cost.get(eTarget.id)+"):</h4><p>" + TreeJournal.getPower(this.user, eTarget.id) + "</p>";
      var target = $("#"+eTarget.id);
      var atTarget = target[0];
      if (atTarget != null) {
        atTarget.style.border = "3px solid rgba(0, 240, 0, 0.8)";
      }
    }
  }

  mClick(event) {
    var eTarget = event.target;
    var eId = eTarget.id;
    if (eTarget != null) {
      if (eId == '') {
        eId = eTarget.parentElement.id;
      }
      var clickArr = $("#"+eId);
      var clicked = clickArr[0];
      var clickedNameArr =  $("#"+eId.substring(0, eId.length-1)+"Name");
      var clickedName = clickedNameArr[0];
      var clickedSkillArr = $("#"+eId.substring(0, eId.length-1));
      var clickedSkill = clickedSkillArr[0];
      if (clicked != null) {
        var previousChosen = $("#"+TreeJournal.prev.get(eId))[0];
        var nextChosen = $("#"+TreeJournal.next.get(eId))[0];
        
        var isValidToChoose = (previousChosen == null) || (!clicked.hasAttribute(chosen) && this.currentCapacity + TreeJournal.cost.get(eId) <= TreeJournal.maxCapacity && previousChosen.hasAttribute(chosen));
        var isValidToUnchoose = (clicked.hasAttribute(chosen) && (nextChosen == null || !nextChosen.hasAttribute(chosen)));
        
        if (clicked.hasAttribute(chosen) && isValidToUnchoose) {
          this.currentCapacity = this.currentCapacity - TreeJournal.setSelectedStatus(this.user, eId, false, clicked, clickedName, clickedSkill);
          this.chosen.set(eId, false);
       
          if (this.currentCapacity < TreeJournal.bonus2Cap) {
            $("#"+"b2")[0].style.border = "3px solid rgba(0, 0, 0, 0.8)";
            $("#"+"bonus")[0].innerHTML = "";
            $("#"+"b2")[0].removeAttribute(chosen);
          }
          if (this.currentCapacity < TreeJournal.bonus1Cap) {
            $("#"+"b1")[0].style.border = "3px solid rgba(0, 0, 0, 0.8)";
            $("#"+"bonus")[0].innerHTML = "";
            $("#"+"b1")[0].removeAttribute(chosen);
          }	
        }
        else if(!clicked.hasAttribute(chosen) && isValidToChoose) {
          this.currentCapacity = this.currentCapacity - TreeJournal.setSelectedStatus(this.user, eId, true, clicked, clickedName, clickedSkill);
          this.chosen.set(eId, true);
          
          if (this.currentCapacity >= TreeJournal.bonus1Cap) {
            $("#"+"b1")[0].style.border = "3px solid rgba(0, 0, 240, 0.8)";
            $("#"+"bonus")[0].innerHTML = TreeJournal.getPower(this.user, "b1");
            $("#"+"b1")[0].setAttribute(chosen, "true");
          }
          if (this.currentCapacity >= TreeJournal.bonus2Cap) {
            $("#"+"b2")[0].style.border = "3px solid rgba(0, 0, 240, 0.8)";
            $("#"+"bonus")[0].innerHTML = TreeJournal.getPower(this.user, "b2");
            $("#"+"b2")[0].setAttribute(chosen, "true");
          }
        }
        $("#"+"currentCapacity")[0].innerHTML = this.currentCapacity;
      }
    }
  }

  mLeave(event) {
    $("#"+"tItem").innerHTML = "";
    var eTarget = event.target;
    if (eTarget != null) {
      var target = $("#"+eTarget.id);
      var atTarget = target[0];
      if (atTarget != null) {
        if (atTarget.hasAttribute("data-chosen")) {
          atTarget.style.border = "3px solid rgba(0, 0, 240, 0.8)";
        }
        else {
          atTarget.style.border = "3px solid rgba(0, 0, 0, 0.8)";
        }
      }
    }
  }
}

Hooks.on("ready", () => {
  Journal.registerSheet?.(TreeJournal.ID, TreeJournal, {
    types: ["base"],
    makeDefault: true,
    label: "Skill-Trees"
  });
});