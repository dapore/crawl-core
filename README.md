# Crawler Core
Crawl any website with human-readable actions/tasks.
## Description

An Effective Web crawler is supposed to mimic human behavior (actions/tasks) as close as possible.
The library is modeled after the human browsing process. It will navigate and perform actions/tasks on the website just like a human being would.
Crawl-core generalizes the human browsing steps into a JSON configuration to provide a general-purpose web crawler powerful enough to go anywhere any human being can go on the web to get data.

### JSON Configuration
Below is a sample JSON configuration that will visit and fill out a login form on a website.

```
[
  {
    "actionName": "visit",
    "config": {
      "id": "visit",
      "entrypointUrl": "https://form.example.com"
    }
  },
    {
    "actionName": "form",
    "config": {
      "id": "login",
      "fields": [
        {
          "inputType": "text",
          "selector": "{{usernameSelector}}",
          "value": "{{usernameValue}}"
        },
        {
          "inputType": "text",
          "selector": "{{passwordSelector}}",
          "value": "{{passwordValue}}"
        }
      ],
      "submitSelector": "{{{submitLoginSelector}}}",
      "successCriteria": {
        "selector": "{{{successCriteraSelector}}}"
      },
      "failureCriteria": {
        "selector": "{{{failureCriteriaSelector}}}",
        "viewOptions": {
          "message": "Please log in and crawling will continue . . ."
        }
      }
    }
  }]
```
1. The crawler will first perform the visit action, by visiting the website https://form.example.com on your browser
2. Then it will look for the user and password and pass in the provided values
3. After that it will check for success and/or failure criteria, in the case of a failure, the crawler pause for human input.

There are a lot more actions that the crawler can perform.

### Features
There are a tonne of features included
1. The ability to perform a lot of browse actions
2. The ability to skip actions based on the input variables
3. The ability to group tasks for instance we want to skip a group based on input variables
4. The ability to compile the actions before passing them to the crawl process using handlebar templates
5. Check for success and/or failure after running an action
6. Using control structures in the crawl process like loops and decisions - Coming Soon
7. Save and restore a session  - Coming Soon
8. And a lot more - Use the issues tab to request more features

### Usage

```js
import createCrawler from '@dapore/crawl-core'
const browser = // get a browser instance
const crawler = createCrawler(browser)
const result = crawler.crawl(task definition)
/* const taskDefinition = {
  id,
  groups: [
    {}
  ]
}
*/
```
### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `yarn run`.
View them with

```
$ yarn run
```
## License

This npm package is Copyright (c) 2016-2017 Dapore Global.

## Warranty

This software is provided by the copyright holders and contributors 'as is' and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however, caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
