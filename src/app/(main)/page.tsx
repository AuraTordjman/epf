import { metaObject } from '@/config/site.config';
import PointOfSalePage from './point-of-sale/page';
import TestPage from './Test/page';
import LoginPage from './Connexion/page';
export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {
  
  return <TestPage/>;
}
