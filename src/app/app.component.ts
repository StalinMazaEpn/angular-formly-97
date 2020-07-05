import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    name = 'Angular 8';

    dynamicForm = new FormGroup({});
    dynamicModel = {};
    dynamicFields: FormlyFieldConfig[] = [
        {
            key: 'input',
            type: 'input',
            templateOptions: {
                label: 'Input',
                placeholder: 'Input placeholder',
                required: true,
            }
        },
        {
            key: 'textarea',
            type: 'textarea',
            templateOptions: {
                label: 'Textarea',
                placeholder: 'Textarea placeholder',
                required: true,
            }
        },
        {
            key: 'checkbox',
            type: 'checkbox',
            templateOptions: {
                label: 'Checkbox',
            }
        },
        {
            key: 'select',
            type: 'select',
            templateOptions: {
                label: 'Select',
                placeholder: 'Select placeholder',
                required: true,
                options: [
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                    { label: 'Option 3', value: '3' },
                ]
            }
        },
        {
            key: 'radio',
            type: 'radio',
            templateOptions: {
                label: 'Radio',
                required: true,
                options: [
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                ]
            }
        }
    ];

    onSubmit() {
        if (this.dynamicForm.valid) {
            alert(JSON.stringify(this.dynamicModel, null, 2));
        }else{
            alert('Formulario Inválido')
        }
    }


}
