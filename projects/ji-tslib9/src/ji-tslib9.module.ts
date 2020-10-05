import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CheckboxModule} from 'primeng/checkbox';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {BlockUIModule} from 'primeng/blockui';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PanelModule} from 'primeng/panel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ListboxModule} from 'primeng/listbox';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {FieldsetModule} from 'primeng/fieldset';
import {TooltipModule} from 'primeng/tooltip';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {MenuModule} from 'primeng/menu';
import {BlockableDiv} from "./components/blockable-div";
import {JiTextfieldm} from "./components/ji-textfieldm";
import {ProgressOverlay} from "./components/progress-overlay";
import {JiErrorDialog} from "./errors/ji-error-dialog";


@NgModule({
            declarations: [BlockableDiv,
                           JiErrorDialog,
                           JiTextfieldm,
                           ProgressOverlay],
            imports: [
              BrowserAnimationsModule,
              BrowserModule,
              HttpClientModule,
              FormsModule,
              ReactiveFormsModule,
              CheckboxModule,
              ColorPickerModule,
              DialogModule,
              DropdownModule,
              ProgressSpinnerModule,
              BlockUIModule,
              ContextMenuModule,
              TabViewModule,
              FileUploadModule,
              MenuModule,
              TooltipModule,
              CalendarModule,
              ButtonModule,
              TableModule,
              ListboxModule,
              InputTextModule,
              OverlayPanelModule,
              FieldsetModule,
              PanelModule,
              ScrollPanelModule
            ],
            exports: [BlockableDiv,
                      JiErrorDialog,
                      JiTextfieldm,
                      ProgressOverlay]
          })
export class JiTslib9Module {}
