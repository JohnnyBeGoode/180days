var container = document.querySelector('body > div');
var images = document.querySelectorAll('body > div > div');

// Convert NodeList to Array
var array = Array.prototype.slice.call(images);

// Odwraca kolejnosc divow w tablicy
// To oznacza ze w funkcji slider() container.removeChild(array[slider]) zacznie wycicnac od pierwszego elementu div z 0
array.reverse()

// Ilosc slidów/divow do przetasowania
// Minus 1 ponieważ ilosc elementow w tablicy jest liczona od 0
// Slider = 34 -1 = 33 bo tyle jest divow 
// Przez ta zmiena kod jest uniwersalny i mozna dodac ile chcesz divow i kod bedzie dzialal
var slides = images.length - 1

// Funkcja slidera 
// Ona jest jak by petla ktora bierze pierwszy/ostatni element z tablicy i wkleja go na koncu listy divow
function slider(){
	// Jesli dojdzie do ostatnie elementu zacznij od nowa 
	if(slides < 0){
		slides = images.length - 1
	}
	// Wstaw animacje dla wszystkich divow
	array.forEach(function(a){
		a.style.animation = 'move 2s'
	})	

	// Wytnij element === slides z tablicy === array 
	// W pierwszej iteracji array[slides] === array[33] === div pierwszy na stronie dzieki array.reverse()
	container.removeChild(array[slides])
	// Wstawia wyciety element na koncu listy divow. Null powoduje ze wstawia defaultowo na koniec
	container.insertBefore(array[slides], null)	
	// W nastepenj funkcji nie wezmie ostatniego tylko przedostani
	slides--
	// Wywolaj funkcje slider() po 4sekundach
	setTimeout(slider, 4000)
}

// Ta funkcja czysci animacje dla wszystkich divow
function anim(){
	array.forEach(function(a){
		a.style.animation = ''
	})	
	// Wykonaj funckja czysczesnia divow po 3995 sekundy
	setTimeout(anim, 3995)
}

// Rozpocznij dzialanie czyszczenia
anim()
// Ropoznicznij dzialanie slidera
slider()

// Infomrcja ogólne 
// Różnica 5ms powoduje ze style zdąrzą się wyczyścić a po kolejnych 5ms dodać animacje









