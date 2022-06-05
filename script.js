// 1 .Solving problems using array functions on rest countries data.
//        a.Get all the countries from Asia continent /region using Filter function
//        b.Get all the countries with a population of less than 2 lakhs using Filter function
//        c.Print the following details name, capital, flag using forEach function
//        d.Print the total population of countries using reduce function
//        e.Print the country which uses US Dollars as currency.

// solution:

// A CODE

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function()
{
var data=JSON.parse(request.response);
data.filter(i=>
i.continents=="Asia").forEach((i,j)=>
console.log(`country ${j} ${i.name["official"]}`)
)
 }

// output

country 0 Georgia                                      
country 1 Lebanese Republic                            
country 2 Kingdom of Saudi Arabia                    
country 3 State of Qatar                              
country 4 Mongolia                                
country 5 Republic of China (Taiwan)                  
country 6 People's Republic of China                  
country 7 People's Republic of Bangladesh            
country 8 State of Israel                           
country 9 Sultanate of Oman 
country 10 State of Kuwait 
country 11 Kingdom of Cambodia 
country 12 Islamic Republic of Iran 
country 13 Republic of Azerbaijan 
country 14 Federal Democratic Republic of Nepal 
country 15 Republic of India 
country 16 Kyrgyz Republic 
country 17 Republic of Iraq 
country 18 Kingdom of Bhutan 
country 19 Macao Special Administrative Region of the People's Republic of China 
country 20 Syrian Arab Republic 
country 21 British Indian Ocean Territory 
country 22 Republic of Kazakhstan 
country 23 Territory of Christmas Island 
country 24 Islamic Republic of Afghanistan 
country 25 Republic of Tajikistan 
country 26 Kingdom of Bahrain 
country 27 Kingdom of Thailand 
country 28 Democratic People's Republic of Korea 
country 29 Republic of Yemen 
country 30 Republic of Armenia
country 31 Islamic Republic of Pakistan 
country 32 Republic of the Philippines 
country 33 Republic of the Union of Myanmar 
country 34 Territory of the Cocos (Keeling) Islands 
country 35 Republic of Turkey 
country 36 United Arab Emirates 
country 37 Democratic Socialist Republic of Sri Lanka 
country 38 State of Palestine 
country 39 Turkmenistan 
country 40 Socialist Republic of Vietnam 
country 41 Republic of Uzbekistan 
country 42 Japan 
country 43 Hong Kong Special Administrative Region of the People's Republic of China 
country 44 Hashemite Kingdom of Jordan 
country 45 Lao People's Democratic Republic 
country 46 Republic of Korea 
country 47 Republic of the Maldives 
country 48 Republic of Singapore 
country 49 Malaysia 
country 50 Republic of Indonesia 
country 51 Nation of Brunei, Abode of Peace 



// B CODE

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function()
{
var data=JSON.parse(request.response);
data.filter(i=>
i.population<200000).forEach((i,j)=>
console.log(`country ${j} ${i.name["official"]} || POPULATION- ${i.population}`)
)
 }

//  OUTPUT

