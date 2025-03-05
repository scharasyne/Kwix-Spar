const locationData = {
    Luzon: {
        'NCR': {
            'Metro Manila': ['Manila', 'Quezon', 'Makati', 'Pasig', 'Mandaluyong', 
                'San Juan', 'Marikina', 'Caloocan', 'Malabon', 'Navotas', 'Valenzuela', 
                 'Pateros', 'Taguig', 'Las Piñas', 'Muntinlupa', 'Parañaque', 'Pasay'
            ]
        },
        'CAR': {
            'Abra': [
                'Bangued', 'Boliney', 'Bucay', 'Bucloc', 'Daguioman',
                'Danglas', 'Dolores', 'La Paz', 'Lacub', 'Lagangilang',
                'Lagayan', 'Langiden', 'Licuan-Baay', 'Luba', 'Malibcong',
                'Manabo', 'Peñarrubia', 'Pidigan', 'Pilar', 'Sallapadan',
                'San Isidro', 'San Juan', 'San Quintin', 'Tayum', 'Tineg',
                'Tubo', 'Villaviciosa'
            ],
            'Apayao': [
                'Calanasan', 'Conner', 'Flora', 'Kabugao', 'Luna', 
                'Pudtol', 'Santa Marcela'
            ],
            'Benguet': [
                'Atok', 'Bakun', 'Bokod', 'Buguias', 'Itogon',
                'Kabayan', 'Kapangan', 'Kibungan', 'La Trinidad', 'Mankayan',
                'Sablan', 'Tuba', 'Tublay', 'Baguio'
            ],
            'Ifugao': [
                'Aguinaldo', 'Alfonso Lista', 'Asipulo', 'Banaue', 'Hingyon',
                'Hungduan', 'Kiangan', 'Lagawe', 'Lamut', 'Mayoyao', 'Tinoc'
            ],
            'Kalinga': [
                'Balbalan', 'Lubuagan', 'Pasil', 'Pinukpuk', 'Rizal',
                'Tabuk', 'Tanudan', 'Tinglayan'
            ],
            'Mountain Province': [
                'Barlig', 'Bauko', 'Besao', 'Bontoc', 'Natonin',
                'Paracelis', 'Sabangan', 'Sadanga', 'Sagada', 'Tadian'
            ]
        },
        'Region 1': {
            'Ilocos Norte': [
                'Adams', 'Bacarra', 'Badoc', 'Bangui', 'Banna', 'Batac',
                'Burgos', 'Carasi', 'Currimao', 'Dingras', 'Dumalneg', 'Laoag',
                'Marcos', 'Nueva Era', 'Pagudpud', 'Paoay', 'Pasuquin', 'Piddig',
                'Pinili', 'San Nicolas', 'Sarrat', 'Solsona', 'Vintar'
            ],
            'Ilocos Sur': [
                'Alilem', 'Banayoyo', 'Bantay', 'Burgos', 'Cabugao', 'Candon',
                'Caoayan', 'Cervantes', 'Galimuyod', 'Gregorio del Pilar', 'Lidlidda',
                'Magsingal', 'Nagbukel', 'Narvacan', 'Quirino', 'Salcedo', 'San Emilio',
                'San Esteban', 'San Ildefonso', 'San Juan', 'San Vicente', 'Santa',
                'Santa Catalina', 'Santa Cruz', 'Santa Lucia', 'Santa Maria', 'Santiago',
                'Santo Domingo', 'Sigay', 'Sinait', 'Sugpon', 'Suyo', 'Tagudin', 'Vigan'
            ],
            'La Union': [
                'Agoo', 'Aringay', 'Bacnotan', 'Bagulin', 'Balaoan', 'Bangar',
                'Bauang', 'Burgos', 'Caba', 'Luna', 'Naguilian', 'Pugo', 'Rosario',
                'San Fernando', 'San Gabriel', 'San Juan', 'Santo Tomas', 'Santol',
                'Sudipen', 'Tubao'
            ],
            'Pangasinan': [
                'Agno', 'Aguilar', 'Alaminos', 'Alcala', 'Anda', 'Asingan', 'Balungao',
                'Bani', 'Basista', 'Bautista', 'Bayambang', 'Binalonan', 'Binmaley',
                'Bolinao', 'Bugallon', 'Burgos', 'Calasiao', 'Dagupan', 'Dasol', 'Infanta',
                'Labrador', 'Laoac', 'Lingayen', 'Mabini', 'Malasiqui', 'Manaoag', 'Mangaldan',
                'Mangatarem', 'Mapandan', 'Natividad', 'Pozorrubio', 'Rosales', 'San Carlos',
                'San Fabian', 'San Jacinto', 'San Manuel', 'San Nicolas', 'San Quintin',
                'Santa Barbara', 'Santa Maria', 'Santo Tomas', 'Sison', 'Sual', 'Tayug',
                'Umingan', 'Urbiztondo', 'Urdaneta', 'Villasis'
            ]
        },
        'Region 2': {
            'Batanes': [
                'Basco', 'Itbayat', 'Ivana', 'Mahatao', 'Sabtang', 'Uyugan'
            ],
            'Cagayan': [
                'Abulug', 'Alcala', 'Allacapan', 'Amulung', 'Aparri', 'Baggao', 'Ballesteros',
                'Buguey', 'Calayan', 'Camalaniugan', 'Claveria', 'Enrile', 'Gattaran', 'Gonzaga',
                'Iguig', 'Lal-lo', 'Lasam', 'Pamplona', 'Peñablanca', 'Piat', 'Rizal', 'Sanchez-Mira',
                'Santa Ana', 'Santa Praxedes', 'Santa Teresita', 'Santo Niño', 'Solana', 'Tuao',
                'Tuguegarao'
            ],
            'Isabela': [
                'Alicia', 'Angadanan', 'Aurora', 'Benito Soliven', 'Burgos', 'Cabagan', 'Cabatuan',
                'Cauayan', 'Cordon', 'Delfin Albano', 'Dinapigue', 'Divilacan', 'Echague', 'Gamu',
                'Ilagan', 'Jones', 'Luna', 'Maconacon', 'Mallig', 'Naguilian', 'Palanan', 'Quezon',
                'Quirino', 'Ramon', 'Reina Mercedes', 'Roxas', 'San Agustin', 'San Guillermo', 
                'San Isidro', 'San Manuel', 'San Mariano', 'San Mateo', 'San Pablo', 'Santa Maria',
                'Santiago', 'Santo Tomas', 'Tumauini'
            ],
            'Nueva Vizcaya': [
                'Alfonso Castañeda', 'Ambaguio', 'Aritao', 'Bagabag', 'Bambang', 'Bayombong', 'Diadi',
                'Dupax del Norte', 'Dupax del Sur', 'Kasibu', 'Kayapa', 'Quezon', 'Santa Fe', 'Solano',
                'Villaverde'
            ],
            'Quirino': [
                'Aglipay', 'Cabarroguis', 'Diffun', 'Maddela', 'Nagtipunan', 'Saguday'
            ]
        },
        'Region 3': {
            'Aurora': [
                'Baler', 'Casiguran', 'Dilasag', 'Dinalungan', 'Dingalan', 'Maria Aurora', 'San Luis'
            ],
            'Bataan': [
                'Abucay', 'Bagac', 'Balanga', 'Dinalupihan', 'Hermosa', 'Limay', 'Mariveles',
                'Morong', 'Orani', 'Orion', 'Pilar', 'Samal'
            ],
            'Bulacan': [
                'Angat', 'Balagtas', 'Baliuag', 'Bocaue', 'Bulakan', 'Bustos', 'Calumpit',
                'Doña Remedios Trinidad', 'Guiguinto', 'Hagonoy', 'Malolos', 'Marilao', 'Meycauayan',
                'Norzagaray', 'Obando', 'Pandi', 'Paombong', 'Plaridel', 'Pulilan', 'San Ildefonso',
                'San Jose del Monte', 'San Miguel', 'San Rafael', 'Santa Maria'
            ],
            'Nueva Ecija': [
                'Aliaga', 'Bongabon', 'Cabanatuan', 'Cabiao', 'Carranglan', 'Cuyapo', 'Gabaldon',
                'Gapan', 'General Mamerto Natividad', 'General Tinio', 'Guimba', 'Jaen', 'Laur',
                'Licab', 'Llanera', 'Lupao', 'Muñoz', 'Nampicuan', 'Palayan', 'Pantabangan',
                'Peñaranda', 'Quezon', 'Rizal', 'San Antonio', 'San Isidro', 'San Jose', 'San Leonardo',
                'Santa Rosa', 'Santo Domingo', 'Talavera', 'Talugtug', 'Zaragoza'
            ],
            'Pampanga': [
                'Angeles', 'Apalit', 'Arayat', 'Bacolor', 'Candaba', 'Floridablanca', 'Guagua',
                'Lubao', 'Mabalacat', 'Macabebe', 'Magalang', 'Masantol', 'Mexico', 'Minalin',
                'Porac', 'San Fernando', 'San Luis', 'San Simon', 'Santa Ana', 'Santa Rita',
                'Santo Tomas', 'Sasmuan'
            ],
            'Tarlac': [
                'Anao', 'Bamban', 'Camiling', 'Capas', 'Concepcion', 'Gerona', 'La Paz', 'Mayantoc',
                'Moncada', 'Paniqui', 'Pura', 'Ramos', 'San Clemente', 'San Jose', 'San Manuel',
                'Santa Ignacia', 'Tarlac City', 'Victoria'
            ],
            'Zambales': [
                'Botolan', 'Cabangan', 'Candelaria', 'Castillejos', 'Iba', 'Masinloc', 'Olongapo',
                'Palauig', 'San Antonio', 'San Felipe', 'San Marcelino', 'San Narciso', 'Santa Cruz', 'Subic'
            ]
        },
        'Region 5': {  // Add Region 5 (Bicol Region)
            'Albay': [
                'Bacacay', 'Camalig', 'Daraga', 'Guinobatan', 'Jovellar', 'Legazpi City',
                'Libon', 'Ligao City', 'Malilipot', 'Malinao', 'Manito', 'Oas',
                'Pio Duran', 'Polangui', 'Rapu-Rapu', 'Santo Domingo', 'Tabaco City', 'Tiwi'
            ],
            'Camarines Norte': [
                'Basud', 'Capalonga', 'Daet', 'Jose Panganiban', 'Labo', 'Mercedes',
                'Paracale', 'San Lorenzo Ruiz', 'San Vicente', 'Santa Elena', 'Talisay', 'Vinzons'
            ],
            'Camarines Sur': [
                'Baao', 'Balatan', 'Bato', 'Bombon', 'Buhi', 'Bula', 'Cabusao', 
                'Calabanga', 'Camaligan', 'Canaman', 'Caramoan', 'Del Gallego', 'Gainza',
                'Garchitorena', 'Goa', 'Iriga City', 'Lagonoy', 'Libmanan', 'Lupi',
                'Magarao', 'Milaor', 'Minalabac', 'Nabua', 'Naga City', 'Ocampo',
                'Pamplona', 'Pasacao', 'Pili', 'Presentacion', 'Ragay', 'Sagñay',
                'San Fernando', 'San Jose', 'Sipocot', 'Siruma', 'Tigaon', 'Tinambac'
            ],
            'Catanduanes': [
                'Bagamanoc', 'Baras', 'Bato', 'Caramoran', 'Gigmoto', 'Pandan',
                'Panganiban', 'San Andres', 'San Miguel', 'Viga', 'Virac'
            ],
            'Masbate': [
                'Aroroy', 'Baleno', 'Balud', 'Batuan', 'Cataingan', 'Cawayan',
                'Claveria', 'Dimasalang', 'Esperanza', 'Mandaon', 'Masbate City',
                'Milagros', 'Mobo', 'Monreal', 'Palanas', 'Pio V. Corpuz', 'Placer',
                'San Fernando', 'San Jacinto', 'San Pascual', 'Uson'
            ],
            'Sorsogon': [  // Add Sorsogon province
                'Barcelona', 'Bulan', 'Bulusan', 'Casiguran', 'Castilla', 'Donsol',
                'Gubat', 'Irosin', 'Juban', 'Magallanes', 'Matnog', 'Pilar',
                'Prieto Diaz', 'Santa Magdalena', 'Sorsogon City'
            ]
        },
    },
    Visayas: {
        'Region 6': {
            'Aklan': [
                'Altavas', 'Balete', 'Banga', 'Batan', 'Buruanga', 'Ibajay', 'Kalibo', 'Lezo',
                'Libacao', 'Madalag', 'Makato', 'Malay', 'Malinao', 'Nabas', 'New Washington',
                'Numancia', 'Tangalan'
            ],
            'Antique': [
                'Anini-y', 'Barbaza', 'Belison', 'Bugasong', 'Caluya', 'Culasi', 'Hamtic',
                'Laua-an', 'Libertad', 'Pandan', 'Patnongon', 'San Jose de Buenavista',
                'San Remigio', 'Sebaste', 'Sibalom', 'Tibiao', 'Tobias Fornier', 'Valderrama'
            ],
            'Capiz': [
                'Cuartero', 'Dao', 'Dumalag', 'Dumarao', 'Ivisan', 'Jamindan', 'Maayon',
                'Mambusao', 'Panay', 'Panitan', 'Pilar', 'Pontevedra', 'President Roxas',
                'Roxas', 'Sapian', 'Sigma', 'Tapaz'
            ],
            'Guimaras': [
                'Buenavista', 'Jordan', 'Nueva Valencia', 'San Lorenzo', 'Sibunag'
            ],
            'Iloilo': [
                'Ajuy', 'Alimodian', 'Anilao', 'Badiangan', 'Balasan', 'Banate', 'Barotac Nuevo',
                'Barotac Viejo', 'Batad', 'Bingawan', 'Cabatuan', 'Calinog', 'Carles', 'Concepcion',
                'Dingle', 'Duenas', 'Dumangas', 'Estancia', 'Guimbal', 'Igbaras', 'Iloilo City',
                'Janiuay', 'Lambunao', 'Leganes', 'Lemery', 'Leon', 'Maasin', 'Miagao', 'Mina', 
                'New Lucena', 'Oton', 'Passi', 'Pavia', 'Pototan', 'San Dionisio', 'San Enrique',
                'San Joaquin', 'San Miguel', 'San Rafael', 'Santa Barbara', 'Sara', 'Tigbauan',
                'Tubungan', 'Zarraga'
            ],
            'Negros Occidental': [
                'Bacolod', 'Bago', 'Binalbagan', 'Cadiz', 'Calatrava', 'Candoni', 'Cauayan',
                'Enrique B. Magalona', 'Escalante', 'Himamaylan', 'Hinigaran', 'Hinoba-an',
                'Ilog', 'Isabela', 'Kabankalan', 'La Carlota', 'La Castellana', 'Manapla',
                'Moises Padilla', 'Murcia', 'Pontevedra', 'Pulupandan', 'Sagay', 'Salvador Benedicto',
                'San Carlos', 'San Enrique', 'Silay', 'Sipalay', 'Talisay', 'Toboso', 'Valladolid',
                'Victorias'
            ]
        },
        'Region 7': {
            'Bohol': [
                'Alburquerque', 'Alicia', 'Anda', 'Antequera', 'Baclayon', 'Balilihan', 'Batuan',
                'Bien Unido', 'Bilar', 'Buenavista', 'Calape', 'Candijay', 'Carmen', 'Catigbian',
                'Clarin', 'Corella', 'Cortes', 'Dagohoy', 'Danao', 'Dauis', 'Dimiao', 'Duero',
                'Garcia Hernandez', 'Getafe', 'Guindulman', 'Inabanga', 'Jagna', 'Lila', 'Loay',
                'Loboc', 'Loon', 'Mabini', 'Maribojoc', 'Panglao', 'Pilar', 'President Carlos P. Garcia',
                'Sagbayan', 'San Isidro', 'San Miguel', 'Sevilla', 'Sierra Bullones', 'Sikatuna',
                'Tagbilaran', 'Talibon', 'Trinidad', 'Tubigon', 'Ubay', 'Valencia'
            ],
            'Cebu': [
                'Alcantara', 'Alcoy', 'Alegria', 'Aloguinsan', 'Argao', 'Asturias', 'Badian',
                'Balamban', 'Bantayan', 'Barili', 'Bogo', 'Boljoon', 'Borbon', 'Carcar', 'Carmen',
                'Catmon', 'Cebu City', 'Compostela', 'Consolacion', 'Cordova', 'Daanbantayan',
                'Dalaguete', 'Danao', 'Dumanjug', 'Ginatilan', 'Lapu-Lapu', 'Liloan', 'Madridejos',
                'Malabuyoc', 'Mandaue', 'Medellin', 'Minglanilla', 'Moalboal', 'Naga', 'Oslob',
                'Pilar', 'Pinamungajan', 'Poro', 'Ronda', 'Samboan', 'San Fernando', 'San Francisco',
                'San Remigio', 'Santa Fe', 'Santander', 'Sibonga', 'Sogod', 'Tabogon', 'Tabuelan',
                'Talisay', 'Toledo', 'Tuburan', 'Tudela'
            ],
            'Negros Oriental': [
                'Amlan', 'Ayungon', 'Bacong', 'Bais City', 'Basay', 'Bayawan City', 'Bindoy',
                'Canlaon City', 'Dauin', 'Dumaguete City', 'Guihulngan City', 'Jimalalud',
                'La Libertad', 'Mabinay', 'Manjuyod', 'Pamplona', 'San Jose', 'Santa Catalina',
                'Siaton', 'Sibulan', 'Tanjay City', 'Tayasan', 'Valencia', 'Vallehermoso', 'Zamboanguita'
            ],
            'Siquijor': [
                'Enrique Villanueva', 'Larena', 'Lazi', 'Maria', 'San Juan', 'Siquijor'
            ]
        }, 
        'Region 8': {
            'Biliran': [
                'Almeria', 'Biliran', 'Cabucgayan', 'Caibiran', 'Culaba', 'Kawayan', 'Maripipi', 'Naval'
            ],
            'Eastern Samar': [
                'Arteche', 'Balangiga', 'Balangkayan', 'Borongan', 'Can-avid', 'Dolores',
                'General MacArthur', 'Giporlos', 'Guiuan', 'Hernani', 'Jipapad', 'Lawaan',
                'Llorente', 'Maslog', 'Maydolong', 'Mercedes', 'Oras', 'Quinapondan', 'Salcedo',
                'San Julian', 'San Policarpo', 'Sulat', 'Taft'
            ],
            'Leyte': [
                'Abuyog', 'Alangalang', 'Albuera', 'Babatngon', 'Barugo', 'Bato', 'Baybay', 
                'Burauen', 'Calubian', 'Capoocan', 'Carigara', 'Dagami', 'Dulag', 'Hilongos', 
                'Hindang', 'Inopacan', 'Isabel', 'Jaro', 'Javier', 'Julita', 'Kananga', 'La Paz', 
                'Leyte', 'MacArthur', 'Mahaplag', 'Matag-ob', 'Matalom', 'Mayorga', 'Merida', 
                'Ormoc City', 'Palo', 'Palompon', 'Pastrana', 'San Isidro', 'San Miguel', 
                'Santa Fe', 'Tabango', 'Tabontabon', 'Tacloban City', 'Tanauan', 'Tolosa', 'Tunga', 'Villaba'
            ],
            'Northern Samar': [
                'Allen', 'Biri', 'Bobon', 'Capul', 'Catarman', 'Catubig', 'Gamay', 'Laoang', 
                'Lapinig', 'Las Navas', 'Lavezares', 'Lope de Vega', 'Mapanas', 'Mondragon', 
                'Palapag', 'Pambujan', 'Rosario', 'San Antonio', 'San Isidro', 'San Jose', 
                'San Roque', 'San Vicente', 'Silvino Lobos', 'Victoria'
            ],
            'Samar': [
                'Almagro', 'Basey', 'Calbayog City', 'Calbiga', 'Catbalogan City', 'Daram', 
                'Gandara', 'Hinabangan', 'Jiabong', 'Marabut', 'Matuguinao', 'Motiong', 
                'Pagsanghan', 'Paranas', 'Pinabacdao', 'San Jorge', 'San Jose de Buan', 
                'San Sebastian', 'Santa Margarita', 'Santa Rita', 'Santo Niño', 'Tagapul-an', 
                'Talalora', 'Tarangnan', 'Villareal', 'Zumarraga'
            ],
            'Southern Leyte': [
                'Anahawan', 'Bontoc', 'Hinunangan', 'Hinundayan', 'Libagon', 'Liloan', 
                'Limasawa', 'Maasin City', 'Macrohon', 'Malitbog', 'Padre Burgos', 'Pintuyan', 
                'Saint Bernard', 'San Francisco', 'San Juan', 'San Ricardo', 'Silago', 'Sogod', 
                'Tomas Oppus'
            ]
        }
    },
    Mindanao: {
        'Region 9': {
            'Zamboanga del Norte': [
                'Bacungan', 'Baliguian', 'Dapitan City', 'Dipolog City', 'Godod', 'Gutalac',
                'Jose Dalman', 'Kalawit', 'Katipunan', 'La Libertad', 'Labason', 'Liloy',
                'Manukan', 'Mutia', 'Piñan', 'Polanco', 'President Manuel A. Roxas', 'Rizal',
                'Salug', 'Sergio Osmeña Sr.', 'Siayan', 'Sibuco', 'Sibutad', 'Sindangan',
                'Siocon', 'Sirawai', 'Tampilisan'
            ],
            'Zamboanga del Sur': [
                'Aurora', 'Bayog', 'Dimataling', 'Dinas', 'Dumalinao', 'Dumingag', 'Guipos',
                'Josefina', 'Kumalarang', 'Labangan', 'Lakewood', 'Lapuyan', 'Mahayag',
                'Margosatubig', 'Midsalip', 'Molave', 'Pagadian City', 'Pitogo',
                'Ramon Magsaysay', 'San Miguel', 'San Pablo', 'Sominot', 'Tabina',
                'Tambulig', 'Tigbao', 'Tukuran', 'Vincenzo A. Sagun'
            ],
            'Zamboanga Sibugay': [
                'Alicia', 'Buug', 'Diplahan', 'Imelda', 'Ipil', 'Kabasalan', 'Mabuhay',
                'Malangas', 'Naga', 'Olutanga', 'Payao', 'Roseller Lim', 'Siay', 'Talusan',
                'Titay', 'Tungawan'
            ],
            'City of Isabela': [
                'Isabela City'
            ]
        },
        'Region 10': {
            'Bukidnon': [
                'Baungon', 'Cabanglasan', 'Damulog', 'Dangcagan', 'Don Carlos', 'Impasugong',
                'Kadingilan', 'Kalilangan', 'Kibawe', 'Kitaotao', 'Lantapan', 'Libona',
                'Malaybalay City', 'Malitbog', 'Manolo Fortich', 'Maramag', 'Pangantucan',
                'Quezon', 'San Fernando', 'Sumilao', 'Talakag', 'Valencia City'
            ],
            'Camiguin': [
                'Catarman', 'Guinsiliban', 'Mahinog', 'Mambajao', 'Sagay'
            ],
            'Lanao del Norte': [
                'Bacolod', 'Baloi', 'Baroy', 'Iligan City', 'Kapatagan', 'Kauswagan', 'Kolambugan',
                'Lala', 'Linamon', 'Magsaysay', 'Maigo', 'Matungao', 'Munai', 'Nunungan', 
                'Pantao Ragat', 'Pantar', 'Poona Piagapo', 'Salvador', 'Sapad', 
                'Sultan Naga Dimaporo', 'Tagoloan', 'Tangcal', 'Tubod'
            ],
            'Misamis Occidental': [
                'Aloran', 'Baliangao', 'Bonifacio', 'Calamba', 'Clarin', 'Concepcion',
                'Don Victoriano Chiongbian', 'Jimenez', 'Lopez Jaena', 'Oroquieta City', 
                'Ozamiz City', 'Panaon', 'Plaridel', 'Sapang Dalaga', 'Sinacaban', 
                'Tangub City', 'Tudela'
            ],
            'Misamis Oriental': [
                'Alubijid', 'Balingasag', 'Balingoan', 'Binuangan', 'Cagayan de Oro City', 
                'Claveria', 'El Salvador City', 'Gingoog City', 'Gitagum', 'Initao', 'Jasaan', 
                'Kinoguitan', 'Lagonglong', 'Laguindingan', 'Libertad', 'Lugait', 'Magsaysay', 
                'Manticao', 'Medina', 'Naawan', 'Opol', 'Salay', 'Sugbongcogon', 'Tagoloan', 
                'Talisayan', 'Villanueva'
            ]
        },
        'Region 11': {
            'Davao de Oro': [
                'Compostela', 'Laak', 'Mabini', 'Maco', 'Maragusan', 'Mawab', 'Monkayo', 'Montevista',
                'Nabunturan', 'New Bataan', 'Pantukan'
            ],
            'Davao del Norte': [
                'Asuncion', 'Braulio E. Dujali', 'Carmen', 'Kapalong', 'New Corella', 'Panabo City',
                'Samal City', 'San Isidro', 'Santo Tomas', 'Tagum City', 'Talaingod'
            ],
            'Davao del Sur': [
                'Bansalan', 'Davao City', 'Digos City', 'Hagonoy', 'Kiblawan', 'Magsaysay',
                'Malalag', 'Matanao', 'Padada', 'Santa Cruz', 'Sulop'
            ],
            'Davao Occidental': [
                'Don Marcelino', 'Jose Abad Santos', 'Malita', 'Santa Maria', 'Sarangani'
            ],
            'Davao Oriental': [
                'Baganga', 'Banaybanay', 'Boston', 'Caraga', 'Cateel', 'Governor Generoso',
                'Lupon', 'Manay', 'Mati City', 'San Isidro', 'Tarragona'
            ]
        },
        'Region 12': {
      'Cotabato': [
        'Alamada', 'Aleosan', 'Antipas', 'Arakan', 'Banisilan', 'Carmen', 'Kabacan',
        'Kidapawan City', 'Libungan', 'Magpet', 'Makilala', 'Matalam', 'Midsayap',
        'Pigcawayan', 'Pikit', 'President Roxas', 'Tulunan'
      ],
      'Sarangani': [
        'Alabel', 'Glan', 'Kiamba', 'Maasim', 'Maitum', 'Malapatan', 'Malungon'
      ],
      'South Cotabato': [
        'Banga', 'General Santos City', 'Koronadal City', 'Lake Sebu', 'Norala',
        'Polomolok', 'Santo Niño', 'Surallah', 'Tampakan', 'Tantangan', 'Tupi'
      ],
      'Sultan Kudarat': [
        'Bagumbayan', 'Columbio', 'Esperanza', 'Isulan', 'Kalamansig', 'Lambayong',
        'Lebak', 'Lutayan', 'Palimbang', 'President Quirino', 'Senator Ninoy Aquino',
        'Tacurong City'
      ]
    },
    'Region 13': {
        'Agusan del Norte': [
            'Buenavista', 'Butuan City', 'Cabadbaran City', 'Carmen', 'Jabonga', 'Kitcharao',
            'Las Nieves', 'Magallanes', 'Nasipit', 'Remedios T. Romualdez', 'Santiago', 'Tubay'
        ],
        'Agusan del Sur': [
            'Bayugan City', 'Bunawan', 'Esperanza', 'La Paz', 'Loreto', 'Prosperidad', 'Rosario',
            'San Francisco', 'San Luis', 'Santa Josefa', 'Sibagat', 'Talacogon', 'Trento', 'Veruela'
        ],
        'Dinagat Islands': [
            'Basilisa', 'Cagdianao', 'Dinagat', 'Libjo', 'Loreto', 'San Jose', 'Tubajon'
        ],
        'Surigao del Norte': [
            'Alegria', 'Bacuag', 'Burgos', 'Claver', 'Dapa', 'Del Carmen', 'General Luna',
            'Gigaquit', 'Mainit', 'Malimono', 'Pilar', 'Placer', 'San Benito', 'San Francisco (Anao-aon)',
            'San Isidro', 'Santa Monica (Sapao)', 'Sison', 'Socorro', 'Surigao City', 'Tagana-an', 'Tubod'
        ],
        'Surigao del Sur': [
            'Barobo', 'Bayabas', 'Bislig City', 'Cagwait', 'Cantilan', 'Carmen', 'Carrascal',
            'Cortes', 'Hinatuan', 'Lanuza', 'Lianga', 'Lingig', 'Madrid', 'Marihatag',
            'San Agustin', 'San Miguel', 'Tagbina', 'Tago', 'Tandag City'
        ]
    },
    'BARMM': {
        'Basilan': [
            'Akbar', 'Al-Barka', 'Hadji Mohammad Ajul', 'Isabela City', 'Lamitan City',
            'Lantawan', 'Maluso', 'Sumisip', 'Tabuan-Lasa', 'Tipo-Tipo', 'Tuburan', 'Ungkaya Pukan'
        ],
        'Lanao del Sur': [
            'Bacolod-Kalawi', 'Balabagan', 'Balindong', 'Bayang', 'Binidayan', 'Buadiposo-Buntong',
            'Bubong', 'Butig', 'Calanogas', 'Ditsaan-Ramain', 'Ganassi', 'Kapai', 'Kapatagan',
            'Lumba-Bayabao', 'Lumbaca-Unayan', 'Lumbatan', 'Lumbayanague', 'Madalum', 'Madamba',
            'Maguing', 'Malabang', 'Marantao', 'Marawi City', 'Marogong', 'Masiu', 'Mulondo',
            'Pagayawan', 'Piagapo', 'Poona Bayabao', 'Pualas', 'Saguiaran', 'Sultan Dumalondong',
            'Picong', 'Tagoloan II', 'Tamparan', 'Taraka', 'Tubaran', 'Tugaya', 'Wao'
        ],
        'Maguindanao del Norte': [
            'Barira', 'Buldon', 'Datu Blah T. Sinsuat', 'Datu Odin Sinsuat', 'Kabuntalan',
            'Matanog', 'Northern Kabuntalan', 'Parang', 'Sultan Kudarat', 'Sultan Mastura', 'Upi'
        ],
        'Maguindanao del Sur': [
            'Ampatuan', 'Buluan', 'Datu Abdullah Sangki', 'Datu Anggal Midtimbang',
            'Datu Hoffer Ampatuan', 'Datu Montawal', 'Datu Paglas', 'Datu Piang',
            'Datu Salibo', 'Datu Saudi-Ampatuan', 'Datu Unsay', 'Gen. S.K. Pendatun',
            'Guindulungan', 'Mamasapano', 'Mangudadatu', 'Pagalungan', 'Paglat',
            'Pandag', 'Rajah Buayan', 'Shariff Aguak', 'Shariff Saydona Mustapha',
            'South Upi', 'Sultan sa Barongis', 'Talayan', 'Talitay'
        ],
        'Sulu': [
            'Hadji Panglima Tahil (Marunggas)', 'Indanan', 'Jolo', 'Kalingalan Caluang',
            'Lugus', 'Luuk', 'Maimbung', 'Old Panamao', 'Omar', 'Pandami', 'Panglima Estino (New Panamao)',
            'Pangutaran', 'Parang', 'Pata', 'Patikul', 'Siasi', 'Talipao', 'Tapul'
        ],
        'Tawi-Tawi': [
            'Bongao', 'Languyan', 'Mapun (Cagayan de Tawi-Tawi)', 'Panglima Sugala (Balimbing)',
            'Sapa-Sapa', 'Sibutu', 'Simunul', 'Sitangkai', 'South Ubian', 'Tandubas', 'Turtle Islands'
        ]
        }
    }
};

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

