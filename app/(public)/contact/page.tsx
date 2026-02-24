import type { Metadata } from 'next';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | TradeSignal',
  description: 'Get in touch with our support team. We\'re here to help with any questions about our trading signals and services.',
};

export default function ContactPage() {
  return <ContactForm />;
}
