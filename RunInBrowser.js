JSON.stringify(
  Array.from(document.querySelectorAll("#custom_emoji tr.emoji_row")).map(
    row => {
      const tds = row.getElementsByTagName("td");
      const [imageEl, nameEl, typeEl, addedByEl] = tds;
      const image = imageEl.getElementsByTagName("span")[0].dataset.original;
      const name = nameEl.innerHTML.trim().slice(1, -1);
      return { image, name };
    }
  )
);
