import { rehype } from 'rehype';
import rehypeRewrite from 'rehype-rewrite';
import rehypeStringify from 'rehype-stringify';
import slugify from 'slugify';

export interface TocItem {
  id: string;
  weight: number;
  indent: number;
  text: string;
}

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export const tocHeaderSelector = 'h1, h2, h3, h4, h5, h6';

function computeIndent(currentItemWeight: number, tocArray: Array<TocItem>) {
  const tocArrayClone: Array<TocItem> = JSON.parse(JSON.stringify(tocArray)); // we want to work on a copy of the array
  // try to find the closest preceding TOC item which weight is lower (closest 'header' that is 'more important')
  // current item will be added at the end of array that's why we need to start from the end
  // (because we are looking for the closest preceding element!)
  const closestPrecedingTOCItemWithLowerWeight = tocArrayClone
    .reverse()
    .find((item) => item.weight < currentItemWeight);
  if (closestPrecedingTOCItemWithLowerWeight) {
    return closestPrecedingTOCItemWithLowerWeight.indent + 1;
  }
  return 0; // if there is no preceding header with higher weight, then this header should have 0 indentation
}

function generateTOCItem(
  headerText: string,
  tocArray: Array<TocItem>,
  index: number,
  tagName: HeaderType
): TocItem {
  const id = slugify(headerText, {
    lower: true,
    strict: true,
  });

  // check for duplicate ids
  // e.g. for <h2>This is ! header!</h2> and <h2>This is @ header</h2> the id will be 'this-is-header'
  // but they have to be distinct, so in redundant cases we will also append index to the id
  const idIsRedundant = tocArray.some((tocItem) => tocItem.id === id);

  // weight of header e.g. h1 => 1; h4 => 4 etc.
  // the lower the weight the more important is the header h1[1] >> h4[4]
  const weight = parseInt(tagName.replace('h', ''));
  // compute indent value if there already are items in the TOC,
  // otherwise this is the starting toc item -> indent is 0
  const indent = tocArray.length ? computeIndent(weight, tocArray) : 0;

  return {
    id: `${id}${idIsRedundant ? index : ''}`,
    weight,
    indent,
    text: headerText,
  };
}

/**
 * Function that generates Table of Contents and sanitizes html string (content):
 * [this might look like a bad programming practice because this function has two objectives
 * but because parsing is quite expensive it is better to both sanitize and generate TOC at the same time,
 * remember that programming in JS/TS already itself is a bad practice]
 * @param {string} html - to be parsed, sanitized and enriched with automatically generated ids (the latter applies only to headers h1, ..., h6)
 * @returns {
 *     {Array} tocArray - array representing Table of Contents
 *     {string} sanitizedHtmlContent - content as html string (sanitized - safe to use with 'setInnerHtml')
 * }
 */
export function sanitizeHtmlContentAndGenerateTOC(html: string) {
  const tocArray: Array<TocItem> = [];
  const sanitizedHtmlContent = rehype() // parses through html
    .data('settings', { fragment: true }) // html parsing options
    // .use(rehypeSanitize) // sanitize parsed html TODO: figure out a way to enable sanitization and iframes at the same time
    // generate and inject text header id's for TOC sake
    // e.g. <h2>This? IS @ header!</h2> -> <h2 id='this-is-header'>This? IS @ header!</h2>
    .use(rehypeRewrite, {
      selector: tocHeaderSelector,
      rewrite: (node, index) => {
        if (
          node.type === 'element' &&
          node.children[0].type === 'text' &&
          node.properties &&
          index !== null
        ) {
          const headerText = node.children[0].value;
          const tocItem = generateTOCItem(
            headerText,
            tocArray,
            index,
            node.tagName as HeaderType
          );
          tocArray.push(tocItem); // save TOC item
          // set id of the header (so that we can scroll to it via TOC item that points to it)
          node.properties.id = tocItem.id;
          // inject '#' for anchoring mechanism
          node.children.push({
            type: 'element',
            tagName: 'a',
            properties: { href: `#${tocItem.id}`, class: 'header-anchor' },
            children: [{ type: 'text', value: '#' }],
          });
        }
      },
    })
    .use(rehypeStringify)
    .processSync(html)
    .toString();

  return { sanitizedHtmlContent, tocArray };
}

/**
 * _ALTERNATIVELY_ WE COULD USE:
 * const sanitizedHtmlContent = await unified() // import { unified } from 'unified';
 *     .use(rehypeParse, { fragment: true })
 *     .use(rehypeSanitize)
 *     .use(() => {
 *       return (tree) => {
 *         let index = 0;
 *         visit(tree, 'element', (node) => { // import { visit } from 'unist-util-visit';
 *             // ...same logic as for rehypeRewrite approach
 *             index++;
 *         });
 *       };
 *     })
 *     .use(rehypeStringify) // import rehypeStringify from 'rehype-stringify';
 *     .process(html);
 *
 */
