declare module 'emailjs-com' {
    export function sendForm(serviceID: string, templateID: string, templateParams: object, userID: string): Promise<any>;
}