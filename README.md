# Angular Atomic App

This is a sample for building an Angular 4 web app based on the atomic web design principles and best of breed industry design patterns.

# Why Atomic ?

* The concept is based on Brad Frost "Atomic Web Design"
* Atoms / Molecules - Bootstrap , Google Fonts , Font Awesome
* Organisms / Templates - Built as a separate project and then used in the main application [Angular Atomic Library](https://github.com/tsukhu/angular-atomic-library)

<p align="center">
    <img  alt="Tipe" src="./pics/angular-atomic-app.png" class="img-responsive">
</p>

# Atomic Library Dependency

* This project is based on the angular atomic library so we need to "link" to that (for dev mode). Once the library and the app is ready you can publish the angular-atomic-library to an npm registry and then use "npm install angular-atomic-library --save" to import the latest version.

## Using `npm link`

Check out and build the angular-atomic-library "https://github.com/tsukhu/angular-atomic-library.git"
```bash
git clone https://github.com/tsukhu/angular-atomic-library.git
cd angular-atomic-library
npm install
```
In you library (i.e angular-atomic-library) root folder: (Separate Terminal)

```bash
# Create symbolic link
npm link
```

<p align="center">
    <img  alt="Tipe" src="./pics/step1_link.png" class="img-responsive">
</p>

```bash
# Build library in watch mode
npm build:watch
```

In the **angular-atomic-app** project folder that should consume the library: (Separate Terminal)

The below steps will import your library into your project's source code

```bash
# Link you library to the project
npm link "angular-atomic-library"
```
<p align="center">
    <img  alt="Tipe" src="./pics/step2_link.png" class="img-responsive">
</p>

```bash
# Build your project
npm start
```

Now, once you update your library source code it will automatically be re-compiled and your project will be re-built so you may see library changes instantly.

# License
 [MIT](/LICENSE)
