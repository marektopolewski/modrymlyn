import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { createRef } from 'react';
import Home from '../pages/home/Home';
import Services from '../pages/services/Services';
import Navbar from '../navbar/NavBar';

// Mock components to avoid external dependencies
jest.mock('components/LazyImage', () => {
  return function MockLazyImage({ src, className, text }) {
    return <img src={src} className={className} alt={text || 'mock-image'} />;
  };
});

jest.mock('../pages/home/MapContainer', () => {
  return function MockPigeonMap({ height }) {
    return <div data-testid="pigeon-map" style={{ height }}></div>;
  };
});

jest.mock('react-social-icons', () => ({
  SocialIcon: ({ url, network }) => (
    <a href={url} data-testid={`social-icon-${network || 'default'}`}>
      Social Icon
    </a>
  ),
}));

describe('Workflow: Home → Services (OFERTA) → Filter Interaction', () => {
  
  const createTestRouter = (initialRoute = '/') => {
    const routes = [
      {
        path: '/',
        element: (
          <>
            <Navbar />
            <Home />
          </>
        ),
      },
      {
        path: '/services',
        element: (
          <>
            <Navbar />
            <Services />
          </>
        ),
      },
    ];

    return createMemoryRouter(routes, {
      initialEntries: [initialRoute],
      initialIndex: 0,
    });
  };

  describe('Step 1: Start at Home', () => {
    test('renders Home page initially', () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      expect(screen.getByText(/modry młyn/i)).toBeInTheDocument();
      expect(screen.getByText(/tradycyjna kuchnia kaszubska/i)).toBeInTheDocument();
    });

    test('displays navigation bar with OFERTA link', () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      expect(ofertaLink).toBeInTheDocument();
      expect(ofertaLink).toHaveAttribute('href', '/services');
    });
  });

  describe('Step 2: Navigate to Services Page', () => {
    test('navigates to Services page when OFERTA is clicked', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      // Find and click OFERTA link
      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      // Wait for Services page to load
      await waitFor(() => {
        const filterTexts = screen.getAllByText(/organizacja imprez/i);
        expect(filterTexts.length).toBeGreaterThan(0);
      });
    });

    test('URL changes to /services after navigation', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        expect(router.state.location.pathname).toBe('/services');
      });
    });
  });

  describe('Step 3: Services Page Renders Correctly', () => {
    test('displays all three service filter options', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      // Navigate to services
      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        const filterTexts = screen.getAllByText(/organizacja imprez/i);
        expect(filterTexts.length).toBeGreaterThan(0);
        expect(screen.getByText(/sprzedaż wędzonek/i)).toBeInTheDocument();
        expect(screen.getByText(/catering/i)).toBeInTheDocument();
      });
    });

    test('displays default content (parties/events section)', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();
        expect(screen.getByText(/wesele, urodziny, i komunia święta/i)).toBeInTheDocument();
      });
    });

    test('first filter is active by default', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        // Find the service filter buttons specifically (not navbar buttons)
        const partiesFilterTexts = screen.getAllByText(/organizacja imprez/i);
        const partiesButton = partiesFilterTexts[0].closest('.card').querySelector('button');
        expect(partiesButton).toBeDisabled(); // Active button is disabled
      });
    });

    test('displays contact information with phone number', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        const phoneLinks = screen.getAllByRole('link', { name: /\(\+48\) 733 314 441/i });
        expect(phoneLinks.length).toBeGreaterThan(0);
        phoneLinks.forEach(link => {
          expect(link).toHaveAttribute('href', 'tel:+48733314441');
        });
      });
    });

    test('displays service images', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        const images = screen.getAllByRole('img');
        expect(images.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Step 4: Click First ServiceFiltersItem', () => {
    test('clicking first filter keeps showing parties content (already active)', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      // Navigate to services
      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();
      });

      // Click first filter (which is already active)
      const partiesFilter = screen.getAllByText(/organizacja imprez/i)[0].closest('.card');
      fireEvent.click(partiesFilter);

      // Content should remain the same
      expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();
      const partiesButton = partiesFilter.querySelector('button');
      expect(partiesButton).toBeDisabled();
    });

    test('can click second filter to change content', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      // Navigate to services
      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        const filterTexts = screen.getAllByText(/organizacja imprez/i);
        expect(filterTexts.length).toBeGreaterThan(0);
      });

      // Click second filter (the card, not the button)
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        expect(screen.getByText(/sprzedaż domowych wędzonek/i)).toBeInTheDocument();
      });
    });
  });

  describe('Step 5: Content Changes After Filter Click', () => {
    test('switches content from parties to smoked meats', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      // Navigate to services
      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();
      });

      // Verify initial content
      expect(screen.getByText(/wesele, urodziny/i)).toBeInTheDocument();
      expect(screen.queryByText(/szynka wędzona/i)).not.toBeInTheDocument();

      // Click second filter (the card)
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        // Old content should be gone
        expect(screen.queryByText(/wesele, urodziny/i)).not.toBeInTheDocument();
        
        // New content should appear
        expect(screen.getByText(/sprzedaż domowych wędzonek/i)).toBeInTheDocument();
        expect(screen.getByText(/szynka wędzona prażona/i)).toBeInTheDocument();
      });
    });

    test('updates active filter state after click', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        const partiesButton = screen.getAllByText(/organizacja imprez/i)[0].closest('.card').querySelector('button');
        expect(partiesButton).toBeDisabled(); // Initially active
      });

      // Click second filter (the card)
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        const partiesButton = screen.getAllByText(/organizacja imprez/i)[0].closest('.card').querySelector('button');
        const smokedButton = smokedFilter.querySelector('button');
        expect(partiesButton).not.toBeDisabled();
        expect(smokedButton).toBeDisabled(); // Now active
      });
    });

    test('displays price table after switching to smoked meats', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        const filterTexts = screen.getAllByText(/organizacja imprez/i);
        expect(filterTexts.length).toBeGreaterThan(0);
      });

      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        const prices85 = screen.getAllByText(/85 zł\/1kg/i);
        expect(prices85.length).toBeGreaterThan(0);
        expect(screen.getByText(/75 zł\/1kg/i)).toBeInTheDocument();
        expect(screen.getByText(/95 zł\/1kg/i)).toBeInTheDocument();
      });
    });

    test('phone number remains accessible after content change', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      await waitFor(() => {
        const filterTexts = screen.getAllByText(/organizacja imprez/i);
        expect(filterTexts.length).toBeGreaterThan(0);
      });

      // Verify phone link exists in initial content
      expect(screen.getAllByRole('link', { name: /733 314 441/i }).length).toBeGreaterThan(0);

      // Switch content
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      // Verify phone link still exists in new content
      await waitFor(() => {
        const phoneLink = screen.getByRole('link', { name: /\(\+48\) 733 314 441/i });
        expect(phoneLink).toBeInTheDocument();
        expect(phoneLink).toHaveAttribute('href', 'tel:+48733314441');
      });
    });
  });

  describe('Complete Workflow Integration', () => {
    test('completes full workflow: Home → Services → Filter Click → Content Change', async () => {
      const router = createTestRouter('/');
      render(<RouterProvider router={router} />);

      // Step 1: Start at Home
      expect(screen.getByText(/modry młyn/i)).toBeInTheDocument();

      // Step 2: Click OFERTA
      const ofertaLink = screen.getByText(/oferta/i).closest('a');
      fireEvent.click(ofertaLink);

      // Step 3: Services page renders
      await waitFor(() => {
        expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();
      });

      // Step 4 & 5: Click filter and verify content change
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        expect(screen.getByText(/sprzedaż domowych wędzonek/i)).toBeInTheDocument();
        expect(screen.queryByText(/organizacja imprez okolicznościowych/i)).not.toBeInTheDocument();
      });

      // Verify final state
      const smokedButton = smokedFilter.querySelector('button');
      expect(smokedButton).toBeDisabled(); // Second filter is active
      expect(screen.getByText(/szynka wędzona prażona/i)).toBeInTheDocument();
    });
  });
});
