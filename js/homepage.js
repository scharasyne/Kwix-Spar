const locationData = {
    Luzon: {
      "NCR": {
        "Metro Manila": [
          "Caloocan", "Las Piñas", "Makati", "Malabon", "Mandaluyong",
          "Manila", "Marikina", "Muntinlupa", "Navotas", "Parañaque",
          "Pasay", "Pasig", "Quezon City", "San Juan", "Taguig",
          "Valenzuela", "Pateros"
        ]
      },
      "CAR": {
        "Abra": [
          "Bangued", "Boliney", "Bucay", "Bucloc", "Daguioman",
          "Danglas", "Dolores", "La Paz", "Lacub", "Lagangilang",
          "Lagayan", "Langiden", "Licuan-Baay", "Luba", "Malibcong",
          "Manabo", "Peñarrubia", "Pidigan", "Pilar", "Sallapadan",
          "San Isidro", "San Juan", "San Quintin", "Tayum", "Tineg",
          "Tubo", "Villaviciosa"
        ],
        "Apayao": [
          "Calanasan", "Conner", "Flora", "Kabugao", "Luna", 
          "Pudtol", "Santa Marcela"
        ],
        "Benguet": [
          "Atok", "Bakun", "Bokod", "Buguias", "Itogon",
          "Kabayan", "Kapangan", "Kibungan", "La Trinidad", "Mankayan",
          "Sablan", "Tuba", "Tublay", "Baguio"
        ],
        "Ifugao": [
          "Aguinaldo", "Alfonso Lista", "Asipulo", "Banaue", "Hingyon",
          "Hungduan", "Kiangan", "Lagawe", "Lamut", "Mayoyao", "Tinoc"
        ],
        "Kalinga": [
          "Balbalan", "Lubuagan", "Pasil", "Pinukpuk", "Rizal",
          "Tabuk", "Tanudan", "Tinglayan"
        ],
        "Mountain Province": [
          "Barlig", "Bauko", "Besao", "Bontoc", "Natonin",
          "Paracelis", "Sabangan", "Sadanga", "Sagada", "Tadian"
        ]
      },
      "Region 1": {
        "Ilocos Norte": [
          "Adams", "Bacarra", "Badoc", "Bangui", "Banna", "Batac",
          "Burgos", "Carasi", "Currimao", "Dingras", "Dumalneg", "Laoag",
          "Marcos", "Nueva Era", "Pagudpud", "Paoay", "Pasuquin", "Piddig",
          "Pinili", "San Nicolas", "Sarrat", "Solsona", "Vintar"
        ],
        "Ilocos Sur": [
          "Alilem", "Banayoyo", "Bantay", "Burgos", "Cabugao", "Candon",
          "Caoayan", "Cervantes", "Galimuyod", "Gregorio del Pilar", "Lidlidda",
          "Magsingal", "Nagbukel", "Narvacan", "Quirino", "Salcedo", "San Emilio",
          "San Esteban", "San Ildefonso", "San Juan", "San Vicente", "Santa",
          "Santa Catalina", "Santa Cruz", "Santa Lucia", "Santa Maria", "Santiago",
          "Santo Domingo", "Sigay", "Sinait", "Sugpon", "Suyo", "Tagudin", "Vigan"
        ],
        "La Union": [
          "Agoo", "Aringay", "Bacnotan", "Bagulin", "Balaoan", "Bangar",
          "Bauang", "Burgos", "Caba", "Luna", "Naguilian", "Pugo", "Rosario",
          "San Fernando", "San Gabriel", "San Juan", "Santo Tomas", "Santol",
          "Sudipen", "Tubao"
        ],
        "Pangasinan": [
          "Agno", "Aguilar", "Alaminos", "Alcala", "Anda", "Asingan", "Balungao",
          "Bani", "Basista", "Bautista", "Bayambang", "Binalonan", "Binmaley",
          "Bolinao", "Bugallon", "Burgos", "Calasiao", "Dagupan", "Dasol", "Infanta",
          "Labrador", "Laoac", "Lingayen", "Mabini", "Malasiqui", "Manaoag", "Mangaldan",
          "Mangatarem", "Mapandan", "Natividad", "Pozorrubio", "Rosales", "San Carlos",
          "San Fabian", "San Jacinto", "San Manuel", "San Nicolas", "San Quintin",
          "Santa Barbara", "Santa Maria", "Santo Tomas", "Sison", "Sual", "Tayug",
          "Umingan", "Urbiztondo", "Urdaneta", "Villasis"
        ]
      },
      "Region 2": {
        "Batanes": [
          "Basco", "Itbayat", "Ivana", "Mahatao", "Sabtang", "Uyugan"
        ],
        "Cagayan": [
          "Abulug", "Alcala", "Allacapan", "Amulung", "Aparri", "Baggao", "Ballesteros",
          "Buguey", "Calayan", "Camalaniugan", "Claveria", "Enrile", "Gattaran", "Gonzaga",
          "Iguig", "Lal-lo", "Lasam", "Pamplona", "Peñablanca", "Piat", "Rizal", "Sanchez-Mira",
          "Santa Ana", "Santa Praxedes", "Santa Teresita", "Santo Niño", "Solana", "Tuao",
          "Tuguegarao"
        ],
        "Isabela": [
          "Alicia", "Angadanan", "Aurora", "Benito Soliven", "Burgos", "Cabagan", "Cabatuan",
          "Cauayan", "Cordon", "Delfin Albano", "Dinapigue", "Divilacan", "Echague", "Gamu",
          "Ilagan", "Jones", "Luna", "Maconacon", "Mallig", "Naguilian", "Palanan", "Quezon",
          "Quirino", "Ramon", "Reina Mercedes", "Roxas", "San Agustin", "San Guillermo", 
          "San Isidro", "San Manuel", "San Mariano", "San Mateo", "San Pablo", "Santa Maria",
          "Santiago", "Santo Tomas", "Tumauini"
        ],
        "Nueva Vizcaya": [
          "Alfonso Castañeda", "Ambaguio", "Aritao", "Bagabag", "Bambang", "Bayombong", "Diadi",
          "Dupax del Norte", "Dupax del Sur", "Kasibu", "Kayapa", "Quezon", "Santa Fe", "Solano",
          "Villaverde"
        ],
        "Quirino": [
          "Aglipay", "Cabarroguis", "Diffun", "Maddela", "Nagtipunan", "Saguday"
        ]
      },
      "Region 3": {
        "Aurora": [
          "Baler", "Casiguran", "Dilasag", "Dinalungan", "Dingalan", "Maria Aurora", "San Luis"
        ],
        "Bataan": [
          "Abucay", "Bagac", "Balanga", "Dinalupihan", "Hermosa", "Limay", "Mariveles",
          "Morong", "Orani", "Orion", "Pilar", "Samal"
        ],
        "Bulacan": [
          "Angat", "Balagtas", "Baliuag", "Bocaue", "Bulakan", "Bustos", "Calumpit",
          "Doña Remedios Trinidad", "Guiguinto", "Hagonoy", "Malolos", "Marilao", "Meycauayan",
          "Norzagaray", "Obando", "Pandi", "Paombong", "Plaridel", "Pulilan", "San Ildefonso",
          "San Jose del Monte", "San Miguel", "San Rafael", "Santa Maria"
        ],
        "Nueva Ecija": [
          "Aliaga", "Bongabon", "Cabanatuan", "Cabiao", "Carranglan", "Cuyapo", "Gabaldon",
          "Gapan", "General Mamerto Natividad", "General Tinio", "Guimba", "Jaen", "Laur",
          "Licab", "Llanera", "Lupao", "Muñoz", "Nampicuan", "Palayan", "Pantabangan",
          "Peñaranda", "Quezon", "Rizal", "San Antonio", "San Isidro", "San Jose", "San Leonardo",
          "Santa Rosa", "Santo Domingo", "Talavera", "Talugtug", "Zaragoza"
        ],
        "Pampanga": [
          "Angeles", "Apalit", "Arayat", "Bacolor", "Candaba", "Floridablanca", "Guagua",
          "Lubao", "Mabalacat", "Macabebe", "Magalang", "Masantol", "Mexico", "Minalin",
          "Porac", "San Fernando", "San Luis", "San Simon", "Santa Ana", "Santa Rita",
          "Santo Tomas", "Sasmuan"
        ],
        "Tarlac": [
          "Anao", "Bamban", "Camiling", "Capas", "Concepcion", "Gerona", "La Paz", "Mayantoc",
          "Moncada", "Paniqui", "Pura", "Ramos", "San Clemente", "San Jose", "San Manuel",
          "Santa Ignacia", "Tarlac City", "Victoria"
        ],
        "Zambales": [
          "Botolan", "Cabangan", "Candelaria", "Castillejos", "Iba", "Masinloc", "Olongapo",
          "Palauig", "San Antonio", "San Felipe", "San Marcelino", "San Narciso", "Santa Cruz", "Subic"
        ]
      }
    },
    Visayas: {
      "Region 6": {
        "Aklan": [
          "Altavas", "Balete", "Banga", "Batan", "Buruanga", "Ibajay", "Kalibo", "Lezo",
          "Libacao", "Madalag", "Makato", "Malay", "Malinao", "Nabas", "New Washington",
          "Numancia", "Tangalan"
        ],
        "Antique": [
          "Anini-y", "Barbaza", "Belison", "Bugasong", "Caluya", "Culasi", "Hamtic",
          "Laua-an", "Libertad", "Pandan", "Patnongon", "San Jose de Buenavista",
          "San Remigio", "Sebaste", "Sibalom", "Tibiao", "Tobias Fornier", "Valderrama"
        ],
        "Capiz": [
          "Cuartero", "Dao", "Dumalag", "Dumarao", "Ivisan", "Jamindan", "Maayon",
          "Mambusao", "Panay", "Panitan", "Pilar", "Pontevedra", "President Roxas",
          "Roxas", "Sapian", "Sigma", "Tapaz"
        ],
        "Guimaras": [
          "Buenavista", "Jordan", "Nueva Valencia", "San Lorenzo", "Sibunag"
        ],
        "Iloilo": [
          "Ajuy", "Alimodian", "Anilao", "Badiangan", "Balasan", "Banate", "Barotac Nuevo",
          "Barotac Viejo", "Batad", "Bingawan", "Cabatuan", "Calinog", "Carles", "Concepcion",
          "Dingle", "Duenas", "Dumangas", "Estancia", "Guimbal", "Igbaras", "Iloilo City",
          "Janiuay", "Lambunao", "Leganes", "Lemery", "Leon", "Maasin", "Miagao", "Mina", 
          "New Lucena", "Oton", "Passi", "Pavia", "Pototan", "San Dionisio", "San Enrique",
          "San Joaquin", "San Miguel", "San Rafael", "Santa Barbara", "Sara", "Tigbauan",
          "Tubungan", "Zarraga"
        ],
        "Negros Occidental": [
          "Bacolod", "Bago", "Binalbagan", "Cadiz", "Calatrava", "Candoni", "Cauayan",
          "Enrique B. Magalona", "Escalante", "Himamaylan", "Hinigaran", "Hinoba-an",
          "Ilog", "Isabela", "Kabankalan", "La Carlota", "La Castellana", "Manapla",
          "Moises Padilla", "Murcia", "Pontevedra", "Pulupandan", "Sagay", "Salvador Benedicto",
          "San Carlos", "San Enrique", "Silay", "Sipalay", "Talisay", "Toboso", "Valladolid",
          "Victorias"
        ]
      },
      "Region 7": {
        "Bohol": [
          "Alburquerque", "Alicia", "Anda", "Antequera", "Baclayon", "Balilihan", "Batuan",
          "Bien Unido", "Bilar", "Buenavista", "Calape", "Candijay", "Carmen", "Catigbian",
          "Clarin", "Corella", "Cortes", "Dagohoy", "Danao", "Dauis", "Dimiao", "Duero",
          "Garcia Hernandez", "Getafe", "Guindulman", "Inabanga", "Jagna", "Lila", "Loay",
          "Loboc", "Loon", "Mabini", "Maribojoc", "Panglao", "Pilar", "President Carlos P. Garcia",
          "Sagbayan", "San Isidro", "San Miguel", "Sevilla", "Sierra Bullones", "Sikatuna",
          "Tagbilaran", "Talibon", "Trinidad", "Tubigon", "Ubay", "Valencia"
        ],
        "Cebu": [
          "Alcantara", "Alcoy", "Alegria", "Aloguinsan", "Argao", "Asturias", "Badian",
          "Balamban", "Bantayan", "Barili", "Bogo", "Boljoon", "Borbon", "Carcar", "Carmen",
          "Catmon", "Cebu City", "Compostela", "Consolacion", "Cordova", "Daanbantayan",
          "Dalaguete", "Danao", "Dumanjug", "Ginatilan", "Lapu-Lapu", "Liloan", "Madridejos",
          "Malabuyoc", "Mandaue", "Medellin", "Minglanilla", "Moalboal", "Naga", "Oslob",
          "Pilar", "Pinamungajan", "Poro", "Ronda", "Samboan", "San Fernando", "San Francisco",
          "San Remigio", "Santa Fe", "Santander", "Sibonga", "Sogod", "Tabogon", "Tabuelan",
          "Talisay", "Toledo", "Tuburan", "Tudela"
        ],
        "Negros Oriental": [
          "Amlan", "Ayungon", "Bacong", "Bais City", "Basay", "Bayawan City", "Bindoy",
          "Canlaon City", "Dauin", "Dumaguete City", "Guihulngan City", "Jimalalud",
          "La Libertad", "Mabinay", "Manjuyod", "Pamplona", "San Jose", "Santa Catalina",
          "Siaton", "Sibulan", "Tanjay City", "Tayasan", "Valencia", "Vallehermoso", "Zamboanguita"
        ],
        "Siquijor": [
          "Enrique Villanueva", "Larena", "Lazi", "Maria", "San Juan", "Siquijor"
        ]
      },
      "Region 8": {
        "Biliran": [
          "Almeria", "Biliran", "Cabucgayan", "Caibiran", "Culaba", "Kawayan", "Maripipi", "Naval"
        ],
        "Eastern Samar": [
          "Arteche", "Balangiga", "Balangkayan", "Borongan", "Can-avid", "Dolores",
          "General MacArthur", "Giporlos", "Guiuan", "Hernani", "Jipapad", "Lawaan",
          "Llorente", "Maslog", "Maydolong", "Mercedes", "Oras", "Quinapondan", "Salcedo",
          "San Julian", "San Policarpo", "Sulat", "Taft"
        ],
        "Leyte": [
          "Abuyog", "Alangalang", "Albuera", "Babatngon", "Barugo", "Bato", "Baybay", 
          "Burauen", "Calubian", "Capoocan", "Carigara", "Dagami", "Dulag", "Hilongos", 
          "Hindang", "Inopacan", "Isabel", "Jaro", "Javier", "Julita", "Kananga", "La Paz", 
          "Leyte", "MacArthur", "Mahaplag", "Matag-ob", "Matalom", "Mayorga", "Merida", 
          "Ormoc City", "Palo", "Palompon", "Pastrana", "San Isidro", "San Miguel", 
          "Santa Fe", "Tabango", "Tabontabon", "Tacloban City", "Tanauan", "Tolosa", "Tunga", "Villaba"
        ],
        "Northern Samar": [
          "Allen", "Biri", "Bobon", "Capul", "Catarman", "Catubig", "Gamay", "Laoang", 
          "Lapinig", "Las Navas", "Lavezares", "Lope de Vega", "Mapanas", "Mondragon", 
          "Palapag", "Pambujan", "Rosario", "San Antonio", "San Isidro", "San Jose", 
          "San Roque", "San Vicente", "Silvino Lobos", "Victoria"
        ],
        "Samar": [
          "Almagro", "Basey", "Calbayog City", "Calbiga", "Catbalogan City", "Daram", 
          "Gandara", "Hinabangan", "Jiabong", "Marabut", "Matuguinao", "Motiong", 
          "Pagsanghan", "Paranas", "Pinabacdao", "San Jorge", "San Jose de Buan", 
          "San Sebastian", "Santa Margarita", "Santa Rita", "Santo Niño", "Tagapul-an", 
          "Talalora", "Tarangnan", "Villareal", "Zumarraga"
        ],
        "Southern Leyte": [
          "Anahawan", "Bontoc", "Hinunangan", "Hinundayan", "Libagon", "Liloan", 
          "Limasawa", "Maasin City", "Macrohon", "Malitbog", "Padre Burgos", "Pintuyan", 
          "Saint Bernard", "San Francisco", "San Juan", "San Ricardo", "Silago", "Sogod", 
          "Tomas Oppus"
        ]
      }
    },
    Mindanao: {
      "Region 9": {
        "Zamboanga del Norte": [
          "Bacungan", "Baliguian", "Dapitan City", "Dipolog City", "Godod", "Gutalac",
          "Jose Dalman", "Kalawit", "Katipunan", "La Libertad", "Labason", "Liloy",
          "Manukan", "Mutia", "Piñan", "Polanco", "President Manuel A. Roxas", "Rizal",
          "Salug", "Sergio Osmeña Sr.", "Siayan", "Sibuco", "Sibutad", "Sindangan",
          "Siocon", "Sirawai", "Tampilisan"
        ],
        "Zamboanga del Sur": [
          "Aurora", "Bayog", "Dimataling", "Dinas", "Dumalinao", "Dumingag", "Guipos",
          "Josefina", "Kumalarang", "Labangan", "Lakewood", "Lapuyan", "Mahayag",
          "Margosatubig", "Midsalip", "Molave", "Pagadian City", "Pitogo",
          "Ramon Magsaysay", "San Miguel", "San Pablo", "Sominot", "Tabina",
          "Tambulig", "Tigbao", "Tukuran", "Vincenzo A. Sagun"
        ],
        "Zamboanga Sibugay": [
          "Alicia", "Buug", "Diplahan", "Imelda", "Ipil", "Kabasalan", "Mabuhay",
          "Malangas", "Naga", "Olutanga", "Payao", "Roseller Lim", "Siay", "Talusan",
          "Titay", "Tungawan"
        ],
        "City of Isabela": [
          "Isabela City"
        ]
      },
      "Region 10": {
        "Bukidnon": [
          "Baungon", "Cabanglasan", "Damulog", "Dangcagan", "Don Carlos", "Impasugong",
          "Kadingilan", "Kalilangan", "Kibawe", "Kitaotao", "Lantapan", "Libona",
          "Malaybalay City", "Malitbog", "Manolo Fortich", "Maramag", "Pangantucan",
          "Quezon", "San Fernando", "Sumilao", "Talakag", "Valencia City"
        ],
        "Camiguin": [
          "Catarman", "Guinsiliban", "Mahinog", "Mambajao", "Sagay"
        ],
        "Lanao del Norte": [
          "Bacolod", "Baloi", "Baroy", "Iligan City", "Kapatagan", "Kauswagan", "Kolambugan",
          "Lala", "Linamon", "Magsaysay", "Maigo", "Matungao", "Munai", "Nunungan", 
          "Pantao Ragat", "Pantar", "Poona Piagapo", "Salvador", "Sapad", 
          "Sultan Naga Dimaporo", "Tagoloan", "Tangcal", "Tubod"
        ],
        "Misamis Occidental": [
          "Aloran", "Baliangao", "Bonifacio", "Calamba", "Clarin", "Concepcion",
          "Don Victoriano Chiongbian", "Jimenez", "Lopez Jaena", "Oroquieta City", 
          "Ozamiz City", "Panaon", "Plaridel", "Sapang Dalaga", "Sinacaban", 
          "Tangub City", "Tudela"
        ],
        "Misamis Oriental": [
          "Alubijid", "Balingasag", "Balingoan", "Binuangan", "Cagayan de Oro City", 
          "Claveria", "El Salvador City", "Gingoog City", "Gitagum", "Initao", "Jasaan", 
          "Kinoguitan", "Lagonglong", "Laguindingan", "Libertad", "Lugait", "Magsaysay", 
          "Manticao", "Medina", "Naawan", "Opol", "Salay", "Sugbongcogon", "Tagoloan", 
          "Talisayan", "Villanueva"
        ]
      },
      "Region 11": {
        "Davao de Oro": [
          "Compostela", "Laak", "Mabini", "Maco", "Maragusan", "Mawab", "Monkayo", "Montevista",
          "Nabunturan", "New Bataan", "Pantukan"
        ],
        "Davao del Norte": [
          "Asuncion", "Braulio E. Dujali", "Carmen", "Kapalong", "New Corella", "Panabo City",
          "Samal City", "San Isidro", "Santo Tomas", "Tagum City", "Talaingod"
        ],
        "Davao del Sur": [
          "Bansalan", "Davao City", "Digos City", "Hagonoy", "Kiblawan", "Magsaysay",
          "Malalag", "Matanao", "Padada", "Santa Cruz", "Sulop"
        ],
        "Davao Occidental": [
          "Don Marcelino", "Jose Abad Santos", "Malita", "Santa Maria", "Sarangani"
        ],
        "Davao Oriental": [
          "Baganga", "Banaybanay", "Boston", "Caraga", "Cateel", "Governor Generoso",
          "Lupon", "Manay", "Mati City", "San Isidro", "Tarragona"
        ]
      },
      "Region 12": {
        "Cotabato": [
          "Alamada", "Aleosan", "Antipas", "Arakan", "Banisilan", "Carmen", "Kabacan",
          "Kidapawan City", "Libungan", "Magpet", "Makilala", "Matalam", "Midsayap",
          "Pigcawayan", "Pikit", "President Roxas", "Tulunan"
        ],
        "Sarangani": [
          "Alabel", "Glan", "Kiamba", "Maasim", "Maitum", "Malapatan", "Malungon"
        ],
        "South Cotabato": [
          "Banga", "General Santos City", "Koronadal City", "Lake Sebu", "Norala",
          "Polomolok", "Santo Niño", "Surallah", "Tampakan", "Tantangan", "Tupi"
        ],
        "Sultan Kudarat": [
          "Bagumbayan", "Columbio", "Esperanza", "Isulan", "Kalamansig", "Lambayong",
          "Lebak", "Lutayan", "Palimbang", "President Quirino", "Senator Ninoy Aquino",
          "Tacurong City"
        ]
      },
      "Region 13": {
        "Agusan del Norte": [
          "Buenavista", "Butuan City", "Cabadbaran City", "Carmen", "Jabonga", "Kitcharao",
          "Las Nieves", "Magallanes", "Nasipit", "Remedios T. Romualdez", "Santiago", "Tubay"
        ],
        "Agusan del Sur": [
          "Bayugan City", "Bunawan", "Esperanza", "La Paz", "Loreto", "Prosperidad", "Rosario",
          "San Francisco", "San Luis", "Santa Josefa", "Sibagat", "Talacogon", "Trento", "Veruela"
        ],
        "Dinagat Islands": [
          "Basilisa", "Cagdianao", "Dinagat", "Libjo", "Loreto", "San Jose", "Tubajon"
        ],
        "Surigao del Norte": [
          "Alegria", "Bacuag", "Burgos", "Claver", "Dapa", "Del Carmen", "General Luna",
          "Gigaquit", "Mainit", "Malimono", "Pilar", "Placer", "San Benito", "San Francisco (Anao-aon)",
          "San Isidro", "Santa Monica (Sapao)", "Sison", "Socorro", "Surigao City", "Tagana-an", "Tubod"
        ],
        "Surigao del Sur": [
          "Barobo", "Bayabas", "Bislig City", "Cagwait", "Cantilan", "Carmen", "Carrascal",
          "Cortes", "Hinatuan", "Lanuza", "Lianga", "Lingig", "Madrid", "Marihatag",
          "San Agustin", "San Miguel", "Tagbina", "Tago", "Tandag City"
        ]
      },
      "BARMM": {
        "Basilan": [
          "Akbar", "Al-Barka", "Hadji Mohammad Ajul", "Isabela City", "Lamitan City",
          "Lantawan", "Maluso", "Sumisip", "Tabuan-Lasa", "Tipo-Tipo", "Tuburan", "Ungkaya Pukan"
        ],
        "Lanao del Sur": [
          "Bacolod-Kalawi", "Balabagan", "Balindong", "Bayang", "Binidayan", "Buadiposo-Buntong",
          "Bubong", "Butig", "Calanogas", "Ditsaan-Ramain", "Ganassi", "Kapai", "Kapatagan",
          "Lumba-Bayabao", "Lumbaca-Unayan", "Lumbatan", "Lumbayanague", "Madalum", "Madamba",
          "Maguing", "Malabang", "Marantao", "Marawi City", "Marogong", "Masiu", "Mulondo",
          "Pagayawan", "Piagapo", "Poona Bayabao", "Pualas", "Saguiaran", "Sultan Dumalondong",
          "Picong", "Tagoloan II", "Tamparan", "Taraka", "Tubaran", "Tugaya", "Wao"
        ],
        "Maguindanao del Norte": [
          "Barira", "Buldon", "Datu Blah T. Sinsuat", "Datu Odin Sinsuat", "Kabuntalan",
          "Matanog", "Northern Kabuntalan", "Parang", "Sultan Kudarat", "Sultan Mastura", "Upi"
        ],
        "Maguindanao del Sur": [
          "Ampatuan", "Buluan", "Datu Abdullah Sangki", "Datu Anggal Midtimbang",
          "Datu Hoffer Ampatuan", "Datu Montawal", "Datu Paglas", "Datu Piang",
          "Datu Salibo", "Datu Saudi-Ampatuan", "Datu Unsay", "Gen. S.K. Pendatun",
          "Guindulungan", "Mamasapano", "Mangudadatu", "Pagalungan", "Paglat",
          "Pandag", "Rajah Buayan", "Shariff Aguak", "Shariff Saydona Mustapha",
          "South Upi", "Sultan sa Barongis", "Talayan", "Talitay"
        ],
        "Sulu": [
          "Hadji Panglima Tahil (Marunggas)", "Indanan", "Jolo", "Kalingalan Caluang",
          "Lugus", "Luuk", "Maimbung", "Old Panamao", "Omar", "Pandami", "Panglima Estino (New Panamao)",
          "Pangutaran", "Parang", "Pata", "Patikul", "Siasi", "Talipao", "Tapul"
        ],
        "Tawi-Tawi": [
          "Bongao", "Languyan", "Mapun (Cagayan de Tawi-Tawi)", "Panglima Sugala (Balimbing)",
          "Sapa-Sapa", "Sibutu", "Simunul", "Sitangkai", "South Ubian", "Tandubas", "Turtle Islands"
        ]
      }
    }
  }
  
  

