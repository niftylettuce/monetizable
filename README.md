
# monetizable

A Node.js server that provides an object oriented API to monetize the external links in your app's content via affiliate relationships.

![getting money](http://dl.dropbox.com/u/219588/dos_equis_getmoney.jpg)

### Goals & Objectives

Provide an open-source version of a content monetization platform (e.g. Skimlinks and VigLink) embodying the following attributes.

* Fast
* Stable
* Flexible

### Benefits & Advantages

* Future-proof monetized external links in your user-facing app by extracting affiliation as a service
* Plug & play with your own affiliate links for full control and transparency into your performance
* Develop strategic and intimate relationships with the affiliate networks (e.g. achieve _CJ Performer_ or _Linkshare Platinum_ status)
* Centralize reporting on clicks, commissions and payouts across all your affiliate networks

## Requirements

  * [node](https://github.com/joyent/node) **>= v0.6.3**
  * [npm](https://github.com/isaacs/npm)
  * [MongoDB](http://www.mongodb.org/display/DOCS/Quickstart)

## Getting Started

  Fork the `monetizable` repo and install the npm dependencies.

      $ git clone git://github.com/daehee/monetizable.git
      $ cd monetizable
      $ npm install -d

  Start the server.

      $ node server

## Documentation

You can find the docs for the API of this server at [http://github.com/daehee/monetizable/](http://github.com/daehee/monetizable/)

## Implemented Affiliate Network APIs

* [Amazon.com](https://affiliate-program.amazon.com/): 0%
* [AvantLink](http://avantlink.com): 0%
* [Buy.at](http://buy.at): 0%
* [Commission Junction](http://cj.com): 0%
* [Impact Radius](http://impactradius.com): 0%
* [LinkConnector](http://linkconnector.com): 0%
* [LinkShare](http://linkshare.com): 0%
* [Pepperjam Exchange](http://pepperjamnetwork.com): 0%
* [Share A Sale](http://shareasale.com): 0%
* [Skimlinks](http://skimlinks.com): 0%
* [VigLink](http://www.viglink.com/?vgref=93614): 0%

## TODO

* Authentication / Authorization
* Charts Dashboard
* Javascript Embed Tag for Automatic Link Parsing
* Output Generation (JSON, XML)
* Input Validation (JSON, XML)
* Fault Isolation
* Logging
* Stats Reporting

## Contributors

* Daehee [@daepar](http://twitter.com/daepar)

## LICENSE

MIT license. See the LICENSE file for details.