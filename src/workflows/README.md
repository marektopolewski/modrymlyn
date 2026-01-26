# Workflow Tests Documentation

This directory contains integration tests that verify complete user workflows across multiple pages and components.

## HomeToServices.test.js

### Overview
Tests the complete user journey from the Home page to the Services (OFERTA) page, including navigation, content rendering, and filter interactions.

### Workflow Coverage

#### Step 1: Start at Home
- ✅ Home page renders correctly
- ✅ Navigation bar displays with OFERTA link

#### Step 2: Navigate to Services Page
- ✅ Click OFERTA link navigates to Services page
- ✅ URL changes to `/services`

#### Step 3: Services Page Renders Correctly  
- ✅ All three service filter options display:
  - Organizacja imprez (Party/Event Planning)
  - Sprzedaż wędzonek (Smoked Meats Sales)
  - Catering
- ✅ Default content (parties section) renders
- ✅ First filter is active by default
- ✅ Contact information with phone number displays
- ✅ Service images load correctly

#### Step 4: Click First ServiceFiltersItem
- ✅ Clicking first filter (already active) maintains content
- ✅ Button state remains disabled
- ✅ Second filter can be clicked to change content

#### Step 5: Content Changes After Filter Click
- ✅ Content switches from parties to smoked meats
- ✅ Old content is removed from DOM
- ✅ New content appears correctly
- ✅ Active filter button updates
- ✅ Price table displays after switch
- ✅ Phone number remains accessible

### Complete Integration Test
✅ Full workflow: Home → Click OFERTA → Services Renders → Click Filter → Content Changes

## Test Statistics

**Total Tests: 19**
- All 19 tests passing ✅
- Services.js Coverage: 95.23%
- Branches: 87.5%
- Functions: 100%

## Running Workflow Tests

### Run all workflow tests
```bash
npm test -- workflows
```

### Run specific workflow test
```bash
npm test -- HomeToServices
```

### Run with coverage
```bash
npm test -- workflows --coverage
```

### Watch mode
```bash
npm test -- workflows --watch
```

## Test Architecture

### Mocking Strategy
- **LazyImage**: Mocked to simple `<img>` tags
- **MapContainer**: Mocked to avoid map library overhead
- **react-social-icons**: Mocked to simple anchor tags
- **Router**: Uses `createMemoryRouter` for isolated routing tests

### Key Testing Patterns

1. **Navigation Testing**
   ```javascript
   const ofertaLink = screen.getByText(/oferta/i).closest('a');
   fireEvent.click(ofertaLink);
   await waitFor(() => {
     expect(router.state.location.pathname).toBe('/services');
   });
   ```

2. **Filter Interaction Testing**
   ```javascript
   const smokedFilter = screen.getByText(/sprzedaż wędzonek/i).closest('.card');
   fireEvent.click(smokedFilter);
   await waitFor(() => {
     expect(screen.getByText(/sprzedaż domowych wędzonek/i)).toBeInTheDocument();
   });
   ```

3. **Content Verification**
   ```javascript
   // Verify old content is gone
   expect(screen.queryByText(/wesele, urodziny/i)).not.toBeInTheDocument();
   
   // Verify new content appears
   expect(screen.getByText(/szynka wędzona prażona/i)).toBeInTheDocument();
   ```

4. **State Management Testing**
   ```javascript
   const smokedButton = smokedFilter.querySelector('button');
   expect(smokedButton).toBeDisabled(); // Active state
   ```

## Future Enhancements

Consider adding workflow tests for:
- **Menu Navigation & Filtering**: Home → Menu → Apply filters → View items
- **Photo Gallery Navigation**: Home → Photos → Click photo → View details → Navigate back
- **Order/Catering Flow**: Services → Catering → Add items → Checkout → Success
- **Language Switching**: Any page → Change language → Verify translations
- **Mobile Navigation**: Test navbar collapse/expand behavior
- **Error Handling**: Test 404 navigation, invalid routes

## Troubleshooting

### Common Issues

**Issue**: Tests timeout waiting for content
- **Solution**: Ensure `waitFor` is used for async operations
- **Solution**: Check that mocks are properly configured

**Issue**: "Found multiple elements" error  
- **Solution**: Use `getAllByText` or `getAllByRole` instead of singular queries
- **Solution**: Use more specific selectors (e.g., `.closest('.card')`)

**Issue**: Wrong button being tested
- **Solution**: Query buttons within specific containers
- **Solution**: Use `closest()` to find parent elements first

### Debug Tips

```javascript
// Print current DOM state
screen.debug();

// Print specific element
screen.debug(screen.getByText(/some text/i));

// Check what queries are available
screen.logTestingPlaygroundURL();
```

## Related Documentation

- [Services Component Tests](../pages/services/Services.test.js)
- [Home Page Tests](../pages/home/README.test.md)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro)
