// JavaScript Document   

var birthday = new Date();

function birthday_save()
{
	var iso = birthday.toISOString();
	localStorage.setItem('birthday', iso);
}


function birthday_load()
{
	var date = localStorage.getItem('birthday');
	if (date)
		birthday = new Date(date);
	else
		birthday = new Date();
}


// ** Tausenderunterteilung **************************************************
function trenner(number) 
{
	// Info: Die '' sind zwei Hochkommas
	var gelieferteZahl = number ;
	var Ganzzahl = Math.floor(gelieferteZahl);
	var nachkommastellen = gelieferteZahl.toString();
	var anzeigenachkommastellen = nachkommastellen.split(".");
	var anzeigenachkommastellenlänge = anzeigenachkommastellen.length;
	
	number = '' + Ganzzahl;
	if (number.length > 3) 
	{
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');
		var i;
		for (i=0 ; i < Math.floor(number.length / 3); i++) 
		{
		if ((mod == 0) && (i == 0))
		{
		output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
		}
		else
		
		// hier wird das Trennzeichen festgelegt mit '.'
		output+= '´' + (number.substring(mod + 3 * i, mod + 3 * i + 3)) ;
		}
		// 1 = ohne Kommastellen
		// 2 = mit Kommastellen
		if (anzeigenachkommastellenlänge==2)
		{
		return (output + "." + (anzeigenachkommastellen[1]).substring(0,2));
		}
		else
		{
		return (output);
		//return ("One");
		}
	}
	else return (gelieferteZahl);
}

const monate = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August',
	'September', 'Oktober', 'November', 'Dezember'];

function format_date(t)
{
	return t.getDate() + '. ' + monate[t.getMonth()] + ' ' + t.getFullYear();
}


// ** Infobox anzeigen *******************************************************
var box = new Array();
box[0] = 'container';
box[1] = 'haeder';
box[2] = 'logo';
box[3] = 'titeltext';
box[4] = 'textcontainer';
box[5] = 'infoboxanzeige';

function show(id)
{
	var i;
    if(document.getElementById(id).style.display=="block")
    {
        for(i=0; i<box.length; i++)
        {
                document.getElementById(box[i]).style.display="block";
        }
        document.getElementById(id).style.display="none";
    }
    else
    {
    	document.getElementById(id).style.display="block";
    }
}


function zurueck()
{
	location.href = "index.html";	
}


// ** Alter berechnen in Erdzeit*******************************************************

var DateDiff = 
{
	inSeconds: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();
 
		return parseInt((t2-t1)/1000);
	},	
	
	inMinutes: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();
	 
		return parseInt((t2-t1)/(60*1000));
	},	
 
	inHours: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();
 
	   return parseInt((t2-t1)/(3600*1000));
	},
 
	inDays: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();
	   return parseFloat(((t2-t1)/(24*3600*1000)+0.5)-1);
	},
 
	inWeeks: function(d1, d2) {
		var t2 = d2.getTime();
		var t1 = d1.getTime();
 
		return parseInt((t2-t1)/(24*3600*1000*7));
	},
 
	inMonths: function(d1, d2) {
		var d1Y = d1.getFullYear(); 
		var d2Y = d2.getFullYear();
		var d1M = d1.getMonth();
		var d2M = d2.getMonth();
 
		return (d2M+12*d2Y)- (d1M+12*d1Y);
	},
 
	inYears: function(d1, d2) {
		return d2.getFullYear()-d1.getFullYear();
	},
	 
	yourAge_in_years: function(d1, d2) {
	   var t2 = d2.getTime();
	   var t1 = d1.getTime();	 
	   return (((t2-t1)/(24*3600*1000)+0.5)-1)/365.24;			
	}
}

