function openCard(cardID)
{
    var tabs = document.getElementsByClassName("tab");
    var cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++)
    {
        tabs[i].classList.remove("tab-selected");
        cards[i].classList.remove("card-selected");
    }

    tabs[cardID].classList.add("tab-selected");
    cards[cardID].classList.add("card-selected");
}