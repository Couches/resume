function toggleDropdown(dropID)
{
    var drops = document.getElementsByClassName("drop");
    var drop = drops[dropID];
    
    if (drop.classList.contains("expand")) drop.classList.remove("expand");
    else drop.classList.add("expand");
}