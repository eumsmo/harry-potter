let lumosEl = document.querySelector("#lumos_div");

function luz(val){
  lumosEl.style.opacity = val;
}

let feiticos = [
  ["wingardium leviosa"],
  ["lumos",()=>luz(1)],
  ["nox",()=>luz(0)],
  ["expelliarmus"],
  ["expecto patronum"],
  ["avada kedavra"],
  ["revelio"],
  ["alohomora"]
];

function spell(str){
  feiticos.forEach(feitico=>{

  });
  if(feiticos[str])
    feiticos[str][1]();
}
