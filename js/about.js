//Header replaced
const aboutHeading = document.querySelector("h1");

function updateHeading() {
  let headingReplacer = aboutHeading.innerText;
  headingReplacer = headingReplacer.replace(/The/g, "Replaced ");
  aboutHeading.innerText = headingReplacer;
}

const headingReplacer = setInterval(updateHeading, 4000);

//Blockquote replaced
const aboutBlockquote = document.querySelector("blockquote");

function updateBlockquote() {
  let blockquoteReplacer = aboutBlockquote.innerText;
  blockquoteReplacer = blockquoteReplacer
    .replace(/The/g, "Replaced ")
    .replace(/the/g, "replaced ");
  aboutBlockquote.innerText = blockquoteReplacer;
}

const blockquoteReplacer = setInterval(updateBlockquote, 4000);
