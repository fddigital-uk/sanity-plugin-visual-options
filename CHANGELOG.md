# Change Log

Notable changes are within this log. Not all patch releases will be detailed, see commit history for a greater insight.

## 3.0.0 - 3rd August 2026

This is a major release. Existing schemas using `options.list` as an object should continue to work, but the plugin now normalises schema options internally and registers studio layout middleware. Test copy/paste, document duplication, and studio startup carefully after upgrading.

### Breaking changes

- **Node.js**: requires `>=20.19 <22 || >=22.12`
- **Sanity**: peer dependency now includes Sanity v6 (`^3.0.0 || ^4.0.0-0 || ^5.0.0 || ^6.0.0-0`)
- **React**: peer dependency now includes React 19
- **Build output**: plugin is built with `@sanity/pkg-utils` as ESM; consumers linking or bundling the package should use the published `dist` entry (or the `source` export in development)
- **Plugin behaviour**: registers a studio layout component to patch compiled schema types at runtime. Unlikely to conflict with other plugins, but worth verifying if you use custom studio layout middleware

### Bug fixes

- **Copy/paste and document copy**: fixes `targetSchemaType.options?.list?.map is not a function` when copying or pasting documents/fields that contain `visualOptions` fields. Sanity's copy/paste logic expects `options.list` to be an array; this plugin uses an object dictionary for icons and labels. The plugin now normalises field options so copy/paste works while preserving the visual option config

### Features

- Schema normalisation converts object-style `options.list` values into:
  - `options.visualOptions` — the original icon/label object used by the input component
  - `options.list` — a Sanity-compatible `[{title, value}, ...]` array for studio internals such as copy/paste validation

### Maintenance

- Migrated build and release tooling to `@sanity/pkg-utils` and `@sanity/plugin-kit` v10
- Replaced Prettier/ESLint with `oxfmt` and `oxlint`
- Updated dev dependencies for Sanity 6, React 19, and TypeScript 7
- Dark mode text visibility fix for option labels

## 0.8.3 - 9th November 2020

### Bug Fixes

- Resolves CSS compilation issue with Sanity Studio 2.0 due to Sanity changing variable name from `--min-medium` to `--screen-medium`.
  ([Issue #5](https://github.com/fractaldimensions/sanity-plugin-visual-options/issues/5) - Thanks to [GarethChetwood](https://github.com/GarethChetwood) for reporting)

## 0.8.2 - 28th May 2020

- Removes unnecessary dependency 'typescript'

## 0.8.0 - 4th May 2020

### Features

- Labels can be shown as tool tips on hover by adding `showTooltip: true` to the options.
- Option sizes can be set to `small` and `large` by adding `optionSize: "small"` to the options ([Issue #2](https://github.com/fractaldimensions/sanity-plugin-visual-options/issues/2))

## 0.7.0 - 9th April 2020

Last of stability issues resolved.

### Bug Fixes

- Change of control warning in console ([Issue #4](https://github.com/fractaldimensions/sanity-plugin-visual-options/issues/4))

## 0.6.7

### Bug Fixes

- Grid drops to two columns on mobile view.
- [react-icons](https://react-icons.netlify.com/#/) now fills full space.
