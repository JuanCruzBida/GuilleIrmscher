# Deny List

- **Forbidden Patterns**:
  - No `any` type (enforced by `tsconfig.json`).
  - No `useEffect` for data fetching (use Tanstack Query).
  - No `localState` for URL-relevant items (use `nuqs`).
  - No inline styles (use Tailwind CSS).
  - No direct SQL queries from Client Components (use Server Actions/API).
- **Forbidden Libraries**:
  - `axios` (use native `fetch` or specific wrappers).
  - `moment.js` (use `date-fns` or native `Intl`).
  - `lodash` (use native JS or minimal helpers).