// Address speech recognition for location dropdowns
function addAddressSpeechRecognition() {
    // Create UI elements
    const addressContainer = document.createElement('div');
    addressContainer.className = 'mb-4 mt-4 flex items-center';
    addressContainer.innerHTML = `
        <div class="relative flex-1">
            <input 
                type="text" 
                id="address-input" 
                placeholder="Say or type your location (e.g. 'Makati City')" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <button 
                id="speak-address" 
                type="button" 
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold p-1 rounded-full"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/>
                </svg>
            </button>
        </div>
        <button 
            id="search-address" 
            type="button" 
            class="ml-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
            Search
        </button>
        <button 
            id="clear-fields" 
            type="button" 
            class="ml-2 px-3 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
            Clear
        </button>
    `;

    // Add recording indicator
    const recordingIndicator = document.createElement('div');
    recordingIndicator.id = 'address-recording-indicator';
    recordingIndicator.className = 'hidden mt-1 text-sm flex items-center';
    recordingIndicator.innerHTML = '<span class="animate-pulse text-red-600 mr-1">●</span> Recording...';
    
    // Insert the UI elements before the first dropdown (island group)
    const firstDropdown = document.getElementById('island-group-container');
    firstDropdown.parentNode.insertBefore(addressContainer, firstDropdown);
    firstDropdown.parentNode.insertBefore(recordingIndicator, firstDropdown);

    // Set up speech recognition
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-PH'; // Philippine English
        
        let recognizing = false;
        const addressInput = document.getElementById('address-input');
        const speakButton = document.getElementById('speak-address');
        const searchButton = document.getElementById('search-address');
        const recordingIndicator = document.getElementById('address-recording-indicator');
        
        speakButton.addEventListener('click', () => {
            if (recognizing) {
                recognition.stop();
            } else {
                addressInput.value = '';
                recognition.start();
            }
        });
        
        recognition.onstart = () => {
            recognizing = true;
            recordingIndicator.classList.remove('hidden');
        };
        
        recognition.onend = () => {
            recognizing = false;
            recordingIndicator.classList.add('hidden');
            
            // Process the address after speech recognition ends
            if (addressInput.value.trim()) {
                processAddress(addressInput.value);
            }
        };
        
        recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            
            if (finalTranscript) {
                addressInput.value = finalTranscript;
            } else {
                addressInput.value = interimTranscript;
            }
        };
        
        searchButton.addEventListener('click', () => {
            if (addressInput.value.trim()) {
                processAddress(addressInput.value);
            }
        });
        
        // Process address on Enter key
        addressInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && addressInput.value.trim()) {
                processAddress(addressInput.value);
            }
        });

        const clearButton = document.getElementById('clear-fields');
        clearButton.addEventListener('click', () => {
            // Reset address input
            addressInput.value = '';
            
            // Reset island group dropdown
            const islandGroupButton = document.getElementById('island-group-button');
            islandGroupButton.textContent = 'Select Island Group';
            
            // Reset region dropdown
            const regionButton = document.getElementById('region-button');
            regionButton.textContent = 'Select Region';
            
            // Reset province and city inputs
            const provinceInput = document.getElementById('province-input');
            const cityInput = document.getElementById('city-input');
            if (provinceInput) provinceInput.value = '';
            if (cityInput) cityInput.value = '';
            
            // Reset PWD ID if it exists
            const pwdIdInput = document.getElementById('pwd-id');
            if (pwdIdInput) pwdIdInput.value = '';
            
            // Hide dependent containers
            const regionContainer = document.getElementById('region-container');
            const provinceContainer = document.getElementById('province-container');
            const cityContainer = document.getElementById('city-container');
            const validationContainer = document.getElementById('validation-container');
            
            if (regionContainer) regionContainer.classList.add('hidden');
            if (provinceContainer) provinceContainer.classList.add('hidden');
            if (cityContainer) cityContainer.classList.add('hidden');
            if (validationContainer) validationContainer.classList.add('hidden');
            
            console.log('All form fields have been cleared');
        });
    }
}

