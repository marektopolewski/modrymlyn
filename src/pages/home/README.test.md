# Home Page Test Coverage

## Overview
This directory contains comprehensive test coverage for the Home page of Modry Młyn website.

## Test Files

### `Home.test.js`
Tests for the main Home component covering:

#### Page Structure
- ✅ Component renders without crashing
- ✅ Restaurant name display
- ✅ Restaurant tagline
- ✅ Restaurant address

#### Visual Elements
- ✅ Restaurant logo
- ✅ Exterior and interior images
- ✅ Map component with loading state

#### Contact Information
- ✅ Phone number with correct tel: link
- ✅ Call to action text

#### Social Links
- ✅ Facebook link with correct URL
- ✅ Instagram link
- ✅ Google Maps link
- ✅ Email link

#### Partnership Logos
- ✅ ARP logos with navigation links

#### Footer
- ✅ Regulamin (Terms) link
- ✅ Privacy Policy link

#### Accessibility
- ✅ All links have accessible names
- ✅ External links are valid

### `MapContainer.test.js`
Tests for the PigeonMap component covering:
- ✅ Map renders with correct dimensions
- ✅ Correct GPS coordinates for Rumia location
- ✅ Appropriate zoom level
- ✅ Marker placement
- ✅ Click handlers that open Google Maps

## Coverage
Current coverage: **100%** for all Home page components
- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%

## Running Tests

### Run all tests
```bash
npm test
```

### Run Home page tests only
```bash
npm test Home
```

### Run with coverage
```bash
npm test -- --coverage --collectCoverageFrom='src/pages/home/**/*.{js,jsx}'
```

### Watch mode
```bash
npm test -- --watch
```

## Mocking Strategy

The tests use the following mocks:

1. **LazyImage Component** - Mocked to render simple `<img>` tags to avoid lazy loading complexity
2. **PigeonMap Component** - Mocked in Home.test.js to avoid external map library dependencies
3. **pigeon-maps Library** - Mocked in MapContainer.test.js to test map logic without rendering actual maps
4. **react-social-icons** - Mocked to render simple anchor tags for testing

## Future Improvements

Consider adding:
- E2E tests using the browser extension to test actual map interactions
- Visual regression tests for layout changes
- Performance tests for image loading
- Mobile responsiveness tests