var test = '[1, 8]:[361]t[11, 361]:[1, 277]t[277, 366]:[361, 370]t[16, 29]:[782]t[1, 7]:[356]t[277, 1447]:[361, 1450]t[1, 17]:[366]t[20, 361]:[1, 283]t[8, 356]:[243, 361]t[8, 16]:[256]t[283, 366]:[361, 376]t[8, 12]:[126]t[8, 13]:[223]t[1726]:[8, 371]t[282, 366]:[361, 375]t[127, 361]:[283]t[29, 1174]:[243, 361, 1188]t[30, 366]:[1, 433]t[366, 2116]:[17, 361, 371, 409]t[231, 361]:[1057]t[257, 361]:[1447]t[12, 366]:[1, 375]t[120, 361]:[277]t[13, 366]:[1, 438]t[19, 361]:[1, 278]t[366, 1064]:[231, 361, 376]t[378, 1450]:[370, 1432]t[6, 8]:[231]t[11, 17]:[370]t[8, 20]:[127]t[8, 2266]:[231, 361]t[248, 361]:[1213]t[282]:[1, 126]t[12, 361]:[1, 282]t[8, 11]:[120]t[126, 361]:[282]t[1008]:[-1, 8, 885]t[2116]:[8, 170, 2155]t[29, 1174]:[245, 361, 1188]t[29, 1194]:[47, 1188]t[13, 1447]:[1, 1452]t[256, 361]:[1408]t[29, 1447]:[256, 361, 1461]t[3, 8]:[119]t[361, 1451]:[1, 12, 943]t[8, 231]:[230]t[6, 8]:[230]t[170, 1008]:[168, 361]t[257, 277]:[361, 1450]t[361]:[885, 948]t[362]:[-1, 16, 885]t[366, 1194]:[429, 1174]t[8, 230]:[231]t[8, 256]:[257]t[1064]:[127, 231]t[231, 277]:[361, 1060]t[3, 361]:[1, 276]t[8, 371]:[1726]t[121, 361]:[278]t[13, 1174]:[1, 1179]t[13, 277]:[1, 2451]t[231, 283]:[361, 1064]t[2489]:[231, 2295]t[277, 1461]:[316, 1450]t[278, 366]:[361, 371]t[283, 1174]:[361, 1181]t[1, 16]:[362]t[127, 366]:[361, 376]t[212, 1447]:[361, 1461]t[26, 1447]:[256, 361, 1458]t[277, 1213]:[361, 1216]t[361, 415, 1411]:[366, 414, 1450]t[370, 1194]:[429, 1177]t[47, 1174]:[245, 361, 1194]t[8, 15]:[248]t[8, 2267]:[231, 361]t[126, 366]:[361, 375]t[127, 231]:[1064]t[223, 366]:[361, 438]t[277, 1408]:[361, 1411]t[323, 366]:[361, 438]t[361, 2266]:[1, 230]t[366, 1060]:[231, 361, 370]t[1174]:[8, 245, 361]t[212, 366]:[361, 428]t[233, 277]:[361, 2456]t[26, 361]:[1, 1016]t[26, 53]:[842]t[320, 366]:[361, 433]t[323, 1447]:[361, 1452]t[334, 361]:[277, 362]t[79, 366, 1174]:[245, 361, 2477]t[1008, 1447, 2116]:[8, 361, 1453, 1456]t[13, 16]:[790]t[16, 361]:[-1, 885, 1408]t[30, 1174]:[7, 361, 1189]t[356, 361]:[2492]t[8, 1064]:[8, 127, 231]t[1447, 1450, 2116]:[361, 1450, 1453, 1456]t[17, 30]:[433]t[20, 366]:[1, 376]t[2447]:[7, 361]t[26, 1174]:[245, 361, 1185]t[278, 1174]:[361, 1180]t[278, 1447]:[361, 1453]t[361, 2314]:[283, 2285]t[366, 986, 2038]:[361, 371, 474, 1461, 2227]t[376, 1447]:[361, 366, 1415]t[8, 19]:[121]t[8, 2489]:[231, 361]t[914, 2303]:[370, 2269]t[1, 2267]:[2276]t[1174, 2266]:[361, 2338]t[12, 1174]:[361, 1178, 2447]t[12, 17]:[375]t[120, 231]:[1060]t[126, 1447]:[361, 1451]t[16, 26]:[769]t[212, 1174]:[361, 1188]t[231, 361]:[2489]t[277, 1174]:[361, 1177]t[277, 415]:[307, 370]t[277, 428]:[315, 370]t[277, 438]:[323, 370]t[361, 1457, 2116]:[170, 278, 1458]t[366, 1461]:[427, 966]t[7, 8]:[243]t[8, 29]:[212]t[80, 1174]:[243, 361, 1207]t[890]:[-1, 893]t[11, 35]:[639]t[1174, 1447, 1457]:[243, 361, 1458]t[129, 361]:[285]t[13, 17]:[438]t[181, 366]:[361, 415]t[248, 277]:[361, 1216]t[256, 277]:[361, 1411]t[278, 1461]:[316, 1453]t[282, 1174]:[361, 1178]t[283, 1213]:[361, 1220]t[285, 1447]:[361, 1471]t[307]:[1, 181]t[316, 1447]:[361, 1461]t[323, 367]:[361, 698]t[361, 366]:[917, 947]t[56, 361]:[285]t[7, 8]:[244]t[8, 16]:[257]t[8, 243]:[245]t[885, 929]:[8, 231, 885]t[1, 230]:[2294]t[1, 9]:[365]t[11, 2295]:[361, 2318]t[119, 1009]:[8, 11, 119]t[13, 277]:[2464]t[17, 20]:[376]t[170, 1008]:[8, 168, 361]t[180, 366]:[361, 414]t[181, 230]:[26, 231]t[212, 356]:[7, 29, 361]t[217, 366]:[361, 433]t[2306]:[2306, 2306]t[231, 361]:[8, 2489]t[248, 278]:[361, 1219]t[248, 361]:[8, 1213]t[2483]:[231, 356, 361]t[257, 278]:[361, 1453]t[276, 1447]:[361, 1448]t[278, 323]:[278, 323]t[285, 368]:[361, 820]t[3, 17]:[369]t[356, 366]:[2347]t[361, 1456, 2116]:[170, 302, 1453]t[56, 1447]:[1, 1471]t[7, 8]:[242]t[737, 1174]:[16, 243, 361, 1177]t[8, 2269]:[231, 361]t[8, 2482]:[256, 1457]t[8, 26]:[181]t[8, 80]:[219]t[-1, 917]:[917]t[1060, 1447]:[231, 361, 1450]t[11, 16]:[737]t[11, 362]:[1, 737]t[119, 361]:[276]t[12, 1174]:[1, 1178]t[12, 1174]:[245, 361, 1178]t[120, 366]:[361, 370]t[121, 231]:[1063]t[126, 257]:[1451]t[127, 248]:[1220]t[127, 367]:[361, 646]t[1411, 1447, 2116]:[361, 1450, 1453, 1456]t[1411, 1447]:[257, 361, 1450]t[17, 26]:[415]t[17, 277]:[361, 370]t[170, 366]:[17, 361, 409]t[1726]:[371, 1765]t[181, 1447]:[361, 1458]t[217, 277]:[361, 2448]t[223, 1174]:[361, 1179]t[223, 1447]:[361, 1452]t[2266, 2267]:[1, 2268]t[231, 285]:[361, 1081]t[231, 948]:[230, 361]t[231]:[6, 8]t[256, 284]:[361, 1426]t[26, 366]:[1, 414]t[277, 362]:[361, 737]t[278, 361]:[1, 278]t[30, 1174]:[1, 1189]t[323, 1135]:[361, 1140]t[323, 1174]:[361, 1179]t[35, 2266]:[367, 2300]t[361, 370]:[277, 366]t[361, 371]:[278, 366]t[361]:[-1, 8, 885]t[362, 1447, 2432]:[16, 361, 1453, 1455]t[366, 1258]:[371, 1252]t[366, 1471]:[378, 1447]t[366]:[885, 917]t[376]:[17, 20]t[438, 1447]:[366, 1452]t[738, 1447, 2116]:[16, 361, 1453, 1456]t[8, 2275]:[231, 361]t[8, 26]:[180]t[8, 31]:[224]t[8, 9]:[265]t[8, 906]:[181]t[886, 933]:[1233]t[914, 917]:[370]t[-1, 906]:[905]t[1, 11]:[338]t[1, 181]:[26, 361]t[1, 2267]:[885, 2276]t[1, 6]:[2266]t[1, 7]:[2498]t[11, 366]:[1, 370]t[12, 1213]:[1, 1217]t[12, 917]:[375]t[127, 1174]:[361, 1181]t[128, 361]:[284]t[13, 35]:[698]t[13, 362]:[1, 790]t[1447]:[885, 966]t[16, 20]:[744]t[17, 277, 278]:[278, 370]t[181, 231]:[1068]t[19, 283]:[20, 278]t[212, 362]:[361, 782]t[219]:[8, 80]t[223, 277]:[361, 2449]t[230, 361]:[1057]t[231, 278]:[361, 1063]t[231, 948]:[361, 929]t[240, 1141, 1174]:[361, 1180, 1209]t[240, 375]:[126, 454]t[245, 361]:[1135, 1174]t[257, 285]:[361, 1471]t[26, 1461]:[29, 1457]t[269, 361]:[1759]t[277, 1057]:[361, 1060]t[277, 1452]:[323, 1450]t[277, 414]:[306, 370]t[278, 1213]:[361, 1219]t[278, 438]:[323, 371]t[282, 1447]:[361, 1451]t[283, 1447]:[361, 1454]t[283, 362]:[361, 744]t[283, 370]:[277, 376]t[285, 366]:[361, 378]t[3, 366]:[1, 369]t[30, 1447]:[361, 362, 1462]t[306, 1447]:[361, 1457]t[306]:[26, 361]t[307, 1174]:[361, 1185]t[35, 361, 1642]:[366, 1876]t[366, 1061]:[375, 1057]t[366, 1450]:[370, 1447]t[367, 2116]:[35, 361, 640, 675]t[370, 1447]:[366, 1450]t[378, 1461]:[428, 1471]t[438, 966]:[366, 1452]t[6, 7, 1063]:[230, 2233]t[8, 1064]:[127, 231]t[8, 2266]:[230, 361]t[8, 29]:[211]t[8, 30]:[217]t[8, 47]:[213]t[8, 885]:[361]t[8, 901]:[217]t[886, 2194]:[915, 2208]t[966, 1453, 2155]:[361, 1453, 1456]t[1, 1, 8]:[361]t[1, 1064]:[2453]t[1, 119, 361]:[3, 948]t[1, 126]:[1, 126]t[1, 2267]:[1, 2276]t[1, 248]:[1213]t[1, 35]:[367]t[1, 52]:[364]t[1, 53]:[368]t[1008]:[8, 361]t[11, 2295]:[2318]t[11, 361]:[277]t[1181, 1457]:[1184, 1454]t[1194, 1213]:[1174, 1233]t[12, 218]:[48, 126]t[12, 361]:[1, 126]t[12, 361]:[282]t[120, 362]:[361, 737]t[121, 248]:[1219]t[126, 1135]:[361, 1139]t[126, 1174]:[361, 1178]t[126, 1213]:[361, 1217]t[126, 1408]:[361, 1412]t[126, 361, 1447]:[1, 1451]t[127, 1213]:[361, 1220]t[127, 1447]:[361, 1454]t[129, 248]:[1237]t[13, 277, 361]:[1, 2449]t[13, 277, 361]:[1, 2464]t[1447, 1457, 2116]:[361, 1453, 1456, 1458]t[158, 278, 1180]:[361, 1141, 2194]t[16, 29]:[781]t[16, 30]:[786]t[16, 893]:[781]t[1681]:[366, 1720]t[17, 19]:[371]t[17, 26]:[414]t[17, 277]:[361, 370, 370]t[17, 29]:[428]t[17, 361, 362]:[366, 1447]t[1744]:[8, 378]t[19, 1057]:[1, 1063]t[19, 1174]:[245, 361, 1180]t[19, 1447]:[1, 1453]t[19, 53]:[813]t[20, 1174]:[245, 361, 1181]t[20, 1174]:[361, 1181, 2447]t[2116]:[915, 940]t[212, 256]:[1422]t[2303]:[17, 2267]t[231, 361, 1064]:[2453]t[2347]:[356, 366]t[2453]:[230, 361, 1064]t[246, 323]:[361, 1179]t[248, 285]:[361, 1237]t[25, 366]:[1, 409]t[256]:[8, 257]t[277, 2305]:[1060, 2266]t[277, 2347]:[356, 361, 370]t[277, 433]:[320, 370]t[277, 966]:[361, 1411]t[278, 362]:[361, 738]t[278, 415]:[307, 371]t[282, 371]:[278, 375]t[282]:[912, 948]t[283, 361]:[-1, 361, 909]t[283, 361]:[127, 361]t[285, 1174]:[361, 361, 1198]t[3, 361]:[276]t[30, 1447]:[1, 1462]t[30, 1461]:[29, 1462]t[315, 366]:[361, 427]t[320, 1447]:[361, 1462]t[35, 256, 361]:[367, 1447]t[35, 361]:[367, 1798]t[361, 1408]:[257, 947]t[361]:[1, 8, 885]t[362, 1174]:[243, 361, 1447]t[366, 1209]:[452, 1174]t[366]:[1, 17]t[368, 1174]:[245, 361, 2032]t[368, 1447]:[53, 361, 362]t[370, 1408]:[366, 1411]t[370, 1471]:[378, 1450]t[378, 1453]:[371, 1471]t[4, 605]:[538, 889]t[4, 8]:[125]t[429]:[17, 47]t[47, 1174]:[1, 1194]t[5, 8]:[222]t[55, 361]:[1, 280]t[6, 13]:[2491]t[6, 50, 2347]:[356, 450, 2266]t[7, 648]:[56, 714]t[7, 8]:[246]t[737, 1461]:[782, 1450]t[782, 1174]:[16, 212, 243, 361]t[8, 1060]:[120, 231]t[8, 2267]:[1, 231]t[8, 2271]:[230, 361]t[8, 2273]:[231, 361]t[8, 2276]:[231, 361]t[8, 2293]:[231, 361]t[8, 28]:[201]t[8, 356]:[7, 361]t[8, 362]:[256, 361]t[8, 362]:[257, 361]t[8, 74]:[162]t[8, 79]:[214]t[813, 1447, 2432]:[53, 361, 1453, 1455]t[82, 2347]:[356, 452]t[890, 1174]:[243, 361, 1188]t[917, 2266]:[2303]t[948, 2267]:[2295]t[1, 1180]:[19, 1174]t[1, 119, 361]:[1, 3, 8]t[1, 12]:[343]t[1, 126]:[282]t[1, 13]:[349]t[1, 201]:[311]t[1, 211]:[315]t[1, 2276]:[2267]t[1, 242]:[243, 361]t[1, 246]:[1174]t[1, 3]:[337]t[1, 6, 222, 907]:[222, 223, 2266]t[1, 8, 915]:[1, 121]t[1063, 1181]:[1064, 1180]t[1064, 1213]:[231, 2457]t[1064, 1213]:[231, 361, 1220]t[1075]:[910, 929]t[11, 1174]:[1, 1177]t[11, 1213]:[1, 1216]t[11, 1447]:[1, 1450]t[11, 2295]:[1, 2318]t[1135]:[243, 361, 1174]t[1138, 1447, 2432]:[19, 361, 1177, 1447, 1455]t[119, 362]:[361, 736]t[119, 366]:[361, 369]t[1194, 1219]:[1180, 1233]t[12, 1174]:[242, 361, 1178]t[12, 14]:[2486]t[12, 1447]:[1, 1451]t[12, 2297]:[2323]t[12, 790]:[13, 743]t[120, 120, 168]:[169, 1009]t[120, 1408]:[361, 1411]t[120, 246]:[1177]t[120, 248]:[1216]t[120, 257]:[1450]t[120, 367]:[361, 639]t[121, 127, 361, 362]:[278, 283, 744]t[1213, 1220]:[2457]t[126, 1460]:[200, 1451]t[126, 231]:[1061]t[126, 371]:[121, 375]t[127, 362]:[361, 744]t[129, 257]:[1471]t[129, 933]:[1237]t[13, 1174]:[7, 361, 1179]t[13, 158]:[2193]t[13, 170]:[25, 223]t[13, 361]:[323]t[13, 398]:[24, 438]t[13, 966]:[1, 1452]t[14, 277, 361]:[1, 2456]t[14, 367]:[1, 707]t[1414, 1447]:[256, 361, 1453]t[1452]:[257, 907]t[15, 17]:[457]t[15, 361, 1174]:[243, 1213]t[16, 1135]:[243, 361, 1447]t[16, 180]:[1418]t[16, 19]:[738]t[16, 278]:[361, 738, 1453]t[17, 2266]:[2303]t[17, 277]:[361, 370, 1645]t[17, 278]:[366, 1648]t[17, 283]:[361, 376]t[17, 47]:[429]t[17, 53]:[474]t[17, 56]:[378]t[170, 1008]:[8, 170, 361]t[170, 361]:[-1, 885, 940]t[1759]:[885, 942]t[181, 230]:[231, 1016]t[181, 362]:[361, 770]t[19, 1174]:[243, 361, 1180]t[19, 366]:[1, 371]t[20, 1213]:[1, 1220]t[20, 35]:[646]t[20, 362]:[1, 744]t[211, 361]:[316]t[211]:[8, 29]t[217, 1174]:[361, 1189]t[223, 1408]:[361, 1413]t[223, 361]:[323]t[2266]:[1, 6]t[2266]:[6, 2267]t[2267]:[1, 2276]t[231, 2489]:[969]t[231, 276]:[361, 1058]t[231, 277]:[1, 1060]t[231, 366]:[17, 969]t[231, 370]:[17, 1060]t[233, 365]:[361, 606]t[237, 361]:[330]t[238, 1174]:[361, 1170, 1209]t[238, 1174]:[361, 1209]t[242, 369]:[119, 532]t[243, 361]:[-1, 885, 939]t[245, 361]:[243, 1174]t[2457]:[1, 1220]t[246, 361]:[1174]t[2473]:[7, 158, 361]t[248, 283]:[361, 1220]t[249, 361, 1174]:[244, 1291]t[256, 1012]:[1450]t[256, 885]:[966]t[257, 283]:[361, 1454]t[257, 316]:[361, 1461]t[26, 429]:[47, 414]t[276, 366]:[361, 369]t[277, 1451]:[12, 361, 1450]t[277, 1455]:[301, 1450]t[277, 2297]:[2305]t[277, 2327]:[361, 2330]t[277, 301]:[2466]t[277, 306]:[2475]t[277, 323]:[361, 2451]t[277, 356]:[245, 277]t[277, 370]:[361, 370]t[277, 378]:[285, 370]t[277]:[8, 885, 914]t[278, 1210]:[336, 1180]t[278, 1408]:[361, 1414]t[278, 1411, 2116]:[361, 1450, 2155]t[278, 361]:[278]t[278, 370]:[277, 371]t[28, 1194]:[47, 1187]t[28, 429]:[47, 421]t[281, 366]:[361, 374]t[282, 1408]:[361, 1412]t[282, 2188]:[361, 2192]t[282, 361]:[1, 126]t[282, 917]:[361, 375]t[282]:[12, 361]t[283, 2151]:[4, 20, 302]t[283, 361]:[-1, 909, 947]t[283, 361]:[127, 885]t[285, 1213]:[361, 1237]t[3, 1174]:[1, 1175]t[3, 362]:[1, 736]t[3, 9]:[533]t[30, 1174]:[245, 361, 1189]t[30, 1174]:[361, 1189, 2447]t[30, 1213]:[1, 1228]t[30, 249, 885]:[30, 358, 947]t[30, 361]:[320]t[30, 362]:[1, 786]t[307]:[181, 361]t[307]:[181, 947]t[316, 1174]:[361, 1188]t[316, 367]:[361, 690]t[320]:[217, 361]t[323, 1177]:[277, 1179]t[323]:[223, 361]t[33, 361]:[-1, 249, 885]t[336]:[254, 361]t[338, 361]:[1, 277]t[339, 361]:[1, 278]t[344, 361]:[1, 283]t[35, 2276]:[2315]t[35, 47]:[691]t[356, 1060]:[120, 231, 916]t[356, 1174]:[2447]t[356, 1174]:[361, 2447]t[356, 1458]:[307, 2439]t[356, 361, 1194]:[213, 2447]t[356, 361]:[916, 948]t[361, 1016]:[307]t[361, 1061]:[126, 969]t[361, 1408]:[257, 361]t[361, 1408]:[257, 948]t[361, 1447]:[1408]t[361, 1452]:[323, 361, 362]t[361, 1460]:[8, 28, 1447]t[361, 1461]:[315, 966]t[361, 2111]:[276, 2110]t[361, 2116, 2276]:[170, 278, 2312]t[361, 2188]:[2188]t[361, 2285]:[1, 971]t[361, 375]:[282, 366]t[361, 376]:[283, 366]t[361, 483]:[282, 356]t[361, 533]:[9, 119, 948]t[361, 770, 939]:[1, 26, 243, 257]t[361, 804, 1174]:[243, 1291, 1447]t[361, 916]:[356, 947]t[361]:[1, 8]t[361]:[361, 885]t[361]:[8, 885]t[362, 1138, 2116]:[361, 1177, 1453, 1456]t[362, 1174]:[16, 243, 361]t[362, 1408]:[16, 361]t[362, 1447, 2116]:[1447, 1453, 1456]t[362, 461]:[366, 806]t[362, 737]:[334]t[365, 370]:[366, 534]t[366, 1723]:[8, 17, 277]t[366, 2432, 2481]:[361, 370, 398, 1453]t[366, 2432, 2481]:[361, 370, 399, 1453]t[366, 2456]:[370, 2462]t[366, 2469]:[361, 376]t[366, 376]:[366, 376]t[366, 769]:[362, 414]t[368, 679]:[367, 842]t[369]:[913, 917]t[370, 1064]:[376, 1060]t[370, 1447]:[1, 366, 1450]t[370, 1471]:[378, 1411]t[370, 1471]:[378, 2481]t[370]:[11, 17]t[375, 1216]:[370, 1217]t[375, 1447]:[366, 1451]t[375, 969]:[366, 1061]t[376, 1060]:[370, 1064]t[376, 1216]:[370, 1220]t[378, 1180]:[371, 1198]t[378, 1447]:[366, 1471]t[378, 1451]:[375, 1471]t[4, 366]:[1, 374]t[429, 2492]:[361, 2408]t[55]:[-1, 2559]t[6, 20]:[2314]t[6, 231]:[230]t[6, 233, 1220]:[15, 230, 2487]t[6, 2347]:[17, 356, 2267]t[6, 238]:[82, 231]t[6, 253]:[83, 231]t[6]:[6]t[698, 1450]:[639, 1452]t[737, 1194]:[783, 1177]t[737, 2491]:[6, 11, 790]t[783]:[16, 47]t[8, 11]:[1009]t[8, 1135]:[1174]t[8, 14]:[232]t[8, 14]:[233]t[8, 15]:[247]t[8, 17]:[266]t[8, 19]:[1011]t[8, 223]:[8, 8, 907, 907]t[8, 2266]:[6, 361]t[8, 2267]:[1, 6, 231, 361]t[8, 2267]:[230, 361]t[8, 2268]:[231, 361]t[8, 2270]:[231, 361]t[8, 2273]:[230, 231, 361]t[8, 2274]:[231, 361]t[8, 2279]:[230, 361]t[8, 2280]:[231, 361]t[8, 2285]:[231, 361]t[8, 2294]:[1007]t[8, 231]:[8, 231]t[8, 28]:[200]t[8, 29, 366]:[8, 366, 890]t[8, 306, 361]:[307]t[8, 34]:[258]t[8, 356]:[7, 8, 356]t[8, 362]:[16, 361]t[8, 39]:[133]t[8, 56]:[129]t[8, 75]:[174]t[8, 76]:[184]t[8, 769]:[181, 256]t[8, 786]:[1462]t[8, 786]:[16, 217]t[8, 786]:[217, 256]t[8, 8, 26, 26, 231]:[26, 26, 231]t[8, 806]:[252, 256]t[8, 81]:[226]t[8, 909]:[127]t[8, 912]:[126]t[800, 1174]:[243, 361, 1482]t[813, 1008]:[53, 278]t[813, 966, 2432]:[53, 361, 1453, 1455]t[82, 2347]:[1, 356, 452]t[854]:[886, 919]t[885, 2276]:[2267]t[885, 905]:[1, 905]t[885, 939, 2482]:[243, 361, 906, 943]t[886, 2194]:[19, 2208]t[887]:[-1, 2548]t[893, 906]:[29, 905]t[9, 57, 914]:[11, 546]t[9, 82]:[611]t[901, 1174]:[1, 1189]t[904, 936]:[25, 943]t[905]:[-1, 906]t[911, 914, 917, 943]:[911, 914, 917, 943]t[911, 933]:[1237]t[915, 917]:[371]t[917]:[-1, 17]t[948]:[-1, 8, 361]t[971, 2116]:[168, 231, 361, 1063]t[-1, -1]:[-1]t[-1, 27]:[903]t[-1, 7]:[7]t[-1, 9]:[944]t[0, 0, 361]:[]t[1, 15]:[357]t[1, 170]:[168, 361]t[1, 217]:[320]t[1, 223]:[13, 361]t[1, 2267]:[1, 1, 2276]t[1, 2303]:[17, 2267]t[1, 231]:[230, 361]t[1, 2314]:[20, 2285]t[1, 243]:[243, 361]t[1, 244]:[243, 361]t[1, 245]:[243, 361]t[1, 246]:[243, 361]t[1, 246]:[361, 1174]t[1, 306]:[26, 361]t[1, 306]:[307, 361]t[1, 56]:[346]t[1, 6, 222, 907]:[5, 223, 2266]t[1, 737]:[11, 362]t[1, 8, 529]:[15, 1135]t[1, 8, 912]:[282]t[1, 8]:[947]t[1007]:[230, 361]t[1008, 1008]:[-1, 8, 885]t[1008, 1447, 2116]:[8, 8, 361, 1453, 1456]t[1008, 1447, 2432]:[8, 361, 1453, 1455]t[1016, 1447]:[256, 361, 1458]t[1018, 1060]:[231, 361, 956]t[1057, 1064]:[2453]t[1060, 1180, 1456]:[231, 1141, 1450, 2152]t[1060, 1447]:[969, 1450]t[1060]:[11, 231]t[1060]:[120, 231]t[1062]:[223, 231]t[1063, 1181]:[978, 1180]t[1063, 2462]:[969, 2506]t[1063]:[19, 929]t[1064, 1213]:[1057, 1220]t[1072]:[217, 231]t[11, 1057]:[1, 1060]t[11, 119, 361]:[8, 337, 338]t[11, 2540]:[7, 120]t[11, 375]:[12, 370]t[11]:[-1, 914]t[1135, 1876]:[35, 361, 1174]t[1138, 1174, 2113]:[361, 1177, 1183]t[1174, 1450]:[1177, 1447]t[1177, 1447, 2432]:[361, 1177, 1453, 1455]t[1177]:[7, 120]t[1178]:[8, 126, 245]t[1181, 1216]:[1177, 1220]t[1181, 1453]:[1180, 1454]t[1188, 1217]:[1178, 1227]t[1189]:[30, 245]t[119, 1174]:[361, 1175]t[119, 1213]:[361, 1214]t[119, 1447]:[361, 1448]t[119, 231]:[1058]t[119, 244]:[1136]t[119, 365]:[361, 533]t[1194, 2194]:[1180, 2208]t[1198, 1219]:[1180, 1237]t[1198, 1447]:[1174, 1471]t[12, 1007]:[1, 2490]t[12, 1057]:[1, 1061]t[12, 1135]:[1, 1139]t[12, 1174]:[7, 361, 1178]t[12, 16]:[743]t[12, 2462]:[1, 1100]t[12, 277]:[11, 282]t[12, 283]:[20, 282]t[12, 283]:[282, 909]t[12, 387]:[22, 375]t[120, 1198]:[1010, 1177]t[120, 1213]:[361, 1216]t[120, 233]:[2456]t[1209]:[8, 238, 243]t[1209]:[8, 238, 245]t[121, 246]:[1180]t[121, 362]:[361, 738]t[121, 366]:[361, 371]t[1213, 1461]:[1227, 1447]t[1217, 1454]:[1220, 1451]t[1219]:[19, 933]t[126, 246]:[1178]t[126, 248]:[1217]t[126, 361]:[282, 361]t[126, 362]:[361, 743]t[126, 367]:[361, 645]t[126, 368]:[361, 817]t[126]:[8, 12]t[127, 1008]:[283, 361]t[127, 1008]:[283]t[127, 1178]:[126, 1181]t[127, 2266]:[361, 2314]t[127, 256]:[1415]t[127, 256]:[1454]t[127, 257]:[1454]t[127, 282]:[126, 283]t[127]:[8, 20]t[129, 1408]:[361, 1432]t[129, 1447]:[361, 1471]t[13, 1174]:[223, 245, 361]t[13, 1174]:[361, 2530]t[13, 1213]:[1, 1218]t[13, 1460]:[28, 1452]t[13, 158]:[157, 2450]t[13, 180]:[26, 223]t[13, 181]:[26, 223]t[13, 20]:[13, 20]t[13, 212]:[29, 223]t[13, 233]:[14, 223]t[13, 26, 361]:[307, 323]t[13, 277]:[1, 2464]t[13, 366]:[1, 438, 438]t[13, 367]:[1, 698]t[13, 428]:[29, 438]t[13, 634]:[35, 598]t[13, 966]:[885, 1452]t[1408, 1720]:[366, 1447]t[1408, 1759]:[366, 1447]t[1411, 1447, 2038]:[53, 361, 1450, 1453]t[1411, 1453, 2116]:[1450, 1453, 1456]t[1414, 1447, 2116]:[361, 1453, 1456]t[1414, 1447]:[257, 2528]t[1447, 1457, 1726]:[361, 371, 1458]t[1447, 1457, 2032]:[53, 361, 1458]t[1447, 2113]:[277, 361, 1456]t[1447, 2116, 2406]:[231, 361, 1174, 1456, 1457, 2528]t[1447, 2194]:[361, 1453, 1455]t[1447, 2194]:[361, 1453, 2432]t[1447, 2194]:[361, 1453, 2472]t[1447, 2305]:[1450, 2297]t[1450, 1451]:[1450, 1451]t[1450]:[11, 943]t[1453, 2447]:[1180, 2439]t[1461]:[8, 212, 925]t[1471]:[56, 256]t[15, 1174]:[245, 361, 1213]t[15, 1216]:[11, 247]t[15, 1216]:[11, 248]t[15, 1216]:[11, 933]t[15, 1726]:[248, 371]t[15, 248]:[933]t[15, 35]:[715]t[15, 366, 1135]:[243, 267, 361, 958]t[15, 366]:[2467]t[158, 1408]:[1, 1455]t[158, 257]:[1455]t[158, 277]:[2466]t[158, 277]:[361, 2191]t[158, 361]:[301, 361]t[158, 366]:[361, 398]t[158, 366]:[398, 1008]t[158, 366]:[398, 947]t[158, 905]:[181, 908]t[159, 356]:[7, 158, 361]t[159, 361]:[2188]t[159, 366]:[17, 361, 399]t[16, 1174]:[243, 1447]t[16, 1174]:[243, 256, 361]t[16, 1174]:[245, 256, 361]t[16, 1174]:[361, 530]t[16, 1447]:[256, 361]t[16, 2295]:[231, 1408]t[16, 26]:[770]t[16, 278]:[361, 738, 1414]t[16, 31]:[791]t[16, 47]:[783]t[168, 1174]:[361, 1183]t[168, 1447]:[361, 1456]t[169, 361]:[303]t[17, 2266]:[366, 2303]t[17, 23]:[392]t[17, 277]:[361, 370, 1723]t[17, 278]:[361, 371, 1648]t[17, 285]:[361, 378, 1744]t[17, 356]:[366, 2347]t[17, 361]:[8, 366]t[17, 366, 905, 1726]:[361, 371, 415]t[17, 392]:[393]t[17, 414]:[415]t[17, 50]:[451]t[17, 53, 361]:[366, 2032]t[17, 640]:[35, 371]t[17, 813]:[53, 371]t[17, 908, 948]:[361, 917, 937]t[170, 230]:[169, 231]t[170, 278, 1180]:[243, 361, 2155]t[170, 640, 1447]:[35, 361, 1453, 1456]t[1759]:[269, 361]t[180, 1213]:[361, 1223]t[180, 1447]:[361, 1457]t[180, 230]:[26, 231]t[180, 231]:[1067]t[181, 230]:[180, 231]t[181, 230]:[6, 1016]t[181, 231]:[180, 230]t[181, 257]:[1458]t[181, 361]:[1, 307]t[181, 361]:[307]t[181]:[8, 26]t[183]:[8, 44]t[19, 1174]:[1, 1180]t[19, 1213]:[1, 1219]t[19, 1447]:[1, 1453, 1453]t[19, 361]:[278]t[19, 362]:[1, 738]t[19, 861]:[13, 813]t[19, 944]:[535]t[2, 361]:[2, 361]t[20, 1174]:[242, 361, 1181]t[20, 1174]:[243, 361, 1181]t[20, 1447]:[1, 1454]t[20, 223]:[13, 127]t[20, 367]:[1, 646]t[20, 939]:[7, 127]t[207, 451]:[237, 2369]t[21, 120]:[11, 132]t[211, 1174]:[243, 361, 1188]t[212, 231, 361]:[2508]t[212, 233]:[1110]t[212, 361]:[1, 315]t[212, 367]:[361, 690]t[213, 1008]:[8, 47, 361]t[213, 1174]:[361, 1194]t[213, 331]:[237, 317]t[213, 366]:[361, 429]t[213, 790]:[223, 783]t[214, 361]:[319]t[217, 1135]:[361, 1150]t[217, 1447]:[361, 1462]t[217, 231]:[1072]t[217, 278]:[19, 320]t[217, 285]:[56, 320]t[217, 362]:[361, 786]t[217, 367]:[361, 694]t[217, 369]:[119, 433]t[219, 1135]:[1, 7, 8, 80]t[223, 248]:[1218]t[223, 277, 361]:[2464]t[223, 367]:[361, 698, 698]t[223, 367]:[361, 698]t[2266]:[2285]t[2267]:[1, 2266]t[23, 740]:[55, 757]t[230, 1016]:[180, 231]t[230, 1016]:[181, 231]t[230, 238]:[1092]t[230, 277]:[2325]t[230, 361]:[1, 231]t[230, 361]:[969]t[230, 361]:[971]t[231, 242]:[230, 243]t[231, 2462]:[233, 969]t[231, 277, 361]:[947, 1060]t[231, 282]:[361, 1061]t[231, 320]:[361, 1072]t[231]:[8, 230]t[233, 1060]:[231, 2456]t[233, 1064]:[6, 2487]t[233, 244]:[232, 246]t[233, 278]:[361, 2506]t[2331]:[8, 2350]t[2349, 2540]:[8, 508]t[238, 366]:[361, 452]t[240, 366]:[17, 361, 452]t[240]:[8, 238]t[2407]:[356, 361, 890, 925]t[242, 361]:[1135]t[242, 361]:[1174]t[242, 362, 1447]:[256, 361, 1174]t[242, 369]:[119, 456]t[243, 361]:[-1, 885, 926]t[2432]:[2432]t[244, 320]:[361, 1150]t[244, 361]:[1135]t[2442]:[356, 1213]t[2447]:[242, 361]t[2449]:[11, 223]t[245, 277]:[361, 1138, 1177]t[245, 320]:[361, 1150]t[245]:[7, 8]t[2453]:[231, 361, 1064]t[246, 277]:[361, 1177]t[246, 278]:[361, 1180]t[246, 323]:[361, 2530]t[2462]:[233, 361]t[247, 361, 1720]:[366, 1213]t[247, 361]:[1213]t[248, 1009]:[8, 1216]t[248, 282]:[361, 1217]t[2481]:[8, 737]t[2483]:[231, 356, 356, 361]t[2489, 2489]:[2425]t[2489]:[231, 361]t[249, 1174]:[245, 361, 1291]t[249, 361, 1174]:[245, 1291]t[250, 277]:[361, 1294]t[256, 1447, 2432]:[361, 1453, 1455]t[256, 1447]:[2542]t[256, 282]:[361, 1412]t[256, 283]:[361, 1415]t[256, 356]:[7, 16, 361]t[256, 361, 1759]:[366, 1447]t[256, 361, 2116]:[1447, 1453, 1456]t[256, 361]:[1447]t[256, 362]:[1, 1408]t[256]:[257]t[256]:[8, 16]t[257, 277]:[1, 1450]t[257, 285]:[361, 1471, 1471]t[26, 1174]:[243, 361, 1185]t[26, 1174]:[361, 1185, 2447]t[26, 1447]:[1, 1457]t[26, 1447]:[361, 1418]t[26, 427]:[29, 414]t[26, 929]:[1068]t[266, 356]:[7, 361, 2347]t[266, 361]:[1642]t[27, 1447]:[361, 774]t[276, 1174]:[361, 1175]t[276, 1213]:[361, 1214]t[276, 1720]:[361, 1721]t[276, 433]:[320, 369]t[277, 1146]:[306, 1177]t[277, 1180]:[278, 1177]t[277, 1185]:[307, 1177]t[277, 1187]:[310, 1177]t[277, 1188]:[316, 1177]t[277, 1219]:[278, 1216]t[277, 1408]:[981, 1411]t[277, 1447]:[947, 1450]t[277, 1457]:[306, 1450]t[277, 1458]:[306, 1450]t[277, 1458]:[307, 1450]t[277, 2158]:[356, 361, 737]t[277, 2462]:[361, 2456]t[277, 361]:[361, 914, 948]t[277, 362]:[334, 361]t[277, 366]:[277, 370]t[277, 367]:[361, 639]t[277, 428]:[316, 370]t[277, 450]:[330, 370]t[277, 680]:[307, 639]t[277, 810]:[361, 2454]t[277, 916]:[338, 1135]t[277, 966]:[361, 1450]t[277]:[11, 361]t[278, 1216]:[277, 1219]t[278, 1220]:[283, 1219]t[278, 1408]:[1, 8, 1414]t[278, 1452]:[323, 1453]t[278, 2439]:[356, 361, 1453]t[278, 281]:[361, 2510]t[278, 367]:[361, 640]t[278, 368]:[361, 813]t[278, 375]:[282, 371]t[278, 409, 1648]:[170, 361, 371]t[278, 421]:[310, 371]t[278, 433]:[320, 371]t[278, 812, 2116]:[53, 277, 2155]t[278, 914]:[19, 277]t[282, 1060]:[277, 1061]t[282, 1135]:[361, 1139]t[282, 1213]:[361, 1217]t[282, 1720]:[361, 1724]t[282, 1759]:[361, 1763]t[282, 2326]:[361, 2323]t[282, 361]:[912, 948]t[282, 366]:[282, 375]t[282, 367]:[361, 645]t[282, 861]:[282, 861]t[282]:[12, 947]t[283, 1135]:[361, 1142]t[283, 1408]:[361, 1415]t[283, 1411]:[277, 1415]t[283, 2439]:[356, 361, 1454]t[283, 352]:[14, 127, 1008]t[283, 352]:[14, 127, 361]t[283, 352]:[14, 127, 947]t[283, 361]:[-1, 361, 909, 947]t[283, 361]:[1, 20, 361]t[283, 361]:[127, 1008]t[283, 361]:[127, 947]t[283, 361]:[283, 361]t[283, 361]:[283]t[283, 361]:[344, 361]t[283, 361]:[909, 947]t[283, 367]:[361, 646]t[283, 433]:[320, 376]t[284, 1720]:[361, 1738]t[285, 1057]:[361, 1081]t[285, 1135]:[361, 1159]t[285, 1447]:[361, 1471, 1471]t[29, 1060]:[120, 1071]t[29, 277]:[120, 315]t[29, 30, 367]:[1, 29, 694]t[29, 361]:[315]t[29, 361]:[316]t[29, 366]:[1, 428]t[29, 367]:[1, 690]t[29, 958]:[1, 1227]t[29, 966]:[1, 1461]t[3, 1447]:[1, 1448]t[3, 1447]:[361, 362, 1448]t[3, 16]:[736]t[3, 35]:[638]t[3, 53]:[811]t[3, 7]:[477]t[3]:[-1, 913]t[30, 1174]:[243, 361, 1189]t[30, 1174]:[356, 361, 1189]t[30, 1311, 1447]:[47, 358, 361, 1462]t[30, 1447, 2432]:[361, 1453, 1455, 1462]t[30, 1447]:[16, 361, 1462]t[30, 1447]:[256, 320]t[30, 249, 885]:[30, 358, 361]t[30, 277]:[11, 320]t[30, 361]:[1, 320]t[30, 367]:[1, 694]t[30, 414]:[26, 433]t[30, 429]:[47, 433]t[30, 885]:[1, 901]t[30, 939, 948]:[356, 361, 2452]t[30]:[-1, 901]t[301, 1447]:[361, 1455]t[301, 1450]:[277, 1455]t[302, 366]:[361, 409]t[302, 375]:[282, 409]t[302]:[302, 361]t[304, 366]:[361, 410]t[304, 367]:[361, 677]t[306, 1008]:[307]t[306, 361]:[1, 307]t[306, 366]:[361, 414]t[307, 1057]:[361, 1068]t[307, 1213]:[361, 1224]t[307, 1218]:[323, 1223]t[307]:[180, 361]t[315]:[211, 361]t[316, 1217]:[282, 1227]t[316, 2319]:[29, 361, 2266]t[316, 2489]:[29, 1007]t[316, 2492]:[361, 2357]t[316]:[212, 361]t[317, 1057]:[361, 1077]t[317, 366]:[361, 429]t[320, 1135]:[361, 1150]t[320, 1174]:[361, 1189]t[323, 1057]:[361, 1062]t[323, 943]:[13, 361, 943]t[334, 1009]:[8, 277, 925]t[337, 361]:[1, 276]t[343, 1213]:[361, 1217]t[35, 2267]:[367, 2299]t[35, 277, 1411]:[361, 639, 1447]t[35, 277, 1411]:[361, 639, 1450]t[35, 361, 746]:[367, 1471]t[35, 50]:[710]t[35, 737]:[16, 639]t[35, 813]:[53, 640]t[356, 1194]:[1174, 2354]t[356, 2266]:[1, 2227]t[356, 2266]:[2227]t[356, 362]:[1, 530]t[356, 907]:[1, 7, 13, 13, 13]t[356, 947]:[361, 916]t[356, 968]:[1, 916, 1060]t[357, 361]:[248, 361]t[358, 1174]:[243, 361, 1291]t[358, 1174]:[245, 361, 1291]t[358]:[-1, 33, 885]t[361, 1011]:[278]t[361, 1021]:[1, 8, 277, 1018]t[361, 1060]:[1, 338, 929]t[361, 1060]:[231, 277]t[361, 1061]:[231, 282]t[361, 1174]:[1, 1135]t[361, 1174]:[245, 361]t[361, 1174]:[7, 245, 361]t[361, 1181]:[127, 1135]t[361, 1220]:[2457]t[361, 1408]:[8, 1447]t[361, 1447]:[1008, 1408]t[361, 1450]:[277, 966]t[361, 1452]:[1, 16, 323]t[361, 1457]:[256, 306]t[361, 1457]:[306, 362]t[361, 1461]:[211, 1447]t[361, 1461]:[212, 1447]t[361, 1461]:[316, 966]t[361, 1763]:[282, 1759]t[361, 2114]:[282, 2110]t[361, 2134]:[285, 2110]t[361, 2155]:[170, 278, 2116]t[361, 2276]:[2295]t[361, 2277]:[2296]t[361, 2285]:[971]t[361, 2524]:[365, 2533]t[361, 362, 2116]:[1, 1453, 1456]t[361, 366]:[1681]t[361, 366]:[17, 947]t[361, 366]:[361, 366]t[361, 370]:[1, 17, 277]t[361, 399]:[301, 917]t[361, 428, 1645]:[17, 316, 370]t[361, 433]:[366, 2452]t[361, 581]:[201, 365]t[361, 640]:[278, 367]t[361, 737]:[277, 334]t[361, 738]:[278, 362]t[361, 925]:[948, 965]t[361, 929]:[947, 969]t[361, 929]:[948, 969]t[361]:[1, 885, 948]t[362, 1447, 2116]:[16, 361, 1453, 1456]t[362, 1447, 2116]:[361, 738, 1456]t[362, 1447]:[16, 361]t[362, 427]:[366, 782]t[362, 909]:[1, 744]t[362, 909]:[344, 925]t[362, 966]:[16, 361]t[366, 1061]:[375, 969]t[366, 1063]:[231, 361, 371]t[366, 1063]:[371, 1057]t[366, 1063]:[371, 969]t[366, 1067]:[231, 361, 414]t[366, 1071]:[231, 361, 428]t[366, 1099]:[370, 1096]t[366, 1209]:[453, 1174]t[366, 1411]:[256, 361, 370]t[366, 1411]:[370, 1408]t[366, 1451]:[375, 966]t[366, 1461]:[428, 966]t[366, 1467]:[429, 1447]t[366, 1720]:[17, 361]t[366, 1726]:[17, 361, 371]t[366, 2155]:[17, 361, 371, 409]t[366, 2295]:[361, 2306]t[366, 2314]:[376, 2285]t[366, 2432]:[17, 158, 339]t[366, 2432]:[300, 371]t[366, 2432]:[361, 371, 398]t[366, 2506]:[371, 2462]t[366, 450, 2432]:[361, 371, 399, 451]t[366, 478]:[356, 370]t[366, 737]:[362, 370]t[366, 738]:[362, 371]t[366, 746]:[362, 378]t[366, 786]:[362, 433]t[366, 886]:[1, 429]t[366, 903]:[1, 418]t[366, 912]:[1, 375]t[366]:[17, 885]t[367, 1447]:[35, 256, 361]t[367, 2432]:[35, 361, 640, 667]t[367, 2456]:[639, 2462]t[367, 438]:[366, 698]t[368, 1135]:[53, 243, 361]t[368, 1759, 2432]:[53, 361, 1765, 1767]t[368]:[1, 53]t[370, 1461]:[428, 1450]t[371, 1194]:[429, 1180]t[371, 1408]:[362, 1726]t[371, 1450]:[370, 1453]t[371, 2446]:[121, 429]t[376, 1063]:[371, 1064]t[376, 1213]:[366, 1220]t[376, 1219]:[371, 1220]t[376, 2456]:[370, 2487]t[376, 534]:[370, 540]t[376, 949]:[20, 430]t[377, 1213, 2116]:[17, 366, 371, 409, 1231]t[377, 1213, 2116]:[366, 371, 409, 1231]t[378, 1060]:[370, 1081]t[378, 1177]:[370, 1198]t[378, 1194]:[429, 1198]t[378, 1450]:[370, 1432, 1471]t[378, 1458]:[415, 1471]t[378]:[56, 917]t[399, 2492]:[301, 2347]t[399]:[908, 917]t[414, 1141]:[371, 1146]t[414, 1194]:[429, 1146]t[414, 949]:[26, 431]t[415, 1174]:[366, 1185]t[415, 2232]:[438, 2238]t[415, 2406]:[371, 987]t[421, 1451]:[375, 1460]t[428, 1194]:[429, 1188]t[428, 1447]:[366, 1461]t[428, 738]:[371, 782]t[429, 1177]:[370, 1194]t[43, 127, 361]:[43, 283]t[43, 918]:[678]t[438, 1194]:[429, 1179]t[438, 1213]:[366, 1218]t[438]:[13, 17]t[438]:[13, 917]t[457]:[17, 457]t[47, 1447]:[256, 361, 1467]t[47, 53]:[854]t[48, 1174]:[1, 1195]t[5, 361]:[1018]t[50, 1174]:[1, 1157]t[51, 361]:[-1, 251, 885]t[52, 1174]:[245, 260, 361]t[53, 1008]:[361, 2032]t[53, 362]:[16, 368]t[534, 1451]:[539, 1450]t[534, 811]:[533, 812]t[540]:[909, 944]t[56]:[-1, 911]t[567]:[9, 92]t[6, 126]:[12, 231]t[6, 127]:[230, 2314]t[6, 17, 138]:[230, 387]t[6, 181]:[26, 230]t[6, 181]:[26, 231]t[6, 212]:[29, 231]t[6, 219]:[80, 231]t[6, 231]:[231]t[6, 2347]:[17, 356, 2266]t[6, 2347]:[17, 356, 2268]t[6, 2347]:[17, 356, 2269]t[6, 237]:[50, 230]t[6, 237]:[50, 231]t[6, 361]:[1, 230]t[639, 1194]:[691, 1177]t[639, 1447]:[35, 256, 361, 1450]t[640, 1447, 2116]:[35, 361, 1453, 1456]t[640, 1447, 2432]:[1, 35, 1453, 2194]t[640, 1447, 2432]:[35, 361, 1453, 1455]t[640, 966, 2116]:[35, 361, 1453, 1456]t[645, 1447, 2116]:[35, 361, 1451, 1453, 1456]t[691]:[35, 47]t[7, 13]:[518]t[7, 231]:[8, 920]t[7, 56]:[486]t[7, 8]:[245]t[7, 8]:[939]t[7, 907]:[518]t[7, 909]:[484]t[7, 913]:[477]t[7, 918]:[714]t[736, 1213]:[362, 1214]t[737, 1447, 2038]:[53, 361, 1450, 1453]t[737, 1447, 2537]:[16, 361, 1450, 1455]t[737, 1447]:[362, 1450]t[738, 1447, 2155]:[16, 361, 1453, 1456]t[744, 1183]:[764, 1181]t[746, 1174]:[362, 1198]t[746, 1174]:[8, 16, 361, 1198]t[764, 1174]:[245, 361, 1456]t[781, 1174]:[243, 361, 1188, 1447]t[782, 1447]:[362, 1461]t[783, 1174]:[16, 243, 361, 1194]t[79]:[949]t[8, 1009]:[120]t[8, 1060]:[231, 1012]t[8, 1175]:[1136]t[8, 127]:[8, 127]t[8, 1411]:[1450]t[8, 16, 361, 2149]:[1447, 1456]t[8, 16]:[16, 256]t[8, 211]:[212]t[8, 2227]:[231, 356]t[8, 223]:[8, 8, 907, 2450]t[8, 223]:[8, 907]t[8, 2266]:[2294]t[8, 2267]:[1, 231, 361]t[8, 2267]:[6, 361]t[8, 2269]:[361, 2297]t[8, 2270]:[230, 361]t[8, 2270]:[6, 361]t[8, 2271]:[231, 361]t[8, 2271]:[6, 361]t[8, 2272]:[231, 361]t[8, 2276]:[1, 231]t[8, 2276]:[6, 361]t[8, 2278]:[1, 231]t[8, 2279]:[231, 361]t[8, 2282]:[6, 361]t[8, 2294]:[231, 361]t[8, 23]:[147]t[8, 231]:[230, 231]t[8, 231]:[231]t[8, 231]:[6, 231]t[8, 24]:[157]t[8, 2489]:[231, 231, 361]t[8, 25]:[168]t[8, 256, 257, 361, 2482]:[181, 256, 257, 1447]t[8, 27]:[191]t[8, 27]:[192]t[8, 32]:[235]t[8, 34]:[259]t[8, 356]:[7, 356, 361]t[8, 357]:[248, 361]t[8, 361, 2482]:[181, 256, 257, 1447]t[8, 362]:[967]t[8, 38]:[128]t[8, 40]:[139]t[8, 41]:[149]t[8, 48]:[218]t[8, 49]:[225]t[8, 57]:[134]t[8, 74]:[163]t[8, 769]:[1457]t[8, 77]:[194]t[8, 782]:[256, 781]t[8, 790]:[223, 256]t[8, 893]:[212]t[8, 905]:[180]t[8, 907]:[223]t[8, 907]:[2450]t[8, 915]:[121]t[8, 916]:[1135]t[8, 916]:[1174]t[8, 92]:[166]t[8, 92]:[167]t[80, 1174]:[243, 361, 1168]t[80, 1447]:[1, 1480]t[80, 1447]:[256, 361, 1480]t[80, 361]:[322]t[800, 1194]:[783, 1209]t[813, 1194]:[854, 1180]t[813, 1209]:[872, 1180]t[813, 1447, 2155]:[53, 361, 1453, 1456]t[813, 1447]:[53, 361, 362, 1453]t[82, 2347]:[452, 916]t[842, 1177]:[812, 1146]t[842, 1177]:[812, 1184]t[854]:[47, 53]t[88, 361]:[286]t[885, 2309]:[368, 2266]t[885, 2445]:[170, 361, 940]t[885, 905, 939]:[243, 361, 906]t[885, 905]:[885, 905]t[885, 926, 2445]:[25, 361, 939]t[885, 929]:[1, 231]t[885, 948]:[361]t[886, 917]:[429]t[893, 948, 2320]:[29, 361, 969]t[893]:[-1, 29]t[9, 12]:[539]t[9, 14]:[606]t[9, 26]:[574]t[9, 361]:[8, 365]t[9, 78]:[584]t[9, 78]:[585]t[9, 78]:[586]t[901, 1174]:[217, 242, 361]t[903, 1174]:[243, 361, 1186]t[903, 1174]:[245, 361, 1186]t[905, 1174]:[1, 1146]t[906, 1174]:[1, 1146]t[906, 1174]:[243, 361, 1185]t[907, 1174]:[243, 361, 1140]t[907, 1194]:[47, 1179]t[911, 943]:[1471]t[943]:[-1, 2549]t[944]:[-1, 9]t[948, 2267]:[2294]t[966, 1016]:[256, 361, 1458]t[966, 1411, 2116]:[361, 1450, 1453, 1456]t[966, 1457, 2116]:[361, 1453, 1456, 1458]t[967, 1447, 2432]:[361, 1453, 1455]t[967, 1450]:[966, 1411]t[968]:[231, 277]t[968]:[231, 361, 1060]t[969, 2506]:[1063, 2462]t[971, 1876]:[35, 231, 361]t[971, 2269]:[2489]t[971, 2269]:[971]t[981, 1411, 2116]:[361, 1450, 1453, 1456]'


 var arrayReakcji = test.split('t')

 var reakcjee = [];