function berechne_alter()
{
	birthday = new Date(document.getElementById('gebdatum').value);
	birthday_save();
	var now = new Date();

	document.altersrecnung.age_in_years.value = (DateDiff.yourAge_in_years(birthday, now)).toFixed(2);
	document.altersrecnung.month.value = DateDiff.inMonths(birthday, now);
	document.altersrecnung.weeks.value = trenner(DateDiff.inWeeks(birthday, now));
	document.altersrecnung.days.value =  trenner((DateDiff.inDays(birthday, now)).toFixed(2));
	document.altersrecnung.hours.value = trenner(DateDiff.inHours(birthday, now));
	document.altersrecnung.minutes.value = trenner(DateDiff.inMinutes(birthday, now));
	document.altersrecnung.seconds.value = trenner(DateDiff.inSeconds(birthday, now));
}

// ************************************************************************************************
// ************************************************************************************************
// ** Festlegen des arrays für die Planetenbeschriftung *******************************************
var planetenbeschriftung = new Array();
planetenbeschriftung[0]= "Sonne";
planetenbeschriftung[1]= "Mond";
planetenbeschriftung[2]= "Merkur";
planetenbeschriftung[3]= "Venus";
planetenbeschriftung[4]= "Erde";
planetenbeschriftung[5]= "Mars";
planetenbeschriftung[6]= "Jupiter";
planetenbeschriftung[7]= "Saturn";
planetenbeschriftung[8]= "Uranus";
planetenbeschriftung[9]= "Neptun";
planetenbeschriftung[10]= "Pluto";    
            
//** Festlegen des Arrays für die Planetendaten ****************************************
var planeten = new Array();
//Sonne          
planeten[0] = new Array();
planeten[0]["Radius"] = 696000;
planeten[0]["Radius in Erdradien"] = 109.1227223;
planeten[0]["Radius im Quadrat"] = 11907.7685218029;
planeten[0]["Masse"] = 332946;
planeten[0]["Anziehungskraft"] = 27.960402437315;
planeten[0]["prozent"] = 2796;
planeten[0]["Umlaufzeit_in_tagen"] = "&nbsp;";
planeten[0]["Umlaufzeit_in_Stunden"] = "&nbsp;";
planeten[0]["Tagesdauer_in_Stunden"] = "&nbsp;";
planeten[0]["Planetentage/a"] = "&nbsp;";
planeten[0]["Bild"] = "images/planeten/Sonne.jpg";

//Mond
planeten[1] = new Array();
planeten[1]["Radius"] = 1737.4;
planeten[1]["Radius in Erdradien"] = 0.272399163;
planeten[1]["Radius im Quadrat"] = 0.074201304;
planeten[1]["Masse"] = 0.0123;
planeten[1]["Anziehungskraft"] = 0.16576528;
planeten[1]["prozent"] = 16;
planeten[1]["Umlaufzeit_in_tagen"] = "&nbsp;";
planeten[1]["Umlaufzeit_in_Stunden"] = "&nbsp;";
planeten[1]["Tagesdauer_in_Stunden"] = "&nbsp;";
planeten[1]["Planetentage/a"] = "&nbsp;";
planeten[1]["Bild"] = "images/planeten/Mond.jpg";
 
//Merkur
planeten[2] = new Array();
planeten[2]["Radius"] = 2439.7;
planeten[2]["Radius in Erdradien"] = 0.382509634;
planeten[2]["Radius im Quadrat"] = 0.146313620462555;
planeten[2]["Masse"] = 0.0553;
planeten[2]["Anziehungskraft"] = 0.377955243163111;
planeten[2]["prozent"] = 37;
planeten[2]["Umlaufzeit_in_tagen"] = 87.969;
planeten[2]["Umlaufzeit_in_Stunden"] = 2111.256;
planeten[2]["Tagesdauer_in_Stunden"] = 4224;
planeten[2]["Planetentage/a"] = 0.499823863636364;
planeten[2]["Bild"] = "images/planeten/Merkur.jpg";

//Venus
planeten[3] = new Array();
planeten[3]["Radius"] = 6051.8;
planeten[3]["Radius in Erdradien"] = 0.948834613225799;
planeten[3]["Radius im Quadrat"] = 0.900287123255352;
planeten[3]["Masse"] = 0.815;
planeten[3]["Anziehungskraft"] = 0.905266752070204;
planeten[3]["prozent"] = 90;
planeten[3]["Umlaufzeit_in_tagen"] = 224.701;
planeten[3]["Umlaufzeit_in_Stunden"] = 5392.824;
planeten[3]["Tagesdauer_in_Stunden"] = 2784;
planeten[3]["Planetentage/a"] = 1.9370775862069;
planeten[3]["Bild"] = "images/planeten/venus.jpg";
 
