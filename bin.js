#!/usr/bin/env node

const chalk = require('chalk');

// Define colors and styles
const primary = chalk.hex('#36D1DC');    // Vibrant teal for borders
const secondary = chalk.hex('#FF6B6B');  // Coral pink for brackets
const accent = chalk.hex('#58D68D');     // Bright green for URLs
const subtle = chalk.hex('#AEB6BF');     // Subtle gray for dividers
const highlight = chalk.hex('#FFDB58').bold; // Golden yellow for name

// Card dimensions - fixed width for better alignment
const width = 54;

// Create borders with exact width
const topBorder = primary('╭' + '─'.repeat(width) + '╮');
const bottomBorder = primary('╰' + '─'.repeat(width) + '╯');

// Function to create a line with perfectly aligned borders
const createLine = (text) => {
  // Strip ANSI codes for accurate length calculation
  const cleanText = text.replace(/\u001b\[\d+(;\d+)*m/g, '');
  const padding = width - cleanText.length;
  return primary('│') + text + ' '.repeat(padding) + primary('│');
};

// Empty line and divider
const emptyLine = createLine(' '.repeat(width));
const divider = createLine(' ' + subtle('━'.repeat(width - 2)) + ' ');

// Build the card with precise spacing
const card = [
  '',
  topBorder,
  emptyLine,
  createLine(' ' + secondary('{') + highlight('Kok Sing Khong') + secondary('}') + ' ' + primary('</') + accent('kskhong.dev') + primary('>')),
  divider,
  emptyLine,
  createLine(' ' + secondary('⚙') + '  ' + chalk.cyanBright('Work') + '    :: ' + chalk.white('IBM Australia')),
  createLine(' ' + highlight('★') + '  ' + chalk.cyanBright('GitHub') + '  :: ' + chalk.greenBright.underline('https://github.com/khongks')),
  createLine(' ' + chalk.magentaBright('✉') + '  ' + chalk.cyanBright('Email') + '   :: ' + chalk.greenBright.underline('khongks@gmail.com')),
  emptyLine,
  divider,
  createLine(' ' + subtle('>') + ' ' + subtle('Run') + ' ' + secondary('npx') + ' ' + highlight('koksingkhong') + ' ' + subtle('anytime to see this card')),
  emptyLine,
  bottomBorder,
  ''
].join('\n');

console.log(card);