# @batterii/yeoman-validators
A library of validator functions to use for [Yeoman](https://yeoman.io/)
generator prompts. Each returns either `true` or an error message string, as
specified by [Inquirer.js](https://github.com/SBoudrias/Inquirer.js), the CLI
library Yeoman uses to display its prompts.

Generally, validation logic for generators should live in the generators
themselves, but in some cases similar options must be provided to more than one
generator. To avoid duplicating the logic, place any such validators in here.

To see a list of validators, check out the [API docs](./docs.md).