//Erde
planeten[4] = new Array();
planeten[4]["Radius"] = 6378.14;
planeten[4]["Radius in Erdradien"] = 1;
planeten[4]["Radius im Quadrat"] = 1;
planeten[4]["Masse"] = 1;
planeten[4]["Anziehungskraft"] = 1;
planeten[4]["prozent"] = 100;
planeten[4]["Umlaufzeit_in_tagen"] = 365.256;
planeten[4]["Umlaufzeit_in_Stunden"] = 8766.144;
planeten[4]["Tagesdauer_in_Stunden"] = 24;
planeten[4]["Planetentage/a"] = 365.256;
planeten[4]["Bild"] = "images/planeten/erde.jpg";
 
//Mars
planeten[5] = new Array();
planeten[5]["Radius"] = 3396.19;
planeten[5]["Radius in Erdradien"] = 0.532473417014992;
planeten[5]["Radius im Quadrat"] = 0.283527939827621;
planeten[5]["Masse"] = 0.1074;
planeten[5]["Anziehungskraft"] = 0.378798647023277;
planeten[5]["prozent"] = 38;
planeten[5]["Umlaufzeit_in_tagen"] = 686.996;
planeten[5]["Umlaufzeit_in_Stunden"] = 16487.904;
planeten[5]["Tagesdauer_in_Stunden"] = 24.65;
planeten[5]["Planetentage/a"] = 668.880486815416;
planeten[5]["Bild"] = "images/planeten/Mars.jpg";
 
//Jupiter
planeten[6] = new Array();
planeten[6]["Radius"] = 71492;
planeten[6]["Radius in Erdradien"] = 11.2089104347035;
planeten[6]["Radius im Quadrat"] = 125.639673133206;
planeten[6]["Masse"] = 317.89;
planeten[6]["Anziehungskraft"] = 2.53017213490333;
planeten[6]["prozent"] = 253;
planeten[6]["Umlaufzeit_in_tagen"] = 4332.816;
planeten[6]["Umlaufzeit_in_Stunden"] = 103987.584;
planeten[6]["Tagesdauer_in_Stunden"] = 9.83333;
planeten[6]["Planetentage/a"] = 10575.0121271228;
planeten[6]["Bild"] = "images/planeten/Jupiter.jpg";
 
//Saturn
planeten[7] = new Array();
planeten[7]["Radius"] = 60268;
planeten[7]["Radius in Erdradien"] = 9.44914975212209;
planeten[7]["Radius im Quadrat"] = 89.286431038029;
planeten[7]["Masse"] = 92.185;
planeten[7]["Anziehungskraft"] = 1.03246371176754;
planeten[7]["prozent"] = 103;
planeten[7]["Umlaufzeit_in_tagen"] = 10659.424;
planeten[7]["Umlaufzeit_in_Stunden"] = 255826.176;
planeten[7]["Tagesdauer_in_Stunden"] = 10.23333;
planeten[7]["Planetentage/a"] = 24999.3087294165;
planeten[7]["Bild"] = "images/planeten/Saturn.jpg";
 
//Uranus
planeten[8] = new Array();
planeten[8]["Radius"] = 25559;
planeten[8]["Radius in Erdradien"] = 4.00728111957404;
planeten[8]["Radius im Quadrat"] = 16.0583019712946;
planeten[8]["Masse"] = 14.537;
planeten[8]["Anziehungskraft"] = 0.905263833373289;
planeten[8]["prozent"] = 90;
planeten[8]["Umlaufzeit_in_tagen"] = 30686.504;
planeten[8]["Umlaufzeit_in_Stunden"] = 736476.096;
planeten[8]["Tagesdauer_in_Stunden"] =17.3;
planeten[8]["Planetentage/a"] = 42570.8726011561;
planeten[8]["Bild"] = "images/planeten/Uranus.jpg";

