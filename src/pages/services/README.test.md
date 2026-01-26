# Services Page Test Coverage

## Overview
Comprehensive test coverage for the Services (OFERTA) page, including party planning, smoked meats sections, and filter interactions.

## Test Files

### `Services.test.js`
Tests for the Services component covering all major functionality.

## Test Coverage Details

### Page Structure (3 tests)
- ✅ Component renders without crashing
- ✅ Displays all three service filter tabs
- ✅ Three filter buttons are present

### Default State - Parties/Events Section (8 tests)
- ✅ Shows "Organizacja imprez" section by default
- ✅ Displays party booking information (weddings, birthdays, communion)
- ✅ Phone number links work correctly (tel:+48733314441)
- ✅ Information about lower room (dolna sala)
- ✅ Information about upper room (górna sala)
- ✅ Information about outdoor shelter (wiata)
- ✅ Multiple service images display
- ✅ First filter button is active (disabled) by default

### Filter Interaction - Smoked Meats (6 tests)
- ✅ Switches to "Sprzedaż wędzonek" section when second filter clicked
- ✅ Displays smoked meats price list:
  - Szynka wędzona prażona (Ham)
  - Boczek wędzony (Bacon)
  - Polędwiczka wędzona (Tenderloin)
  - Pstrąg wędzony (Smoked trout)
  - Jajko wędzone (Smoked eggs)
- ✅ Shows prices correctly (85 zł/1kg, 75 zł/1kg, 95 zł/1kg, 12 zł/3szt)
- ✅ Phone number displays in smoked meats section
- ✅ Second filter button becomes active after click
- ✅ Hides parties content when switched

### Filter Switching Between Sections (2 tests)
- ✅ Can switch back to parties section after viewing smoked meats
- ✅ Maintains correct active state when switching between filters

### Content Details (2 tests)
- ✅ Displays traditional preparation message
- ✅ Shows information about natural ingredients (no chemicals)
- ✅ Emojis display in section headings

### Accessibility (3 tests)
- ✅ All phone links are accessible
- ✅ Filter buttons have text labels
- ✅ Images in service content have proper links

## Coverage Statistics

```
File        | % Stmts | % Branch | % Funcs | % Lines
------------|---------|----------|---------|--------
Services.js |  95.23% |   87.5%  |  100%   | 95.23%
```

**Total Tests: 24 passing**

## Service Sections

### 1. Organizacja Imprez (Party Planning)
Covers event organization including:
- Weddings
- Birthdays
- First Communion
- Corporate events

**Venues:**
- Lower room (dolna sala) - intimate atmosphere
- Upper room (górna sala) - park views
- Outdoor shelter (wiata) - rustic ambiance

### 2. Sprzedaż Wędzonek (Smoked Meats)
Traditional smoked products:
- Ham (Szynka) - 85 zł/kg
- Bacon (Boczek) - 75 zł/kg
- Tenderloin (Polędwiczka) - 95 zł/kg
- Trout (Pstrąg) - 85 zł/kg
- Eggs (Jajko) - 12 zł/3pcs

### 3. Catering
Redirects to `/catering` page

## Running Tests

### Run Services tests only
```bash
npm test -- Services.test
```

### Run with coverage
```bash
npm test -- Services.test --coverage --collectCoverageFrom='src/pages/services/**/*.{js,jsx}'
```

### Watch mode
```bash
npm test -- Services.test --watch
```

## Component Structure

```
Services
├── ServiceFilters
│   └── ServiceFiltersItem (x3)
│       ├── Card with image
│       └── Button (disabled when active)
└── Content Sections
    ├── Parties (activeFilter === 0)
    │   ├── Heading
    │   ├── Description
    │   ├── Phone links
    │   └── Images (6 total)
    └── Smoked (activeFilter === 1)
        ├── Heading
        ├── Description
        ├── Price table
        ├── Image
        └── Phone link
```

## Test Patterns Used

### 1. Filter Click Pattern
```javascript
const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
fireEvent.click(smokedFilter);
await waitFor(() => {
  expect(screen.getByText(/sprzedaż domowych wędzonek/i)).toBeInTheDocument();
});
```

### 2. Content Visibility Pattern
```javascript
// Check content is visible
expect(screen.getByText(/organizacja imprez okolicznościowych/i)).toBeInTheDocument();

// Switch filter
fireEvent.click(smokedFilter);

// Check old content is hidden
await waitFor(() => {
  expect(screen.queryByText(/organizacja imprez okolicznościowych/i)).not.toBeInTheDocument();
});
```

### 3. Active State Pattern
```javascript
const buttons = screen.getAllByRole('button');
expect(buttons[0]).toBeDisabled(); // Active button is disabled
expect(buttons[1]).not.toBeDisabled(); // Inactive button is enabled
```

### 4. Phone Link Testing
```javascript
const phoneLinks = screen.getAllByRole('link', { name: /\(\+48\) 733 314 441/i });
expect(phoneLinks.length).toBeGreaterThan(0);
phoneLinks.forEach(link => {
  expect(link).toHaveAttribute('href', 'tel:+48733314441');
});
```

## Mocking Strategy

### LazyImage Component
```javascript
jest.mock('components/LazyImage', () => {
  return function MockLazyImage({ src, className, text }) {
    return <img src={src} className={className} alt={text || 'mock-image'} />;
  };
});
```

This mock:
- Avoids lazy loading complexity
- Allows testing image presence
- Maintains className for styling tests

## Future Test Enhancements

### Suggested Additions:
1. **Visual Regression Tests**
   - Snapshot testing for layout
   - Image loading verification
   
2. **Performance Tests**
   - Filter switch speed
   - Image optimization checks

3. **E2E Tests**
   - Actual browser testing with Playwright/Cypress
   - Real user interaction flows

4. **Catering Navigation**
   - Test clicking catering filter redirects properly
   - Verify catering page integration

5. **Responsive Testing**
   - Mobile filter behavior
   - Image grid responsiveness
   - Phone link accessibility on touch devices

6. **i18n Testing**
   - Test content in Polish and English
   - Verify translations switch correctly

## Troubleshooting

### Common Test Failures

**Multiple elements found**
```
Found multiple elements with the text: /organizacja imprez/i
```
**Solution**: Use `getAllByText` instead of `getByText`

**Button not disabled**
```
expect(element).toBeDisabled()
Received element is not disabled
```
**Solution**: Ensure you're selecting the correct button, not navbar toggles

**Content not appearing**
```
Unable to find an element with the text
```
**Solution**: 
- Wrap assertions in `waitFor()` for async updates
- Check for special characters in text (quotes, emojis)
- Use regex patterns for flexible matching

## Related Documentation
- [Workflow Tests](../../workflows/README.md)
- [Home Page Tests](../home/README.test.md)
- [Services Component](./Services.js)