// filter dropdown options based sa search input
function filterOptions(inputValue, options) {
    return options.filter(option => 
        option.toLowerCase().includes(inputValue.toLowerCase())
    );
}

// dropdown (for island and regions only, mas madali kasi makita, no need to search)
function setupSimpleDropdown(buttonId, dropdownId, options, onSelect) {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);

    const newButton = button.cloneNode(true);
    const newDropdown = dropdown.cloneNode(false);
    button.parentNode.replaceChild(newButton, button);
    dropdown.parentNode.replaceChild(newDropdown, dropdown);

    newDropdown.innerHTML = '<div class="py-1"></div>';
    const dropdownContent = newDropdown.querySelector('div');

    options.forEach(option => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100';
        a.textContent = option;
        dropdownContent.appendChild(a);
    });

    // dropdown
    newButton.addEventListener('click', (e) => {
        e.stopPropagation();
        newDropdown.classList.toggle('hidden');
    });

    //selection
    newDropdown.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            e.stopPropagation();
            newButton.textContent = e.target.textContent;
            newDropdown.classList.add('hidden');
            if (onSelect) {
                onSelect(e.target.textContent);
            }
        }
    });
    document.addEventListener('click', (e) => {
        if (!newButton.contains(e.target) && !newDropdown.contains(e.target)) {
            newDropdown.classList.add('hidden');
        }
    });
}

