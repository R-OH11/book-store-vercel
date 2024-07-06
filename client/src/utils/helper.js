export function trimParagraph(paragraph, maxLength = 100) {
  if (paragraph?.length <= maxLength) {
    return paragraph;
  }

  const trimmed = paragraph?.substr(0, maxLength);
  const lastSpaceIndex = trimmed?.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    return trimmed?.substr(0, lastSpaceIndex) + "...";
  }
}