// Process address and fill dropdowns, also detect PWD ID
function processAddress(addressText) {
    console.log('Processing address:', addressText);
    
    const result = {
        islandGroup: null,
        region: null,
        province: null,
        city: null
    };
    
    // Clean and normalize the input
    const cleanInput = addressText.toLowerCase().trim();
    
    // Remove common filler words
    const locationText = cleanInput.replace(/\bphilippines\b|\bph\b|\bin\b/gi, '').trim();
    
    // First check if we have a comma-separated format (which is more reliable)
    const segments = locationText.split(',').map(s => s.trim());
    const hasCommaFormat = segments.length > 1;
    
    // Create a mapping of all city/municipality names to their locations
    // This helps us handle name collisions
    const cityMap = {};
    const provinceMap = {};
    
    for (const islandGroup in locationData) {
        for (const region in locationData[islandGroup]) {
            for (const province in locationData[islandGroup][region]) {
                // Track provinces
                if (!provinceMap[province.toLowerCase()]) {
                    provinceMap[province.toLowerCase()] = [];
                }
                provinceMap[province.toLowerCase()].push({
                    islandGroup,
                    region,
                    province
                });
                
                // Track cities
                const cities = locationData[islandGroup][region][province];
                for (const city of cities) {
                    const cityLower = city.toLowerCase();
                    if (!cityMap[cityLower]) {
                        cityMap[cityLower] = [];
                    }
                    cityMap[cityLower].push({
                        islandGroup,
                        region,
                        province,
                        city
                    });
                    
                    // Also add a version without "City" suffix
                    const cityWithoutSuffix = cityLower.replace(/\s+city$/, '');
                    if (cityWithoutSuffix !== cityLower) {
                        if (!cityMap[cityWithoutSuffix]) {
                            cityMap[cityWithoutSuffix] = [];
                        }
                        cityMap[cityWithoutSuffix].push({
                            islandGroup,
                            region,
                            province,
                            city
                        });
                    }
                }
            }
        }
    }
    
    // Array to hold potential matches with scores
    const matches = [];
    
    // PHASE 1: If we have a comma-separated format, trust it more
    if (hasCommaFormat) {
        // Typically the format would be "City, Province" or "Municipality, Province"
        const possibleCity = segments[0];
        const possibleProvince = segments[1];
        
        // Look for exact city match first
        const exactCityMatches = cityMap[possibleCity.toLowerCase()];
        if (exactCityMatches) {
            // We found cities with this exact name
            for (const match of exactCityMatches) {
                // If province is also specified, check if it matches
                if (possibleProvince && match.province.toLowerCase().includes(possibleProvince.toLowerCase())) {
                    // Best case: exact city and province match
                    matches.push({...match, score: 200}); // Higher score for this perfect match
                } else {
                    // Just city match
                    matches.push({...match, score: 150});
                }
            }
        }
        
        // If we didn't find exact matches, try partial matching on the city
        if (matches.length === 0) {
            // Search through all city keys for partial matches
            for (const cityKey in cityMap) {
                if (cityKey.includes(possibleCity.toLowerCase()) || 
                    possibleCity.toLowerCase().includes(cityKey)) {
                    
                    for (const match of cityMap[cityKey]) {
                        // If province is specified, check if it matches
                        if (possibleProvince && match.province.toLowerCase().includes(possibleProvince.toLowerCase())) {
                            matches.push({...match, score: 120}); // Good score for partial match with province
                        } else {
                            matches.push({...match, score: 80}); // Lower score for just partial city match
                        }
                    }
                }
            }
        }
    }
    
    // PHASE 2: If we don't have good matches yet or no comma format, process word by word
    if (matches.length === 0 || !hasCommaFormat) {
        // Split into individual words
        const words = locationText.split(/\s+/).map(word => word.toLowerCase().trim()).filter(w => w);
        
        // Try to find multi-word city names first (like "San Fernando")
        for (let i = 0; i < words.length - 1; i++) {
            for (let j = i + 1; j <= Math.min(i + 3, words.length); j++) {
                const possibleCity = words.slice(i, j).join(' ');
                
                // Check for exact city match
                if (cityMap[possibleCity]) {
                    for (const match of cityMap[possibleCity]) {
                        // Try to find province mention in remaining words
                        const otherWords = [...words.slice(0, i), ...words.slice(j)];
                        const hasProvinceMatch = otherWords.some(word => 
                            match.province.toLowerCase().includes(word) || word.includes(match.province.toLowerCase())
                        );
                        
                        if (hasProvinceMatch) {
                            matches.push({...match, score: 180});
                        } else {
                            matches.push({...match, score: 120});
                        }
                    }
                }
            }
        }
        
        // Then check for single-word cities (if we haven't found good matches yet)
        if (matches.filter(m => m.score > 100).length === 0) {
            for (const word of words) {
                if (word.length < 3 || word === 'city') continue; // Skip very short words or generic terms
                
                // Check for exact city match
                if (cityMap[word]) {
                    for (const match of cityMap[word]) {
                        // Try to find province match in other words
                        const hasProvinceMatch = words.some(w => 
                            w !== word && (
                                match.province.toLowerCase().includes(w) || 
                                w.includes(match.province.toLowerCase())
                            )
                        );
                        
                        if (hasProvinceMatch) {
                            matches.push({...match, score: 150});
                        } else {
                            matches.push({...match, score: 100});
                        }
                    }
                }
                
                // Check for partial city matches
                for (const cityKey in cityMap) {
                    // Skip if the key is too short or just "city"
                    if (cityKey.length < 3 || cityKey === 'city') continue; 
                    
                    // Only match if there's substantial overlap
                    const keyParts = cityKey.split(/\s+/);
                    if (keyParts.some(part => part === word) || 
                        (word.length >= 5 && cityKey.includes(word)) ||
                        (word.length >= 6 && word.includes(cityKey))) {
                        
                        for (const match of cityMap[cityKey]) {
                            // Check for province match in other words
                            const hasProvinceMatch = words.some(w => 
                                w !== word && (
                                    match.province.toLowerCase().includes(w) || 
                                    w.includes(match.province.toLowerCase())
                                )
                            );
                            
                            // Score based on match quality and province context
                            if (hasProvinceMatch) {
                                matches.push({...match, score: 90});
                            } else {
                                matches.push({...match, score: 50});
                            }
                        }
                    }
                }
            }
        }
    }
    
    // PHASE 3: If we still don't have matches, try province matching
    if (matches.length === 0) {
        const words = locationText.split(/\s+/).map(word => word.toLowerCase().trim()).filter(w => w);
        
        for (const provinceName in provinceMap) {
            // Check for province mentions
            const hasProvinceMatch = words.some(word => 
                provinceName.includes(word) || word.includes(provinceName)
            );
            
            if (hasProvinceMatch) {
                const provinceMatches = provinceMap[provinceName];
                for (const provinceMatch of provinceMatches) {
                    // We'll use these province matches if we can't find city matches
                    matches.push({
                        islandGroup: provinceMatch.islandGroup,
                        region: provinceMatch.region,
                        province: provinceMatch.province,
                        score: 40
                    });
                }
            }
        }
    }
    
    // Sort matches by score descending
    matches.sort((a, b) => b.score - a.score);
    console.log('Potential matches:', matches);
    
    // Use the best match
    if (matches.length > 0) {
        const bestMatch = matches[0];
        result.islandGroup = bestMatch.islandGroup;
        result.region = bestMatch.region;
        result.province = bestMatch.province;
        if (bestMatch.city) result.city = bestMatch.city;
    }
    
    console.log('Final detection result:', result);
    
    // Continue with filling the form fields (unchanged)
    if (result.islandGroup) {
        const islandGroupButton = document.getElementById('island-group-button');
        islandGroupButton.textContent = result.islandGroup;
        
        document.getElementById('region-container').classList.remove('hidden');
        
        if (result.region) {
            const regionButton = document.getElementById('region-button');
            regionButton.textContent = result.region;
            
            document.getElementById('province-container').classList.remove('hidden');
            
            const provinces = Object.keys(locationData[result.islandGroup][result.region]).sort();
            setupSearchableDropdown(
                'province-container',
                'province-input',
                'province-dropdown',
                provinces,
                (selectedProvince) => {
                    document.getElementById('city-container').classList.remove('hidden');
                    const cities = locationData[result.islandGroup][result.region][selectedProvince].sort();
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
            
            if (result.province) {
                const provinceInput = document.getElementById('province-input');
                provinceInput.value = result.province;
                
                document.getElementById('city-container').classList.remove('hidden');
                
                const cities = locationData[result.islandGroup][result.region][result.province].sort();
                setupSearchableDropdown(
                    'city-container',
                    'city-input',
                    'city-dropdown',
                    cities,
                    () => {
                        document.getElementById('validation-container').classList.remove('hidden');
                    }
                );
                
                if (result.city) {
                    const cityInput = document.getElementById('city-input');
                    cityInput.value = result.city;
                    
                    document.getElementById('validation-container').classList.remove('hidden');
                }
            }
        }
    }
}

// Initialize speech recognition on page load
document.addEventListener('DOMContentLoaded', () => {
    // Existing code...
    
    // Add speech recognition functionality
    addAddressSpeechRecognition();
    
    // Add speech recognition for PWD ID
    addPwdIdSpeechRecognition();
    
    // Since the validation container is initially hidden, we also need to set up an observer
    // to add the speech recognition when it becomes visible
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.id === 'validation-container' && 
                !mutation.target.classList.contains('hidden') &&
                !document.getElementById('speak-pwdid')) {
                // Only call if the microphone button doesn't already exist
                addPwdIdSpeechRecognition();
            }
        });
    });
    
    const validationContainer = document.getElementById('validation-container');
    if (validationContainer) {
        observer.observe(validationContainer, { 
            attributes: true,   
            attributeFilter: ['class'] 
        });
    }
});

