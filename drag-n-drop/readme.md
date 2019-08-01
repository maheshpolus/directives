
#File drop listner

It's an angular directive for generic usage.

## Installation

Download the directive and add it into your module.

## Usage

```TypeScript
import { DragNdropDirective } from './directives/keyboardListener.directive';

@NgModule({
  declarations: [
    AppComponent,
    ....,
    DragNdropDirective
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
    <div class="drop-zone" appDragNdrop  (filesDropEvent)="yourFunctionToRecieveFiles($event)">
    ....  
    </div>
```

## Parameters
Name  | Description | Example | 
------------- | ------------- | -------------
(filesDropEvent)  | on files drop event | (onEscape)="yourFunction($event)"


## Contributing
Pull requests are welcomed. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.


## License
