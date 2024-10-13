const timezones = [
        { country: "Alabama", timezone: "America/Chicago" },
    { country: "Alaska", timezone: "America/Anchorage" },
    { country: "Arizona", timezone: "America/Phoenix" },
    { country: "Arkansas", timezone: "America/Chicago" },
    { country: "California", timezone: "America/Los_Angeles" },
    { country: "Colorado", timezone: "America/Denver" },
    { country: "Connecticut", timezone: "America/New_York" },
    { country: "Delaware", timezone: "America/New_York" },
    { country: "Florida", timezone: "America/New_York" },
    { country: "Georgia", timezone: "America/New_York" },
    { country: "Hawaii", timezone: "Pacific/Honolulu" },
    { country: "Idaho", timezone: "America/Denver" },
    { country: "Illinois", timezone: "America/Chicago" },
    { country: "Indiana", timezone: "America/Indianapolis" },
    { country: "Iowa", timezone: "America/Chicago" },
    { country: "Kansas", timezone: "America/Chicago" },
    { country: "Kentucky", timezone: "America/New_York" },
    { country: "Louisiana", timezone: "America/Chicago" },
    { country: "Maine", timezone: "America/New_York" },
    { country: "Maryland", timezone: "America/New_York" },
    { country: "Massachusetts", timezone: "America/New_York" },
    { country: "Michigan", timezone: "America/Detroit" },
    { country: "Minnesota", timezone: "America/Chicago" },
    { country: "Mississippi", timezone: "America/Chicago" },
    { country: "Missouri", timezone: "America/Chicago" },
    { country: "Montana", timezone: "America/Denver" },
    { country: "Nebraska", timezone: "America/Chicago" },
    { country: "Nevada", timezone: "America/Los_Angeles" },
    { country: "New Hampshire", timezone: "America/New_York" },
    { country: "New Jersey", timezone: "America/New_York" },
    { country: "New Mexico", timezone: "America/Denver" },
    { country: "New York", timezone: "America/New_York" },
    { country: "North Carolina", timezone: "America/New_York" },
    { country: "North Dakota", timezone: "America/Chicago" },
    { country: "Ohio", timezone: "America/New_York" },
    { country: "Oklahoma", timezone: "America/Chicago" },
    { country: "Oregon", timezone: "America/Los_Angeles" },
    { country: "Pennsylvania", timezone: "America/New_York" },
    { country: "Rhode Island", timezone: "America/New_York" },
    { country: "South Carolina", timezone: "America/New_York" },
    { country: "South Dakota", timezone: "America/Chicago" },
    { country: "Tennessee", timezone: "America/Chicago" },
    { country: "Texas", timezone: "America/Chicago" },
    { country: "Utah", timezone: "America/Denver" },
    { country: "Vermont", timezone: "America/New_York" },
    { country: "Virginia", timezone: "America/New_York" },
    { country: "Washington", timezone: "America/Los_Angeles" },
    { country: "West Virginia", timezone: "America/New_York" },
    { country: "Wisconsin", timezone: "America/Chicago" },
    { country: "Wyoming", timezone: "America/Denver" },

    { country: "Andorra", timezone: "Europe/Andorra" },
    { country: "UAE (Dubai)", timezone: "Asia/Dubai" },
    { country: "Afghanistan (Kabul)", timezone: "Asia/Kabul" },
    { country: "Albania (Tirane)", timezone: "Europe/Tirane" },
    { country: "Armenia (Yerevan)", timezone: "Asia/Yerevan" },
    { country: "Antarctica (Casey)", timezone: "Antarctica/Casey" },
    { country: "Antarctica (Davis)", timezone: "Antarctica/Davis" },
    { country: "Antarctica (DumontDUrville)", timezone: "Antarctica/DumontDUrville" },
    { country: "Antarctica (Mawson)", timezone: "Antarctica/Mawson" },
    { country: "Antarctica (Palmer)", timezone: "Antarctica/Palmer" },
    { country: "Antarctica (Rothera)", timezone: "Antarctica/Rothera" },
    { country: "Antarctica (Syowa)", timezone: "Antarctica/Syowa" },
    { country: "Antarctica (Troll)", timezone: "Antarctica/Troll" },
    { country: "Antarctica (Vostok)", timezone: "Antarctica/Vostok" },
    { country: "Argentina (Buenos Aires)", timezone: "America/Argentina/Buenos_Aires" },
    { country: "Argentina (Cordoba)", timezone: "America/Argentina/Cordoba" },
    { country: "Argentina (Salta)", timezone: "America/Argentina/Salta" },
    { country: "Argentina (Jujuy)", timezone: "America/Argentina/Jujuy" },
    { country: "Argentina (Tucuman)", timezone: "America/Argentina/Tucuman" },
    { country: "Argentina (Catamarca)", timezone: "America/Argentina/Catamarca" },
    { country: "Argentina (La Rioja)", timezone: "America/Argentina/La_Rioja" },
    { country: "Argentina (San Juan)", timezone: "America/Argentina/San_Juan" },
    { country: "Argentina (Mendoza)", timezone: "America/Argentina/Mendoza" },
    { country: "Argentina (San Luis)", timezone: "America/Argentina/San_Luis" },
    { country: "Argentina (Rio Gallegos)", timezone: "America/Argentina/Rio_Gallegos" },
    { country: "Argentina (Ushuaia)", timezone: "America/Argentina/Ushuaia" },
    { country: "American Samoa (Pago Pago)", timezone: "Pacific/Pago_Pago" },
    { country: "Austria (Vienna)", timezone: "Europe/Vienna" },
    { country: "Australia (Lord Howe)", timezone: "Australia/Lord_Howe" },
    { country: "Antarctica (Macquarie)", timezone: "Antarctica/Macquarie" },
    { country: "Australia (Hobart)", timezone: "Australia/Hobart" },
    { country: "Australia (Currie)", timezone: "Australia/Currie" },
    { country: "Australia (Melbourne)", timezone: "Australia/Melbourne" },
    { country: "Australia (Sydney)", timezone: "Australia/Sydney" },
    { country: "Australia (Broken Hill)", timezone: "Australia/Broken_Hill" },
    { country: "Australia (Brisbane)", timezone: "Australia/Brisbane" },
    { country: "Australia (Lindeman)", timezone: "Australia/Lindeman" },
    { country: "Australia (Adelaide)", timezone: "Australia/Adelaide" },
    { country: "Australia (Darwin)", timezone: "Australia/Darwin" },
    { country: "Australia (Perth)", timezone: "Australia/Perth" },
    { country: "Australia (Eucla)", timezone: "Australia/Eucla" },
    { country: "Azerbaijan (Baku)", timezone: "Asia/Baku" },
    { country: "Barbados", timezone: "America/Barbados" },
    { country: "Bangladesh (Dhaka)", timezone: "Asia/Dhaka" },
    { country: "Belgium (Brussels)", timezone: "Europe/Brussels" },
    { country: "Bulgaria (Sofia)", timezone: "Europe/Sofia" },
    { country: "Bermuda", timezone: "Atlantic/Bermuda" },
    { country: "Brunei", timezone: "Asia/Brunei" },
    { country: "Bolivia (La Paz)", timezone: "America/La_Paz" },
    { country: "Brazil (Noronha)", timezone: "America/Noronha" },
    { country: "Brazil (Belem)", timezone: "America/Belem" },
    { country: "Brazil (Fortaleza)", timezone: "America/Fortaleza" },
    { country: "Brazil (Recife)", timezone: "America/Recife" },
    { country: "Brazil (Araguaina)", timezone: "America/Araguaina" },
    { country: "Brazil (Maceio)", timezone: "America/Maceio" },
    { country: "Brazil (Bahia)", timezone: "America/Bahia" },
    { country: "Brazil (Sao Paulo)", timezone: "America/Sao_Paulo" },
    { country: "Brazil (Campo Grande)", timezone: "America/Campo_Grande" },
    { country: "Brazil (Cuiaba)", timezone: "America/Cuiaba" },
    { country: "Brazil (Santarem)", timezone: "America/Santarem" },
    { country: "Brazil (Porto Velho)", timezone: "America/Porto_Velho" },
    { country: "Brazil (Boa Vista)", timezone: "America/Boa_Vista" },
    { country: "Brazil (Manaus)", timezone: "America/Manaus" },
    { country: "Brazil (Eirunepe)", timezone: "America/Eirunepe" },
    { country: "Brazil (Rio Branco)", timezone: "America/Rio_Branco" },
    { country: "Bahamas (Nassau)", timezone: "America/Nassau" },
    { country: "Bhutan (Thimphu)", timezone: "Asia/Thimphu" },
    { country: "Belarus (Minsk)", timezone: "Europe/Minsk" },
    { country: "Belize", timezone: "America/Belize" },
    { country: "Canada (St Johns)", timezone: "America/St_Johns" },
    { country: "Canada (Halifax)", timezone: "America/Halifax" },
    { country: "Canada (Glace Bay)", timezone: "America/Glace_Bay" },
    { country: "Canada (Moncton)", timezone: "America/Moncton" },
    { country: "Canada (Goose Bay)", timezone: "America/Goose_Bay" },
    { country: "Canada (Blanc-Sablon)", timezone: "America/Blanc-Sablon" },
    { country: "Canada (Toronto)", timezone: "America/Toronto" },
    { country: "Canada (Nipigon)", timezone: "America/Nipigon" },
    { country: "Canada (Thunder Bay)", timezone: "America/Thunder_Bay" },
    { country: "Canada (Iqaluit)", timezone: "America/Iqaluit" },
    { country: "Canada (Pangnirtung)", timezone: "America/Pangnirtung" },
    { country: "Canada (Atikokan)", timezone: "America/Atikokan" },
    { country: "Canada (Winnipeg)", timezone: "America/Winnipeg" },
    { country: "Canada (Rainy River)", timezone: "America/Rainy_River" },
    { country: "Canada (Resolute)", timezone: "America/Resolute" },
    { country: "Canada (Rankin Inlet)", timezone: "America/Rankin_Inlet" },
    { country: "Canada (Regina)", timezone: "America/Regina" },
    { country: "Canada (Swift Current)", timezone: "America/Swift_Current" },
    { country: "Canada (Edmonton)", timezone: "America/Edmonton" },
    { country: "Canada (Cambridge Bay)", timezone: "America/Cambridge_Bay" },
    { country: "Canada (Yellowknife)", timezone: "America/Yellowknife" },
    { country: "Canada (Inuvik)", timezone: "America/Inuvik" },
    { country: "Canada (Creston)", timezone: "America/Creston" },
    { country: "Canada (Dawson Creek)", timezone: "America/Dawson_Creek" },
    { country: "Canada (Fort Nelson)", timezone: "America/Fort_Nelson" },
    { country: "Canada (Vancouver)", timezone: "America/Vancouver" },
    { country: "Canada (Whitehorse)", timezone: "America/Whitehorse" },
    { country: "Canada (Dawson)", timezone: "America/Dawson" },
    { country: "Cocos (Cocos)", timezone: "Indian/Cocos" },
    { country: "Switzerland (Zurich)", timezone: "Europe/Zurich" },
    { country: "Chile (Santiago)", timezone: "America/Santiago" },
    { country: "China (Shanghai)", timezone: "Asia/Shanghai" },
    { country: "China (Beijing)", timezone: "Asia/Shanghai" },
    { country: "China (Chongqing)", timezone: "Asia/Chongqing" },
    { country: "China (Harbin)", timezone: "Asia/Harbin" },
    { country: "China (Hong Kong)", timezone: "Asia/Hong_Kong" },
    { country: "China (Macau)", timezone: "Asia/Macau" },
    { country: "Colombia (Bogota)", timezone: "America/Bogota" },
    { country: "Costa Rica (San Jose)", timezone: "America/Costa_Rica" },
    { country: "Cuba (Havana)", timezone: "America/Havana" },
    { country: "Cyprus (Nicosia)", timezone: "Asia/Nicosia" },
    { country: "Czech Republic (Prague)", timezone: "Europe/Prague" },
    { country: "Denmark (Copenhagen)", timezone: "Europe/Copenhagen" },
    { country: "Dominica", timezone: "America/Dominica" },
    { country: "Dominican Republic (Santo Domingo)", timezone: "America/Santo_Domingo" },
    { country: "Ecuador (Quito)", timezone: "America/Guayaquil" },
    { country: "Egypt (Cairo)", timezone: "Africa/Cairo" },
    { country: "El Salvador", timezone: "America/El_Salvador" },
    { country: "Equatorial Guinea (Malabo)", timezone: "Africa/Malabo" },
    { country: "Estonia (Tallinn)", timezone: "Europe/Tallinn" },
    { country: "Eswatini (Mbabane)", timezone: "Africa/Mbabane" },
    { country: "Fiji (Suva)", timezone: "Pacific/Fiji" },
    { country: "Finland (Helsinki)", timezone: "Europe/Helsinki" },
    { country: "France (Paris)", timezone: "Europe/Paris" },
    { country: "Gabon (Libreville)", timezone: "Africa/Libreville" },
    { country: "Gambia (Banjul)", timezone: "Africa/Banjul" },
    { country: "Georgia (Tbilisi)", timezone: "Asia/Tbilisi" },
    { country: "Germany (Berlin)", timezone: "Europe/Berlin" },
    { country: "Ghana (Accra)", timezone: "Africa/Accra" },
    { country: "Greece (Athens)", timezone: "Europe/Athens" },
    { country: "Greenland (Godthab)", timezone: "America/Nuuk" },
    { country: "Grenada", timezone: "America/Grenada" },
    { country: "Guam (Guam)", timezone: "Pacific/Guam" },
    { country: "Guatemala (Guatemala City)", timezone: "America/Guatemala" },
    { country: "Guyana (Georgetown)", timezone: "America/Guyana" },
    { country: "Honduras (Tegucigalpa)", timezone: "America/Tegucigalpa" },
    { country: "Hungary (Budapest)", timezone: "Europe/Budapest" },
    { country: "Iceland (Reykjavik)", timezone: "Atlantic/Reykjavik" },
    { country: "India (Delhi)", timezone: "Asia/Kolkata" },
    { country: "Indonesia (Jakarta)", timezone: "Asia/Jakarta" },
    { country: "Indonesia (Bali)", timezone: "Asia/Makassar" },
    { country: "Indonesia (Makassar)", timezone: "Asia/Makassar" },
    { country: "Indonesia (Jayapura)", timezone: "Asia/Jayapura" },
    { country: "Iran (Tehran)", timezone: "Asia/Tehran" },
    { country: "Iraq (Baghdad)", timezone: "Asia/Baghdad" },
    { country: "Ireland (Dublin)", timezone: "Europe/Dublin" },
    { country: "Israel (Jerusalem)", timezone: "Asia/Jerusalem" },
    { country: "Italy (Rome)", timezone: "Europe/Rome" },
    { country: "Jamaica", timezone: "America/Jamaica" },
    { country: "Japan (Tokyo)", timezone: "Asia/Tokyo" },
    { country: "Kazakhstan (Almaty)", timezone: "Asia/Almaty" },
    { country: "Kazakhstan (Astana)", timezone: "Asia/Qyzylorda" },
    { country: "Kazakhstan (Oral)", timezone: "Asia/Oral" },
    { country: "Kenya (Nairobi)", timezone: "Africa/Nairobi" },
    { country: "Kiribati (Phoenix Islands)", timezone: "Pacific/Funafuti" },
    { country: "Kiribati (Line Islands)", timezone: "Pacific/Kiritimati" },
    { country: "Kuwait (Kuwait City)", timezone: "Asia/Kuwait" },
    { country: "Kyrgyzstan (Bishkek)", timezone: "Asia/Bishkek" },
    { country: "Latvia (Riga)", timezone: "Europe/Riga" },
    { country: "Lebanon (Beirut)", timezone: "Asia/Beirut" },
    { country: "Lesotho (Maseru)", timezone: "Africa/Maseru" },
    { country: "Liberia (Monrovia)", timezone: "Africa/Monrovia" },
    { country: "Libya (Tripoli)", timezone: "Africa/Tripoli" },
    { country: "Lithuania (Vilnius)", timezone: "Europe/Vilnius" },
    { country: "Luxembourg", timezone: "Europe/Luxembourg" },
    { country: "Malaysia (Kuala Lumpur)", timezone: "Asia/Kuala_Lumpur" },
    { country: "Malawi (Lilongwe)", timezone: "Africa/Blantyre" },
    { country: "Maldives (Malé)", timezone: "Indian/Maldives" },
    { country: "Mali (Bamako)", timezone: "Africa/Bamako" },
    { country: "Malta", timezone: "Europe/Malta" },
    { country: "Marshall Islands (Majuro)", timezone: "Pacific/Majuro" },
    { country: "Mauritania (Nouakchott)", timezone: "Africa/Nouakchott" },
    { country: "Mauritius (Port Louis)", timezone: "Indian/Mauritius" },
    { country: "Mexico (Chihuahua)", timezone: "America/Chihuahua" },
    { country: "Mexico (Mazatlan)", timezone: "America/Mazatlan" },
    { country: "Mexico (Hermosillo)", timezone: "America/Hermosillo" },
    { country: "Mexico (Mexico City)", timezone: "America/Mexico_City" },
    { country: "Mexico (Monterrey)", timezone: "America/Monterrey" },
    { country: "Mexico (Cancun)", timezone: "America/Cancun" },
    { country: "Micronesia (Chuuk)", timezone: "Pacific/Chuuk" },
    { country: "Micronesia (Pohnpei)", timezone: "Pacific/Pohnpei" },
    { country: "Micronesia (Kosrae)", timezone: "Pacific/Kosrae" },
    { country: "Moldova (Chisinau)", timezone: "Europe/Chisinau" },
    { country: "Monaco", timezone: "Europe/Monaco" },
    { country: "Mongolia (Ulaanbaatar)", timezone: "Asia/Ulaanbaatar" },
    { country: "Montenegro (Podgorica)", timezone: "Europe/Podgorica" },
    { country: "Morocco (Casablanca)", timezone: "Africa/Casablanca" },
    { country: "Mozambique (Maputo)", timezone: "Africa/Maputo" },
    { country: "Myanmar (Yangon)", timezone: "Asia/Yangon" },
    { country: "Namibia (Windhoek)", timezone: "Africa/Windhoek" },
    { country: "Nauru", timezone: "Pacific/Nauru" },
    { country: "Nepal (Kathmandu)", timezone: "Asia/Kathmandu" },
    { country: "Netherlands (Amsterdam)", timezone: "Europe/Amsterdam" },
    { country: "New Zealand (Auckland)", timezone: "Pacific/Auckland" },
    { country: "Nicaragua (Managua)", timezone: "America/Managua" },
    { country: "Niger (Niamey)", timezone: "Africa/Niamey" },
    { country: "Nigeria (Lagos)", timezone: "Africa/Lagos" },
    { country: "North Korea (Pyongyang)", timezone: "Asia/Pyongyang" },
    { country: "North Macedonia (Skopje)", timezone: "Europe/Skopje" },
    { country: "Norway (Oslo)", timezone: "Europe/Oslo" },
    { country: "Oman (Muscat)", timezone: "Asia/Muscat" },
    { country: "Pakistan (Karachi)", timezone: "Asia/Karachi" },
    { country: "Palau", timezone: "Pacific/Palau" },
    { country: "Panama (Panama City)", timezone: "America/Panama" },
    { country: "Papua New Guinea (Port Moresby)", timezone: "Pacific/Port_Moresby" },
    { country: "Paraguay (Asuncion)", timezone: "America/Asuncion" },
    { country: "Peru (Lima)", timezone: "America/Lima" },
    { country: "Philippines (Manila)", timezone: "Asia/Manila" },
    { country: "Poland (Warsaw)", timezone: "Europe/Warsaw" },
    { country: "Portugal (Lisbon)", timezone: "Europe/Lisbon" },
    { country: "Puerto Rico", timezone: "America/Puerto_Rico" },
    { country: "Qatar (Doha)", timezone: "Asia/Qatar" },
    { country: "Romania (Bucharest)", timezone: "Europe/Bucharest" },
    { country: "Russia (Moscow)", timezone: "Europe/Moscow" },
    { country: "Rwanda (Kigali)", timezone: "Africa/Kigali" },
    { country: "Saudi Arabia (Riyadh)", timezone: "Asia/Riyadh" },
    { country: "Senegal (Dakar)", timezone: "Africa/Dakar" },
    { country: "Serbia (Belgrade)", timezone: "Europe/Belgrade" },
    { country: "Singapore (Singapore)", timezone: "Asia/Singapore" },
    { country: "Slovakia (Bratislava)", timezone: "Europe/Bratislava" },
    { country: "Slovenia (Ljubljana)", timezone: "Europe/Ljubljana" },
    { country: "Solomon Islands", timezone: "Pacific/Guadalcanal" },
    { country: "South Africa (Pretoria)", timezone: "Africa/Johannesburg" },
    { country: "South Korea (Seoul)", timezone: "Asia/Seoul" },
    { country: "South Sudan (Juba)", timezone: "Africa/Juba" },
    { country: "Spain (Madrid)", timezone: "Europe/Madrid" },
    { country: "Sri Lanka (Colombo)", timezone: "Asia/Colombo" },
    { country: "Sudan (Khartoum)", timezone: "Africa/Khartoum" },
    { country: "Sweden (Stockholm)", timezone: "Europe/Stockholm" },
    { country: "Switzerland (Zurich)", timezone: "Europe/Zurich" },
    { country: "Taiwan (Taipei)", timezone: "Asia/Taipei" },
    { country: "Tajikistan (Dushanbe)", timezone: "Asia/Dushanbe" },
    { country: "Tanzania (Dodoma)", timezone: "Africa/Dodoma" },
    { country: "Thailand (Bangkok)", timezone: "Asia/Bangkok" },
    { country: "Togo (Lome)", timezone: "Africa/Lome" },
    { country: "Tonga (Nuku'alofa)", timezone: "Pacific/Tongatapu" },
    { country: "Trinidad and Tobago", timezone: "America/Port_of_Spain" },
    { country: "Tunisia (Tunis)", timezone: "Africa/Tunis" },
    { country: "Turkey (Istanbul)", timezone: "Europe/Istanbul" },
    { country: "Turkmenistan (Ashgabat)", timezone: "Asia/Ashgabat" },
    { country: "Tuvalu", timezone: "Pacific/Funafuti" },
    { country: "Uganda (Kampala)", timezone: "Africa/Kampala" },
    { country: "Ukraine (Kyiv)", timezone: "Europe/Kyiv" },
    { country: "United Arab Emirates (Dubai)", timezone: "Asia/Dubai" },
    { country: "United Kingdom (London)", timezone: "Europe/London" },
    { country: "United States (Los Angeles)", timezone: "America/Los_Angeles" },
    { country: "United States (New York)", timezone: "America/New_York" },
    { country: "United States (Chicago)", timezone: "America/Chicago" },
    { country: "Uruguay (Montevideo)", timezone: "America/Montevideo" },
    { country: "Uzbekistan (Tashkent)", timezone: "Asia/Tashkent" },
    { country: "Vanuatu (Port Vila)", timezone: "Pacific/Efate" },
    { country: "Vatican City", timezone: "Europe/Vatican" },
    { country: "Venezuela (Caracas)", timezone: "America/Caracas" },
    { country: "Vietnam (Hanoi)", timezone: "Asia/Hanoi" },
    { country: "Yemen (Sana'a)", timezone: "Asia/Aden" },
    { country: "Zambia (Lusaka)", timezone: "Africa/Lusaka" },
    { country: "Zimbabwe (Harare)", timezone: "Africa/Harare" }
  ];
