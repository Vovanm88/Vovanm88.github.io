class DayTable{
  constructor(name, contentArr){
    let Table = document.createElement("div");
    Table.className = "table";
    let mineHead=document.createElement("span");
    mineHead.className="miniheader";
    mineHead.innerText=name;
    let mineBody=document.createElement("div");
    mineBody.className="TableBody";
    for(let i=0; i<contentArr.length; i++){
      let selement=document.createElement("span");
      selement.innerText=contentArr[i];
      selement.className="TableSpan";
      selement.appendChild(document.createElement("br"));
      mineBody.appendChild(selement);
    }
    Table.appendChild(mineHead);
    Table.appendChild(mineBody);
    //document.getElementById("main").appendChild(Table);
    this.ContentTable=Table;
    this.DataArray=contentArr;
    this.name=name;
  }
  getTable(){
    return this.ContentTable;
  }
}
document.addEventListener('DOMContentLoaded', function(event) {
  let globalParent = document.getElementById("main");
  let toDel = document.getElementById("jsdontwork");
  toDel.remove();
  //globalParent.innerText = "IT WORKS AAAAAAAAA";
  //
  const Monday = new DayTable("Monday", ["Ruskiy", "Math", "Phys"]);
  globalParent.appendChild(Monday.getTable());
  const Tuesday = new DayTable("Tuesday", ["Neruskiy", "Chem", "Bio"]);
  globalParent.appendChild(Tuesday.getTable());
  const Wednesday = new DayTable("Wednesday", ["Философия", "Dead", "Launch"]);
  globalParent.appendChild(Wednesday.getTable());
  const Thursday = new DayTable("Четверг", ["Опять", "Dead", "Launch"]);
  globalParent.appendChild(Thursday.getTable());
  const Friday = new DayTable("Пятница", ["Опять", "дипрешн", "Launch"]);
  globalParent.appendChild(Friday.getTable());
});