// Add this function to add speech recognition for PWD ID input

function addPwdIdSpeechRecognition() {
    // Check if the validation container exists
    const validationContainer = document.getElementById('validation-container');
    if (!validationContainer) return;
    
    // Check if we've already set up speech recognition for this field
    if (document.getElementById('speak-pwdid')) return;
    
    // Find the PWD ID input field
    const pwdIdInput = document.getElementById('pwd-id');
    if (!pwdIdInput) return;
    
    // Create a wrapper for the input field to position the microphone button
    const wrapper = document.createElement('div');
    wrapper.className = 'relative flex-1';
    
    // Clone the original input with all its attributes and event listeners
    const newInput = pwdIdInput.cloneNode(true);
    
    // Replace the input with our wrapper containing the cloned input
    pwdIdInput.parentNode.replaceChild(wrapper, pwdIdInput);
    wrapper.appendChild(newInput);
    
    // Create the microphone button
    const micButton = document.createElement('button');
    micButton.id = 'speak-pwdid';
    micButton.type = 'button';
    micButton.className = 'absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold p-1 rounded-full';
    micButton.innerHTML = `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/>
        </svg>
    `;
    
    // Add the button to the wrapper
    wrapper.appendChild(micButton);
    
    // Create recording indicator
    const recordingIndicator = document.createElement('div');
    recordingIndicator.id = 'pwdid-recording-indicator';
    recordingIndicator.className = 'hidden mt-1 text-sm flex items-center';
    recordingIndicator.innerHTML = '<span class="animate-pulse text-red-600 mr-1">●</span> Recording...';
    
    // Add the indicator after the wrapper
    wrapper.parentNode.insertBefore(recordingIndicator, wrapper.nextSibling);
    
    // Set up speech recognition
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-PH';
        
        let recognizing = false;
        
        micButton.addEventListener('click', () => {
            if (recognizing) {
                recognition.stop();
            } else {
                recognition.start();
            }
        });
        
        recognition.onstart = () => {
            recognizing = true;
            recordingIndicator.classList.remove('hidden');
        };
        
        recognition.onend = () => {
            recognizing = false;
            recordingIndicator.classList.add('hidden');
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.trim();
            console.log('PWD ID Recognition result:', transcript);
            
            // Extract just the numbers from the transcript
            const numbersOnly = transcript.replace(/[^0-9]/g, '');
            
            // If we have digits, use them as ID
            if (numbersOnly.length > 0) {
                newInput.value = numbersOnly;
                console.log('Setting PWD ID to numbers:', numbersOnly);
            } else {
                // Otherwise use the raw transcript
                newInput.value = transcript;
                console.log('Setting PWD ID to transcript:', transcript);
            }
            
            // Ensure the change is recognized by triggering an input event
            const inputEvent = new Event('input', { bubbles: true });
            newInput.dispatchEvent(inputEvent);
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            recognizing = false;
            recordingIndicator.classList.add('hidden');
        };
    }
}

