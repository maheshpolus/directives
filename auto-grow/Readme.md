
# Auto grow for textarea

It's an angular directive for generic usage.Only to be used with textarea, since its uses focus and oniput as event listeners.

## Installation

Download the directive and add it into your module.

## Usage

```TypeScript
import { AutoGrowDirective } from './directives/autoGrow.directive';

@NgModule({
  declarations: [
    AppComponent,
    ....,
    AutoGrowDirective
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
   <textarea appAutoGrow  class="form-control custom-input" type="text"
     placeholder= "Question" id="my-custum-textarea" rows="1">
    </textarea>
```


Name  | Description | Example | 
------------- | ------------- | -------------
(onEscape)  | onEscapekey event( optional) | (onEscape)="yourFunction($event)"

## Other requirements
None.

## Contributing
Pull requests are welcomed. For major changes, please open an issue first to discuss what you would like to change.

## License

