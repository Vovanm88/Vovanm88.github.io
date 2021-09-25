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
  const Monday = new DayTable("Понедельник", ["Русский", "Химия", "История", "Алгебра", "Ин.яз", "Практикум", "Русский2"]);
  globalParent.appendChild(Monday.getTable());
  const Tuesday = new DayTable("Вторник", ["Геометрия", "Физра", "Биология", "Общество", "Физика", "История", "Литра"]);
  globalParent.appendChild(Tuesday.getTable());
  const Wednesday = new DayTable("Среда", ["Физра","Физика", "Ин.яз", "Общество", "Алгебра", "История", "Литра"]);
  globalParent.appendChild(Wednesday.getTable());
  const Thursday = new DayTable("Четверг", ["Биология","Астрономия", "Литра", "Геометрия", "Химия", "Литра", "Практикум"]);
  globalParent.appendChild(Thursday.getTable());
  const Friday = new DayTable("Пятница", ["Информатика","География", "ОБЖ", "Ин.яз", "Практикум", "Физра"]);
  globalParent.appendChild(Friday.getTable());
});