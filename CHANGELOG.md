# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
- Function translateSingle exposed by useLitteraMethods hook for translating a single key.

## [2.1.4] - 2020-09-14
### Changed
- Disabled missing keys reports for empty values.

## [2.1.3] - 2020-09-11
### Fixed
- Preset function types with useLittera.

## [2.1.2] - 2020-09-04
### Changed
- Missing translations warning will only be logged in development mode.

### Fixed
- Disabled checking missing translations for variable translations.

## [2.1.1] - 2020-09-03
### Fixed
- Broken TS types occurring since last release.

## [2.1.0] - 2020-08-30
### Added
- Variable translations.

### Fixed
- Type checking for translations and locale in core methods.

## [2.0.4] - 2020-07-16
### Fixed
- Build package before publishing...

## [2.0.3] - 2020-07-16
### Fixed
- useLittera types.

## [2.0.2] - 2020-07-15
### Fixed
- Stupid thing, forgot to build the package before publishing.. :D

## [2.0.1] - 2020-07-15
### Fixed
- Library not resolving.

## [2.0.0] - 2020-07-15
### Added
- Automaticaly detect browser language. Use the `detectLocale` provider prop.
- Ability to provide custom locale pattern (default is still xx_XX)
- New provider props, `locales` and `initialLocale`

### Changed
- Split useLittera into two hooks (useLittera and useLitteraMethods)
- Change provider props naming. Language is now called locale etc.

## [1.2.2] - 2019-11-10
### Changed
-   Rewrite lib to TypeScript

## [1.2.0] - 2019-07-17
### Added
-   Code documentation

### Fixed
-   Deployment process

## [1.1.4] - 2019-07-14
### Removed
-   Unused code and logs.