arrayReakcji.forEach(function(a){
	reakcjee.push(a.replace(/[[]/g,'').split(':'))
})

var substratyyy = [];
var produktyyy = [];

reakcjee.forEach(function(a){
	substratyyy.push(a[0].split(','))
	produktyyy.push(a[1].split(','))
})


var idSub = []

substratyyy.forEach(function(a){
	var num = [];
	a.forEach(function(b){
		num.push(parseInt(b))
	})
	idSub.push(num)
})


var idPro = []

produktyyy.forEach(function(a){
	var num = [];
	a.forEach(function(b){
		num.push(parseInt(b))
	})
	idPro.push(num)
})

var idSubWzor = []


idSub.forEach(function(a){
	var subWzor = [];
	a.forEach(function(b){
		elements.forEach(function(c) { 
		if( c.id === b ) 
			subWzor.push(c.formula)
		})
	})
	idSubWzor.push(subWzor)
})

var idProWzor = []


idPro.forEach(function(a){
	var proWzor = [];
	a.forEach(function(b){
		elements.forEach(function(c) { 
		if( c.id === b ) 
			proWzor.push(c.formula)
		})
	})
	idProWzor.push(proWzor)
})


var idZwiaReakcje = [];
var wzorZwiaRekacje = [];

for (var i = 0; i < idSub.length; i++) {
	var hehe1 = [];
	var hehe2 = [];
	hehe1.push(idSub[i], idPro[i])
	hehe2.push(idSubWzor[i], idProWzor[i])
	idZwiaReakcje.push(hehe1)
	wzorZwiaRekacje.push(hehe2)
};









