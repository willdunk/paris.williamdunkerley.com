# paris.williamdunkerley.com
This is the development repository for `paris.williamdunkerley.com`. The website will eventually replace `williamdunkerley.com`, but lives at `paris.williamdunkerley.com`, at least until version 1. Then I will rename this repository appropriately.

## Deployment Details
The CI/CD deployment pipeline is handled by a Jenkins instance that lives at `https://rotterdam.williamdunkerley.com`. This webhook is already set up via the settings of this repository and will build on pushes to any of the following branches/branch-types:

- `master`: Production equivalent, located at `paris.williamdunkerley.com`
- `release`: QA equivalent, located at `vienna.williamdunkerley.com`, also default branch for this repository
- `feature/*`: Dev equivalent, located at `perth.williamdunkerley.com`

## Project Details
### Steps to contribute/raise issues:

1. Open an issue, it will automatically be placed in the To-Do column in the Github project
2. Create a `feature/*` branch off of `release` (if possible), that contains the implementation/fix
3. Create a Pull Request and link the original issue within it, give sufficient detail in the summary
4. Wait for checks to pass, and merge back into `release`
5. Merge into `master` when ready to put the most recent version into production

## Git Ediquette

This link is provided, but will be updated later. [link](https://www.theserverside.com/video/Follow-these-git-commit-message-guidelines)