let favoriteTimeZones=[]

let is12hour= true 
const timeZonelist = document.getElementById('Timezone-list')
const favoriteTimeZonesList=document.getElementById('Fevorite-timezones');

function getCurrentDateTime(timezone ) {
  const date = new Date().toLocaleString("en-US" , {
timeZone: timezone,
hour12:is12hour,
})
  return date
 
  }

function toggleTime(isChecked){
console.log(isChecked)
is12hour = isChecked
loadfavoriteTimeZoneList()
}

function updeteCurrentDateTime(elementId ,timezone){
  const CurrentDateTime=getCurrentDateTime(timezone )
 document.getElementById(elementId).textContent=CurrentDateTime
}

function loadTimeZoneList(List){
  timeZonelist.innerHTML=''
 List.forEach((item, index)=>{
  //console.log(itme);
    const row = document.createElement('tr')
    row.innerHTML=`
     <td> ${index+1}</td>
    <td> ${item.country}</td>
      <td> ${item.timezone}</td>
        <td>
        ${isExistTimeZone(index)?`<span> Exist </span>` : `
        <button class="add-btn" onclick="addfavorite(${index})" >    ADD    </button> 
        ` }

        </td>  
    `
    timeZonelist.appendChild(row)
  })
}

//search

function searchTimeZone(searchText){
const filters= timezones.filter((item) =>{
  return item.country.toLowerCase().includes(searchText.toLowerCase())
})
loadTimeZoneList(filters)
}


