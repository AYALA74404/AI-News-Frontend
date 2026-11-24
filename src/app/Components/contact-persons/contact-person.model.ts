export class ContactPerson {
  constructor(
    public name: string,
    public email: string,
    public phone?: string,
    public mailingConsent: boolean = true,
  ) {}
}