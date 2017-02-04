function TabExpand() 
{
    var x = document.getElementById("TabListId");
    if (x.className === "TabList") {
        x.className += "responsive";
    } else {
        x.className = "TabList";
    }
}
