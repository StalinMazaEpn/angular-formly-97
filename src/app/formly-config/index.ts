import { MatFormFieldDefaultOptions } from '@angular/material/form-field';

const DEFAULT_VALIDATION_MESSAGES = [
        { name: 'required', message: 'This field is required' },
];

export const FORMLY_MODULE_CONFIG = {
      validationMessages: DEFAULT_VALIDATION_MESSAGES,
    }

export const FORMLY_FIELDS_APPEREANCE: MatFormFieldDefaultOptions = {
};