var toyotaCorollaHybrid = new Object ();

toyotaCorollaHybrid.mode = ["Sport", "EV"];
toyotaCorollaHybrid.litre = 1.8;
toyotaCorollaHybrid.valve = 16;
toyotaCorollaHybrid.cylinder = 4;

console.dir(toyotaCorollaHybrid);

var sentence = `The Toyota Corolla Hybrid is in ${toyotaCorollaHybrid.mode[1]} mode.`;

console.log(sentence);