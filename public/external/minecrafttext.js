function generateMinecraftText(minecraftText, blackShadow = false) {
  // Generates HTML from Minecraft text
  if (minecraftText === null || minecraftText === undefined) {
    return "";
  }

  const escapeHtml = (text) => {
    return text
      .replace(/&/g, '&#38;')
      .replace(/</g, '&#60;')
      .replace(/>/g, '&#62;')
      .replace(/"/g, '&#34;')
      .replace(/'/g, '&#39;');
  };

  const formatMap = {
    'l': 'ml', // bold
    'm': 'mm', // strikethrough
    'n': 'mn', // underline
    'o': 'mo', // italic
    'k': 'mk'  // obfuscated (not really)
  };

  const validColors = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `e`, `f`];

  const escapedText = escapeHtml(minecraftText);

  const regex = /[^§]*[^§]|§[0-9a-z#][^§]*/g;
  const segments = escapedText.match(regex) || [];

  let result = "";

  // current state
  let currentColor = null;
  let activeClasses = new Set();
  let buffer = "";

  // outputs buffer with all active formatting
  const flushBuffer = () => {
    if (!buffer) return;

    let classes = [];

    if (currentColor) {
      classes.push(`m${currentColor}`);

      // adds shadow for dark colours
      if (blackShadow && (currentColor === '0' || currentColor === '1')) {
        classes.push('shadowf');
      }
    }

    activeClasses.forEach(cls => classes.push(cls));

    let attributes = classes.length > 0 ? ` class="${classes.join(' ')}"` : '';
    result += `<span${attributes}>${buffer}</span>`;
    buffer = "";
  };

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const formatCode = segment.match(/§([0-9a-z#])/);

    if (formatCode) {
      const code = formatCode[1];

      flushBuffer();

      if (validColors.includes(code)) {
        currentColor = code;
        activeClasses.clear();
      } else if (code === 'r') {
        currentColor = null;
        activeClasses.clear();
      } else if (formatMap[code]) {
        activeClasses.add(formatMap[code]);
      } else if (code === '#') {
        // todo for whenever Hypixel updates to 1.21
      }

      const remainingText = segment.substring(formatCode[0].length);
      if (remainingText) {
        buffer += remainingText;
      }
    } else {
      // regular text, treat accordingly
      buffer += segment;
    }
  }

  flushBuffer();

  return result;
}
