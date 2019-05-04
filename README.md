# useful_tips

## Table of Contents

# 1. Setup 
## 1-1. Backend - Server
* Created a virtual environment.
  - Ran `pyenv virtualenv useful_tips` in terminal.
* Activated the virtual environment.
  - Ran `pyenv activate useful_tips` in terminal.
* Installed Django
  - Ran `pip install django` in terminal.
* Create the server
  - Ran `django-admin startproject server` in terminal.
* Freezed backend packages
  - Ran `pip freeze > requirements.txt` in terminal.
* Created the Tips App
  - Ran `django-admin startapp tips` in terminal.

## 1-2. Frontend - Client
* Install Vue through Vue CLI 3
  - Ran `vue create client` in terminal.
  - Manually selected options
    + Features : Babel, Router, Vuex, CSS Pre-processor, Linter/Formatter
    + Use history mode for Router : yes
    + Pick a CSS pre-processor? : Sass/SCSS
    + Pick a linter / formatter config : ESLint + Prettier
    + Pick additional lint features : Lint on Save
    + What do you prefer placing config? : In dedicated config files
* I had an error : `Unhandled rejection Error: EACCES: permission denied`.
  - A solution: Run `npm cache clear —-force` in terminal.
  - Another solution : Run 
  `sudo chown -R $(whoami) ~/.npm` in terminal. 
  - If none of these works for you, check out [this StackOverflow post](https://stackoverflow.com/questions/50639690/on-npm-install-unhandled-rejection-error-eacces-permission-denied).
* Installed Vuetify
  - Ran `vue add vuetify` in terminal.
    + Choose a preset? : Default (recommended)
      - The default preset has [a-la-carte](https://vuetifyjs.com/en/framework/a-la-carte) already enabled for you.
* High Vulnerability Issue : NPM Package `Tar`
  - Solved the issue by including code of `Tar` in package-lock.json with code in [this link](https://stackoverflow.com/a/55766169/10021131).

# 2. Run the server
* <b>Backend</b> : `pyenv activate useful_tips` - `python manage.py runserver`
* <b>Frontend</b> : `cd client` - `npm run serve`

- - -

# 2. Blog Posts
- - -


# 4. References
* <b>Setup</b>
  - [Simple Movies web app with Vue, Vuetify and Django. Part 1: Setup](https://medium.com/@samy_raps/simple-movies-web-app-with-vue-vuetify-and-django-part-1-setup-6351c02327a5)

# 5. Contributing
If you see any typos or formatting errors in the website, please do not hesitate to open a pull request and fix it! :)
- - -

# 6. License
This project is open source and available under the [MIT License](https://github.com/cmdlhz/portfolio_website_ver2/blob/master/LICENSE).
- - -

2019 © Jen Lim 