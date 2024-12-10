const tab = [];

function Dodaj()
{
    const liczba = document.querySelector("#liczba").value;
    tab.push(liczba);
    document.querySelector("#liczba").value = "";
}

function Start()
{
    let a = document.querySelector("#a").value;

    let max = tab[0], min = tab[0], sum = 0, ilosc = 0, srednia = 0;
    let miejsca = [];

    for(let i = 0; i < tab.length; i++){
        if(tab[i] == a){
            console.log("jest!")
            miejsca.push(i);
        }
            
        sum += parseInt(tab[i]);
        ilosc += 1;

        if(tab[i] > max)
            max = tab[i];
        if(tab[i] < min)
            min = tab[i];
    }

    srednia = sum / ilosc;
    let wieksze = 0, mniejsze = 0;

    for(let i = 0; i < tab.length; i++){
        if(tab[i] < srednia)
            mniejsze += 1;
        if(tab[i] > srednia)
            wieksze += 1;
    }

    const wynik = document.querySelector("#wynik");
    wynik.innerHTML = "Lista: " + tab +
    `<br>Miejsca występowania ${a}: ` + miejsca +
    `<br>Największa liczba: ` + max + 
    "<br>Najmniejsza liczba: " + min + 
    "<br>Średnia: " + srednia + 
    "<br>Ilość liczb poniżej średniej: " + mniejsze + 
    "<br>Ilość liczb powyżej średniej: " + wieksze;
}