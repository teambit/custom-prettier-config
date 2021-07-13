# custom-prettier-config
An example repo for customizing prettier config in a custom env

## Structure
In this repo we created a new custom-env using `bit create react-env custom-env` and a simple react component using `bit create react-component ui/button`;

The `ui/button` component is configured to use the `custom-env` (see in the workspace.jsonc file).

## custom-env
The custom env is using the new API of `usePrettier` (see more details in (this pr)[https://github.com/teambit/bit/pull/4568])
It's mutating the default react env prettier config, and changing the tab width from the default 2 to 4.

## Run this project
```
git clone https://github.com/teambit/custom-prettier-config.git
bit install
bit compile
bit format --check
```

The `bit format --check` will show an error in the button files, as they are originally formatted with the default tab width 2. 
Running `bit format` (no `--check`) will re-format them to use tab width 4.