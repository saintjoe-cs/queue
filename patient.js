load('queue.js');
function Patient(name, code) {
 this.name = name;
 this.code = code;
}

// enqueue patients
var ed = new Queue();

ed.dequeue = function() {
 var entry = 0;
 for (var i = 0; i < this.dataStore.length; ++i) {
 if (this.dataStore[i].code < this.dataStore[entry].code) {
 entry = i;
 }
 }
 return this.dataStore.splice(entry,1);
}

ed.toString = function() {
 var retStr = "";
 for (var i = 0; i < this.dataStore.length; ++i) {
 retStr += this.dataStore[i].name + " code: "
 + this.dataStore[i].code + "\n";
 }
 return retStr;
}

