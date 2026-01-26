import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Services from './Services';

// Mock LazyImage component
jest.mock('components/LazyImage', () => {
  return function MockLazyImage({ src, className, text }) {
    return <img src={src} className={className} alt={text || 'mock-image'} />;
  };
});

describe('Services Page', () => {
  const renderServices = () => {
    return render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    );
  };

  describe('Page Structure', () => {
    test('renders without crashing', () => {
      renderServices();
    });

    test('displays service filter tabs', () => {
      renderServices();
      const filterTexts = screen.getAllByText(/organizacja imprez/i);
      expect(filterTexts.length).toBeGreaterThan(0);
      expect(screen.getByText(/sprzedaż wędzonek/i)).toBeInTheDocument();
      expect(screen.getByText(/catering/i)).toBeInTheDocument();
    });

    test('displays three service filter items', () => {
      renderServices();
      const filterButtons = screen.getAllByRole('button');
      expect(filterButtons.length).toBe(3);
    });
  });

  describe('Default State - Parties/Events Section', () => {
    test('shows "Organizacja imprez" section by default', () => {
      renderServices();
      expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();
    });

    test('displays party booking information', () => {
      renderServices();
      expect(screen.getByText(/wesele, urodziny, i komunia święta/i)).toBeInTheDocument();
    });

    test('displays phone number links in parties section', () => {
      renderServices();
      const phoneLinks = screen.getAllByRole('link', { name: /\(\+48\) 733 314 441/i });
      expect(phoneLinks.length).toBeGreaterThan(0);
      phoneLinks.forEach(link => {
        expect(link).toHaveAttribute('href', 'tel:+48733314441');
      });
    });

    test('displays information about lower room (dolna sala)', () => {
      renderServices();
      expect(screen.getByText(/kameralną, oddzielną salką/i)).toBeInTheDocument();
    });

    test('displays information about upper room (górna sala)', () => {
      renderServices();
      expect(screen.getByText(/salę górną/i)).toBeInTheDocument();
    });

    test('displays information about outdoor shelter (wiata)', () => {
      renderServices();
      expect(screen.getByText(/naszej wiaty w sielskim klimacie/i)).toBeInTheDocument();
    });

    test('displays multiple service images', () => {
      renderServices();
      const images = screen.getAllByRole('img');
      // Should have filter images (3) + service content images (6)
      expect(images.length).toBeGreaterThan(6);
    });

    test('first filter button is active by default', () => {
      renderServices();
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toBeDisabled(); // Active button is disabled
      expect(buttons[1]).not.toBeDisabled();
      expect(buttons[2]).not.toBeDisabled();
    });
  });

  describe('Filter Interaction - Switching to Smoked Meats', () => {
    test('switches to "Sprzedaż wędzonek" section when second filter is clicked', async () => {
      renderServices();
      
      // Click on "Sprzedaż wędzonek" filter - click the card, not just the button
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      // Wait for content to change
      await waitFor(() => {
        expect(screen.getByText(/sprzedaż domowych wędzonek/i)).toBeInTheDocument();
      });
    });

    test('displays smoked meats price list', async () => {
      renderServices();
      
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        expect(screen.getByText(/szynka wędzona prażona/i)).toBeInTheDocument();
        expect(screen.getByText(/boczek wędzony/i)).toBeInTheDocument();
        expect(screen.getByText(/polędwiczka wędzona/i)).toBeInTheDocument();
        expect(screen.getByText(/pstrąg wędzony/i)).toBeInTheDocument();
        expect(screen.getByText(/jajko wędzone/i)).toBeInTheDocument();
      });
    });

    test('displays prices in smoked meats section', async () => {
      renderServices();
      
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        const prices85 = screen.getAllByText(/85 zł\/1kg/i);
        expect(prices85.length).toBeGreaterThan(0);
        expect(screen.getByText(/75 zł\/1kg/i)).toBeInTheDocument();
        expect(screen.getByText(/95 zł\/1kg/i)).toBeInTheDocument();
        expect(screen.getByText(/12 zł\/3szt/i)).toBeInTheDocument();
      });
    });

    test('displays phone number in smoked meats section', async () => {
      renderServices();
      
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        const phoneLink = screen.getByRole('link', { name: /\(\+48\) 733 314 441/i });
        expect(phoneLink).toBeInTheDocument();
        expect(phoneLink).toHaveAttribute('href', 'tel:+48733314441');
      });
    });

    test('second filter button becomes active after click', async () => {
      renderServices();
      
      const buttons = screen.getAllByRole('button');
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        expect(buttons[0]).not.toBeDisabled();
        expect(buttons[1]).toBeDisabled(); // Now active
        expect(buttons[2]).not.toBeDisabled();
      });
    });

    test('hides parties content when switched to smoked meats', async () => {
      renderServices();
      
      // Verify parties content is visible initially
      expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();
      
      // Switch to smoked meats
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        expect(screen.queryByText(/organizacja imprez okolicznościowych/i)).not.toBeInTheDocument();
        expect(screen.getByText(/sprzedaż domowych wędzonek/i)).toBeInTheDocument();
      });
    });
  });

  describe('Filter Interaction - Switching Between Sections', () => {
    test('can switch back to parties section after viewing smoked meats', async () => {
      renderServices();
      
      // Click smoked meats filter
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        expect(screen.getByText(/sprzedaż domowych wędzonek/i)).toBeInTheDocument();
      });

      // Click back to parties filter
      const partiesFilter = screen.getByText(/organizacja imprez/i).closest('.card');
      fireEvent.click(partiesFilter);

      await waitFor(() => {
        expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();
        expect(screen.queryByText(/sprzedaż domowych wędzonek/i)).not.toBeInTheDocument();
      });
    });

    test('maintains correct active state when switching between filters', async () => {
      renderServices();
      const buttons = screen.getAllByRole('button');
      
      // Initially first is active
      expect(buttons[0]).toBeDisabled();
      
      // Click second
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);
      await waitFor(() => {
        expect(buttons[1]).toBeDisabled();
        expect(buttons[0]).not.toBeDisabled();
      });
      
      // Click first again
      const partiesFilter = screen.getByText(/organizacja imprez/i).closest('.card');
      fireEvent.click(partiesFilter);
      await waitFor(() => {
        expect(buttons[0]).toBeDisabled();
        expect(buttons[1]).not.toBeDisabled();
      });
    });
  });

  describe('Content Details', () => {
    test('displays traditional preparation message in smoked meats', async () => {
      renderServices();
      
      const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
      fireEvent.click(smokedFilter);

      await waitFor(() => {
        expect(screen.getByText(/według tradycyjnych, sprawdzonych przepisów/i)).toBeInTheDocument();
        expect(screen.getByText(/bez żadnej.+chemii/i)).toBeInTheDocument();
      });
    });

    test('displays emojis in both sections', () => {
      renderServices();
      
      // Parties section has emojis in heading
      expect(screen.getByText(/📆/)).toBeInTheDocument();
      expect(screen.getByText(/🍽/)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('all phone links are accessible', () => {
      renderServices();
      const phoneLinks = screen.getAllByRole('link', { name: /733 314 441/i });
      phoneLinks.forEach(link => {
        expect(link).toHaveAccessibleName();
      });
    });

    test('filter buttons have text labels', () => {
      renderServices();
      const filterTexts = screen.getAllByText(/organizacja imprez/i);
      expect(filterTexts.length).toBeGreaterThan(0);
      expect(screen.getByText(/sprzedaż wędzonek/i)).toBeInTheDocument();
      expect(screen.getByText(/catering/i)).toBeInTheDocument();
    });

    test('images in service content have links', () => {
      renderServices();
      const imageLinks = screen.getAllByRole('link').filter(
        link => link.querySelector('img')
      );
      expect(imageLinks.length).toBeGreaterThan(0);
    });
  });
});