// Also modify the observer to ensure it doesn't keep adding microphones
document.addEventListener('DOMContentLoaded', () => {
    // Keep existing code...
    
    // Modified observer to avoid duplicate initialization
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.id === 'validation-container' && 
                !mutation.target.classList.contains('hidden') &&
                !document.getElementById('speak-pwdid')) {
                // Only call if the microphone button doesn't already exist
                addPwdIdSpeechRecognition();
            }
        });
    });
});

// Add local storage functionality to save and restore form values

// Save form values to localStorage
function saveToLocalStorage() {
    const formData = {
        islandGroup: document.getElementById('island-group-button').textContent,
        region: document.getElementById('region-button').textContent,
        province: document.getElementById('province-input')?.value || '',
        city: document.getElementById('city-input')?.value || '',
        pwdId: document.getElementById('pwd-id')?.value || ''
    };
    
    // Only save if at least the island group has been selected
    if (formData.islandGroup !== 'Select Island Group') {
        localStorage.setItem('kwixSparLocationData', JSON.stringify(formData));
        console.log('Form data saved to localStorage:', formData);
    }
}

// Load form values from localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('kwixSparLocationData');
    if (!savedData) return;
    
    try {
        const formData = JSON.parse(savedData);
        console.log('Loading saved data from localStorage:', formData);
        
        // Only proceed if we have valid data
        if (!formData.islandGroup || formData.islandGroup === 'Select Island Group') return;
        
        // Set island group
        const islandGroupButton = document.getElementById('island-group-button');
        islandGroupButton.textContent = formData.islandGroup;
        
        // Show and populate region
        document.getElementById('region-container').classList.remove('hidden');
        if (formData.region && formData.region !== 'Select Region') {
            const regionButton = document.getElementById('region-button');
            regionButton.textContent = formData.region;
            
            // Show province container
            document.getElementById('province-container').classList.remove('hidden');
            
            // Set up province dropdown
            const provinces = Object.keys(locationData[formData.islandGroup][formData.region]).sort();
            setupSearchableDropdown(
                'province-container',
                'province-input',
                'province-dropdown',
                provinces,
                (selectedProvince) => {
                    document.getElementById('city-container').classList.remove('hidden');
                    const cities = locationData[formData.islandGroup][formData.region][selectedProvince].sort();
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
            
            // Set province value
            if (formData.province) {
                setTimeout(() => {
                    const provinceInput = document.getElementById('province-input');
                    provinceInput.value = formData.province;
                    
                    // Show city container
                    document.getElementById('city-container').classList.remove('hidden');
                    
                    // Set up city dropdown
                    const cities = locationData[formData.islandGroup][formData.region][formData.province].sort();
                    setupSearchableDropdown(
                        'city-container',
                        'city-input',
                        'city-dropdown',
                        cities,
                        () => {
                            document.getElementById('validation-container').classList.remove('hidden');
                        }
                    );
                    
                    // Set city value
                    if (formData.city) {
                        setTimeout(() => {
                            const cityInput = document.getElementById('city-input');
                            cityInput.value = formData.city;
                            
                            // Show validation container
                            document.getElementById('validation-container').classList.remove('hidden');
                            
                            // Set PWD ID if available
                            if (formData.pwdId) {
                                setTimeout(() => {
                                    const pwdIdInput = document.getElementById('pwd-id');
                                    if (pwdIdInput) pwdIdInput.value = formData.pwdId;
                                }, 100);
                            }
                        }, 100);
                    }
                }, 100);
            }
        }
    } catch (error) {
        console.error('Error loading data from localStorage:', error);
    }
}

// Set up event listeners to save data on change
function setupLocalStorageEvents() {
    // Save when island group changes
    document.getElementById('island-group-dropdown').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            setTimeout(saveToLocalStorage, 100);
        }
    });
    
    // Save when region changes
    document.getElementById('region-dropdown').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            setTimeout(saveToLocalStorage, 100);
        }
    });
    
    // Save when province changes (input and selection)
    document.addEventListener('click', (e) => {
        if (e.target.closest('#province-dropdown')) {
            setTimeout(saveToLocalStorage, 100);
        }
    });
    
    document.getElementById('province-input')?.addEventListener('change', () => {
        saveToLocalStorage();
    });
    
    // Save when city changes
    document.addEventListener('click', (e) => {
        if (e.target.closest('#city-dropdown')) {
            setTimeout(saveToLocalStorage, 100);
        }
    });
    
    document.getElementById('city-input')?.addEventListener('change', () => {
        saveToLocalStorage();
    });
    
    // Save when PWD ID changes
    document.getElementById('pwd-id')?.addEventListener('input', () => {
        saveToLocalStorage();
    });
    
    // Save when address is processed
    document.getElementById('search-address')?.addEventListener('click', () => {
        setTimeout(saveToLocalStorage, 500); // Wait for processing to complete
    });
    
    // Clear storage when fields are cleared
    document.getElementById('clear-fields')?.addEventListener('click', () => {
        localStorage.removeItem('kwixSparLocationData');
        console.log('Form data removed from localStorage');
    });
}

// Add this to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Existing initialization code...
    
    // Set up local storage
    setupLocalStorageEvents();
    
    // Load saved data (after a slight delay to ensure all elements are ready)
    setTimeout(loadFromLocalStorage, 200);
});