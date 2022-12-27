
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/SouaadMa/image-processing-api-ALX">
    <img src="assets/full/alx.jpg" alt="ALX_Logo" width="300" height="100">
  </a>

<h3 align="center">Image Processing API Submission</h3>

  <p align="center">
    This is a submission for the Fullstack JavaScript Nanodegree program.
    This project serves two purposes: to prepare for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects.
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
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
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#available-scripts">Available scripts</a></li>
      </ul>
    </li>

  </ol>
</details>




### Built With

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org)
* [Express](https://expressjs.com/)
* [Jasmine](https://jasmine.github.io/)
* [Supertest](https://github.com/ladjs/supertest)
* [Sharp](https://github.com/pmb0/express-sharp)



<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SouaadMa/image-processing-api-ALX.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


<!-- USAGE EXAMPLES -->
## Usage

1. Add your image.jpg to assets/full directory
2. Start the server
   ```sh
   npm run start
   ```
3. Access [localhost:3000/images?fileName=image&width=400&height=300](http://localhost:3000/images?fileName=image&width=400&height=300)
4. The image will be displayed in the browser and loaded in assets/thumb (if the same image exists with the same dimensions in assets/thumb it will be shown without processing again).

## Available scripts
1. Build the typescript inside src/ folder
  ```sh
  npm run build
  ```
2. Build the typescript code and start the server
  ```sh
   npm run start
    ```
3. Build and run tests
  ```sh
   npm run test
    ```
4. Format and lint the code
  ```sh
   npm run lint
   npm run prettier
    ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


