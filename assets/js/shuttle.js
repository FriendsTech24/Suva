new gridjs.Grid({
	search: true,
	fixedHeader: true,
	language: {
		'search': {
		  'placeholder': '🔍 Busca tu destino...'
		},
		'pagination': {
			'previous': 'Anterior',
			'next': 'Siguiente',
			'showing': '😃 Displaying',
			'results': () => 'Records'
		  }
	  },
	sort: true,
	resizable: true,
	pagination: {
		limit: 6,
		enable: true,
		summary: false,
	},
	columns: ["Salida", "Destino", "Horarios","Observaciones", "Precio"],
	data:[
	  ["Ciudad de Guatemala", "Antigua Guatemala", "⏰6:00 hrs,⏰9:30 hrs,⏰10:30 hrs,⏰14:00 hrs,⏰16:30 hrs,⏰19:30 hrs","","Q 110.00"],
	  ["Ciudad de Guatemala", "Panajachel", "⏰6:00 hrs,⏰10:30 hrs,⏰14:00 hrs","","Q 200.00"],
	  ["Ciudad de Guatemala", "Lanquin/Semuc Champey", "⏰09:30 hrs","","Q 275.00"],
	  ["Ciudad de Guatemala", "Flores, Peten", "⏰10:00 hrs,⏰21:00 hrs,⏰21:30 hrs","Bus Primera Clase","Q 300.00"],
	  ["Antigua Guatemala", "Ciudad de Guatemala", "⏰04:00 hrs,⏰07:00 hrs,⏰09:00 hrs,⏰12:30 hrs,⏰15:00 hrs,⏰18:30 hrs","","Q 110.00"],
	  ["Antigua Guatemala", "Panajachel", "⏰05:30 hrs,⏰8:00 hrs,⏰12:30 hrs,⏰16:00 hrs","","Q 125.00"],
	  ["Antigua Guatemala", "Chichicastenango RT", "⏰07:00 hrs","Jueves y Domingo","Q 225.00"],
	  ["Antigua Guatemala", "Chichicastenango-Panajachel", "⏰07:00 hrs","Jueves y Domingo","Q 225.00"],
	  ["Antigua Guatemala", "San Pedro La Laguna", "⏰09:00 hrs,⏰14:00 hrs","","Q 150.00"],
	  ["Antigua Guatemala", "Coban, Lanquin/Semuc Champey", "⏰08:00 hrs","","Q 275.00"],
	  ["Antigua Guatemala", "Flores, Peten", "⏰04:00 hrs","Shuttle Directo","Q 425.00"],
	  ["Antigua Guatemala", "Flores, Peten", "⏰07:00 hrs,⏰18:30 hrs","Conexión Bus Primera Clase","Q 425.00"],
	  ["Antigua Guatemala", "Rio Dulce", "⏰06:00 hrs","Shuttle Directo","Q 275.00"],
	  ["Antigua Guatemala", "Rio Dulce", "⏰07:00 hrs,⏰09:00 hrs","Conexión Bus Primera Clase","Q 275.00"],
	  ["Antigua Guatemala", "El Paredón", "⏰09:00 hrs,⏰14:00 hrs","","Q 125.00"],
	  ["Antigua Guatemala", "Monterrico", "⏰08:00 hrs","","Q 125.00"],
	  ["Antigua Guatemala", "El Tunco, La Libertad El Salvador", "⏰02:30 hrs","","Q 350.00"],
	  ["Antigua Guatemala", "Quetzaltenango", "⏰03:30 hrs","Lunes a Viernes","Q 300.00"],
	  ["Antigua Guatemala", "Quetzaltenango", "⏰14:30 hrs","","Q 300.00"],
	  ["Antigua Guatemala", "San Cristobal de las Casas Mx", "","Lunes a Viernes","Q 500.00"],
	  ["Antigua Guatemala", "Huehuetenango", "⏰03:30 hrs","Lunes a Viernes","Q 375.00"],
	  ["Antigua Guatemala", "Frontera La Mesilla", "⏰03:30 hrs","Lunes a Viernes","Q 375.00"],
	  ["Panajachel", "Antigua Guatemala", "⏰05:00 hrs,⏰09:00 hrs,⏰12:00 hrs,⏰16:00 hrs","","Q 125.00"],
	  ["Panajachel", "Ciudad de Guatemala", "⏰05:00 hrs,⏰09:00 hrs,⏰12:00 hrs,⏰16:00 hrs","","Q 200.00"],
	  ["Panajachel", "Chichicastenango RT", "⏰08:00 hrs","Jueves y Domingo","Q 140.00"],
	  ["Panajachel", "Chichicastenango-Antigua", "⏰08:00 hrs","Jueves y Domingo","Q 225.00"],
	  ["Panajachel", "Coban, Lanquin/Semuc Champey", "⏰07:30 hrs","","Q 350.00"],
	  ["Panajachel", "Flores, Peten", "⏰05:00 hrs,⏰16:00 hrs","","Q 500.00"],
	  ["Panajachel", "Rio Dulce", "⏰05:00 hrs","","Q 375.00"],
	  ["Panajachel", "El Paredon", "⏰05:00 hrs,⏰09:00 hrs","","Q 225.00"],
	  ["Panajachel", "El Paredon", "⏰13:00 hrs","Directo","Q 225.00"],
	  ["Panajachel", "Monterrico", "⏰05:00 hrs","","Q 225.00"],
	  ["Panajachel", "Quetzaltenango", "⏰05:00 hrs","Lunes a Viernes","Q 200.00"],
	  ["Panajachel", "Quetzaltenango", "⏰09:00 hrs, ⏰15:00 hrs","","Q 200.00"],
	  ["Panajachel", "San Cristobal de las Casas Mx", "","Lunes a Viernes","Q 350.00"],
	  ["Panajachel", "Huehuetenango", "⏰05:00 hrs","Lunes a Viernes","Q 275.00"],
	  ["Panajachel", "Frontera La Mesilla", "⏰05:00 hrs","Lunes a Viernes","Q 275.00"],
	  ["Coban, Lanquin/Semuc Champey", "Antigua Guatemala", "⏰08:00 hrs","","Q 275.00"],
	  ["Coban, Lanquin/Semuc Champey", "Flores, Peten", "⏰08:00 hrs","","Q 300.00"],
	  ["Coban, Lanquin/Semuc Champey", "Rio Dulce", "⏰08:00 hrs","","Q 300.00"],
	  ["Flores, Peten", "Coban, Lanquin/Semuc Champey", "⏰08:00 hrs","","Q 300.00"],
	  ["Flores, Peten", "Ciudad de Guatemala", "⏰08:00 hrs,⏰19:00 hrs,⏰21:00 hrs","Bus Primera Clase","Q 300.00"],
	  ["Flores, Peten", "Antigua Guatemala", "⏰06:00 hrs","","Q 325.00"],
	  ["Flores, Peten", "Belice", "⏰06:00 hrs","","Q 450.00"],
	  ["Flores, Peten", "Chetumal", "⏰07:00 hrs","","Q 450.00"],
	],
	style: {
		table: {
			border: '2px solid #ccc'
		},
		th: {
		  'background-color': '#375E7E',
		  color: '#FFF',
		  'border-bottom': '3px solid #375E7E',
		  'text-align': 'center',
		  'font-size': '1.2rem',
		
		},
		td: {
		  'text-align': 'center',
		  'border-bottom': '3px solid #375E7E'
		},
	  }
  }).render(document.getElementById("tabla"));