export interface UserFormsModel{
    id: string,
    type: 'text' | 'tel' | 'date' | 'radio' | 'select';
    label: string   
}