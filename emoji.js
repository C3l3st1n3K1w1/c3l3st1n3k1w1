// Replace every ☕ in the parent page with <emoji-coffee>
(function () {
  const doc = window.parent.document;
  doc.body.innerHTML = doc.body.innerHTML.replace(/☕/g,
    "<emoji-coffee></emoji-coffee>"
  );
})();