country 0 Guam || POPULATION- 168783 script.js:93:9
country 1 Republic of the Marshall Islands || POPULATION- 59194 script.js:93:9
country 2 Republic of Nauru || POPULATION- 10834 script.js:93:9
country 3 Montserrat || POPULATION- 4922 script.js:93:9
country 4 Antarctica || POPULATION- 1000 script.js:93:9
country 5 Saint Pierre and Miquelon || POPULATION- 6069 script.js:93:9
country 6 Grenada || POPULATION- 112519 script.js:93:9
country 7 Faroe Islands || POPULATION- 48865 script.js:93:9
country 8 Anguilla || POPULATION- 13452 script.js:93:9
country 9 Republic of Palau || POPULATION- 18092 script.js:93:9
country 10 Commonwealth of the Northern Mariana Islands || POPULATION- 57557 script.js:93:9
country 11 Country of Curaçao || POPULATION- 155014 script.js:93:9
country 12 Antigua and Barbuda || POPULATION- 97928 script.js:93:9
country 13 Cayman Islands || POPULATION- 65720 script.js:93:9
country 14 Bonaire, Sint Eustatius and Saba || POPULATION- 25987 script.js:93:9
country 15 Sint Maarten || POPULATION- 40812 script.js:93:9
country 16 Commonwealth of Dominica || POPULATION- 71991 script.js:93:9
country 17 Gibraltar || POPULATION- 33691 script.js:93:9
country 18 Federation of Saint Christopher and Nevis || POPULATION- 53192 script.js:93:9
country 19 Åland Islands || POPULATION- 29458 script.js:93:9
country 20 Virgin Islands of the United States || POPULATION- 106290 script.js:93:9
country 21 Bouvet Island || POPULATION- 0 script.js:93:9
country 22 South Georgia and the South Sandwich Islands || POPULATION- 30 script.js:93:9
country 23 Cook Islands || POPULATION- 18100 script.js:93:9
country 24 Principality of Andorra || POPULATION- 77265 script.js:93:9
country 25 Territory of the French Southern and Antarctic Lands || POPULATION- 400 script.js:93:9
country 26 Niue || POPULATION- 1470 script.js:93:9
country 27 Bailiwick of Jersey || POPULATION- 100800 script.js:93:9
country 28 Pitcairn Group of Islands || POPULATION- 56 script.js:93:9
country 29 Bailiwick of Guernsey || POPULATION- 62999 script.js:93:9
country 30 British Indian Ocean Territory || POPULATION- 3000 script.js:93:9
country 31 Isle of Man || POPULATION- 85032 script.js:93:9
country 32 Territory of the Wallis and Futuna Islands || POPULATION- 11750 script.js:93:9
country 33 Collectivity of Saint Barthélemy || POPULATION- 4255 script.js:93:9
country 34 Territory of Christmas Island || POPULATION- 2072 script.js:93:9
country 35 Virgin Islands || POPULATION- 30237 script.js:93:9
country 36 Kingdom of Tonga || POPULATION- 105697 script.js:93:9
country 37 Independent and Sovereign Republic of Kiribati || POPULATION- 119446 script.js:93:9
country 38 Vatican City State || POPULATION- 451 script.js:93:9
country 39 Svalbard og Jan Mayen || POPULATION- 2562 script.js:93:9
country 40 Independent State of Samoa || POPULATION- 198410 script.js:93:9
country 41 American Samoa || POPULATION- 55197 script.js:93:9
country 42 Tuvalu || POPULATION- 11792 script.js:93:9
country 43 Tokelau || POPULATION- 1411 script.js:93:9
country 44 Territory of the Cocos (Keeling) Islands || POPULATION- 544 script.js:93:9
country 45 Heard Island and McDonald Islands || POPULATION- 0 script.js:93:9
country 46 Republic of San Marino || POPULATION- 33938 script.js:93:9
country 47 Saint Vincent and the Grenadines || POPULATION- 110947 script.js:93:9
country 48 United States Minor Outlying Islands || POPULATION- 300 script.js:93:9
country 49 Bermuda || POPULATION- 63903 script.js:93:9
country 50 Turks and Caicos Islands || POPULATION- 38718 script.js:93:9
country 51 Federated States of Micronesia || POPULATION- 115021 script.js:93:9
country 52 Principality of Liechtenstein || POPULATION- 38137 script.js:93:9
country 53 Saint Lucia || POPULATION- 183629 script.js:93:9
country 54 Aruba || POPULATION- 106766 script.js:93:9
country 55 Territory of Norfolk Island || POPULATION- 2302 script.js:93:9
country 56 Principality of Monaco || POPULATION- 39244 script.js:93:9
country 57 Republic of Seychelles || POPULATION- 98462 script.js:93:9
country 58 Saint Helena, Ascension and Tristan da Cunha || POPULATION- 53192 script.js:93:9
country 59 Greenland || POPULATION- 56367 script.js:93:9
country 60 Falkland Islands || POPULATION- 2563 script.js:93:9
country 61 Saint Martin || POPULATION- 38659 script.js:93:9


// C CODE

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function()
{
var data=JSON.parse(request.response);
data.forEach((i,j)=>
console.log(`country ${j} NAME- ${i.name["official"]} || CAPITAL-${i.capital} || FLAG- ${i.flag} `)
)
 }


//  OUTPUT