//Neptun
planeten[9] = new Array();
planeten[9]["Radius"] = 24764;
planeten[9]["Radius in Erdradien"] = 3.88263663074188;
planeten[9]["Radius im Quadrat"] = 15.0748672063786;
planeten[9]["Masse"] = 17.151;
planeten[9]["Anziehungskraft"] = 1.13772146481946;
planeten[9]["prozent"] = 114;
planeten[9]["Umlaufzeit_in_tagen"] = 60191.984;
planeten[9]["Umlaufzeit_in_Stunden"] = 1444607.616;
planeten[9]["Tagesdauer_in_Stunden"] = 15.8;
planeten[9]["Planetentage/a"] = 91430.8617721519;
planeten[9]["Bild"] = "images/planeten/neptun.jpg";
 
//Pluto
planeten[10] = new Array();
planeten[10]["Radius"] = 1195;
planeten[10]["Radius in Erdradien"] = 0.18735869704961;
planeten[10]["Radius im Quadrat"] = 0.0351032813601276;
planeten[10]["Masse"] = 0.00246;
planeten[10]["Anziehungskraft"] = 0.0700789186846281;
planeten[10]["prozent"] = 7;
planeten[10]["Umlaufzeit_in_tagen"] = 91710.256;
planeten[10]["Umlaufzeit_in_Stunden"] = 2201046.144;
planeten[10]["Tagesdauer_in_Stunden"] = 153.28333;
planeten[10]["Planetentage/a"] = 14359.3314680729;
planeten[10]["Bild"] = "images/planeten/Pluto.jpg";
 
 
// *********************************************************
 
function planetentabelle()
{
// Ausgabe der Planeten in eine HTML-Tabelle
document.write("<table>");
document.write("<th>Planet</th>");
document.write("<th>Radius</th>");
document.write("<th>Radius in Erdradien</th>");
document.write("<th>Radius im Quadrat</th>");
document.write("<th>Masse</th><th>Anziehungskraft</th>");
document.write("<th>prozent</th>");
document.write("<th>Umlaufzeit_in_tagen</th>");
document.write("<th>Umlaufzeit_in_Stunden</th>");
document.write("<th>Tagesdauer_in_Stunden</th>");
document.write("<th>Planetentage/a</th>");
            
for (var i=0;i<planeten.length;i++)
{
document.write("<tr>");
document.write("<td>" + planetenbeschriftung[i]);
  for (var Eigenschaft in planeten[i])
             document.write("<td>"+planeten[i][Eigenschaft]+"<\/td>"); 
 document.write("<\/td>");
document.write("<\/tr>");
}
document.write("</table>");
}


