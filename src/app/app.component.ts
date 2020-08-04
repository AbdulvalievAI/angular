import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public selectedFiles: Array<File> = [];

  public handlerFileInput(files: Array<File>): void {
    console.log('handleFileInput | files', typeof files);
    this.selectedFiles.push(...files);
  }
}
/*
Роутинг

get
set

[()] - двухстороннее связывание

app
	components
		files-list
		...
	pages
		send-mail
			form
				- (реактивная форма импорт из ангуляра)
				- rxjs на отправку
				- отмена отправки? rxjs
				- приостановка отправки? rxjs
				- автозаполнение формы по кнопке
			messageDialog
		...

мы заполняем форму 1,
мы заполняем форму 2,
выводит вид письма с двух заполненых форм.
При изминении любой формы, меняеться вид письма в реалтайме.
брать с формы 1 и 2, valueChanges и обьеденить их в один для вывода письма.
 */
