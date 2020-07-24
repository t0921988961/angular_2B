import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-print-service-form',
  templateUrl: './print-service-form.component.html',
  styleUrls: ['./print-service-form.component.scss']
})
export class PrintServiceFormComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  // Parameter
  getUploadFileDoanloadPath = '';
  upload_file_name = 'File Name';
  upload_active = false;
  send_active = false;
  usaStateList = [
    {
      state: 'USA',
      value: '--------- USA ---------------',
      disabled: true,
    },
    {
      state: 'AL',
      value: 'AL - Alabama',
    },
    {
      state: 'AK',
      value: 'AK - Alaska',
    },
    {
      state: 'AS',
      value: 'AS - American Samoa',
    },
    {
      state: 'AZ',
      value: 'AZ - Arizona',
    },
    {
      state: 'AR',
      value: 'AR - Arkansas',
    },
    {
      state: 'CA',
      value: 'CA - California',
    },
    {
      state: 'CO',
      value: 'CO - Colorado',
    },
    {
      state: 'CT',
      value: 'CT - Connecticut',
    },
    {
      state: 'DE',
      value: 'DE - Delaware',
    },
    {
      state: 'DC',
      value: 'DC - District of Columbia',
    },
    {
      state: 'FM',
      value: 'FM - Federated Stated of Micronesia',
    },
    {
      state: 'FL',
      value: 'FL - Florida',
    },
    {
      state: 'GA',
      value: 'GA - Georgia',
    },
    {
      state: 'GU',
      value: 'GU - Guam',
    },
    {
      state: 'HI',
      value: 'HI - Hawaii',
    },
    {
      state: 'ID',
      value: 'ID - Idaho',
    },
    {
      state: 'IL',
      value: 'IL - Illinois',
    },
    {
      state: 'IN',
      value: 'IN - Indiana',
    },
    {
      state: 'IA',
      value: 'IA - Iowa',
    },
    {
      state: 'KS',
      value: 'KS - Kansas',
    },
    {
      state: 'KY',
      value: 'KY - Kentucky',
    },
    {
      state: 'LA',
      value: 'LA - Louisiana',
    },
    {
      state: 'ME',
      value: 'ME - Maine',
    },
    {
      state: 'MH',
      value: 'MH - Marshall Islands',
    },
    {
      state: 'MD',
      value: 'MD - Maryland',
    },
    {
      state: 'MA',
      value: 'MA - Massachusetts',
    },
    {
      state: 'MI',
      value: 'MI - Michigan',
    },
    {
      state: 'MN',
      value: 'MN - Minnesota',
    },
    {
      state: 'MS',
      value: 'MS - Mississippi',
    },
    {
      state: 'MO',
      value: 'MO - Missouri',
    },
    {
      state: 'MT',
      value: 'MT - Montana',
    },
    {
      state: 'NE',
      value: 'NE - Nebraska',
    },
    {
      state: 'NV',
      value: 'NV - Nevada',
    },
    {
      state: 'NH',
      value: 'NH - New Hampshire',
    },
    {
      state: 'NJ',
      value: 'NJ - New Jersey',
    },
    {
      state: 'NM',
      value: 'NM - New Mexico',
    },
    {
      state: 'NY',
      value: 'NY - New York',
    },
    {
      state: 'NC',
      value: 'NC - North Carolina',
    },
    {
      state: 'ND',
      value: 'ND - North Dakota',
    },
    {
      state: 'MP',
      value: 'MP - Northern Mariana Islands',
    },
    {
      state: 'OH',
      value: 'OH - Ohio',
    },
    {
      state: 'OK',
      value: 'OK - Oklahoma',
    },
    {
      state: 'OR',
      value: 'OR - Oregon',
    },
    {
      state: 'PW',
      value: 'PW - Palau',
    },
    {
      state: 'PA',
      value: 'PA - Pennsylvania',
    },
    {
      state: 'PR',
      value: 'PR - Puerto Rico',
    },
    {
      state: 'RI',
      value: 'RI - Rhode Island',
    },
    {
      state: 'SC',
      value: 'SC - South Carolina',
    },
    {
      state: 'SD',
      value: 'SD - South Dakota',
    },
    {
      state: 'TN',
      value: 'TN - Tennesse',
    },
    {
      state: 'TX',
      value: 'TX - Texas',
    },
    {
      state: 'UT',
      value: 'UT - Utah',
    },
    {
      state: 'VT',
      value: 'VT - Vermont',
    },
    {
      state: 'VI',
      value: 'VI - Virgin Islands',
    },
    {
      state: 'VA',
      value: 'VA - Virginia',
    },
    {
      state: 'WA',
      value: 'WA - Washington',
    },
    {
      state: 'WV',
      value: 'WV - West Virginia',
    },
    {
      state: 'WI',
      value: 'WI - Wisconsin',
    },
    {
      state: 'WY',
      value: 'WY - Wyoming',
    },
    {
      state: 'AA',
      value: 'AA - Armed Forces Americas',
    },
    {
      state: 'AE',
      value: 'AE - Armed Forces Africa',
    },
    {
      state: 'AE',
      value: 'AE - Armed Forces Canada',
    },
    {
      state: 'AE',
      value: 'AE - Armed Forces Europe',
    },
    {
      state: 'AE',
      value: 'AE - Armed Forces Middle East',
    },
    {
      state: 'AP',
      value: 'AP - Armed Forces Pacific',
    },
    // Canada *****************************
    {
      state: 'Canada',
      value: '--------- Canada ---------------',
      disabled: true,
    },
    {
      state: 'AB',
      value: 'AB - Alberta',
    },
    {
      state: 'BC',
      value: 'BC - British Columbia',
    },
    {
      state: 'MB',
      value: 'MB - Manitoba',
    },
    {
      state: 'NB',
      value: 'NB - New Brunswick',
    },
    {
      state: 'NL',
      value: 'NL - Newfoundland and Labrador',
    },
    {
      state: 'NT',
      value: 'NT - Northwest Territories',
    },
    {
      state: 'NS',
      value: 'NS - Nova Scotia',
    },
    {
      state: 'NU',
      value: 'NU - Nunavut',
    },
    {
      state: 'ON',
      value: 'ON - Ontario',
    },
    {
      state: 'PE',
      value: 'PE - Prince Edward Island',
    },
    {
      state: 'QC',
      value: 'QC - Quebec',
    },
    {
      state: 'SK',
      value: 'SK - Saskatchewan',
    },
    {
      state: 'YT',
      value: 'YT - Yukon Territory',
    },
  ];

  uQuantityPattern = '^[1-9]+$';
  uNamePattern = '^[A-Za-z]+([\ A-Za-z]+)*';
  uPhonePattern = '[0-9]*';
  uStreetPattern = '^[a-zA-Z0-9\s,\'-]*$';
  uCityPattern = '^[A-Za-z]+([\ A-Za-z]+)*';

  // FormGroup
  printInfoForm = new FormGroup({
    uQuantity: new FormControl('', [Validators.required, Validators.pattern(this.uQuantityPattern)]),
    uName: new FormControl('', [Validators.required, Validators.pattern(this.uNamePattern)]),
    uCompany: new FormControl('', [Validators.required]),
    uPhone: new FormControl('', [Validators.required, Validators.pattern(this.uPhonePattern)]),
    uEmail: new FormControl('', [Validators.required, Validators.email]),
    uConfirmEmail: new FormControl('', [Validators.required]),
    uStreet: new FormControl('', [Validators.required, Validators.pattern(this.uStreetPattern)]),
    uCity: new FormControl('', [Validators.required, Validators.pattern(this.uCityPattern)]),
    uStateSelect: new FormControl('', [Validators.required]),
    uZipCode: new FormControl('', [Validators.required]),
  });

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  // close Upload Success
  removeUploadClose() {
    this.upload_active = false;
  }

  // close Send Success
  removeSendClose() {
    // send_active = false;
    // const isPrintServicePage =
    //   urlParameters.protocol +
    //   '//' +
    //   urlParameters.host +
    //   '/' +
    //   lang +
    //   '/print_service';
    // window.location = isPrintServicePage;
  }

  // Get Upload File
  getUploadFile(files) {
    // console.log('files:', files.target.files);
    console.log('files:', files.target.files[0].name);
    const getFileName = files.target.files[0].name;
    this.upload_file_name = getFileName;
    // this.startUploadFile(files);
  }

  startUploadFile(files) {
    // const getFileSize = files[0].size;
    // const maxFileSize = 104857600; // Max size 10MB
    // const isFilesName = files[0].name;
    // const apiUploadPath =
    //   'https://event.xyzprinting.com/Admin/NEWUP/' +
    //   isFilesName +
    //   '&mid=0&mclass=2BModsUpload&lang=Test&class=Test';
    // const nowFormdata = new FormData();
    // nowFormdata.append('File[]', files[0]);

    // const isFileSizeTooLarge = getFileSize > maxFileSize;
    // const isFileSizeGood = getFileSize <= maxFileSize;

    // if (isFileSizeTooLarge) { return alert('Your File too larg'); }
    // if (isFileSizeGood) {
    //   this.callUploadApiPost(apiUploadPath, nowFormdata);
  }

  formSubmit(tForm) {
    console.log('tForm => ', tForm);
    if (confirm('Sure submit')) {
      if (this.getUploadFileDoanloadPath) {
        this.prepareFormData(this.getUploadFileDoanloadPath);
      } else {
        alert('Please upload model file');
      }
    } else {
      alert('You press cancel');
    }
  }

  callUploadApiPost(apiUploadPath, nowFormdata) {
    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', apiUploadPath);
    // xhr.upload.onprogress = function(apiPostEvent) {
    //   /*Upload progress*/
    //   this.uploadProgressPersent(apiPostEvent);
    // };

    // // Start upload
    // xhr.send(nowFormdata);
    // xhr.onload = function() {
    //   const isStatus200 = xhr.status === 200;
    //   const isReadyState = xhr.readyState === XMLHttpRequest.DONE;
    //   const isStatusNot200 = xhr.status !== 200;
    //   if (isStatus200 && isReadyState) {
    //     return (getUploadFileDoanloadPath = JSON.parse(
    //       Array(xhr.responseText)[0]
    //     )[0]);
    //   }
    //   if (isStatusNot200) {
    //     return alert('Upload Err', '[status] => ', xhr.status);
    //   }
    // };
  }

  uploadProgressPersent(apiPostEvent) {
    // let isProgressLengthComputable = apiPostEvent.lengthComputable;
    // let isProgressPersent =
    //   ((apiPostEvent.loaded / apiPostEvent.total) * 100) | 0;
    // let isComplete100 = isProgressPersent === 100;

    // // Return progress
    // // console.log('[isProgressPersent]', isProgressPersent + '%');

    // if (isProgressLengthComputable) {
    //   $('#dvProgressPrcent .progress').html(isProgressPersent + '%');
    //   $('.dvProgress').css({ width: isProgressPersent + '%' });
    // }

    // if (isComplete100) {
    //   return $scope.$apply(function () {
    //     $scope.upload_active = true;
    //   });
    // }
  }

  prepareFormData(getUploadFileDoanloadPath) {
    // disableSubmitBtn = true;
    // let formData = form;

    // formData.Upload = getUploadFileDoanloadPath;
    // formData.State = form.State.value;
    // formData.RandCode = `${Math.random()}`;
    // // STrigger,SEmail,SName => Control recipient
    // formData.STrigger = '2BModsUpload';
    // formData.StateControl = 'Ongoing';
    // // formData.SEmail = formData.Email;
    // // formData.SName = formData.Name;
    // formData.SEmail = 'john.calhoun@xyzprinting.com';
    // formData.SName = 'John';

    // this.callApiSubmit(formData);
  }

  callApiSubmit(formData) {
    // reset form data
    // $http({
    //   method: 'POST',
    //   url: 'https://event.xyzprinting.com/Tp/EXPADD/2BModsUpload/Test/',
    //   data: $httpParamSerializerJQLike(formData),
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //   },
    // })
    //   .then((res) => {
    //     $scope.disableSubmitBtn = false;
    //     let isSuccess = res.data === '2';
    //     let isFaile = res.data === '6';

    //     if (isFaile) return alert('ERR Messages', '[Res Data] => ', res.data);
    //     if (isSuccess) {
    //       // alert('Thank you, Success Messages');
    //       console.log('API State Code => ', res.data);
    //       $scope.send_active = true;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log('Err Form Data API');
    //   });
  }

}
