import type { Metadata } from 'next';
import { PricingPlans } from './pricing-plans';

export const metadata: Metadata = {
  title: 'Pricing | TradeSignal',
  description: 'Choose the perfect trading plan. Flexible pricing for traders of all levels with no hidden fees.',
};

export default function PricingPage() {
  return <PricingPlans />;
}
