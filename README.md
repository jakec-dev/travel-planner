<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/jakec-dev/travel-planner">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Travel Planner</h3>

  <p align="center">
    A web-based app for planning gear to bring for hiking/bikepacking/moto-camping trips.
    <br />
    <a href="https://github.com/jakec-dev/travel-planner"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jakecdev-travel-planner.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/jakec-dev/travel-planner/issues">Report Bug</a>
    ·
    <a href="https://github.com/jakec-dev/travel-planner/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#create-an-item">Create an Item</a></li>
        <li><a href="#update-an-item">Update an Item</a></li>
        <li><a href="#delete-an-item">Delete an Item</a></li>
        <li><a href="#fetch-a-specific-item">Fetch a Specific Item</a></li>
        <li><a href="#fetch-all-items">Fetch All Items</a></li>
        <li><a href="#access-api-documentation">Access API Documentation</a></li>
      </ul>
    </li>
    <li>
      <a href="#roadmap">Roadmap</a>
      <ul>
        <li><a href="#version-1">Version 1</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#testing">Testing</a></li>
        <li><a href="#linting-&-formatting">Linting & Formatting</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Travel Planner is a web-based application for planning your next adventure. Current features include the ability to create, list, update and delete items on your packing list.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [![React.js][react.js]][react-url]
- [![Webpack][webpack]][webpack-url]
- [![Babel][babel]][babel-url]
- [![ESLint][eslint]][eslint-url]
- [![Prettier][prettier]][prettier-url]
- [![Jest][jest]][jest-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need the following software installed in your environment to run this app.

- [node][node-url] >= 18.2.0
- [yarn][yarn-url] >= 1.22.19

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jakec-dev/travel-planner.git
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Build the app
   ```sh
   yarn build
   ```
4. Start the server
   ```sh
   yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The app provides the following functionality:

### Add an Item

Enter the item `Item name` and `Brand` (optional) in the `Add Item` form, then click the `Add Item` button.

[![Add an item][add-item-screenshot]][add-item-screenshot]

<p align="right">(<a href="#top">back to top</a>)</p>

### Update an Item

Send a PUT request to `/items`. The request body should contain the modified item. The modified item will entirely replace the original item, rather than merge fields, so be sure to merge any existing fields before sending the request. For example:

[![Update an item][update-item-screenshot]][update-item-screenshot]

<p align="right">(<a href="#top">back to top</a>)</p>

### Delete an Item

Send a DELETE request to `/items/:id`, where `:id` is the ID of the item to be deleted. No request body is required.

[![Delete an item][delete-item-screenshot]][delete-item-screenshot]

<p align="right">(<a href="#top">back to top</a>)</p>

### Get Detailed Information About an Item

Send a GET request to `/items/:id`, where `:id` is the ID of the item to be fetched. No request body is required.

[![Read an item][read-item-screenshot]][read-item-screenshot]

<p align="right">(<a href="#top">back to top</a>)</p>

### View All Items

Send a GET request to `/items`. No request body is required.

[![Read all items][read-all-items-screenshot]][read-all-items-screenshot]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

### Version 1

- [x] Display all items on page
- [x] Add ability to create, read, update and delete an item
- [x] Use the [Travel Planner Server](https://github.com/jakec-dev/travel-planner-server)'s API to persist data
- [x] Write unit and integration tests
- [x] Write project documentation

See the [open issues](https://github.com/jakec-dev/travel-planner/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

### Testing

This project uses Jest and React Testing Library for testing, and Jest for test coverage reports

```sh
yarn test
yarn test:coverage
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Linting & Formatting

This project uses ESLint for linting using AirBNB's style guide, and Prettier for formatting.

```sh
yarn lint
yarn lint:fix

yarn format
yarn format:write
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jake Clayton

&nbsp;&nbsp;e: [jake@jakec.dev][my-email-url]

&nbsp;&nbsp;w: [jakec.dev][my-website-url]

&nbsp;&nbsp;[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Harrison Croaker](https://github.com/HcroakerDev)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[my-email-url]: mailto:jake@jakec.dev
[my-website-url]: https://jakec.dev
[contributors-shield]: https://img.shields.io/github/contributors/jakec-dev/travel-planner.svg?style=for-the-badge
[contributors-url]: https://github.com/jakec-dev/travel-planner/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jakec-dev/travel-planner.svg?style=for-the-badge
[forks-url]: https://github.com/jakec-dev/travel-planner/network/members
[stars-shield]: https://img.shields.io/github/stars/jakec-dev/travel-planner.svg?style=for-the-badge
[stars-url]: https://github.com/jakec-dev/travel-planner/stargazers
[issues-shield]: https://img.shields.io/github/issues/jakec-dev/travel-planner.svg?style=for-the-badge
[issues-url]: https://github.com/jakec-dev/travel-planner/issues
[license-shield]: https://img.shields.io/github/license/jakec-dev/travel-planner.svg?style=for-the-badge
[license-url]: https://github.com/jakec-dev/travel-planner/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/jakeclayton
[app-screenshot]: images/app-screenshot.png
[real-all-items-screenshot]: images/read-all-items.png
[read-item-screenshot]: images/read-item.png
[add-item-screenshot]: images/add-item.png
[update-item-screenshot]: images/update-item.png
[delete-item-screenshot]: images/delete-item.png
[node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[webpack]: https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white
[webpack-url]: https://webpack.js.org/
[babel]: https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white
[babel-url]: https://babeljs.io/
[eslint]: https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org
[prettier]: https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E
[prettier-url]: https://prettier.io/
[jest]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[jest-url]: https://jestjs.io/
[yarn-url]: https://yarnpkg.com/