//searchable dropdown (para sa province and city na kasi mas marami)
function setupSearchableDropdown(containerId, inputId, dropdownId, options, onSelect) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);

    const newInput = input.cloneNode(true);
    const newDropdown = dropdown.cloneNode(false);
    input.parentNode.replaceChild(newInput, input);
    dropdown.parentNode.replaceChild(newDropdown, dropdown);

    newInput.addEventListener('focus', () => {
        newDropdown.classList.remove('hidden');
        populateDropdown(newDropdown, options);
    });

    newInput.addEventListener('input', () => {
        const filteredOptions = filterOptions(newInput.value, options);
        populateDropdown(newDropdown, filteredOptions);
    });

    newDropdown.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            newInput.value = e.target.textContent;
            newDropdown.classList.add('hidden');
            if (onSelect) {
                onSelect(e.target.textContent);
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            newDropdown.classList.add('hidden');
        }
    });
}

function populateDropdown(dropdown, options) {
    dropdown.innerHTML = '';
    options.forEach(option => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100';
        a.textContent = option;
        dropdown.appendChild(a);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const islandGroups = Object.keys(locationData);
    setupSimpleDropdown(
        'island-group-button',
        'island-group-dropdown',
        islandGroups,
        (selectedIslandGroup) => {
            console.log('Selected Island Group:', selectedIslandGroup); 

            document.getElementById('region-button').textContent = 'Select Region';
            document.getElementById('province-input').value = '';
            document.getElementById('city-input').value = '';
            
            //region container na
            document.getElementById('region-container').classList.remove('hidden');
            document.getElementById('province-container').classList.add('hidden');
            document.getElementById('city-container').classList.add('hidden');
            document.getElementById('validation-container').classList.add('hidden');

            //region options
            const regions = Object.keys(locationData[selectedIslandGroup]);
            console.log('Available Regions:', regions); 

            setupSimpleDropdown(
                'region-button',
                'region-dropdown',
                regions,
                (selectedRegion) => {
                    console.log('Selected Region:', selectedRegion); 

                    // reset + show province container
                    document.getElementById('province-input').value = '';
                    document.getElementById('city-input').value = '';
                    document.getElementById('province-container').classList.remove('hidden');
                    document.getElementById('city-container').classList.add('hidden');
                    document.getElementById('validation-container').classList.add('hidden');

                    // province options - sort them alphabetically
                    const provinces = Object.keys(locationData[selectedIslandGroup][selectedRegion]).sort();
                    console.log('Available Provinces:', provinces); 

                    setupSearchableDropdown(
                        'province-container',
                        'province-input',
                        'province-dropdown',
                        provinces,
                        (selectedProvince) => {
                            console.log('Selected Province:', selectedProvince); 

                            // Reset + show city container
                            document.getElementById('city-input').value = '';
                            document.getElementById('city-container').classList.remove('hidden');
                            document.getElementById('validation-container').classList.add('hidden');

                            // Sort cities alphabetically
                            const cities = locationData[selectedIslandGroup][selectedRegion][selectedProvince].sort();
                            console.log('Available Cities:', cities); 

                            setupSearchableDropdown(
                                'city-container',
                                'city-input',
                                'city-dropdown',
                                cities,
                                () => {
                                    document.getElementById('validation-container').classList.remove('hidden');
                                }
                            );
                        }
                    );
                }
            );
        }
    );
});

document.getElementById('validate-button').addEventListener('click', () => {
    const pwdId = document.getElementById('pwd-id').value;
    // put the validate logic here, pwede rin yung para sa paglagay ng pic
    alert(`Validating ID: ${pwdId}`);
});