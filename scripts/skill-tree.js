import powers from './powers.js';

class TreeJournal extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('skill-trees');
		return options;
	}
}
class TreeJournalEdit extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('skill-trees-edit');
		return options;
	}
}

Hooks.on("init", function() {
libWrapper.register('skill-trees', 'JournalSheet.prototype.activateEditor', function(wrapped, name, options={}, ...args) {
  return wrapped(name, options={}, ...args);
}, 'WRAPPER');

Journal.registerSheet("journals", TreeJournal, {
	label: "Skill-trees",
	types: ["base"],
	makeDefault: false
});

Journal.registerSheet("journals", TreeJournalEdit, {
	label: "Skill-trees Edit",
	types: ["base"],
	makeDefault: false
});

console.log("skill-tree Journals | Ready.")
});

Hooks.on("renderTreeJournal", function() {
const chosen = "data-chosen";
const maxCapacity = 34;
const bonus1Cap = 13;
const bonus2Cap = 29;
var currentCapacity = 0;
var user;

const next = new Map();
const prev = new Map([
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
const cost = new Map([
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
  ["b1", bonus1Cap],
	["b2", bonus2Cap],
]);

prev.forEach ( function(value, key) {
  next.set(value, key);
})


function getPower(usr, name) {
  return powers.get(usr).get(name);
}

function updateSkillTree() {
  var uItems = document.getElementsByClassName("invis");
  if (uItems != null && uItems.length > 0) {
    var username = uItems[0].id;
    document.getElementById("bgContainer").classList.add(username+"bg");
    document.getElementById("core").src="modules/skill-trees/styles/icons/"+ username + "/core.png";
    document.getElementById("core").setAttribute(chosen, "true");
    document.getElementById("currentCapacity").innerHTML = currentCapacity;
    document.getElementById("maxCapacity").innerHTML = maxCapacity;
    document.getElementById("ap1Name").innerHTML = "<h5>" + getPower(username, "coreName") + "</h5>";
    document.getElementById("ap1").innerHTML = "<p>" + getPower(username, "core") + "</p>";
    document.getElementById("WeaponName").innerHTML = "<h4>" + getPower(username, "WeaponName") + "</h4>";
    document.getElementById("titleArea").innerHTML = "<h3>" + getPower(username, "WeaponName") + "</h3>";
    document.getElementById("baseText").innerHTML = "<p>" + getPower(username, "baseText") + "</p>";
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
    
    var gItems = document.getElementsByClassName("gItem");
    for (var i=0; i < gItems.length; i++) {
      gItems[i].onmouseover = function(event) { mOver(event);};
      gItems[i].onmouseout = function(event) { mLeave(event);};
      if (!gItems[i].classList.contains("bonus")) {
        gItems[i].onclick  = function(event) { mClick(event);};
      }
    }
    user = username;
  }
}

function mOver(event) {
  var eTarget = event.target;
  if (eTarget != null) {
    document.getElementById("tItem").innerHTML = "<h4>" + getPower(user, eTarget.id+"Name") + "("+cost.get(eTarget.id)+"):</h4><p>" + getPower(user, eTarget.id) + "</p>";
    var target = document.getElementById(eTarget.id);
    if (target != null) {
      target.style.border = "3px solid rgba(0, 240, 0, 0.8)";
    }
  }
}

function mClick(event) {
  var eTarget = event.target;
  if (eTarget != null) {
	var clicked = document.getElementById(eTarget.id);
	if (clicked != null) {
	  var previousChosen = document.getElementById(prev.get(eTarget.id));
	  var nextChosen = document.getElementById(next.get(eTarget.id));
	  var notChosenValid = (previousChosen == null) || (!clicked.hasAttribute(chosen) && currentCapacity + cost.get(eTarget.id) <= maxCapacity && previousChosen.hasAttribute(chosen));
	  var chosenValid = (clicked.hasAttribute(chosen) && (nextChosen == null || !nextChosen.hasAttribute(chosen)));
	  if (clicked.hasAttribute(chosen) && chosenValid) {
		currentCapacity = currentCapacity - cost.get(eTarget.id);
		clicked.removeAttribute(chosen);
		if (previousChosen != null) {
			document.getElementById(eTarget.id.substring(0, eTarget.id.length-1)).innerHTML = "<p>" + getPower(user, prev.get(eTarget.id)) + "</p>";
			document.getElementById(eTarget.id.substring(0, eTarget.id.length-1)+"Name").innerHTML = "<h4>" + getPower(user, prev.get(eTarget.id)+"Name") + "</h4>";
		}
		else {
			document.getElementById(eTarget.id.substring(0, eTarget.id.length-1)).innerHTML = "";
			document.getElementById(eTarget.id.substring(0, eTarget.id.length-1)+"Name").innerHTML = "";
		}
		if (currentCapacity < bonus2Cap) {
			document.getElementById("b2").style.border = "3px solid rgba(0, 0, 0, 0.8)";
			document.getElementById("bonus").innerHTML = "";
			document.getElementById("b2").removeAttribute(chosen);
		}
		if (currentCapacity < bonus1Cap) {
			document.getElementById("b1").style.border = "3px solid rgba(0, 0, 0, 0.8)";
			document.getElementById("bonus").innerHTML = "";
			document.getElementById("b1").removeAttribute(chosen);
		}	
	  }
	  else if(!clicked.hasAttribute(chosen) && notChosenValid) {
		currentCapacity = currentCapacity + cost.get(eTarget.id);
		clicked.style.border = "3px solid rgba(0, 0, 240, 0.8)";
		clicked.setAttribute(chosen, "true");
		document.getElementById(eTarget.id.substring(0, eTarget.id.length-1)).innerHTML = "<p>" + getPower(user, eTarget.id) + "</p>";
		document.getElementById(eTarget.id.substring(0, eTarget.id.length-1)+"Name").innerHTML = "<h4>" + getPower(user, eTarget.id+"Name") + "</h4>";
		if (currentCapacity >= bonus1Cap) {
			document.getElementById("b1").style.border = "3px solid rgba(0, 0, 240, 0.8)";
			document.getElementById("bonus").innerHTML = getPower(user, "b1");
			document.getElementById("b1").setAttribute(chosen, "true");
		}
		if (currentCapacity >= bonus2Cap) {
			document.getElementById("b2").style.border = "3px solid rgba(0, 0, 240, 0.8)";
			document.getElementById("bonus").innerHTML = getPower(user, "b2");
			document.getElementById("b2").setAttribute(chosen, "true");
		}
	  }
	  document.getElementById("currentCapacity").innerHTML = currentCapacity;
	}
  }
}

function mLeave(event) {
  document.getElementById("tItem").innerHTML = "";
  var eTarget = event.target;
	if (eTarget != null) {
	  var target = document.getElementById(eTarget.id);
	  if (target != null) {
      if (target.hasAttribute("data-chosen")) {
        target.style.border = "3px solid rgba(0, 0, 240, 0.8)";
      }
      else {
        target.style.border = "3px solid rgba(0, 0, 0, 0.8)";
      }
    }
  }
}

updateSkillTree();

});
