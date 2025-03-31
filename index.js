//DOM
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let slice = document.getElementById("slice");
let col1 = document.getElementById("col1");
let col2 = document.getElementById("col2");
let col3 = document.getElementById("col3");
let col4 = document.getElementById("col4");
let col5 = document.getElementById("col5");
let col6 = document.getElementById("col1-2");
let col7 = document.getElementById("col2-2");
let col8 = document.getElementById("col3-2");
let col9 = document.getElementById("col4-2");
let col10 = document.getElementById("col5-2");
let cb = document.getElementById("cb");
let cb2 = document.getElementById("cb2");
let lb = document.getElementById("lb");
let lb2 = document.getElementById("lb2");

let vals1 = {
    Sniadanie: 450,
    Obiad: 800,
    Kolacja: 600,
    Przekaski: 300,
}
let vals2 = {
    Maka: 550,
    Jajka: 420,
    Cukier: 71,
    Mleko: 190,
    Kurczak: 69
}
let vals3 = {
    Kurczakgrill: 31,
    Tofustirfry: 18,
    Jajecznica: 12,
    Gulaszwolowy: 25,
    Salatkaztunczykiem: 22
}
let Menu = {
    "Kurczak z Grila": 40.20,
    "Tofu stirr fry": 35.00,
    "Jajecznica": 15.99,
    "Gulasz Wolowy": 23.50,
    "Salatka z Tunczykiem": 18.99,
    "Stek wołowy z pieczonymi warzywami": 79.00,
    "Pizza Truflowa (z rukolą i parmezanem)[50cm]": 55.50,
    "Burger wołowy z frytkami i sosem BBQ": 42.40,
    "Zupa tajska z krewetkami i mlekiem kokosowym": 32.15,
    "Tatar wołowy z jajkiem przepiórczym": 39.99
}

let Finanses= {
    "Średni rachunek": 85,
    "Dzienna sprzedaż": 15000,
    "Miesięczny obrót": 450000,
}
let globalinfo = {
    Kucharze: 20,
    Kelnerzy: 10,
    Barmani: 5,
    "Średni czas oczekiwania na danie": 30,
    "Liczba klientów w miesiącu": 1200,
    "Najpopularniejsze danie": "Kurczak z Grila",
    "Najpopularniejszy napój": "Woda z cytryną",
    "Promocja dnia": -20
}
let sumavals1 = vals1.Sniadanie + vals1.Obiad + vals1.Kolacja + vals1.Przekaski;
let sn = vals1.Sniadanie / sumavals1 * 100;
let ob = vals1.Obiad / sumavals1 * 100;
let ko = vals1.Kolacja / sumavals1 * 100;
let pr = vals1.Przekaski / sumavals1 * 100;

slice.style.background = `conic-gradient(
    rgb(143, 1, 122) 0% ${sn}%, 
    rgb(207, 31, 155) ${sn}% ${sn + ob}%, 
    rgb(201, 86, 145) ${sn + ob}% ${sn + ob + ko}%, 
    rgb(202, 131, 168) ${sn + ob + ko}% ${sn + ob + ko + pr}%
    )`;

t1.innerText += ` ${Number(sn.toFixed(2))}%`;
t2.innerText += ` ${Number(ob.toFixed(2))}%`;
t3.innerText += ` ${Number(ko.toFixed(2))}%`;
t4.innerText += ` ${Number(pr.toFixed(2))}%`;

col1.style.height = (vals2.Maka / 1000) * 100 + "%";
col2.style.height = (vals2.Jajka / 1000) * 100 + "%";
col3.style.height = (vals2.Cukier / 1000) * 100 + "%";
col4.style.height = (vals2.Mleko / 1000) * 100 + "%";
col5.style.height = (vals2.Kurczak / 1000) * 100 + "%";

col1.innerText = `${vals2.Maka}kg`
col2.innerText = `${vals2.Jajka}kg`
col3.innerText = `${vals2.Cukier}kg`
col4.innerText = `${vals2.Mleko}kg`
col5.innerText = `${vals2.Kurczak}kg`

col6.style.width = (vals3.Kurczakgrill / 35) * 100 + "%";
col7.style.width = (vals3.Tofustirfry / 35) * 100 + "%";
col8.style.width = (vals3.Jajecznica / 35) * 100 + "%";
col9.style.width = (vals3.Gulaszwolowy / 35) * 100 + "%";
col10.style.width = (vals3.Salatkaztunczykiem / 35) * 100 + "%";

col6.innerText = `${vals3.Kurczakgrill}g`;
col7.innerText = `${vals3.Tofustirfry}g`;
col8.innerText = `${vals3.Jajecznica}g`;
col9.innerText = `${vals3.Gulaszwolowy}g`;
col10.innerText = `${vals3.Salatkaztunczykiem}g`;

cb.innerHTML = `Średni rachunek: ${Finanses["Średni rachunek"]} zł<br>
Dzienna sprzedaż: ${Finanses["Dzienna sprzedaż"]} zł<br>
Miesięczny obrót: ${Finanses["Miesięczny obrót"]} zł`;

cb2.innerHTML = `Kucharze: ${globalinfo.Kucharze}<br>
Kelnerzy: ${globalinfo.Kelnerzy}<br>
Barmani: ${globalinfo.Barmani}<br>
Średni czas oczekiwania na danie: ${globalinfo["Średni czas oczekiwania na danie"]} min<br>
Liczba klientów w miesiącu: ${globalinfo["Liczba klientów w miesiącu"]}<br>
Najpopularniejsze danie: ${globalinfo["Najpopularniejsze danie"]}<br>
Najpopularniejszy napój: ${globalinfo["Najpopularniejszy napój"]}`;

lb.innerHTML = `<b>Menu:</b><br>
Kurczak z Grila: ${Menu["Kurczak z Grila"]} zł<br>
Tofu stirr fry: ${Menu["Tofu stirr fry"]} zł<br>
Jajecznica: ${Menu["Jajecznica"]} zł<br>
Gulasz Wolowy: ${Menu["Gulasz Wolowy"]} zł<br>
Salatka z Tunczykiem: ${Menu["Salatka z Tunczykiem"]} zł<br>
Stek wołowy z pieczonymi warzywami: ${Menu["Stek wołowy z pieczonymi warzywami"]} zł<br>
Pizza Truflowa (z rukolą i parmezanem)[50cm]: ${Menu["Pizza Truflowa (z rukolą i parmezanem)[50cm]"]} zł<br>
Burger wołowy z frytkami i sosem BBQ: ${Menu["Burger wołowy z frytkami i sosem BBQ"]} zł<br>
Zupa tajska z krewetkami i mlekiem kokosowym: ${Menu["Zupa tajska z krewetkami i mlekiem kokosowym"]} zł<br>
Tatar wołowy z jajkiem przepiórczym: ${Menu["Tatar wołowy z jajkiem przepiórczym"]} zł`;

lb2.innerHTML = `<b>Dodatkowe informacje:</b><br>
Promocja dnia: ${globalinfo["Promocja dnia"]} na ${globalinfo["Najpopularniejsze danie"]}<br>`;

