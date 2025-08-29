# ESLint v9 Migration

This PR upgrades ESLint to v9 and migrates to the new Flat Config format.

## Migration Checklist

- [ ] No legacy `.eslintrc*` files remain in the repo
- [ ] `eslint.config.js` loads without warnings
- [ ] ESLint runs successfully with `pnpm lint`
- [ ] Husky pre-commit hook runs ESLint checks
- [ ] CI pipeline still executes lint in reasonable time
- [ ] No conflicts between ESLint and Prettier rules

## Changes Made

- Upgraded to ESLint v9 with Flat Config
- Added missing plugins (jsx-a11y)
- Streamlined TypeScript setup for better performance
- Updated CI/pre-commit hooks for linting
- Removed legacy config files and unused plugins

## Testing Done

1. Ran `pnpm lint` successfully
2. Verified pre-commit hook execution
3. Checked build and test pipeline
4. Validated React + TypeScript setup
