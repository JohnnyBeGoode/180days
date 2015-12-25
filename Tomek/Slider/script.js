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

