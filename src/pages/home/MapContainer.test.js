import { render } from '@testing-library/react';
import PigeonMap from './MapContainer';

// Mock pigeon-maps
jest.mock('pigeon-maps', () => ({
  Map: ({ height, defaultCenter, defaultZoom, maxZoom, onClick, children }) => (
    <div
      data-testid="pigeon-map"
      data-height={height}
      data-center={JSON.stringify(defaultCenter)}
      data-zoom={defaultZoom}
      onClick={onClick}
    >
      {children}
    </div>
  ),
  Marker: ({ width, anchor, onClick }) => (
    <div
      data-testid="pigeon-marker"
      data-width={width}
      data-anchor={JSON.stringify(anchor)}
      onClick={onClick}
    />
  ),
}));

describe('MapContainer (PigeonMap)', () => {
  test('renders map with correct height', () => {
    const { getByTestId } = render(<PigeonMap height={300} />);
    const map = getByTestId('pigeon-map');
    expect(map).toBeInTheDocument();
    expect(map).toHaveAttribute('data-height', '300');
  });

  test('sets correct coordinates for Rumia location', () => {
    const { getByTestId } = render(<PigeonMap height={300} />);
    const map = getByTestId('pigeon-map');
    const center = JSON.parse(map.getAttribute('data-center'));
    
    // Check coordinates are close to Rumia location
    expect(center[0]).toBeCloseTo(54.5737, 2);
    expect(center[1]).toBeCloseTo(18.3947, 2);
  });

  test('sets correct zoom level', () => {
    const { getByTestId } = render(<PigeonMap height={300} />);
    const map = getByTestId('pigeon-map');
    expect(map).toHaveAttribute('data-zoom', '15');
  });

  test('renders marker at restaurant location', () => {
    const { getByTestId } = render(<PigeonMap height={300} />);
    const marker = getByTestId('pigeon-marker');
    expect(marker).toBeInTheDocument();
    
    const anchor = JSON.parse(marker.getAttribute('data-anchor'));
    expect(anchor[0]).toBeCloseTo(54.5737, 2);
    expect(anchor[1]).toBeCloseTo(18.3947, 2);
  });

  test('opens Google Maps link when map is clicked', () => {
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => ({
      focus: jest.fn(),
    }));

    const { getByTestId } = render(<PigeonMap height={300} />);
    const map = getByTestId('pigeon-map');
    
    map.click();
    
    expect(windowOpenSpy).toHaveBeenCalledWith(
      'https://goo.gl/maps/Te9WZqxWGadQH34N7',
      '_blank'
    );

    windowOpenSpy.mockRestore();
  });

  test('opens Google Maps link when marker is clicked', () => {
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => ({
      focus: jest.fn(),
    }));

    const { getByTestId } = render(<PigeonMap height={300} />);
    const marker = getByTestId('pigeon-marker');
    
    marker.click();
    
    expect(windowOpenSpy).toHaveBeenCalledWith(
      'https://goo.gl/maps/Te9WZqxWGadQH34N7',
      '_blank'
    );

    windowOpenSpy.mockRestore();
  });
});