//Touch Add &  Button 

function addfavorite(index){
  //alert(index)
  const item=timezones[index]
   favoriteTimeZones.push(item)
   loadfavoriteTimeZoneList()
loadTimeZoneList(timezones)

}
//Touch   Remove  Button 
function removefavarite(index){
    //alert(index)
favoriteTimeZones.splice(index , 1)
 loadfavoriteTimeZoneList()
 loadTimeZoneList(timezones)
}

function loadfavoriteTimeZoneList(){
favoriteTimeZonesList.innerHTML='' 
if(favoriteTimeZones.length=== 0){
const row = document.createElement('li')
row.innerHTML= `<div class="text"> No favorite Time Zones</div>`
favoriteTimeZonesList.appendChild(row)
}else{
  favoriteTimeZones.forEach((item, index)=>{

const row = document.createElement('li')
row.innerHTML=  ` ${item.country} 
<span id="time.${index}">${getCurrentDateTime(item.timezone)}</span>
<button class="remove-btn" onclick="removefavarite(${index})">   Remove   </button>  `
favoriteTimeZonesList.appendChild(row)
})
}

}
function isExistTimeZone(index){
const result= favoriteTimeZones.some((fav)=>{
return fav.timezone=== timezones[index].timezone
})
return result
}

function updetefavoriteDateTime(){
  favoriteTimeZones.forEach((item , index )=>{
    updeteCurrentDateTime(`time.${index}`, item.timezone)
  })
}


setInterval(()=>{
	updeteCurrentDateTime('current-datetime' , Intl.DateTimeFormat().resolvedOptions().timezone)
updetefavoriteDateTime()
} ,  1000);

updeteCurrentDateTime('current-datetime' , Intl.DateTimeFormat().resolvedOptions().timezone)
loadTimeZoneList(timezones)
loadfavoriteTimeZoneList()
