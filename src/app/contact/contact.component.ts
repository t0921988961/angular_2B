import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { LanguageService } from '../service/language/language.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  submitted = false;
  langCode = this.languageService.nowUrlPathlangCode;
  modelList = null;
  intentionList = [
    {
      value: 'quote', text: 'contact.intentionList.quote'
    }, {
      value: 'support', text: 'contact.intentionList.support'
    }, {
      value: 'partner', text: 'contact.intentionList.partner'
    }];
  countryList = [
    {
      id: '1',
      name: 'AFGHANISTAN',
    }, {
      id: 2,
      name: 'ALAND ISLAND',
    }, {
      id: 3,
      name: 'ALBANIA',
    }, {
      id: 4,
      name: 'ALGERIA',
    }, {
      id: 5,
      name: 'AMERICAN SAMOA',
    }, {
      id: 6,
      name: 'ANDORRA',
    }, {
      id: 7,
      name: 'ANGOLA',
    }, {
      id: 8,
      name: 'ANGUILLA',
    }, {
      id: 9,
      name: 'ANTARCTICA',
    }, {
      id: 10,
      name: 'ANTIGUA AND BARBUDA',
    }, {
      id: 11,
      name: 'ARGENTINA',
    }, {
      id: 12,
      name: 'ARMENIA',
    }, {
      id: 13,
      name: 'ARUBA',
    }, {
      id: 14,
      name: 'AUSTRALIA',
    }, {
      id: 15,
      name: 'AUSTRIA',
    }, {
      id: 16,
      name: 'AZERBAIJAN',
    }, {
      id: 17,
      name: 'BAHAMAS',
    }, {
      id: 18,
      name: 'BAHRAIN',
    }, {
      id: 19,
      name: 'BANGLADESH',
    }, {
      id: 20,
      name: 'BARBADOS',
    }, {
      id: 21,
      name: 'BELARUS',
    }, {
      id: 22,
      name: 'BELGIUM',
    }, {
      id: 23,
      name: 'BELIZE',
    }, {
      id: 24,
      name: 'BENIN',
    }, {
      id: 25,
      name: 'BERMUDA',
    }, {
      id: 26,
      name: 'BHUTAN',
    }, {
      id: 27,
      name: 'BOLIVIA',
    }, {
      id: 28,
      name: 'BOSNIA & HERZEGOVINA',
    }, {
      id: 29,
      name: 'BOTSWANA',
    }, {
      id: 30,
      name: 'BOUVET ISLAND',
    }, {
      id: 31,
      name: 'BRAZIL',
    }, {
      id: 32,
      name: 'BRITISH INDIAN OCEAN TERRITORI',
    }, {
      id: 33,
      name: 'BRITISH VIRGIN ISLANDS',
    }, {
      id: 34,
      name: 'BRUNEI',
    }, {
      id: 35,
      name: 'BULGARIA',
    }, {
      id: 36,
      name: 'BURKINA FASO',
    }, {
      id: 37,
      name: 'BURUNDI',
    }, {
      id: 38,
      name: 'CAMBODIAS',
    }, {
      id: 39,
      name: 'CAMEROON',
    }, {
      id: 40,
      name: 'CANADA',
    }, {
      id: 41,
      name: 'CAPE VERDE',
    }, {
      id: 42,
      name: 'CAYMAN ISLANDS',
    }, {
      id: 43,
      name: 'CENTRAL AFRICAN REPUBLIC',
    }, {
      id: 44,
      name: 'CHAD',
    }, {
      id: 45,
      name: 'CHILE',
    }, {
      id: 46,
      name: 'CHINA',
    }, {
      id: 47,
      name: 'CHRISTMAS ISLAND',
    }, {
      id: 48,
      name: 'COCOS (KEELING) ISLANDS',
    }, {
      id: 49,
      name: 'COLOMBIA',
    }, {
      id: 50,
      name: 'COMOROS',
    }, {
      id: 51,
      name: 'CONGO(BRAZZAVILLE)',
    }, {
      id: 52,
      name: 'CONGO(KINSHASA)',
    }, {
      id: 53,
      name: 'COOK ISLANDS',
    }, {
      id: 54,
      name: 'COSTA RICA',
    }, {
      id: 55,
      name: 'COTE D&#x27;IVOIRE (IVORY COAST)',
    }, {
      id: 56,
      name: 'CROATIA',
    }, {
      id: 57,
      name: 'CUBA',
    }, {
      id: 58,
      name: 'CYPRUS',
    }, {
      id: 59,
      name: 'CZECH REPUBLIC',
    }, {
      id: 60,
      name: 'DENMARK',
    }, {
      id: 61,
      name: 'DJIBOUTI',
    }, {
      id: 62,
      name: 'DOMINICA',
    }, {
      id: 63,
      name: 'DOMINICA REPUBLIC',
    }, {
      id: 64,
      name: 'ECUADOR',
    }, {
      id: 65,
      name: 'EGYPT',
    }, {
      id: 66,
      name: 'EL SALVADOR',
    }, {
      id: 67,
      name: 'EQUATORIAL GUINEA',
    }, {
      id: 68,
      name: 'ERITREA',
    }, {
      id: 69,
      name: 'ESTONIA',
    }, {
      id: 70,
      name: 'ETHIOPIA',
    }, {
      id: 71,
      name: 'FALKLAND ISLANDS',
    }, {
      id: 72,
      name: 'FAROE ISLANDS',
    }, {
      id: 73,
      name: 'FEDERATED STATES OF MICRONESIA',
    }, {
      id: 74,
      name: 'FIJI',
    }, {
      id: 75,
      name: 'FINLAND',
    }, {
      id: 76,
      name: 'FRANCE',
    }, {
      id: 77,
      name: 'FRENCH GUIANA',
    }, {
      id: 78,
      name: 'FRENCH POLYNESIA',
    }, {
      id: 79,
      name: 'FRENCH SOUTHERN TERRITORIES',
    }, {
      id: 80,
      name: 'GABON',
    }, {
      id: 81,
      name: 'GAMBIA',
    }, {
      id: 82,
      name: 'GEORGIA',
    }, {
      id: 83,
      name: 'GERMANY',
    }, {
      id: 84,
      name: 'GHANA',
    }, {
      id: 85,
      name: 'GIBRALTAR',
    }, {
      id: 86,
      name: 'GREAT BRITAIN (UNITED KINGDOM; ENGLAND)',
    }, {
      id: 87,
      name: 'GREECE',
    }, {
      id: 88,
      name: 'GREENLAND',
    }, {
      id: 89,
      name: 'GRENADA',
    }, {
      id: 90,
      name: 'GUADELOUPE',
    }, {
      id: 91,
      name: 'GUAM',
    }, {
      id: 92,
      name: 'GUATEMALA',
    }, {
      id: 93,
      name: 'GUERNSEY',
    }, {
      id: 94,
      name: 'GUINEA',
    }, {
      id: 95,
      name: 'GUINEA-BISSAU',
    }, {
      id: 96,
      name: 'GUYANA',
    }, {
      id: 97,
      name: 'HAITI',
    }, {
      id: 98,
      name: 'HEARD ISLAND AND MCDONALD ISLANDS',
    }, {
      id: 99,
      name: 'HONDURAS',
    }, {
      id: 100,
      name: 'HONG KONG',
    }, {
      id: 101,
      name: 'HUNGARY',
    }, {
      id: 102,
      name: 'ICELAND',
    }, {
      id: 103,
      name: 'INDIA',
    }, {
      id: 104,
      name: 'INDONESIA',
    }, {
      id: 105,
      name: 'IRAN',
    }, {
      id: 106,
      name: 'IRAQ',
    }, {
      id: 107,
      name: 'IRELAND',
    }, {
      id: 108,
      name: 'ISLE OF MAN',
    }, {
      id: 109,
      name: 'ISRAEL',
    }, {
      id: 110,
      name: 'ITALY',
    }, {
      id: 111,
      name: 'JAMAICA',
    }, {
      id: 112,
      name: 'JAPAN',
    }, {
      id: 113,
      name: 'JERSEY',
    }, {
      id: 114,
      name: 'JORDAN',
    }, {
      id: 115,
      name: 'KARIBATI',
    }, {
      id: 116,
      name: 'KAZAKHSTAN',
    }, {
      id: 117,
      name: 'KENYA',
    }, {
      id: 118,
      name: 'KUWAIT',
    }, {
      id: 119,
      name: 'KYRGYZSTAN',
    }, {
      id: 120,
      name: 'LAOS',
    }, {
      id: 121,
      name: 'LATVIA',
    }, {
      id: 122,
      name: 'LEBANON',
    }, {
      id: 123,
      name: 'LESOTHO',
    }, {
      id: 124,
      name: 'LIBERIA',
    }, {
      id: 125,
      name: 'LIBYA',
    }, {
      id: 126,
      name: 'LIECHTENSTEIN',
    }, {
      id: 127,
      name: 'LITHUANIA',
    }, {
      id: 128,
      name: 'LUXEMBOURG',
    }, {
      id: 129,
      name: 'MACAU',
    }, {
      id: 130,
      name: 'MADAGASCAR',
    }, {
      id: 131,
      name: 'MALAWI',
    }, {
      id: 132,
      name: 'MALAYSIA',
    }, {
      id: 133,
      name: 'MALDIVES',
    }, {
      id: 134,
      name: 'MALI',
    }, {
      id: 135,
      name: 'MALTA',
    }, {
      id: 136,
      name: 'MARSHALL ISLANDS',
    }, {
      id: 137,
      name: 'MARTINIQUE',
    }, {
      id: 138,
      name: 'MAURITANIA',
    }, {
      id: 139,
      name: 'MAURITIUS',
    }, {
      id: 140,
      name: 'MAYOTTE',
    }, {
      id: 141,
      name: 'MEXICO',
    }, {
      id: 142,
      name: 'MOLDOVA',
    }, {
      id: 143,
      name: 'MONACO',
    }, {
      id: 144,
      name: 'MONGOLIA',
    }, {
      id: 145,
      name: 'MONTENEGRO',
    }, {
      id: 146,
      name: 'MONTSERRAT',
    }, {
      id: 147,
      name: 'MOROCCO',
    }, {
      id: 148,
      name: 'MOZAMBIQUE',
    }, {
      id: 149,
      name: 'MYANMAR (BURMA)',
    }, {
      id: 150,
      name: 'NAMIBIA',
    }, {
      id: 151,
      name: 'NAURU',
    }, {
      id: 152,
      name: 'NEPAL',
    }, {
      id: 153,
      name: 'THE NETHERLANDS',
    }, {
      id: 154,
      name: 'THE NETHERLANDS ANTILLES',
    }, {
      id: 155,
      name: 'NEW CALEDONIA',
    }, {
      id: 156,
      name: 'NEW ZEALAND',
    }, {
      id: 157,
      name: 'NICARAGUA',
    }, {
      id: 158,
      name: 'NIGER',
    }, {
      id: 159,
      name: 'NIGERIA',
    }, {
      id: 160,
      name: 'NIUE',
    }, {
      id: 161,
      name: 'NORFOLK ISLAND',
    }, {
      id: 162,
      name: 'NORTH KOREA',
    }, {
      id: 163,
      name: 'NORTHERN MARIANA ISLANDS',
    }, {
      id: 164,
      name: 'NORWAY',
    }, {
      id: 165,
      name: 'OMAN',
    }, {
      id: 166,
      name: 'PAKISTAN',
    }, {
      id: 167,
      name: 'PALAU',
    }, {
      id: 168,
      name: 'PALESTINIAN TERRITORIES',
    }, {
      id: 169,
      name: 'PANAMA',
    }, {
      id: 170,
      name: 'PAPUA NEW GUINEA',
    }, {
      id: 171,
      name: 'PARAGUAY',
    }, {
      id: 172,
      name: 'PERU',
    }, {
      id: 173,
      name: 'PHILIPPINES',
    }, {
      id: 174,
      name: 'PITCAIRN ISLANDS',
    }, {
      id: 175,
      name: 'POLAND',
    }, {
      id: 176,
      name: 'PORTUGAL',
    }, {
      id: 177,
      name: 'PUERTO RICO',
    }, {
      id: 178,
      name: 'QATAR',
    }, {
      id: 179,
      name: 'REPUBLIC OF MACEDONIA (FYROM)',
    }, {
      id: 180,
      name: 'REUNION',
    }, {
      id: 181,
      name: 'ROMANIA',
    }, {
      id: 182,
      name: 'RUSSIAN FEDERATION',
    }, {
      id: 183,
      name: 'RWANDA',
    }, {
      id: 184,
      name: 'SAINT BARTHELEMY',
    }, {
      id: 185,
      name: 'SAINT MARTIN (FRANCE)',
    }, {
      id: 186,
      name: 'SAINT-PIERRE & MIQUELON',
    }, {
      id: 187,
      name: 'SAMOA',
    }, {
      id: 188,
      name: 'SAN MARINO',
    }, {
      id: 189,
      name: 'SAO TOME & PRINCIPE',
    }, {
      id: 190,
      name: 'SAUDI ARABIA',
    }, {
      id: 191,
      name: 'SENEGAL',
    }, {
      id: 192,
      name: 'SERBIA',
    }, {
      id: 193,
      name: 'SEYCHELLES',
    }, {
      id: 194,
      name: 'SIERRA LEONE',
    }, {
      id: 195,
      name: 'SINGAPORE',
    }, {
      id: 196,
      name: 'SLOVAKIA',
    }, {
      id: 197,
      name: 'SLOVENIA',
    }, {
      id: 198,
      name: 'SOLOMON ISLANDS',
    }, {
      id: 199,
      name: 'SOMALIA',
    }, {
      id: 200,
      name: 'SOUTH AFRICA',
    }, {
      id: 201,
      name: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
    }, {
      id: 202,
      name: 'SOUTH KOREA',
    }, {
      id: 203,
      name: 'SPAIN',
    }, {
      id: 204,
      name: 'SRI LANKA',
    }, {
      id: 205,
      name: 'ST. HELENA & DEPENDENCIES',
    }, {
      id: 206,
      name: 'ST. KITTS AND NEVIS',
    }, {
      id: 207,
      name: 'ST. LUCIA',
    }, {
      id: 208,
      name: 'ST. VINCENT & THE GRENADINES',
    }, {
      id: 209,
      name: 'SUDAN',
    }, {
      id: 210,
      name: 'SURINAME',
    }, {
      id: 211,
      name: 'SVALBARD',
    }, {
      id: 212,
      name: 'SWAZILAND',
    }, {
      id: 213,
      name: 'SWEDEN',
    }, {
      id: 214,
      name: 'SWITZERLAND',
    }, {
      id: 215,
      name: 'SYRIA',
    }, {
      id: 216,
      name: 'TAIWAN, ROC',
    }, {
      id: 217,
      name: 'TAJIKISTAN',
    }, {
      id: 218,
      name: 'TANZANIA',
    }, {
      id: 219,
      name: 'THAILAND',
    }, {
      id: 220,
      name: 'TIMOR-LESTE EAST (TIMOR)',
    }, {
      id: 221,
      name: 'TOGO',
    }, {
      id: 222,
      name: 'TOKELAU',
    }, {
      id: 223,
      name: 'TONGA',
    }, {
      id: 224,
      name: 'TRINIDAD & TOBAGO',
    }, {
      id: 225,
      name: 'TUNISIA',
    }, {
      id: 226,
      name: 'TURKEY',
    }, {
      id: 227,
      name: 'TURKMENISTAN',
    }, {
      id: 228,
      name: 'TURKS & CAICOS ISLANDS',
    }, {
      id: 229,
      name: 'TUVALU',
    }, {
      id: 230,
      name: 'UGANDA',
    }, {
      id: 231,
      name: 'UKRAINE',
    }, {
      id: 232,
      name: 'UNITED ARAB EMIRATES',
    }, {
      id: 233,
      name: 'UNITED STATES MINOR OUTLYING ISLANDS',
    }, {
      id: 234,
      name: 'UNITED STATES OF AMERICA',
    }, {
      id: 235,
      name: 'UNITED STATES VIRGIN ISLANDS',
    }, {
      id: 236,
      name: 'URUGUAY',
    }, {
      id: 237,
      name: 'UZBEKISTAN',
    }, {
      id: 238,
      name: 'VANUATU',
    }, {
      id: 239,
      name: 'VATICAN CITY (THE HOLY SEE)',
    }, {
      id: 240,
      name: 'VENEZUELA',
    }, {
      id: 241,
      name: 'VIETNAM',
    }, {
      id: 242,
      name: 'WALLIS AND FUTUNA',
    }, {
      id: 243,
      name: 'WESTERN SAHARA',
    }, {
      id: 244,
      name: 'YEMEN',
    }, {
      id: 245,
      name: 'ZAMBIA',
    }, {
      id: 246,
      name: 'ZIMBABWE'
    }
  ];


  phonePattern = '^(\+\d{1,3}[- ]?)?\d{10}$';


  HelloForm = new FormGroup({
    uIntentionSelect: new FormControl('', [Validators.required]),
    umodelSelect: new FormControl('', [Validators.required]),
    uName: new FormControl('', [Validators.required]),
    uCompany: new FormControl(''),
    uCountrySelect: new FormControl('', [Validators.required]),
    uemail: new FormControl('', [Validators.required, Validators.email]),
    uPhone: new FormControl('', [Validators.required, Validators.pattern('^[0-9+\(\)#\.\s\/ext-]+$')]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(
    public languageService: LanguageService,
    public translate: TranslateService,
    private meta: MetaService,
  ) {

    if (this.langCode === 'zh-TW' || this.langCode === 'zh-CN') {
      this.modelList = [
        {
          value: 1,
          text: 'contact.form.model1'
        }, {
          value: 2,
          text: 'contact.form.model2'
        }, {
          value: 3,
          text: 'contact.form.model3'
        }, {
          value: 4,
          text: 'contact.form.model4'
        }, {
          value: 5,
          text: 'contact.form.model5'
        }, {
          value: 6,
          text: 'contact.form.model6'
        }, {
          value: 7,
          text: 'contact.form.model9'
        }, {
          value: 8,
          text: 'contact.form.model1',
        }, {
          value: 9,
          text: 'contact.form.model2',
        }
      ];
    }
    if (this.langCode === 'en-US' || this.langCode === 'en-GB' || this.langCode === 'fr-FR' || this.langCode === 'de-DE') {
      this.modelList = [
        {
          value: 1,
          text: 'contact.form.model1'
        }, {
          value: 2,
          text: 'contact.form.model2'
        }, {
          value: 3,
          text: 'contact.form.model3'
        }, {
          value: 4,
          text: 'contact.form.model4'
        }, {
          value: 5,
          text: 'contact.form.model5'
        }, {
          value: 6,
          text: 'contact.form.model6'
        }, {
          value: 7,
          text: 'contact.form.model7'
        }, {
          value: 8,
          text: 'contact.form.model8'
        }, {
          value: 9,
          text: 'contact.form.model9'
        }, {
          value: 10,
          text: 'contact.form.model1',
        }, {
          value: 11,
          text: 'contact.form.model2',
        }
      ];
    }
    if (this.langCode === 'ja-JP') {
      this.modelList = [
        {
          value: 1,
          text: 'contact.form.model1'
        }, {
          value: 2,
          text: 'contact.form.model2'
        }, {
          value: 3,
          text: 'contact.form.model3'
        }, {
          value: 4,
          text: 'contact.form.model4'
        }, {
          value: 5,
          text: 'contact.form.model5'
        }, {
          value: 6,
          text: 'contact.form.model6'
        }, {
          value: 7,
          text: 'contact.form.model7'
        }, {
          value: 8,
          text: 'contact.form.model8'
        }, {
          value: 9,
          text: 'contact.form.model2',
        }
      ];
    }
    if (this.langCode === 'ko-KR') {
      this.modelList = [
        {
          value: 1,
          text: 'contact.form.model1'
        }, {
          value: 2,
          text: 'contact.form.model6'
        }, {
          value: 3,
          text: 'contact.form.model2',
        }
      ];
    }
  }

  ngOnInit() {
    // this.meta.setTitle(this.translate.instant('contact.title'));
    // this.meta.setTag('description', this.translate.instant('contact.description'));
  }

  ngOnDestroy(): void {
    // this.meta.setTitle('');
    // this.meta.setTag('description', '');

  }

  doSubmit(form) {
    console.log('form:', form);
    console.log('Hello');
    this.submitted = true;
    console.log('this.HelloForm.value => ', this.HelloForm.value);
    console.log('this.submitted:', this.submitted);
  }

}
