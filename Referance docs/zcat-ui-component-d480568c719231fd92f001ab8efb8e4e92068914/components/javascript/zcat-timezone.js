import { Component } from '@slyte/component';
import { prop } from '@slyte/core';
import { HelperUtils } from '../../mixins/helper-utils.js';

class ZcatTimezone extends Component {

  init(){
    const zcatProp = this.getData('zcatProp');
    const initialSelected = 'Etc/GMT+12';
    // const initialSelected = 'kamali3';
    const AllTimezones = [
      {
        name: '(GMT -12:00) GMT-12:00 (Etc/GMT+12)',
        value: 'Etc/GMT+12'
      },
      {
        name: '(GMT -11:00) Niue Time (Pacific/Niue)',
        value: 'Pacific/Niue'
      },
      {
        name: '(GMT -11:00) Samoa Standard Time (Pacific/Pago_Pago)',
        value: 'Pacific/Pago_Pago'
      },
      {
        name:
          '(GMT -10:00) Hawaii-Aleutian Standard Time (Pacific/Honolulu)',
        value: 'Pacific/Honolulu'
      },
      {
        name:
          '(GMT -10:00) Cook Islands Standard Time (Pacific/Rarotonga)',
        value: 'Pacific/Rarotonga'
      },
      {
        name: '(GMT -10:00) Tahiti Time (Pacific/Tahiti)',
        value: 'Pacific/Tahiti'
      },
      {
        name: '(GMT -09:30) Marquesas Time (Pacific/Marquesas)',
        value: 'Pacific/Marquesas'
      },
      {
        name:
          '(GMT -09:00) Hawaii-Aleutian Daylight Time (America/Adak)',
        value: 'America/Adak'
      },
      {
        name: '(GMT -09:00) Gambier Time (Pacific/Gambier)',
        value: 'Pacific/Gambier'
      },
      {
        name: '(GMT -08:00) Alaska Daylight Time (America/Anchorage)',
        value: 'America/Anchorage'
      },
      {
        name: '(GMT -08:00) Alaska Daylight Time (America/Juneau)',
        value: 'America/Juneau'
      },
      {
        name: '(GMT -08:00) Alaska Daylight Time (America/Metlakatla)',
        value: 'America/Metlakatla'
      },
      {
        name: '(GMT -08:00) Alaska Daylight Time (America/Nome)',
        value: 'America/Nome'
      },
      {
        name: '(GMT -08:00) Alaska Daylight Time (America/Sitka)',
        value: 'America/Sitka'
      },
      {
        name: '(GMT -08:00) Alaska Daylight Time (America/Yakutat)',
        value: 'America/Yakutat'
      },
      {
        name: '(GMT -08:00) Pitcairn Time (Pacific/Pitcairn)',
        value: 'Pacific/Pitcairn'
      },
      {
        name: '(GMT -07:00) Pacific Standard Time (America/Dawson)',
        value: 'America/Dawson'
      },
      {
        name:
          '(GMT -07:00) Mountain Standard Time (America/Dawson_Creek)',
        value: 'America/Dawson_Creek'
      },
      {
        name:
          '(GMT -07:00) Mountain Standard Time (America/Fort_Nelson)',
        value: 'America/Fort_Nelson'
      },
      {
        name:
          '(GMT -07:00) Mexican Pacific Standard Time (America/Hermosillo)',
        value: 'America/Hermosillo'
      },
      {
        name:
          '(GMT -07:00) Pacific Daylight Time (America/Los_Angeles)',
        value: 'America/Los_Angeles'
      },
      {
        name:
          '(GMT -07:00) Mexican Pacific Standard Time (America/Mazatlan)',
        value: 'America/Mazatlan'
      },
      {
        name: '(GMT -07:00) Mountain Standard Time (America/Phoenix)',
        value: 'America/Phoenix'
      },
      {
        name: '(GMT -07:00) Pacific Daylight Time (America/Tijuana)',
        value: 'America/Tijuana'
      },
      {
        name: '(GMT -07:00) Pacific Daylight Time (America/Vancouver)',
        value: 'America/Vancouver'
      },
      {
        name:
          '(GMT -07:00) Pacific Standard Time (America/Whitehorse)',
        value: 'America/Whitehorse'
      },
      {
        name: '(GMT -07:00) Mountain Standard Time (MST)',
        value: 'MST'
      },
      {
        name: '(GMT -07:00) Pacific Daylight Time (PST)',
        value: 'PST'
      },
      {
        name: '(GMT -06:00) Central Standard Time (America/Bahia_Banderas)',
        value: 'America/Bahia_Banderas'
      },
      {
        name: '(GMT -06:00) Central Standard Time (America/Belize)',
        value: 'America/Belize'
      },
      {
        name: '(GMT -06:00) Mountain Daylight Time (America/Boise)',
        value: 'America/Boise'
      },
      {
        name:
          '(GMT -06:00) Mountain Daylight Time (America/Cambridge_Bay)',
        value: 'America/Cambridge_Bay'
      },
      {
        name: '(GMT -06:00) Central Standard Time (America/Chihuahua)',
        value: 'America/Chihuahua'
      },
      {
        name:
          '(GMT -06:00) Mountain Daylight Time (America/Ciudad_Juarez)',
        value: 'America/Ciudad_Juarez'
      },
      {
        name:
          '(GMT -06:00) Central Standard Time (America/Costa_Rica)',
        value: 'America/Costa_Rica'
      },
      {
        name: '(GMT -06:00) Mountain Daylight Time (America/Denver)',
        value: 'America/Denver'
      },
      {
        name: '(GMT -06:00) Mountain Daylight Time (America/Edmonton)',
        value: 'America/Edmonton'
      },
      {
        name:
          '(GMT -06:00) Central Standard Time (America/El_Salvador)',
        value: 'America/El_Salvador'
      },
      {
        name: '(GMT -06:00) Central Standard Time (America/Guatemala)',
        value: 'America/Guatemala'
      },
      {
        name: '(GMT -06:00) Mountain Daylight Time (America/Inuvik)',
        value: 'America/Inuvik'
      },
      {
        name: '(GMT -06:00) Central Standard Time (America/Managua)',
        value: 'America/Managua'
      },
      {
        name: '(GMT -06:00) Central Standard Time (America/Merida)',
        value: 'America/Merida'
      },
      {
        name:
          '(GMT -06:00) Central Standard Time (America/Mexico_City)',
        value: 'America/Mexico_City'
      },
      {
        name: '(GMT -06:00) Central Standard Time (America/Monterrey)',
        value: 'America/Monterrey'
      },
      {
        name: '(GMT -06:00) Central Standard Time (America/Regina)',
        value: 'America/Regina'
      },
      {
        name:
          '(GMT -06:00) Central Standard Time (America/Swift_Current)',
        value: 'America/Swift_Current'
      },
      {
        name:
          '(GMT -06:00) Central Standard Time (America/Tegucigalpa)',
        value: 'America/Tegucigalpa'
      },
      {
        name: '(GMT -06:00) Galapagos Time (Pacific/Galapagos)',
        value: 'Pacific/Galapagos'
      },
      {
        name: '(GMT -05:00) Colombia Standard Time (America/Bogota)',
        value: 'America/Bogota'
      },
      {
        name: '(GMT -05:00) Eastern Standard Time (America/Cancun)',
        value: 'America/Cancun'
      },
      {
        name: '(GMT -05:00) Central Daylight Time (America/Chicago)',
        value: 'America/Chicago'
      },
      {
        name: '(GMT -05:00) Acre Standard Time (America/Eirunepe)',
        value: 'America/Eirunepe'
      },
      {
        name: '(GMT -05:00) Ecuador Time (America/Guayaquil)',
        value: 'America/Guayaquil'
      },
      {
        name:
          '(GMT -05:00) Central Daylight Time (America/Indiana/Knox)',
        value: 'America/Indiana/Knox'
      },
      {
        name:
          '(GMT -05:00) Central Daylight Time (America/Indiana/Tell_City)',
        value: 'America/Indiana/Tell_City'
      },
      {
        name: '(GMT -05:00) Eastern Standard Time (America/Jamaica)',
        value: 'America/Jamaica'
      },
      {
        name: '(GMT -05:00) Peru Standard Time (America/Lima)',
        value: 'America/Lima'
      },
      {
        name: '(GMT -05:00) Central Daylight Time (America/Matamoros)',
        value: 'America/Matamoros'
      },
      {
        name: '(GMT -05:00) Central Daylight Time (America/Menominee)',
        value: 'America/Menominee'
      },
      {
        name:
          '(GMT -05:00) Central Daylight Time (America/North_Dakota/Beulah)',
        value: 'America/North_Dakota/Beulah'
      },
      {
        name:
          '(GMT -05:00) Central Daylight Time (America/North_Dakota/Center)',
        value: 'America/North_Dakota/Center'
      },
      {
        name:
          '(GMT -05:00) Central Daylight Time (America/North_Dakota/New_Salem)',
        value: 'America/North_Dakota/New_Salem'
      },
      {
        name: '(GMT -05:00) Central Daylight Time (America/Ojinaga)',
        value: 'America/Ojinaga'
      },
      {
        name: '(GMT -05:00) Eastern Standard Time (America/Panama)',
        value: 'America/Panama'
      },
      {
        name:
          '(GMT -05:00) Central Daylight Time (America/Rankin_Inlet)',
        value: 'America/Rankin_Inlet'
      },
      {
        name: '(GMT -05:00) Central Daylight Time (America/Resolute)',
        value: 'America/Resolute'
      },
      {
        name: '(GMT -05:00) Acre Standard Time (America/Rio_Branco)',
        value: 'America/Rio_Branco'
      },
      {
        name: '(GMT -05:00) Central Daylight Time (America/Winnipeg)',
        value: 'America/Winnipeg'
      },
      {
        name: '(GMT -05:00) Central Daylight Time (CST6CDT)',
        value: 'CST6CDT'
      },
      {
        name:
          '(GMT -05:00) Easter Island Summer Time (Pacific/Easter)',
        value: 'Pacific/Easter'
      },
      {
        name: '(GMT -04:00) Paraguay Standard Time (America/Asuncion)',
        value: 'America/Asuncion'
      },
      {
        name: '(GMT -04:00) Atlantic Standard Time (America/Barbados)',
        value: 'America/Barbados'
      },
      {
        name: '(GMT -04:00) Amazon Standard Time (America/Boa_Vista)',
        value: 'America/Boa_Vista'
      },
      {
        name:
          '(GMT -04:00) Amazon Standard Time (America/Campo_Grande)',
        value: 'America/Campo_Grande'
      },
      {
        name: '(GMT -04:00) Venezuela Time (America/Caracas)',
        value: 'America/Caracas'
      },
      {
        name: '(GMT -04:00) Amazon Standard Time (America/Cuiaba)',
        value: 'America/Cuiaba'
      },
      {
        name: '(GMT -04:00) Eastern Daylight Time (America/Detroit)',
        value: 'America/Detroit'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Grand_Turk)',
        value: 'America/Grand_Turk'
      },
      {
        name: '(GMT -04:00) Guyana Time (America/Guyana)',
        value: 'America/Guyana'
      },
      {
        name: '(GMT -04:00) Cuba Daylight Time (America/Havana)',
        value: 'America/Havana'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Indiana/Indianapolis)',
        value: 'America/Indiana/Indianapolis'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Indiana/Marengo)',
        value: 'America/Indiana/Marengo'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Indiana/Petersburg)',
        value: 'America/Indiana/Petersburg'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Indiana/Vevay)',
        value: 'America/Indiana/Vevay'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Indiana/Vincennes)',
        value: 'America/Indiana/Vincennes'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Indiana/Winamac)',
        value: 'America/Indiana/Winamac'
      },
      {
        name: '(GMT -04:00) Eastern Daylight Time (America/Iqaluit)',
        value: 'America/Iqaluit'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Kentucky/Louisville)',
        value: 'America/Kentucky/Louisville'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Kentucky/Monticello)',
        value: 'America/Kentucky/Monticello'
      },
      {
        name: '(GMT -04:00) Bolivia Time (America/La_Paz)',
        value: 'America/La_Paz'
      },
      {
        name: '(GMT -04:00) Amazon Standard Time (America/Manaus)',
        value: 'America/Manaus'
      },
      {
        name:
          '(GMT -04:00) Atlantic Standard Time (America/Martinique)',
        value: 'America/Martinique'
      },
      {
        name: '(GMT -04:00) Eastern Daylight Time (America/New_York)',
        value: 'America/New_York'
      },
      {
        name:
          '(GMT -04:00) Eastern Daylight Time (America/Port-au-Prince)',
        value: 'America/Port-au-Prince'
      },
      {
        name:
          '(GMT -04:00) Amazon Standard Time (America/Porto_Velho)',
        value: 'America/Porto_Velho'
      },
      {
        name:
          '(GMT -04:00) Atlantic Standard Time (America/Puerto_Rico)',
        value: 'America/Puerto_Rico'
      },
      {
        name:
          '(GMT -04:00) Atlantic Standard Time (America/Santo_Domingo)',
        value: 'America/Santo_Domingo'
      },
      {
        name: '(GMT -04:00) Eastern Daylight Time (America/Toronto)',
        value: 'America/Toronto'
      },
      {
        name: '(GMT -04:00) Atlantic Standard Time (PRT)',
        value: 'PRT'
      },
      {
        name:
          '(GMT -03:00) Brasilia Standard Time (America/Araguaina)',
        value: 'America/Araguaina'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Buenos_Aires)',
        value: 'America/Argentina/Buenos_Aires'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Catamarca)',
        value: 'America/Argentina/Catamarca'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Cordoba)',
        value: 'America/Argentina/Cordoba'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Jujuy)',
        value: 'America/Argentina/Jujuy'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/La_Rioja)',
        value: 'America/Argentina/La_Rioja'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Mendoza)',
        value: 'America/Argentina/Mendoza'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Rio_Gallegos)',
        value: 'America/Argentina/Rio_Gallegos'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Salta)',
        value: 'America/Argentina/Salta'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/San_Juan)',
        value: 'America/Argentina/San_Juan'
      },
      {
        name:
          '(GMT -03:00) Western Argentina Standard Time (America/Argentina/San_Luis)',
        value: 'America/Argentina/San_Luis'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Tucuman)',
        value: 'America/Argentina/Tucuman'
      },
      {
        name:
          '(GMT -03:00) Argentina Standard Time (America/Argentina/Ushuaia)',
        value: 'America/Argentina/Ushuaia'
      },
      {
        name: '(GMT -03:00) Brasilia Standard Time (America/Bahia)',
        value: 'America/Bahia'
      },
      {
        name: '(GMT -03:00) Brasilia Standard Time (America/Belem)',
        value: 'America/Belem'
      },
      {
        name: '(GMT -03:00) French Guiana Time (America/Cayenne)',
        value: 'America/Cayenne'
      },
      {
        name:
          '(GMT -03:00) Brasilia Standard Time (America/Fortaleza)',
        value: 'America/Fortaleza'
      },
      {
        name:
          '(GMT -03:00) Atlantic Daylight Time (America/Glace_Bay)',
        value: 'America/Glace_Bay'
      },
      {
        name:
          '(GMT -03:00) Atlantic Daylight Time (America/Goose_Bay)',
        value: 'America/Goose_Bay'
      },
      {
        name: '(GMT -03:00) Atlantic Daylight Time (America/Halifax)',
        value: 'America/Halifax'
      },
      {
        name: '(GMT -03:00) Brasilia Standard Time (America/Maceio)',
        value: 'America/Maceio'
      },
      {
        name: '(GMT -03:00) Atlantic Daylight Time (America/Moncton)',
        value: 'America/Moncton'
      },
      {
        name:
          '(GMT -03:00) Uruguay Standard Time (America/Montevideo)',
        value: 'America/Montevideo'
      },
      {
        name: '(GMT -03:00) Suriname Time (America/Paramaribo)',
        value: 'America/Paramaribo'
      },
      {
        name:
          '(GMT -03:00) Punta Arenas Standard Time (America/Punta_Arenas)',
        value: 'America/Punta_Arenas'
      },
      {
        name: '(GMT -03:00) Brasilia Standard Time (America/Recife)',
        value: 'America/Recife'
      },
      {
        name: '(GMT -03:00) Brasilia Standard Time (America/Santarem)',
        value: 'America/Santarem'
      },
      {
        name: '(GMT -03:00) Chile Summer Time (America/Santiago)',
        value: 'America/Santiago'
      },
      {
        name:
          '(GMT -03:00) Brasilia Standard Time (America/Sao_Paulo)',
        value: 'America/Sao_Paulo'
      },
      {
        name: '(GMT -03:00) Atlantic Daylight Time (America/Thule)',
        value: 'America/Thule'
      },
      {
        name: '(GMT -03:00) Chile Time (Antarctica/Palmer)',
        value: 'Antarctica/Palmer'
      },
      {
        name: '(GMT -03:00) Rothera Time (Antarctica/Rothera)',
        value: 'Antarctica/Rothera'
      },
      {
        name: '(GMT -03:00) Atlantic Daylight Time (Atlantic/Bermuda)',
        value: 'Atlantic/Bermuda'
      },
      {
        name:
          '(GMT -03:00) Falkland Islands Standard Time (Atlantic/Stanley)',
        value: 'Atlantic/Stanley'
      },
      {
        name: '(GMT -03:00) Atlantic Daylight Time (SystemV/AST4ADT)',
        value: 'SystemV/AST4ADT'
      },
      {
        name:
          '(GMT -02:30) Newfoundland Daylight Time (America/St_Johns)',
        value: 'America/St_Johns'
      },
      {
        name:
          '(GMT -02:00) St. Pierre & Miquelon Daylight Time (America/Miquelon)',
        value: 'America/Miquelon'
      },
      {
        name:
          '(GMT -02:00) Fernando de Noronha Standard Time (America/Noronha)',
        value: 'America/Noronha'
      },
      {
        name:
          '(GMT -02:00) South Georgia Time (Atlantic/South_Georgia)',
        value: 'Atlantic/South_Georgia'
      },
      {
        name:
          '(GMT -01:00) Western Greenland Summer Time (America/Nuuk)',
        value: 'America/Nuuk'
      },
      {
        name:
          '(GMT -01:00) East Greenland Summer Time (America/Scoresbysund)',
        value: 'America/Scoresbysund'
      },
      {
        name:
          '(GMT -01:00) Cape Verde Standard Time (Atlantic/Cape_Verde)',
        value: 'Atlantic/Cape_Verde'
      },
      {
        name: '(GMT +00:00) Greenwich Mean Time (Africa/Abidjan)',
        value: 'Africa/Abidjan'
      },
      {
        name: '(GMT +00:00) Greenwich Mean Time (Africa/Bissau)',
        value: 'Africa/Bissau'
      },
      {
        name: '(GMT +00:00) Greenwich Mean Time (Africa/Monrovia)',
        value: 'Africa/Monrovia'
      },
      {
        name:
          '(GMT +00:00) West Africa Standard Time (Africa/Sao_Tome)',
        value: 'Africa/Sao_Tome'
      },
      {
        name:
          '(GMT +00:00) Greenwich Mean Time (America/Danmarkshavn)',
        value: 'America/Danmarkshavn'
      },
      {
        name: '(GMT +00:00) Azores Summer Time (Atlantic/Azores)',
        value: 'Atlantic/Azores'
      },
      {
        name: '(GMT +00:00) Greenwich Mean Time (GMT)',
        value: 'GMT'
      },
      {
        name:
          '(GMT +01:00) Central European Standard Time (Africa/Algiers)',
        value: 'Africa/Algiers'
      },
      {
        name:
          '(GMT +01:00) Western European Summer Time (Africa/Casablanca)',
        value: 'Africa/Casablanca'
      },
      {
        name:
          '(GMT +01:00) Western European Summer Time (Africa/El_Aaiun)',
        value: 'Africa/El_Aaiun'
      },
      {
        name: '(GMT +01:00) West Africa Standard Time (Africa/Lagos)',
        value: 'Africa/Lagos'
      },
      {
        name:
          '(GMT +01:00) West Africa Standard Time (Africa/Ndjamena)',
        value: 'Africa/Ndjamena'
      },
      {
        name:
          '(GMT +01:00) Central European Standard Time (Africa/Tunis)',
        value: 'Africa/Tunis'
      },
      {
        name:
          '(GMT +01:00) Western European Summer Time (Atlantic/Canary)',
        value: 'Atlantic/Canary'
      },
      {
        name:
          '(GMT +01:00) Western European Summer Time (Atlantic/Faroe)',
        value: 'Atlantic/Faroe'
      },
      {
        name:
          '(GMT +01:00) Western European Summer Time (Atlantic/Madeira)',
        value: 'Atlantic/Madeira'
      },
      {
        name: '(GMT +01:00) Irish Standard Time (Europe/Dublin)',
        value: 'Europe/Dublin'
      },
      {
        name:
          '(GMT +01:00) Western European Summer Time (Europe/Lisbon)',
        value: 'Europe/Lisbon'
      },
      {
        name: '(GMT +01:00) British Summer Time (Europe/London)',
        value: 'Europe/London'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Africa/Ceuta)',
        value: 'Africa/Ceuta'
      },
      {
        name:
          '(GMT +02:00) South Africa Standard Time (Africa/Johannesburg)',
        value: 'Africa/Johannesburg'
      },
      {
        name: '(GMT +02:00) East Africa Time (Africa/Juba)',
        value: 'Africa/Juba'
      },
      {
        name: '(GMT +02:00) Central Africa Time (Africa/Khartoum)',
        value: 'Africa/Khartoum'
      },
      {
        name: '(GMT +02:00) Central Africa Time (Africa/Maputo)',
        value: 'Africa/Maputo'
      },
      {
        name:
          '(GMT +02:00) Eastern European Standard Time (Africa/Tripoli)',
        value: 'Africa/Tripoli'
      },
      {
        name: '(GMT +02:00) Western African Time (Africa/Windhoek)',
        value: 'Africa/Windhoek'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Antarctica/Troll)',
        value: 'Antarctica/Troll'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Andorra)',
        value: 'Europe/Andorra'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Belgrade)',
        value: 'Europe/Belgrade'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Berlin)',
        value: 'Europe/Berlin'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Brussels)',
        value: 'Europe/Brussels'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Budapest)',
        value: 'Europe/Budapest'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Gibraltar)',
        value: 'Europe/Gibraltar'
      },
      {
        name:
          '(GMT +02:00) Eastern European Standard Time (Europe/Kaliningrad)',
        value: 'Europe/Kaliningrad'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Madrid)',
        value: 'Europe/Madrid'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Malta)',
        value: 'Europe/Malta'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Paris)',
        value: 'Europe/Paris'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Prague)',
        value: 'Europe/Prague'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Rome)',
        value: 'Europe/Rome'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Tirane)',
        value: 'Europe/Tirane'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Vienna)',
        value: 'Europe/Vienna'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Warsaw)',
        value: 'Europe/Warsaw'
      },
      {
        name:
          '(GMT +02:00) Central European Summer Time (Europe/Zurich)',
        value: 'Europe/Zurich'
      },
      {
        name: '(GMT +02:00) Middle Europe Summer Time (MET)',
        value: 'MET'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Africa/Cairo)',
        value: 'Africa/Cairo'
      },
      {
        name: '(GMT +03:00) East Africa Time (Africa/Nairobi)',
        value: 'Africa/Nairobi'
      },
      {
        name:
          '(GMT +03:00) Eastern European Standard Time (Asia/Amman)',
        value: 'Asia/Amman'
      },
      {
        name: '(GMT +03:00) Arabian Standard Time (Asia/Baghdad)',
        value: 'Asia/Baghdad'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Asia/Beirut)',
        value: 'Asia/Beirut'
      },
      {
        name:
          '(GMT +03:00) Eastern European Standard Time (Asia/Damascus)',
        value: 'Asia/Damascus'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Asia/Famagusta)',
        value: 'Asia/Famagusta'
      },
      {
        name: '(GMT +03:00) Eastern European Summer Time (Asia/Gaza)',
        value: 'Asia/Gaza'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Asia/Hebron)',
        value: 'Asia/Hebron'
      },
      {
        name: '(GMT +03:00) Israel Daylight Time (Asia/Jerusalem)',
        value: 'Asia/Jerusalem'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Asia/Nicosia)',
        value: 'Asia/Nicosia'
      },
      {
        name: '(GMT +03:00) Arabian Standard Time (Asia/Qatar)',
        value: 'Asia/Qatar'
      },
      {
        name: '(GMT +03:00) Arabian Standard Time (Asia/Riyadh)',
        value: 'Asia/Riyadh'
      },
      {
        name: '(GMT +03:00) Eastern European Summer Time (EET)',
        value: 'EET'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Athens)',
        value: 'Europe/Athens'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Bucharest)',
        value: 'Europe/Bucharest'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Chisinau)',
        value: 'Europe/Chisinau'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Helsinki)',
        value: 'Europe/Helsinki'
      },
      {
        name: '(GMT +03:00) Turkey Time (Europe/Istanbul)',
        value: 'Europe/Istanbul'
      },
      {
        name: '(GMT +03:00) Moscow Standard Time (Europe/Kirov)',
        value: 'Europe/Kirov'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Kyiv)',
        value: 'Europe/Kyiv'
      },
      {
        name: '(GMT +03:00) Moscow Standard Time (Europe/Minsk)',
        value: 'Europe/Minsk'
      },
      {
        name: '(GMT +03:00) Moscow Standard Time (Europe/Moscow)',
        value: 'Europe/Moscow'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Riga)',
        value: 'Europe/Riga'
      },
      {
        name: '(GMT +03:00) Moscow Standard Time (Europe/Simferopol)',
        value: 'Europe/Simferopol'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Sofia)',
        value: 'Europe/Sofia'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Tallinn)',
        value: 'Europe/Tallinn'
      },
      {
        name:
          '(GMT +03:00) Eastern European Summer Time (Europe/Vilnius)',
        value: 'Europe/Vilnius'
      },
      {
        name: '(GMT +03:00) Moscow Standard Time (Europe/Volgograd)',
        value: 'Europe/Volgograd'
      },
      {
        name: '(GMT +03:00) East Africa Time (EAT)',
        value: 'EAT'
      },
      {
        name: '(GMT +03:30) Iran Standard Time (Asia/Tehran)',
        value: 'Asia/Tehran'
      },
      {
        name: '(GMT +04:00) Azerbaijan Standard Time (Asia/Baku)',
        value: 'Asia/Baku'
      },
      {
        name: '(GMT +04:00) Gulf Standard Time (Asia/Dubai)',
        value: 'Asia/Dubai'
      },
      {
        name: '(GMT +04:00) Georgia Standard Time (Asia/Tbilisi)',
        value: 'Asia/Tbilisi'
      },
      {
        name: '(GMT +04:00) Armenia Standard Time (Asia/Yerevan)',
        value: 'Asia/Yerevan'
      },
      {
        name:
          '(GMT +04:00) Astrakhan Standard Time (Europe/Astrakhan)',
        value: 'Europe/Astrakhan'
      },
      {
        name: '(GMT +04:00) Samara Standard Time (Europe/Samara)',
        value: 'Europe/Samara'
      },
      {
        name: '(GMT +04:00) Saratov Standard Time (Europe/Saratov)',
        value: 'Europe/Saratov'
      },
      {
        name:
          '(GMT +04:00) Ulyanovsk Standard Time (Europe/Ulyanovsk)',
        value: 'Europe/Ulyanovsk'
      },
      {
        name:
          '(GMT +04:00) Mauritius Standard Time (Indian/Mauritius)',
        value: 'Indian/Mauritius'
      },
      {
        name: '(GMT +04:30) Afghanistan Time (Asia/Kabul)',
        value: 'Asia/Kabul'
      },
      {
        name: '(GMT +05:00) Mawson Time (Antarctica/Mawson)',
        value: 'Antarctica/Mawson'
      },
      {
        name: '(GMT +05:00) East Kazakhstan Time (Asia/Almaty)',
        value: 'Asia/Almaty'
      },
      {
        name: '(GMT +05:00) West Kazakhstan Time (Asia/Aqtau)',
        value: 'Asia/Aqtau'
      },
      {
        name: '(GMT +05:00) West Kazakhstan Time (Asia/Aqtobe)',
        value: 'Asia/Aqtobe'
      },
      {
        name:
          '(GMT +05:00) Turkmenistan Standard Time (Asia/Ashgabat)',
        value: 'Asia/Ashgabat'
      },
      {
        name: '(GMT +05:00) West Kazakhstan Time (Asia/Atyrau)',
        value: 'Asia/Atyrau'
      },
      {
        name: '(GMT +05:00) Tajikistan Time (Asia/Dushanbe)',
        value: 'Asia/Dushanbe'
      },
      {
        name: '(GMT +05:00) Pakistan Standard Time (Asia/Karachi)',
        value: 'Asia/Karachi'
      },
      {
        name: '(GMT +05:00) West Kazakhstan Time (Asia/Oral)',
        value: 'Asia/Oral'
      },
      {
        name: '(GMT +05:00) Kostanay Standard Time (Asia/Qostanay)',
        value: 'Asia/Qostanay'
      },
      {
        name: '(GMT +05:00) East Kazakhstan Time (Asia/Qyzylorda)',
        value: 'Asia/Qyzylorda'
      },
      {
        name: '(GMT +05:00) Uzbekistan Standard Time (Asia/Samarkand)',
        value: 'Asia/Samarkand'
      },
      {
        name: '(GMT +05:00) Uzbekistan Standard Time (Asia/Tashkent)',
        value: 'Asia/Tashkent'
      },
      {
        name:
          '(GMT +05:00) Yekaterinburg Standard Time (Asia/Yekaterinburg)',
        value: 'Asia/Yekaterinburg'
      },
      {
        name: '(GMT +05:00) Maldives Time (Indian/Maldives)',
        value: 'Indian/Maldives'
      },
      {
        name: '(GMT +05:30) India Standard Time (Asia/Colombo)',
        value: 'Asia/Colombo'
      },
      {
        name: '(GMT +05:30) India Standard Time (Asia/Kolkata)',
        value: 'Asia/Kolkata'
      },
      {
        name: '(GMT +05:45) Nepal Time (Asia/Kathmandu)',
        value: 'Asia/Kathmandu'
      },
      {
        name: '(GMT +06:00) Kyrgyzstan Time (Asia/Bishkek)',
        value: 'Asia/Bishkek'
      },
      {
        name: '(GMT +06:00) Bangladesh Standard Time (Asia/Dhaka)',
        value: 'Asia/Dhaka'
      },
      {
        name: '(GMT +06:00) Omsk Standard Time (Asia/Omsk)',
        value: 'Asia/Omsk'
      },
      {
        name: '(GMT +06:00) Bhutan Time (Asia/Thimphu)',
        value: 'Asia/Thimphu'
      },
      {
        name: '(GMT +06:00) Xinjiang Standard Time (Asia/Urumqi)',
        value: 'Asia/Urumqi'
      },
      {
        name: '(GMT +06:00) Indian Ocean Time (Indian/Chagos)',
        value: 'Indian/Chagos'
      },
      {
        name: '(GMT +06:30) Myanmar Time (Asia/Yangon)',
        value: 'Asia/Yangon'
      },
      {
        name: '(GMT +07:00) Davis Time (Antarctica/Davis)',
        value: 'Antarctica/Davis'
      },
      {
        name: '(GMT +07:00) Indochina Time (Asia/Bangkok)',
        value: 'Asia/Bangkok'
      },
      {
        name: '(GMT +07:00) Barnaul Standard Time (Asia/Barnaul)',
        value: 'Asia/Barnaul'
      },
      {
        name: '(GMT +07:00) Indochina Time (Asia/Ho_Chi_Minh)',
        value: 'Asia/Ho_Chi_Minh'
      },
      {
        name: '(GMT +07:00) Hovd Standard Time (Asia/Hovd)',
        value: 'Asia/Hovd'
      },
      {
        name: '(GMT +07:00) Western Indonesia Time (Asia/Jakarta)',
        value: 'Asia/Jakarta'
      },
      {
        name:
          '(GMT +07:00) Krasnoyarsk Standard Time (Asia/Krasnoyarsk)',
        value: 'Asia/Krasnoyarsk'
      },
      {
        name:
          '(GMT +07:00) Krasnoyarsk Standard Time (Asia/Novokuznetsk)',
        value: 'Asia/Novokuznetsk'
      },
      {
        name:
          '(GMT +07:00) Novosibirsk Standard Time (Asia/Novosibirsk)',
        value: 'Asia/Novosibirsk'
      },
      {
        name: '(GMT +07:00) Western Indonesia Time (Asia/Pontianak)',
        value: 'Asia/Pontianak'
      },
      {
        name: '(GMT +07:00) Tomsk Standard Time (Asia/Tomsk)',
        value: 'Asia/Tomsk'
      },
      {
        name: '(GMT +08:00) Casey Time (Antarctica/Casey)',
        value: 'Antarctica/Casey'
      },
      {
        name:
          '(GMT +08:00) Choibalsan Standard Time (Asia/Choibalsan)',
        value: 'Asia/Choibalsan'
      },
      {
        name: '(GMT +08:00) Hong Kong Standard Time (Asia/Hong_Kong)',
        value: 'Asia/Hong_Kong'
      },
      {
        name: '(GMT +08:00) Irkutsk Standard Time (Asia/Irkutsk)',
        value: 'Asia/Irkutsk'
      },
      {
        name: '(GMT +08:00) Malaysia Time (Asia/Kuching)',
        value: 'Asia/Kuching'
      },
      {
        name: '(GMT +08:00) China Standard Time (Asia/Macau)',
        value: 'Asia/Macau'
      },
      {
        name: '(GMT +08:00) Central Indonesia Time (Asia/Makassar)',
        value: 'Asia/Makassar'
      },
      {
        name: '(GMT +08:00) Philippine Standard Time (Asia/Manila)',
        value: 'Asia/Manila'
      },
      {
        name: '(GMT +08:00) China Standard Time (Asia/Shanghai)',
        value: 'Asia/Shanghai'
      },
      {
        name: '(GMT +08:00) Singapore Standard Time (Asia/Singapore)',
        value: 'Asia/Singapore'
      },
      {
        name: '(GMT +08:00) Taipei Standard Time (Asia/Taipei)',
        value: 'Asia/Taipei'
      },
      {
        name:
          '(GMT +08:00) Ulaanbaatar Standard Time (Asia/Ulaanbaatar)',
        value: 'Asia/Ulaanbaatar'
      },
      {
        name:
          '(GMT +08:00) Australian Western Standard Time (Australia/Perth)',
        value: 'Australia/Perth'
      },
      {
        name:
          '(GMT +08:45) Australian Central Western Standard Time (Australia/Eucla)',
        value: 'Australia/Eucla'
      },
      {
        name: '(GMT +09:00) Yakutsk Standard Time (Asia/Chita)',
        value: 'Asia/Chita'
      },
      {
        name: '(GMT +09:00) East Timor Time (Asia/Dili)',
        value: 'Asia/Dili'
      },
      {
        name: '(GMT +09:00) Eastern Indonesia Time (Asia/Jayapura)',
        value: 'Asia/Jayapura'
      },
      {
        name: '(GMT +09:00) Yakutsk Standard Time (Asia/Khandyga)',
        value: 'Asia/Khandyga'
      },
      {
        name: '(GMT +09:00) Pyongyang Time (Asia/Pyongyang)',
        value: 'Asia/Pyongyang'
      },
      {
        name: '(GMT +09:00) Korean Standard Time (Asia/Seoul)',
        value: 'Asia/Seoul'
      },
      {
        name: '(GMT +09:00) Japan Standard Time (Asia/Tokyo)',
        value: 'Asia/Tokyo'
      },
      {
        name: '(GMT +09:00) Yakutsk Standard Time (Asia/Yakutsk)',
        value: 'Asia/Yakutsk'
      },
      {
        name: '(GMT +09:00) Palau Time (Pacific/Palau)',
        value: 'Pacific/Palau'
      },
      {
        name:
          '(GMT +09:30) Australian Central Standard Time (Australia/Adelaide)',
        value: 'Australia/Adelaide'
      },
      {
        name:
          '(GMT +09:30) Australian Central Standard Time (Australia/Broken_Hill)',
        value: 'Australia/Broken_Hill'
      },
      {
        name:
          '(GMT +09:30) Australian Central Standard Time (Australia/Darwin)',
        value: 'Australia/Darwin'
      },
      {
        name:
          '(GMT +10:00) Macquarie Island Time (Antarctica/Macquarie)',
        value: 'Antarctica/Macquarie'
      },
      {
        name: '(GMT +10:00) Vladivostok Standard Time (Asia/Ust-Nera)',
        value: 'Asia/Ust-Nera'
      },
      {
        name:
          '(GMT +10:00) Vladivostok Standard Time (Asia/Vladivostok)',
        value: 'Asia/Vladivostok'
      },
      {
        name:
          '(GMT +10:00) Australian Eastern Standard Time (Australia/Brisbane)',
        value: 'Australia/Brisbane'
      },
      {
        name:
          '(GMT +10:00) Australian Eastern Standard Time (Australia/Hobart)',
        value: 'Australia/Hobart'
      },
      {
        name:
          '(GMT +10:00) Australian Eastern Standard Time (Australia/Lindeman)',
        value: 'Australia/Lindeman'
      },
      {
        name:
          '(GMT +10:00) Australian Eastern Standard Time (Australia/Melbourne)',
        value: 'Australia/Melbourne'
      },
      {
        name:
          '(GMT +10:00) Australian Eastern Standard Time (Australia/Sydney)',
        value: 'Australia/Sydney'
      },
      {
        name: '(GMT +10:00) Chamorro Standard Time (Pacific/Guam)',
        value: 'Pacific/Guam'
      },
      {
        name:
          '(GMT +10:00) Papua New Guinea Time (Pacific/Port_Moresby)',
        value: 'Pacific/Port_Moresby'
      },
      {
        name:
          '(GMT +10:30) Lord Howe Standard Time (Australia/Lord_Howe)',
        value: 'Australia/Lord_Howe'
      },
      {
        name: '(GMT +11:00) Magadan Standard Time (Asia/Magadan)',
        value: 'Asia/Magadan'
      },
      {
        name: '(GMT +11:00) Sakhalin Standard Time (Asia/Sakhalin)',
        value: 'Asia/Sakhalin'
      },
      {
        name: '(GMT +11:00) Srednekolymsk Time (Asia/Srednekolymsk)',
        value: 'Asia/Srednekolymsk'
      },
      {
        name:
          '(GMT +11:00) Bougainville Standard Time (Pacific/Bougainville)',
        value: 'Pacific/Bougainville'
      },
      {
        name: '(GMT +11:00) Vanuatu Standard Time (Pacific/Efate)',
        value: 'Pacific/Efate'
      },
      {
        name:
          '(GMT +11:00) Solomon Islands Time (Pacific/Guadalcanal)',
        value: 'Pacific/Guadalcanal'
      },
      {
        name: '(GMT +11:00) Kosrae Time (Pacific/Kosrae)',
        value: 'Pacific/Kosrae'
      },
      {
        name: '(GMT +11:00) Norfolk Island Time (Pacific/Norfolk)',
        value: 'Pacific/Norfolk'
      },
      {
        name:
          '(GMT +11:00) New Caledonia Standard Time (Pacific/Noumea)',
        value: 'Pacific/Noumea'
      },
      {
        name: '(GMT +12:00) Anadyr Standard Time (Asia/Anadyr)',
        value: 'Asia/Anadyr'
      },
      {
        name:
          '(GMT +12:00) Petropavlovsk-Kamchatski Standard Time (Asia/Kamchatka)',
        value: 'Asia/Kamchatka'
      },
      {
        name:
          '(GMT +12:00) New Zealand Standard Time (Pacific/Auckland)',
        value: 'Pacific/Auckland'
      },
      {
        name: '(GMT +12:00) Fiji Standard Time (Pacific/Fiji)',
        value: 'Pacific/Fiji'
      },
      {
        name: '(GMT +12:00) Marshall Islands Time (Pacific/Kwajalein)',
        value: 'Pacific/Kwajalein'
      },
      {
        name: '(GMT +12:00) Nauru Time (Pacific/Nauru)',
        value: 'Pacific/Nauru'
      },
      {
        name: '(GMT +12:00) Gilbert Islands Time (Pacific/Tarawa)',
        value: 'Pacific/Tarawa'
      },
      {
        name: '(GMT +12:00) New Zealand Standard Time (NST)',
        value: 'NST'
      },
      {
        name: '(GMT +12:45) Chatham Standard Time (Pacific/Chatham)',
        value: 'Pacific/Chatham'
      },
      {
        name: '(GMT +13:00) Apia Standard Time (Pacific/Apia)',
        value: 'Pacific/Apia'
      },
      {
        name: '(GMT +13:00) Tokelau Time (Pacific/Fakaofo)',
        value: 'Pacific/Fakaofo'
      },
      {
        name: '(GMT +13:00) Kanton Standard Time (Pacific/Kanton)',
        value: 'Pacific/Kanton'
      },
      {
        name: '(GMT +13:00) Tonga Standard Time (Pacific/Tongatapu)',
        value: 'Pacific/Tongatapu'
      },
      {
        name: '(GMT +14:00) Line Islands Time (Pacific/Kiritimati)',
        value: 'Pacific/Kiritimati'
      }
    ];


    // const timezoneObj = {
    //                                 // id: "dropdown_"+ zcatProp.id,
    //                         id: zcatProp.id,
    //                         // selected: "Etc/GMT+12",
    //                         // selected: "kamali1",
    //                         selected: initialSelected,

    //                         // width: "zcat-w100p",
    //                         variant: "ghost",
    //                         // size: "extra-small",
    //                         options: AllTimezones,
    //                         isSearchable: true,
    //                         key: "selected_timezone",
    //                         onOptionSelected: "onTimezoneSelected",
    //                         reset: false
                            
    //     }
        // if(zcatProp.leadingIcon) {
        //   if(zcatProp.size === 'small' || zcatProp.size === 'extra-small'){
        //     timezoneObj.icon = {
        //                         name: "clock",
        //                         size: "12",
        //                         stroke: "var(--zcat-dropdown-ghost-icon-primary-default)"
        //                         }
        //   }
        //   else{
        //     timezoneObj.icon = {
        //                         name: "clock",
        //                         size: "12",
        //                         stroke: "var(--zcat-dropdown-ghost-icon-primary-default)"
        //                         }
        //   }
        // }
        // if(zcatProp.size === 'small'){
        //   timezoneObj.size = 'small'
        // }
        // else if(zcatProp.size === 'extra-small'){
        //   timezoneObj.size = 'extra-small'
        // }
        // else{
        //   timezoneObj.size = 'default'
        // }


        // const timezoneObj = this.getData('zcatProp')
        if(!zcatProp.options){
				  this.$addon.objectUtils(this.getData('zcatProp'), 'add', 'options', AllTimezones);
        }
        if(!zcatProp.selected){
				  this.$addon.objectUtils(this.getData('zcatProp'), 'add', 'selected', initialSelected);
        }

        if(zcatProp.reset){
          // timezoneObj.selected = timezoneObj;
				  this.$addon.objectUtils(this.getData('zcatProp'), 'add', 'selected', initialSelected);
        }           
        // this.setData('timezoneObj.id', zcatProp.id);
        // this.setData('dropdownObj', timezoneObj);

        if(zcatProp.leadingIcon) {
          if(zcatProp.size === 'small' || zcatProp.size === 'extra-small'){
            timezoneObj.icon = {
                                name: "clock",
                                size: "12",
                                stroke: "var(--zcat-dropdown-ghost-icon-primary-default)"
                                }
          }
          else{
            timezoneObj.icon = {
                                name: "clock",
                                size: "12",
                                stroke: "var(--zcat-dropdown-ghost-icon-primary-default)"
                                }
          }
        }

        // value sets in featureObj
        const featureObj = this.getData('featureObj');
        const key = this.getData('key'); 
        this.getData('clientObj')[key] = this.getData('zcatProp.selected');
        // this.setData('clientObj', this.getData('zcatProp.selected'));
        const clientKey = this.getData('clientObj')[key];

        featureObj[key] = clientKey;     // set the value

        this.setData('featureObj', featureObj); 

  }
  
  data() {  
    return {
      // defaultSelected: prop('string', {default: 'Etc/GMT+12'}),
      self: prop('object', { default: this }),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      key: prop('string'),

      // dropdownObj: prop('object', { default: 
			// 	{}
			// }),

      clientObj: prop('object', {default: {}}, { watch: true }), 
      featureObj: prop("object", { watch: true }), 
      timezone: prop('object', { default: {} })

    };
  }

  static methods() {
    return{
      onTimezoneSelected(a, b, c, d) {
          const key = this.getData('key');

          // Get client value
          const clientKey = this.getData('timezone')[key];

          // CLONE featureObj to avoid same reference issue
          const featureObj = { ...this.getData('featureObj') };

          // Update with dynamic key
          featureObj[key] = clientKey;

          // Update in Lyte (new object → bindings update)
          this.setData('featureObj', featureObj);

          // callback
          if (this.getMethods('onItemClick')) {
              this.executeMethod('onItemClick', a, b, c, d);
          }
      }


    };
  }

  static actions() {
    return{
      
    };
  }

  // static observers() {
  //   async function zcatPropToUserObj() {
  //     const zcatProp=this.getData('zcatProp');
  //     // const featureObj=this.getData('featureObj');
  //     // const key = this.getData('key');
  //     // this.setData('featureObj.'+key, zcatProp.selected);

  //     this.$addon.objectUtils(this.getData('zcatProp'), 'add', 'selected', this.getData('zcatProp').selected); 
      


  //   }
    
  //   async function userObjToZcatProp() {
  //     const zcatProp=this.getData('zcatProp');
  //     // const featureObj=this.getData('featureObj');
  //     // const key = this.getData('key');
  //     // this.$addon.objectUtils(zcatProp, 'add', 'selected', featureObj[key]);   
  //     this.$addon.objectUtils(zcatProp, 'add', 'selected', this.getData('zcatProp').selected); 
  //   }

  //   async function resetDropdown(){
  //     this.$addon.objectUtils(zcatProp, 'add', 'reset', true); 
  //   }

  //   return {
  //     userObjToZcatProp: userObjToZcatProp.observes('zcatProp.selected'),
  //     zcatPropToUserObj: zcatPropToUserObj.observes('zcatProp.selected'),
  //     resetDropdown: resetDropdown.observes('dropdownObj.reset') 

  //   };
  // }
}

export { ZcatTimezone };
