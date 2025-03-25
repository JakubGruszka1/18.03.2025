{
    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    let t3 = document.getElementById("t3");
    let t4 = document.getElementById("t4");
    let slice = document.getElementById("slice");

    let vals1 = {
        Sniadanie: 450,
        Obiad: 800,
        Kolacja: 600,
        Przekaski: 300,
    }
    let sumavals1 = vals1.Sniadanie + vals1.Obiad + vals1.Kolacja + vals1.Przekaski;
    let sn = vals1.Sniadanie / sumavals1 * 100;
    let ob = vals1.Obiad / sumavals1 * 100;
    let ko = vals1.Kolacja / sumavals1 * 100;
    let pr = vals1.Przekaski / sumavals1 * 100;

    /* 
    1: rgb(205, 0, 175);
    2: rgb(207, 31, 155);
    3: rgb(201, 86, 145);
    4: rgb(202, 131, 168);
    */
    slice.style.background = `conic-gradient(
    rgb(143, 1, 122) 0% ${sn}%, 
    rgb(207, 31, 155) ${sn}% ${sn + ob}%, 
    rgb(201, 86, 145) ${sn + ob}% ${sn + ob + ko}%, 
    rgb(202, 131, 168) ${sn + ob + ko}% ${sn + ob + ko + pr}%
)`;

    t1.innerText += ` ${Number(sn.toFixed(2))}%`; //zaokrąglenie do 2 miejsc po przecinku
    t2.innerText += ` ${Number(ob.toFixed(2))}%`; //zaokrąglenie do 2 miejsc po przecinku
    t3.innerText += ` ${Number(ko.toFixed(2))}%`; //zaokrąglenie do 2 miejsc po przecinku
    t4.innerText += ` ${Number(pr.toFixed(2))}%`; //zaokrąglenie do 2 miejsc po przecinku
}
{
    let col1 = document.getElementById("col1");
    let col2 = document.getElementById("col2");
    let col3 = document.getElementById("col3");
    let col4 = document.getElementById("col4");
    let col5 = document.getElementById("col5");
    let vals2 = {
        Maka: 550,
        Jajka: 420,
        Cukier: 71,
        Mleko: 190,
        Kurczak: 69
    }

    col1.style.height = (vals2.Maka /1000) * 100 + "%";
    col2.style.height = (vals2.Jajka /1000) * 100 + "%";
    col3.style.height = (vals2.Cukier /1000) * 100 + "%";
    col4.style.height = (vals2.Mleko /1000) * 100 + "%";
    col5.style.height = (vals2.Kurczak /1000) * 100 + "%";

    col1.innerText = `${vals2.Maka}kg`
    col2.innerText = `${vals2.Jajka}kg`
    col3.innerText = `${vals2.Cukier}kg`
    col4.innerText = `${vals2.Mleko}kg`
    col5.innerText = `${vals2.Kurczak}kg`

}

{
    let col1 = document.getElementById("col1-2");
    let col2 = document.getElementById("col2-2");
    let col3 = document.getElementById("col3-2");
    let col4 = document.getElementById("col4-2");
    let col5 = document.getElementById("col5-2");



    let vals3 = {
        Kurczakgrill: 31,
        Tofustirfry: 18,
        Jajecznica:	12,
        Gulaszwolowy: 25,
        Salatkaztunczykiem: 22

    }

    col1.style.width = (vals3.Kurczakgrill / 35) * 100 + "%";
    col2.style.width = (vals3.Tofustirfry / 35) * 100 + "%";
    col3.style.width = (vals3.Jajecznica / 35) * 100 + "%";
    col4.style.width = (vals3.Gulaszwolowy / 35) * 100 + "%";
    col5.style.width = (vals3.Salatkaztunczykiem / 35) * 100 + "%";

    col1.innerText = `${vals3.Kurczakgrill}g`;
    col2.innerText = `${vals3.Tofustirfry}g`;
    col3.innerText = `${vals3.Jajecznica}g`;
    col4.innerText = `${vals3.Gulaszwolowy}g`;
    col5.innerText = `${vals3.Salatkaztunczykiem}g`;



}