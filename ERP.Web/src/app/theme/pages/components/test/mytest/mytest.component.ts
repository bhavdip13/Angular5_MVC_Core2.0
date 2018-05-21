import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Language = 'en' | 'de';

@Component({
    selector: 'mytest',
    templateUrl: './mytest.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class MytestComponent implements OnInit {
    _translate: TranslateService;

    constructor(public translate: TranslateService) {
        this._translate = translate;
        translate.setDefaultLang('en');
    }

    ngOnInit() {
    }
    switchLanguage = (lang: Language) => {
        this._translate.use(lang);
    }
}