// *********************************************************
function berechnen_planetenalter(button_id)
{
	var now = new Date();
	document.planetenanzeige.planetname.value = planetenbeschriftung[button_id]; // Planetenname wird angezeigt
	document.bild.src = planeten[button_id]["Bild"] ; //Planetenbild
	var erdentage = DateDiff.inDays(birthday, now); // Alter in Tagen wird berechnet
	var planetenalter = erdentage/planeten[button_id]["Umlaufzeit_in_tagen"];
	document.planetenaltersrechnung.age_in_years.value = DateDiff.yourAge_in_years(birthday, now).toFixed(2);
	document.planetenaltersrechnung.planettitle.value = "Alter auf " + planetenbeschriftung[button_id];
	document.planetenaltersrechnung.planet_age_in_years.value = trenner((DateDiff.yourAge_in_years(birthday, now).toFixed(2)/(1/365.256 * planeten[button_id]["Umlaufzeit_in_tagen"]).toFixed(2)).toFixed(2)); // 
	document.planetenaltersrechnung.planet_age_in_days.value = trenner((1/(1/24*planeten[button_id]["Tagesdauer_in_Stunden"])*erdentage).toFixed(2));
	document.planetenaltersrechnung.info_titel.value = "Infobox zum Planeten "+  planetenbeschriftung[button_id] + ":";
	document.planetenaltersrechnung.info_planetday.value = "1 " + planetenbeschriftung[button_id] + "tag";
	document.planetenaltersrechnung.info_earthday.value = (1/24*planeten[button_id]["Tagesdauer_in_Stunden"]).toFixed(2) + " Erdtage";
	document.planetenaltersrechnung.info_planetyear.value = "1 " + planetenbeschriftung[button_id] +"jahr";
	document.planetenaltersrechnung.info_earthyear.value = (1/365.256 * planeten[button_id]["Umlaufzeit_in_tagen"]).toFixed(2);
	document.planetenaltersrechnung.info_earthyear_text.value="Erdjahre";
	var erdenstunden = parseInt(planeten[button_id]["Tagesdauer_in_Stunden"])+ " Std. ";
	var erdenminuten = (60/1*(planeten[button_id]["Tagesdauer_in_Stunden"]- parseInt(planeten[button_id]["Tagesdauer_in_Stunden"]))).toFixed(0);
	document.planetenaltersrechnung.info_earthhours.value = erdenstunden + erdenminuten +" Min.";
	document.planetenaltersrechnung.info_earthdays.value = trenner(planeten[button_id]["Umlaufzeit_in_tagen"].toFixed(0)); 
	document.planetenaltersrechnung.info_earthdays_text.value="Erdtage";
    document.planetenaltersrechnung.info_planetenearthhour.value = trenner((planeten[button_id]["Umlaufzeit_in_Stunden"]).toFixed(0));
	document.planetenaltersrechnung.info_planetenearthhour_text.value="Erdstunden";
	
	document.planetenaltersrechnung.info_planethour.value = trenner((planeten[button_id]["Umlaufzeit_in_Stunden"]/planeten[button_id]["Tagesdauer_in_Stunden"]).toFixed(2));
	document.planetenaltersrechnung.info_planethour_text.value= planetenbeschriftung[button_id] + "tage";
}
	
// ************************************************************************************************

function planet_years(d1, d2, button_id)
{ 
	return trenner((DateDiff.yourAge_in_years(d1, d2).toFixed(2)/(1/365.256 * planeten[button_id]
		["Umlaufzeit_in_tagen"]).toFixed(2)).toFixed(2));
}

function berechnen_zertifikat()
{
	var now = new Date();

    document.getElementById('datBir').innerHTML = format_date(birthday);
    document.getElementById('datNow').innerHTML = format_date(now);

    document.getElementById('ageA').innerHTML = (DateDiff.yourAge_in_years(birthday, now)).toFixed(2);
    document.getElementById('ageM').innerHTML = DateDiff.inMonths(birthday, now);
    document.getElementById('ageW').innerHTML = trenner(DateDiff.inWeeks(birthday, now));
    document.getElementById('ageD').innerHTML = trenner((DateDiff.inDays(birthday, now)).toFixed(2));
    document.getElementById('ageH').innerHTML = trenner(DateDiff.inHours(birthday, now));
    document.getElementById('ageI').innerHTML = trenner(DateDiff.inMinutes(birthday, now));
    document.getElementById('ageS').innerHTML = trenner(DateDiff.inSeconds(birthday, now));

    document.getElementById('planMer').innerHTML = planet_years(birthday, now, 2);
    document.getElementById('planVen').innerHTML = planet_years(birthday, now, 3);
    document.getElementById('planErd').innerHTML = planet_years(birthday, now, 4);
    document.getElementById('planMar').innerHTML = planet_years(birthday, now, 5);
    document.getElementById('planJup').innerHTML = planet_years(birthday, now, 6);
    document.getElementById('planSat').innerHTML = planet_years(birthday, now, 7);
    document.getElementById('planUra').innerHTML = planet_years(birthday, now, 8);
    document.getElementById('planNep').innerHTML = planet_years(birthday, now, 9);
    document.getElementById('planPlu').innerHTML = planet_years(birthday, now, 10);
}


function send_to_printer()
{
	window.print();
}



