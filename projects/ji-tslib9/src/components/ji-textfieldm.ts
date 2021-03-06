/*

 Copyright (c) 2019,2020 Jirvan Pty Ltd
 All rights reserved.

 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.
 * Neither the name of Jirvan Pty Ltd nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

 */

import {Component, ErrorHandler, EventEmitter, Input, Output} from '@angular/core';

@Component({
               selector: 'ji-textfieldm',
               template: '<div style="position: relative; margin-top: 30px; padding-left: 0; padding-right: 0;"\n' +
                         '     [ngStyle]="cStyle"\n' +
                         '     [ngClass]="cClass">\n' +
                         '    <span class="md-inputfield">\n' +
                         '        <input *ngIf="width" pInputText [ngStyle]="inputStyle" [readonly]="readonly" [(ngModel)]="cModel"\n' +
                         '               style="width: 100%" [style.width]="width">\n' +
                         '        <input *ngIf="!width" pInputText [ngStyle]="inputStyle" [readonly]="readonly" [(ngModel)]="cModel"\n' +
                         '               style="width: 100%" [ngStyle]="inputStyle">\n' +
                         '        <label [ngStyle]="labelStyle">{{label}}</label>\n' +
                         '    </span>\n' +
                         '</div>'
           })
export class JiTextfieldm {

    @Input() readonly: boolean;
    @Input() label: string;
    @Input() cStyle: any;
    @Input() width: string;
    @Input() cClass: string;
    @Input() inputStyle: any;
    @Input() labelStyle: any;

    private _cModel: string;

    @Input()
    get cModel() {
        return this._cModel;
    }

    @Output() cModelChange = new EventEmitter<string>();

    set cModel(val) {
        this._cModel = val;
        this.cModelChange.emit(this._cModel);
    }

}
