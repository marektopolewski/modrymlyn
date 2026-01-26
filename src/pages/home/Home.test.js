import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

// Mock the LazyImage component to avoid lazy loading issues in tests
jest.mock('components/LazyImage', () => {
  return function MockLazyImage({ src, className, text }) {
    return <img src={src} className={className} alt={text || 'mock-image'} />;
  };
});

// Mock the MapContainer component
jest.mock('./MapContainer', () => {
  return function MockPigeonMap({ height }) {
    return <div data-testid="pigeon-map" style={{ height }}></div>;
  };
});

// Mock react-social-icons
jest.mock('react-social-icons', () => ({
  SocialIcon: ({ url, network }) => (
    <a href={url} data-testid={`social-icon-${network || 'default'}`}>
      Social Icon
    </a>
  ),
}));

describe('Home Page', () => {
  const renderHome = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };

  describe('Page Structure', () => {
    test('renders without crashing', () => {
      renderHome();
    });

    test('displays restaurant name', () => {
      renderHome();
      const heading = screen.getByRole('heading', { name: /modry młyn/i });
      expect(heading).toBeInTheDocument();
    });

    test('displays restaurant tagline', () => {
      renderHome();
      const tagline = screen.getByText(/tradycyjna kuchnia kaszubska w nowoczesnym wydaniu/i);
      expect(tagline).toBeInTheDocument();
    });

    test('displays restaurant address', () => {
      renderHome();
      const address = screen.getByText(/mickiewicza 19a, rumia/i);
      expect(address).toBeInTheDocument();
    });
  });

  describe('Images', () => {
    test('displays restaurant logo', () => {
      renderHome();
      const images = screen.getAllByAltText(/mock-image/i);
      expect(images.length).toBeGreaterThan(0);
    });

    test('displays exterior and interior images', () => {
      renderHome();
      const images = screen.getAllByRole('img');
      // Should have multiple images: logo, exterior, interior, funding logos, google maps icon
      expect(images.length).toBeGreaterThan(4);
    });
  });

  describe('Map Component', () => {
    test('displays map after loading', async () => {
      renderHome();
      
      // Initially shows loading spinner
      const spinner = screen.queryByRole('status');
      
      // Wait for map to appear
      await waitFor(() => {
        const map = screen.getByTestId('pigeon-map');
        expect(map).toBeInTheDocument();
      }, { timeout: 1000 });
    });
  });

  describe('Contact Information', () => {
    test('displays phone number with correct link', () => {
      renderHome();
      const phoneLink = screen.getByRole('link', { name: /\(\+48\) 733 314 441/i });
      expect(phoneLink).toBeInTheDocument();
      expect(phoneLink).toHaveAttribute('href', 'tel:+48733314441');
    });

    test('displays call to action text', () => {
      renderHome();
      const callText = screen.getByText(/zadzwoń do nas/i);
      expect(callText).toBeInTheDocument();
    });
  });

  describe('Social Links', () => {
    test('displays social media icons', () => {
      renderHome();
      const socialIcons = screen.getAllByTestId(/social-icon/i);
      expect(socialIcons.length).toBeGreaterThan(0);
    });

    test('has Facebook link', () => {
      renderHome();
      const fbLink = screen.getAllByRole('link').find(
        link => link.href.includes('facebook.com')
      );
      expect(fbLink).toBeInTheDocument();
      expect(fbLink).toHaveAttribute('href', 'https://www.facebook.com/modrymlyn.rumia');
    });

    test('has Google Maps link', () => {
      renderHome();
      const mapsLinks = screen.getAllByRole('link').filter(
        link => link.href.includes('goo.gl/maps')
      );
      expect(mapsLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Funding/Partnership Logos', () => {
    test('displays ARP logos with links', () => {
      renderHome();
      const arpLinks = screen.getAllByRole('link').filter(
        link => link.getAttribute('href') === '/arp'
      );
      expect(arpLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Footer Links', () => {
    test('displays link to regulamin (terms)', () => {
      renderHome();
      const regulaminLinks = screen.getAllByRole('link', { name: /regulamin/i });
      expect(regulaminLinks.length).toBeGreaterThan(0);
      expect(regulaminLinks[0]).toHaveAttribute('href', '/regulamin');
    });

    test('displays link to privacy policy', () => {
      renderHome();
      const privacyLink = screen.getByRole('link', { name: /polityka prywatności/i });
      expect(privacyLink).toBeInTheDocument();
      expect(privacyLink).toHaveAttribute('href', '/regulamin');
    });
  });

  describe('Accessibility', () => {
    test('phone number is accessible as a link', () => {
      renderHome();
      const phoneLink = screen.getByRole('link', { name: /733 314 441/i });
      expect(phoneLink).toHaveAccessibleName();
    });

    test('all external links are present and valid', () => {
      renderHome();
      const links = screen.getAllByRole('link');
      const externalLinks = links.filter(
        link => link.href && (
          link.href.includes('facebook.com') ||
          link.href.includes('instagram.com') ||
          link.href.includes('goo.gl') ||
          link.href.includes('mailto:')
        )
      );
      expect(externalLinks.length).toBeGreaterThan(0);
    });
  });
});
