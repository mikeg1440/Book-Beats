<!--
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
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
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/mikeg1440/repo">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Book Beats</h3>

  <p align="center">
    Take a book your reading and get a AI generated a sound track to listen to while reading.
    <br />
    <a href="https://github.com/mikeg1440/repo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mikeg1440/repo">View Demo</a>
    ·
    <a href="https://github.com/mikeg1440/repo/issues">Report Bug</a>
    ·
    <a href="https://github.com/mikeg1440/repo/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Todo](#todo)
  - [Ideas](#ideas)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## Todo

- [ ] Replace await with updated `.then()` use
- [x] Add mock endpoints with saved data so we don't use up free requests for API keys
- [ ] Display video playlist incase first video isn't what user wanted
  - [x] Implement a overlay that toggles with a button
  - [x] Load song names
  - [x] Add click functionality to change video
  - [ ] Change song data to pass a object instead of just song name
  - [ ] Add thumbnail image and more formatting to emphasize song name
  - [ ] Save song object instead of just name
- [ ] Display playlist that AI suggested from book title
  - [ ] Add song click functionality that changes song from playlist
- [ ] Change test api calls back to openai api calls
- [ ] Add loading overlay

### Ideas

- [ ] Give users ability to select from the the top 3 youtube videos in case the first one isn't good
- [ ] Display the full list of songs returned by the AI
  - [ ] Autoplay the next song in the list when a song finishes
  - [ ] Display playlist for user to see
  - [ ] Allow user to select from playlist

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo`, `twitter_handle`, `email`

### Built With

- [React.js]()
- [Node.js]()
  - [google-search-results-nodejs](https://github.com/serpapi/google-search-results-nodejs)
- [OpenAI]()

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

Need to create a `.dotenv` file with the following API keys

```
OPENAI_API_KEY=YOUR_KEY
SERP_API_KEY=YOUR_KEY

```

### Installation

1. Clone the repo

```sh
git clone https://github.com/mikeg1440/repo.git
```

2. Install NPM packages

```sh
npm install
```

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/mikeg1440/repo/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Mike G - [@mylogicbytes1](https://twitter.com/mylogicbytes1)

Project Link: [https://github.com/mikeg1440/repo](https://github.com/mikeg1440/repo)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- []()
- []()
- []()

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/mikeg1440/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/mikeg1440/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mikeg1440/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/mikeg1440/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/mikeg1440/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/mikeg1440/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/mikeg1440/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/mikeg1440/repo/issues
[license-shield]: https://img.shields.io/github/license/mikeg1440/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/mikeg1440/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/michaelgaudreau
[product-screenshot]: images/screenshot.png
