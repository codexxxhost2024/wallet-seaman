import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import ServiceCategories from './components/ServiceCategories';
import FeaturedServices from './components/FeaturedServices';
import ServiceSearch from './components/ServiceSearch';

export default function ServicesPage() {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <ServiceSearch />
        <ServiceCategories />
        <FeaturedServices />
      </main>
      <BottomNav />
    </div>
  );
}