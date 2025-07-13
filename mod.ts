import chalk from "chalk";

const primary = chalk.hex("#36D1DC");
const secondary = chalk.hex("#FF6B6B");
const accent = chalk.hex("#58D68D");
const subtle = chalk.hex("#AEB6BF");
const highlight = chalk.hex("#FFDB58").bold;

const width = 54;

const topBorder = primary(`╭${"─".repeat(width)}╮`);
const bottomBorder = primary(`╰${"─".repeat(width)}╯`);

const createLine = (text: string) => {
  // deno-lint-ignore no-control-regex
  const cleanText = text.replace(/\u001b\[\d+(;\d+)*m/g, "");
  const padding = width - cleanText.length;
  return primary("│") + text + " ".repeat(padding) + primary("│");
};

const emptyLine = createLine(" ".repeat(width));
const divider = createLine(" " + subtle("━".repeat(width - 2)) + " ");

const card = [
  topBorder,
  emptyLine,
  createLine(
    "            " +
      highlight("Yuto Yoshino") +
      " " +
      primary("/") +
      " " +
      accent("yossydev"),
  ),
  divider,
  emptyLine,
  createLine(
    " " +
      "Work" +
      "    :: " +
      chalk.white("Software Engineer in Tokyo"),
  ),
  createLine(
    " " +
      "X" +
      "       :: " +
      chalk.greenBright.underline("https://x.com/yossydev"),
  ),
  createLine(
    " " +
      "Bluesky" +
      " :: " +
      chalk.greenBright.underline("https://bsky.app/profile/yossydev.com"),
  ),
  createLine(
    " " +
      "GitHub" +
      "  :: " +
      chalk.greenBright.underline("https://github.com/yossydev"),
  ),
  createLine(
    " " +
      "Email" +
      "   :: " +
      chalk.greenBright.underline("yossydev@yossy.dev"),
  ),
  createLine(
    " " +
      "Site" +
      "    :: " +
      chalk.cyan.underline("https://yossy.dev/"),
  ),
  emptyLine,
  divider,
  createLine(
    " " +
      subtle(">") +
      " " +
      subtle("Run") +
      " " +
      secondary("npx") +
      " " +
      highlight("yossydev") +
      " " +
      subtle("anytime to see this card"),
  ),
  emptyLine,
  bottomBorder,
  "",
].join("\n");

console.log(card);
