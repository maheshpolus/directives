
# keyBoard Event listner

It's an angular directive for generic usage.

## Installation

Download the directive and add it into your module.

## Usage

```TypeScript
import { KeyboardListenerDirective } from './directives/keyboardListener.directive';

@NgModule({
  declarations: [
    AppComponent,
    ....,
    KeyboardListenerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//** in your html file"
    <div  appKeyboardListener (onEscape)="yourFunction">
        <input id="MytextField" type="text" placeholder="enter tet"  [(ngModel)]="result?.proposal.homeUnitName"/>
        <ul class="sb-results-dropdown-menu text-left">
            <li  class= "app-kb-listner" *ngFor="let result of leadUnits" (click)="myFunction(result);">
            <span [innerHTML]="result.unitName"></span></li>
        </ul>
    </div>
```

## Parameters
Name  | Description | Example | 
------------- | ------------- | -------------
(onEscape)  | onEscapekey event( optional) | (onEscape)="yourFunction($event)"

## Other requirements

You should add 'app-kb-listner' to li class to enable key event listener (uses 'getElementsByClassName' to collect li list)
can be used in other html tags ul li is used as an example

Adds 'app-item-highlighted' to the current selected li. Add this class to your stylesheet.

```Typescript

.app-item-highlighted{
   background: red;  
}

```


## Contributing
Pull requests are welcomed. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.


## License