# ROBY Chatbot

## Testing

This project uses Jest for JavaScript unit testing.

### Installation

To install the necessary dependencies for testing (and for the project itself), run:

```bash
npm install
```

### Running Tests

To execute the unit tests, run the following command from the project root:

```bash
npm test
```

### Known Issues & Limitations

*   The test for the fallback mechanism in `scripts/responses.js` that opens a Google search window currently has the `window.open` call commented out due to limitations in the JSDOM test environment. The rest of the fallback logic is tested.
*   The `getTime()` function from `scripts/chat.js` is tested via a helper file (`scripts/getTimeHelper.js`) to bypass JSDOM environment issues. Other DOM-manipulating functions in `scripts/chat.js` are not extensively unit-tested due to these constraints.
