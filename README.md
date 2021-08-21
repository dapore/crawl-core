# Crawler Core
Crawl any(almost) website with human actions
## Description

This library takes human friendly actions and turns that into data

### Usage

```js
import createCrawler from '@dapore/crawl-core'
const browser = // get a browser instance
const crawler = createCrawler(broeser)
const result = crawler.crawl(taskDifinition)
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
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