country 0 NAME- Oriental Republic of Uruguay || CAPITAL-Montevideo || FLAG- 🇺🇾 script.js:170:9
country 1 NAME- Republic of Paraguay || CAPITAL-Asunción || FLAG- 🇵🇾 script.js:170:9
country 2 NAME- Republic of the Gambia || CAPITAL-Banjul || FLAG- 🇬🇲 script.js:170:9
country 3 NAME- Republic of Djibouti || CAPITAL-Djibouti || FLAG- 🇩🇯 script.js:170:9
country 4 NAME- Martinique || CAPITAL-Fort-de-France || FLAG- 🇲🇶 script.js:170:9
country 5 NAME- Guam || CAPITAL-Hagåtña || FLAG- 🇬🇺 script.js:170:9
country 6 NAME- Georgia || CAPITAL-Tbilisi || FLAG- 🇬🇪 script.js:170:9
country 7 NAME- United States of America || CAPITAL-Washington, D.C. || FLAG- 🇺🇸 script.js:170:9
country 8 NAME- Belize || CAPITAL-Belmopan || FLAG- 🇧🇿 script.js:170:9
country 9 NAME- Republic of Mauritius || CAPITAL-Port Louis || FLAG- 🇲🇺 script.js:170:9
country 10 NAME- Lebanese Republic || CAPITAL-Beirut || FLAG- 🇱🇧 script.js:170:9
country 11 NAME- Kingdom of Saudi Arabia || CAPITAL-Riyadh || FLAG- 🇸🇦 script.js:170:9
country 12 NAME- Republic of Ecuador || CAPITAL-Quito || FLAG- 🇪🇨 script.js:170:9
country 13 NAME- Republic of the Marshall Islands || CAPITAL-Majuro || FLAG- 🇲🇭 script.js:170:9
country 14 NAME- Federative Republic of Brazil || CAPITAL-Brasília || FLAG- 🇧🇷 script.js:170:9
country 15 NAME- Republic of Uganda || CAPITAL-Kampala || FLAG- 🇺🇬 script.js:170:9
country 16 NAME- State of Qatar || CAPITAL-Doha || FLAG- 🇶🇦 script.js:170:9
country 17 NAME- Democratic Republic of Timor-Leste || CAPITAL-Dili || FLAG- 🇹🇱 script.js:170:9
country 18 NAME- Mongolia || CAPITAL-Ulan Bator || FLAG- 🇲🇳 script.js:170:9
country 19 NAME- Republic of Chile || CAPITAL-Santiago || FLAG- 🇨🇱 script.js:170:9
country 20 NAME- Republic of Liberia || CAPITAL-Monrovia || FLAG- 🇱🇷 script.js:170:9
country 21 NAME- Republic of Nauru || CAPITAL-Yaren || FLAG- 🇳🇷 script.js:170:9
country 22 NAME- Réunion Island || CAPITAL-Saint-Denis || FLAG- 🇷🇪 script.js:170:9
country 23 NAME- Montserrat || CAPITAL-Plymouth || FLAG- 🇲🇸 script.js:170:9
country 24 NAME- Republic of China (Taiwan) || CAPITAL-Taipei || FLAG- 🇹🇼 script.js:170:9
country 25 NAME- Antarctica || CAPITAL-undefined || FLAG- 🇦🇶 script.js:170:9
country 26 NAME- Saint Pierre and Miquelon || CAPITAL-Saint-Pierre || FLAG- 🇵🇲 script.js:170:9
country 27 NAME- Argentine Republic || CAPITAL-Buenos Aires || FLAG- 🇦🇷 script.js:170:9
country 28 NAME- Togolese Republic || CAPITAL-Lomé || FLAG- 🇹🇬 script.js:170:9
country 29 NAME- Republic of Austria || CAPITAL-Vienna || FLAG- 🇦🇹 script.js:170:9
country 30 NAME- Grenada || CAPITAL-St. George's || FLAG- 🇬🇩 script.js:170:9
country 31 NAME- Faroe Islands || CAPITAL-Tórshavn || FLAG- 🇫🇴 script.js:170:9
country 32 NAME- Kingdom of Morocco || CAPITAL-Rabat || FLAG- 🇲🇦 script.js:170:9
country 33 NAME- Anguilla || CAPITAL-The Valley || FLAG- 🇦🇮 script.js:170:9
country 34 NAME- Republic of Palau || CAPITAL-Ngerulmud || FLAG- 🇵🇼 script.js:170:9
country 35 NAME- Commonwealth of the Northern Mariana Islands || CAPITAL-Saipan || FLAG- 🇲🇵 script.js:170:9
country 36 NAME- Islamic Republic of Mauritania || CAPITAL-Nouakchott || FLAG- 🇲🇷 script.js:170:9
country 37 NAME- Ukraine || CAPITAL-Kyiv || FLAG- 🇺🇦 script.js:170:9
country 38 NAME- People's Republic of China || CAPITAL-Beijing || FLAG- 🇨🇳 script.js:170:9
country 39 NAME- Kingdom of Lesotho || CAPITAL-Maseru || FLAG- 🇱🇸 script.js:170:9
country 40 NAME- Republic of Cyprus || CAPITAL-Nicosia || FLAG- 🇨🇾 script.js:170:9
country 41 NAME- Democratic Republic of the Congo || CAPITAL-Kinshasa || FLAG- 🇨🇩 script.js:170:9
country 42 NAME- Russian Federation || CAPITAL-Moscow || FLAG- 🇷🇺 script.js:170:9
country 43 NAME- People's Republic of Bangladesh || CAPITAL-Dhaka || FLAG- 🇧🇩 script.js:170:9
country 44 NAME- Republic of South Africa || CAPITAL-Pretoria,Bloemfontein,Cape Town || FLAG- 🇿🇦 script.js:170:9
country 45 NAME- Country of Curaçao || CAPITAL-Willemstad || FLAG- 🇨🇼 script.js:170:9
country 46 NAME- Republic of Guatemala || CAPITAL-Guatemala City || FLAG- 🇬🇹 script.js:170:9
country 47 NAME- Commonwealth of Puerto Rico || CAPITAL-San Juan || FLAG- 🇵🇷 script.js:170:9
country 48 NAME- Antigua and Barbuda || CAPITAL-Saint John's || FLAG- 🇦🇬 script.js:170:9
country 49 NAME- State of Israel || CAPITAL-Jerusalem || FLAG- 🇮🇱 script.js:170:9
country 50 NAME- Co-operative Republic of Guyana || CAPITAL-Georgetown || FLAG- 🇬🇾 script.js:170:9
country 51 NAME- Cayman Islands || CAPITAL-George Town || FLAG- 🇰🇾 script.js:170:9
country 52 NAME- Republic of Croatia || CAPITAL-Zagreb || FLAG- 🇭🇷 script.js:170:9
country 53 NAME- Iceland || CAPITAL-Reykjavik || FLAG- 🇮🇸 script.js:170:9
country 54 NAME- Bonaire, Sint Eustatius and Saba || CAPITAL-Kralendijk || FLAG- undefined script.js:170:9
country 55 NAME- Sint Maarten || CAPITAL-Philipsburg || FLAG- 🇸🇽 script.js:170:9
country 56 NAME- Republic of Namibia || CAPITAL-Windhoek || FLAG- 🇳🇦 script.js:170:9
country 57 NAME- Commonwealth of Dominica || CAPITAL-Roseau || FLAG- 🇩🇲 script.js:170:9
country 58 NAME- Gibraltar || CAPITAL-Gibraltar || FLAG- 🇬🇮 script.js:170:9
country 59 NAME- Republic of Senegal || CAPITAL-Dakar || FLAG- 🇸🇳 script.js:170:9
country 60 NAME- Federation of Saint Christopher and Nevis || CAPITAL-Basseterre || FLAG- 🇰🇳 script.js:170:9
country 61 NAME- Sultanate of Oman || CAPITAL-Muscat || FLAG- 🇴🇲 script.js:170:9
country 62 NAME- State of Kuwait || CAPITAL-Kuwait City || FLAG- 🇰🇼 script.js:170:9
country 63 NAME- Åland Islands || CAPITAL-Mariehamn || FLAG- 🇦🇽 script.js:170:9
country 64 NAME- Virgin Islands of the United States || CAPITAL-Charlotte Amalie || FLAG- 🇻🇮 script.js:170:9
country 65 NAME- Bouvet Island || CAPITAL-undefined || FLAG- 🇧🇻 script.js:170:9
country 66 NAME- United Kingdom of Great Britain and Northern Ireland || CAPITAL-London || FLAG- 🇬🇧 script.js:170:9
country 67 NAME- Republic of Honduras || CAPITAL-Tegucigalpa || FLAG- 🇭🇳 script.js:170:9
country 68 NAME- South Georgia and the South Sandwich Islands || CAPITAL-King Edward Point || FLAG- 🇬🇸 script.js:170:9
country 69 NAME- Kingdom of Cambodia || CAPITAL-Phnom Penh || FLAG- 🇰🇭 script.js:170:9
country 70 NAME- Republic of North Macedonia || CAPITAL-Skopje || FLAG- 🇲🇰 script.js:170:9
country 71 NAME- Islamic Republic of Iran || CAPITAL-Tehran || FLAG- 🇮🇷 script.js:170:9
country 72 NAME- Republic of Panama || CAPITAL-Panama City || FLAG- 🇵🇦 script.js:170:9
country 73 NAME- Cook Islands || CAPITAL-Avarua || FLAG- 🇨🇰 script.js:170:9
country 74 NAME- Principality of Andorra || CAPITAL-Andorra la Vella || FLAG- 🇦🇩 script.js:170:9
country 75 NAME- Republic of Burundi || CAPITAL-Gitega || FLAG- 🇧🇮 script.js:170:9
country 76 NAME- Republic of Trinidad and Tobago || CAPITAL-Port of Spain || FLAG- 🇹🇹 script.js:170:9
country 77 NAME- Union of the Comoros || CAPITAL-Moroni || FLAG- 🇰🇲 script.js:170:9
country 78 NAME- Territory of the French Southern and Antarctic Lands || CAPITAL-Port-aux-Français || FLAG- 🇹🇫 script.js:170:9
country 79 NAME- Republic of Kosovo || CAPITAL-Pristina || FLAG- 🇽🇰 script.js:170:9
country 80 NAME- Federal Republic of Nigeria || CAPITAL-Abuja || FLAG- 🇳🇬 script.js:170:9
country 81 NAME- Republic of Poland || CAPITAL-Warsaw || FLAG- 🇵🇱 script.js:170:9
country 82 NAME- Niue || CAPITAL-Alofi || FLAG- 🇳🇺 script.js:170:9
country 83 NAME- New Caledonia || CAPITAL-Nouméa || FLAG- 🇳🇨 script.js:170:9
country 84 NAME- Federal Democratic Republic of Ethiopia || CAPITAL-Addis Ababa || FLAG- 🇪🇹 script.js:170:9
country 85 NAME- Federal Republic of Germany || CAPITAL-Berlin || FLAG- 🇩🇪 script.js:170:9
country 86 NAME- Republic of Azerbaijan || CAPITAL-Baku || FLAG- 🇦🇿 script.js:170:9
country 87 NAME- Kingdom of the Netherlands || CAPITAL-Amsterdam || FLAG- 🇳🇱 script.js:170:9
country 88 NAME- French Republic || CAPITAL-Paris || FLAG- 🇫🇷 script.js:170:9
country 89 NAME- Federal Democratic Republic of Nepal || CAPITAL-Kathmandu || FLAG- 🇳🇵 script.js:170:9
country 90 NAME- Barbados || CAPITAL-Bridgetown || FLAG- 🇧🇧 script.js:170:9
country 91 NAME- Bailiwick of Jersey || CAPITAL-Saint Helier || FLAG- 🇯🇪 script.js:170:9
country 92 NAME- Republic of India || CAPITAL-New Delhi || FLAG- 🇮🇳 script.js:170:9
country 93 NAME- Kyrgyz Republic || CAPITAL-Bishkek || FLAG- 🇰🇬 script.js:170:9
country 94 NAME- Republic of South Sudan || CAPITAL-Juba || FLAG- 🇸🇸 script.js:170:9
country 95 NAME- Republic of Iraq || CAPITAL-Baghdad || FLAG- 🇮🇶 script.js:170:9
country 96 NAME- Italian Republic || CAPITAL-Rome || FLAG- 🇮🇹 script.js:170:9
country 97 NAME- Republic of Cuba || CAPITAL-Havana || FLAG- 🇨🇺 script.js:170:9
country 98 NAME- Kingdom of Bhutan || CAPITAL-Thimphu || FLAG- 🇧🇹 script.js:170:9
country 99 NAME- Commonwealth of the Bahamas || CAPITAL-Nassau || FLAG- 🇧🇸 script.js:170:9
country 100 NAME- Kingdom of Norway || CAPITAL-Oslo || FLAG- 🇳🇴 script.js:170:9
country 101 NAME- Republic of Lithuania || CAPITAL-Vilnius || FLAG- 🇱🇹 script.js:170:9
country 102 NAME- Republic of Kenya || CAPITAL-Nairobi || FLAG- 🇰🇪 script.js:170:9
country 103 NAME- Pitcairn Group of Islands || CAPITAL-Adamstown || FLAG- 🇵🇳 script.js:170:9
country 104 NAME- Kingdom of Sweden || CAPITAL-Stockholm || FLAG- 🇸🇪 script.js:170:9
country 105 NAME- Guadeloupe || CAPITAL-Basse-Terre || FLAG- 🇬🇵 script.js:170:9
country 106 NAME- Gabonese Republic || CAPITAL-Libreville || FLAG- 🇬🇦 script.js:170:9
country 107 NAME- Macao Special Administrative Region of the People's Republic of China || CAPITAL-undefined || FLAG- 🇲🇴 script.js:170:9
country 108 NAME- Bailiwick of Guernsey || CAPITAL-St. Peter Port || FLAG- 🇬🇬 script.js:170:9
country 109 NAME- Republic of Rwanda || CAPITAL-Kigali || FLAG- 🇷🇼 script.js:170:9
country 110 NAME- Syrian Arab Republic || CAPITAL-Damascus || FLAG- 🇸🇾 script.js:170:9
country 111 NAME- Canada || CAPITAL-Ottawa || FLAG- 🇨🇦 script.js:170:9
country 112 NAME- People's Democratic Republic of Algeria || CAPITAL-Algiers || FLAG- 🇩🇿 script.js:170:9
country 113 NAME- British Indian Ocean Territory || CAPITAL-Diego Garcia || FLAG- 🇮🇴 script.js:170:9
country 114 NAME- Sahrawi Arab Democratic Republic || CAPITAL-El Aaiún || FLAG- 🇪🇭 script.js:170:9
country 115 NAME- Isle of Man || CAPITAL-Douglas || FLAG- 🇮🇲 script.js:170:9
country 116 NAME- Republic of Botswana || CAPITAL-Gaborone || FLAG- 🇧🇼 script.js:170:9
country 117 NAME- Republic of Kazakhstan || CAPITAL-Nur-Sultan || FLAG- 🇰🇿 script.js:170:9
country 118 NAME- Bolivarian Republic of Venezuela || CAPITAL-Caracas || FLAG- 🇻🇪 script.js:170:9
country 119 NAME- French Polynesia || CAPITAL-Papeetē || FLAG- 🇵🇫 script.js:170:9
country 120 NAME- Republic of the Sudan || CAPITAL-Khartoum || FLAG- 🇸🇩 script.js:170:9
country 121 NAME- Territory of the Wallis and Futuna Islands || CAPITAL-Mata-Utu || FLAG- 🇼🇫 script.js:170:9
country 122 NAME- Slovak Republic || CAPITAL-Bratislava || FLAG- 🇸🇰 script.js:170:9
country 123 NAME- Collectivity of Saint Barthélemy || CAPITAL-Gustavia || FLAG- 🇧🇱 script.js:170:9
country 124 NAME- Territory of Christmas Island || CAPITAL-Flying Fish Cove || FLAG- 🇨🇽 script.js:170:9
country 125 NAME- Solomon Islands || CAPITAL-Honiara || FLAG- 🇸🇧 script.js:170:9
country 126 NAME- Republic of Latvia || CAPITAL-Riga || FLAG- 🇱🇻 script.js:170:9
country 127 NAME- Virgin Islands || CAPITAL-Road Town || FLAG- 🇻🇬 script.js:170:9
country 128 NAME- Jamaica || CAPITAL-Kingston || FLAG- 🇯🇲 script.js:170:9
country 129 NAME- Islamic Republic of Afghanistan || CAPITAL-Kabul || FLAG- 🇦🇫 script.js:170:9
country 130 NAME- Republic of Serbia || CAPITAL-Belgrade || FLAG- 🇷🇸 script.js:170:9
country 131 NAME- Republic of Tajikistan || CAPITAL-Dushanbe || FLAG- 🇹🇯 script.js:170:9
country 132 NAME- Kingdom of Tonga || CAPITAL-Nuku'alofa || FLAG- 🇹🇴 script.js:170:9
country 133 NAME- Independent and Sovereign Republic of Kiribati || CAPITAL-South Tarawa || FLAG- 🇰🇮 script.js:170:9
country 134 NAME- State of Eritrea || CAPITAL-Asmara || FLAG- 🇪🇷 script.js:170:9
country 135 NAME- Republic of Mali || CAPITAL-Bamako || FLAG- 🇲🇱 script.js:170:9
country 136 NAME- Republic of Haiti || CAPITAL-Port-au-Prince || FLAG- 🇭🇹 script.js:170:9
country 137 NAME- Republic of Vanuatu || CAPITAL-Port Vila || FLAG- 🇻🇺 script.js:170:9
country 138 NAME- Bosnia and Herzegovina || CAPITAL-Sarajevo || FLAG- 🇧🇦 script.js:170:9
country 139 NAME- Vatican City State || CAPITAL-Vatican City || FLAG- 🇻🇦 script.js:170:9
country 140 NAME- Republic of Benin || CAPITAL-Porto-Novo || FLAG- 🇧🇯 script.js:170:9
country 141 NAME- Svalbard og Jan Mayen || CAPITAL-Longyearbyen || FLAG- 🇸🇯 script.js:170:9
country 142 NAME- Independent State of Samoa || CAPITAL-Apia || FLAG- 🇼🇸 script.js:170:9
country 143 NAME- Plurinational State of Bolivia || CAPITAL-Sucre || FLAG- 🇧🇴 script.js:170:9
country 144 NAME- Republic of Madagascar || CAPITAL-Antananarivo || FLAG- 🇲🇬 script.js:170:9
country 145 NAME- Democratic Republic of São Tomé and Príncipe || CAPITAL-São Tomé || FLAG- 🇸🇹 script.js:170:9
country 146 NAME- Kingdom of Bahrain || CAPITAL-Manama || FLAG- 🇧🇭 script.js:170:9
country 147 NAME- Hellenic Republic || CAPITAL-Athens || FLAG- 🇬🇷 script.js:170:9
country 148 NAME- Republic of Peru || CAPITAL-Lima || FLAG- 🇵🇪 script.js:170:9
country 149 NAME- Republic of Suriname || CAPITAL-Paramaribo || FLAG- 🇸🇷 script.js:170:9
country 150 NAME- American Samoa || CAPITAL-Pago Pago || FLAG- 🇦🇸 script.js:170:9
country 151 NAME- Republic of Niger || CAPITAL-Niamey || FLAG- 🇳🇪 script.js:170:9
country 152 NAME- Kingdom of Thailand || CAPITAL-Bangkok || FLAG- 🇹🇭 script.js:170:9
country 153 NAME- Tuvalu || CAPITAL-Funafuti || FLAG- 🇹🇻 script.js:170:9
country 154 NAME- Democratic People's Republic of Korea || CAPITAL-Pyongyang || FLAG- 🇰🇵 script.js:170:9
country 155 NAME- Republic of Côte d'Ivoire || CAPITAL-Yamoussoukro || FLAG- 🇨🇮 script.js:170:9
country 156 NAME- Republic of Yemen || CAPITAL-Sana'a || FLAG- 🇾🇪 script.js:170:9
country 157 NAME- New Zealand || CAPITAL-Wellington || FLAG- 🇳🇿 script.js:170:9
country 158 NAME- Republic of Armenia || CAPITAL-Yerevan || FLAG- 🇦🇲 script.js:170:9
country 159 NAME- Islamic Republic of Pakistan || CAPITAL-Islamabad || FLAG- 🇵🇰 script.js:170:9
country 160 NAME- Tokelau || CAPITAL-Fakaofo || FLAG- 🇹🇰 script.js:170:9
country 161 NAME- Republic of Malawi || CAPITAL-Lilongwe || FLAG- 🇲🇼 script.js:170:9
country 162 NAME- Republic of Ireland || CAPITAL-Dublin || FLAG- 🇮🇪 script.js:170:9
country 163 NAME- Republic of the Philippines || CAPITAL-Manila || FLAG- 🇵🇭 script.js:170:9
country 164 NAME- Czech Republic || CAPITAL-Prague || FLAG- 🇨🇿 script.js:170:9
country 165 NAME- Republic of the Union of Myanmar || CAPITAL-Naypyidaw || FLAG- 🇲🇲 script.js:170:9
country 166 NAME- Territory of the Cocos (Keeling) Islands || CAPITAL-West Island || FLAG- 🇨🇨 script.js:170:9
country 167 NAME- Romania || CAPITAL-Bucharest || FLAG- 🇷🇴 script.js:170:9
country 168 NAME- Dominican Republic || CAPITAL-Santo Domingo || FLAG- 🇩🇴 script.js:170:9
country 169 NAME- Republic of Equatorial Guinea || CAPITAL-Malabo || FLAG- 🇬🇶 script.js:170:9
country 170 NAME- Republic of Ghana || CAPITAL-Accra || FLAG- 🇬🇭 script.js:170:9
country 171 NAME- Republic of Malta || CAPITAL-Valletta || FLAG- 🇲🇹 script.js:170:9
country 172 NAME- Republic of Turkey || CAPITAL-Ankara || FLAG- 🇹🇷 script.js:170:9
country 173 NAME- Arab Republic of Egypt || CAPITAL-Cairo || FLAG- 🇪🇬 script.js:170:9
country 174 NAME- Republic of Mozambique || CAPITAL-Maputo || FLAG- 🇲🇿 script.js:170:9
country 175 NAME- Department of Mayotte || CAPITAL-Mamoudzou || FLAG- 🇾🇹 script.js:170:9
country 176 NAME- Kingdom of Belgium || CAPITAL-Brussels || FLAG- 🇧🇪 script.js:170:9
country 177 NAME- Republic of Slovenia || CAPITAL-Ljubljana || FLAG- 🇸🇮 script.js:170:9
country 178 NAME- Hungary || CAPITAL-Budapest || FLAG- 🇭🇺 script.js:170:9
country 179 NAME- United Arab Emirates || CAPITAL-Abu Dhabi || FLAG- 🇦🇪 script.js:170:9
country 180 NAME- Republic of Albania || CAPITAL-Tirana || FLAG- 🇦🇱 script.js:170:9
country 181 NAME- Heard Island and McDonald Islands || CAPITAL-undefined || FLAG- 🇭🇲 script.js:170:9
country 182 NAME- Republic of Fiji || CAPITAL-Suva || FLAG- 🇫🇯 script.js:170:9
country 183 NAME- Republic of San Marino || CAPITAL-City of San Marino || FLAG- 🇸🇲 script.js:170:9
country 184 NAME- Republic of Moldova || CAPITAL-Chișinău || FLAG- 🇲🇩 script.js:170:9
country 185 NAME- Republic of Estonia || CAPITAL-Tallinn || FLAG- 🇪🇪 script.js:170:9
country 186 NAME- Saint Vincent and the Grenadines || CAPITAL-Kingstown || FLAG- 🇻🇨 script.js:170:9
country 187 NAME- United States Minor Outlying Islands || CAPITAL-Washington DC || FLAG- 🇺🇲 script.js:170:9
country 188 NAME- Republic of Belarus || CAPITAL-Minsk || FLAG- 🇧🇾 script.js:170:9
country 189 NAME- Democratic Socialist Republic of Sri Lanka || CAPITAL-Sri Jayawardenepura Kotte || FLAG- 🇱🇰 script.js:170:9
country 190 NAME- Republic of El Salvador || CAPITAL-San Salvador || FLAG- 🇸🇻 script.js:170:9
country 191 NAME- Commonwealth of Australia || CAPITAL-Canberra || FLAG- 🇦🇺 script.js:170:9
country 192 NAME- Bermuda || CAPITAL-Hamilton || FLAG- 🇧🇲 script.js:170:9
country 193 NAME- Republic of Nicaragua || CAPITAL-Managua || FLAG- 🇳🇮 script.js:170:9
country 194 NAME- Federal Republic of Somalia || CAPITAL-Mogadishu || FLAG- 🇸🇴 script.js:170:9
country 195 NAME- Turks and Caicos Islands || CAPITAL-Cockburn Town || FLAG- 🇹🇨 script.js:170:9
country 196 NAME- Federated States of Micronesia || CAPITAL-Palikir || FLAG- 🇫🇲 script.js:170:9
country 197 NAME- State of Palestine || CAPITAL-Ramallah || FLAG- 🇵🇸 script.js:170:9
country 198 NAME- Turkmenistan || CAPITAL-Ashgabat || FLAG- 🇹🇲 script.js:170:9
country 199 NAME- Burkina Faso || CAPITAL-Ouagadougou || FLAG- 🇧🇫 script.js:170:9
country 200 NAME- Republic of Costa Rica || CAPITAL-San José || FLAG- 🇨🇷 script.js:170:9
country 201 NAME- Socialist Republic of Vietnam || CAPITAL-Hanoi || FLAG- 🇻🇳 script.js:170:9
country 202 NAME- Republic of Cameroon || CAPITAL-Yaoundé || FLAG- 🇨🇲 script.js:170:9
country 203 NAME- Guiana || CAPITAL-Cayenne || FLAG- 🇬🇫 script.js:170:9
country 204 NAME- Kingdom of Eswatini || CAPITAL-Mbabane || FLAG- 🇸🇿 script.js:170:9
country 205 NAME- Republic of Zambia || CAPITAL-Lusaka || FLAG- 🇿🇲 script.js:170:9
country 206 NAME- Principality of Liechtenstein || CAPITAL-Vaduz || FLAG- 🇱🇮 script.js:170:9
country 207 NAME- Montenegro || CAPITAL-Podgorica || FLAG- 🇲🇪 script.js:170:9
country 208 NAME- Saint Lucia || CAPITAL-Castries || FLAG- 🇱🇨 script.js:170:9
country 209 NAME- Republic of Uzbekistan || CAPITAL-Tashkent || FLAG- 🇺🇿 script.js:170:9
country 210 NAME- Republic of Chad || CAPITAL-N'Djamena || FLAG- 🇹🇩 script.js:170:9
country 211 NAME- Aruba || CAPITAL-Oranjestad || FLAG- 🇦🇼 script.js:170:9
country 212 NAME- Kingdom of Denmark || CAPITAL-Copenhagen || FLAG- 🇩🇰 script.js:170:9
country 213 NAME- Japan || CAPITAL-Tokyo || FLAG- 🇯🇵 script.js:170:9
country 214 NAME- Republic of Cabo Verde || CAPITAL-Praia || FLAG- 🇨🇻 script.js:170:9
country 215 NAME- Swiss Confederation || CAPITAL-Bern || FLAG- 🇨🇭 script.js:170:9
country 216 NAME- Hong Kong Special Administrative Region of the People's Republic of China || CAPITAL-City of Victoria || FLAG- 🇭🇰 script.js:170:9
country 217 NAME- Republic of Bulgaria || CAPITAL-Sofia || FLAG- 🇧🇬 script.js:170:9
country 218 NAME- Hashemite Kingdom of Jordan || CAPITAL-Amman || FLAG- 🇯🇴 script.js:170:9
country 219 NAME- Republic of the Congo || CAPITAL-Brazzaville || FLAG- 🇨🇬 script.js:170:9
country 220 NAME- Lao People's Democratic Republic || CAPITAL-Vientiane || FLAG- 🇱🇦 script.js:170:9
country 221 NAME- Territory of Norfolk Island || CAPITAL-Kingston || FLAG- 🇳🇫 script.js:170:9
country 222 NAME- Republic of Korea || CAPITAL-Seoul || FLAG- 🇰🇷 script.js:170:9
country 223 NAME- Tunisian Republic || CAPITAL-Tunis || FLAG- 🇹🇳 script.js:170:9
country 224 NAME- Republic of Finland || CAPITAL-Helsinki || FLAG- 🇫🇮 script.js:170:9
country 225 NAME- Republic of Zimbabwe || CAPITAL-Harare || FLAG- 🇿🇼 script.js:170:9
country 226 NAME- Republic of the Maldives || CAPITAL-Malé || FLAG- 🇲🇻 script.js:170:9
country 227 NAME- Republic of Singapore || CAPITAL-Singapore || FLAG- 🇸🇬 script.js:170:9
country 228 NAME- Principality of Monaco || CAPITAL-Monaco || FLAG- 🇲🇨 script.js:170:9
country 229 NAME- Republic of Angola || CAPITAL-Luanda || FLAG- 🇦🇴 script.js:170:9
country 230 NAME- Malaysia || CAPITAL-Kuala Lumpur || FLAG- 🇲🇾 script.js:170:9
country 231 NAME- Grand Duchy of Luxembourg || CAPITAL-Luxembourg || FLAG- 🇱🇺 script.js:170:9
country 232 NAME- Republic of Guinea || CAPITAL-Conakry || FLAG- 🇬🇳 script.js:170:9
country 233 NAME- State of Libya || CAPITAL-Tripoli || FLAG- 🇱🇾 script.js:170:9
country 234 NAME- Kingdom of Spain || CAPITAL-Madrid || FLAG- 🇪🇸 script.js:170:9
country 235 NAME- Republic of Indonesia || CAPITAL-Jakarta || FLAG- 🇮🇩 script.js:170:9
country 236 NAME- Republic of Seychelles || CAPITAL-Victoria || FLAG- 🇸🇨 script.js:170:9
country 237 NAME- Nation of Brunei, Abode of Peace || CAPITAL-Bandar Seri Begawan || FLAG- 🇧🇳 script.js:170:9
country 238 NAME- United Mexican States || CAPITAL-Mexico City || FLAG- 🇲🇽 script.js:170:9
country 239 NAME- Saint Helena, Ascension and Tristan da Cunha || CAPITAL-Jamestown || FLAG- 🇸🇭 script.js:170:9
country 240 NAME- Republic of Sierra Leone || CAPITAL-Freetown || FLAG- 🇸🇱 script.js:170:9
country 241 NAME- Central African Republic || CAPITAL-Bangui || FLAG- 🇨🇫 script.js:170:9
country 242 NAME- Greenland || CAPITAL-Nuuk || FLAG- 🇬🇱 script.js:170:9
country 243 NAME- Republic of Colombia || CAPITAL-Bogotá || FLAG- 🇨🇴 script.js:170:9
country 244 NAME- Independent State of Papua New Guinea || CAPITAL-Port Moresby || FLAG- 🇵🇬 script.js:170:9
country 245 NAME- Falkland Islands || CAPITAL-Stanley || FLAG- 🇫🇰 script.js:170:9
country 246 NAME- Portuguese Republic || CAPITAL-Lisbon || FLAG- 🇵🇹 script.js:170:9
country 247 NAME- Republic of Guinea-Bissau || CAPITAL-Bissau || FLAG- 🇬🇼 script.js:170:9
country 248 NAME- Saint Martin || CAPITAL-Marigot || FLAG- 🇲🇫 script.js:170:9
country 249 NAME- United Republic of Tanzania || CAPITAL-Dodoma || FLAG- 🇹🇿 script.js:170:9


// D CODE
 
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function()
{
var data=JSON.parse(request.response);
var TOTAL=data.map(i=>i.population).reduce((a,b)=>a+b);
console.log(`TOTAL POPULATION OF ALL COUNTRIES IS -${TOTAL}`);}


//  OUTPUT

TOTAL POPULATION OF ALL COUNTRIES IS -7842779650

// E CODE

var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
request.send();
request.onload=function()
{
var data=JSON.parse(request.response);
for(let i in data)
  {
  let currency = data[i].currencies;
  for(let j=0;j<currency.length;j++){
    if(currency[j].code=="USD")
    {
      console.log(data[i].name);
    }
  }
 }
}

// OUTPUT

American Samoa                            
Bonaire, Sint Eustatius and Saba          
British Indian Ocean Territory            
United States Minor Outlying Islands      
Virgin Islands (British)                  
Virgin Islands (U.S.)                     
Cambodia                                  
Ecuador                                   
El Salvador                               
Guam 
Marshall Islands 
Micronesia (Federated States of) 
Northern Mariana Islands 
Palau 
Panama 
Puerto Rico 
Timor-Leste 
Turks and Caicos Islands 
United States of America 
Zimbabwe

