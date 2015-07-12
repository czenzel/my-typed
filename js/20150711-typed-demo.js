$(document).ready(function() {

// Language Information - Shared by Functions
// Keep outside of any each or other loops
var lang_ts_Spanish = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

$('time').each(function() {
// Typed Format: YYYY-MM-DDTHH:MM-TZ00
var blogTimestamp = $(this).attr('datetime');

// Replace contents of time with language
// Current language: July 11, 2015 HH:MM
// Current format: English Day, Year Hour:Minute
var tsRegex = /^(\d{4})\-(\d{2})\-(\d{2})T(\d{2})\:(\d{2})/ig;
var tsMatch = tsRegex.exec(blogTimestamp);

// Process Match
if (tsMatch) {

// Process groups
var tsYear = tsMatch[1];
var tsMonth = tsMatch[2];
var tsDay = tsMatch[3];
var tsHour = tsMatch[4];
var tsMinute = tsMatch[5];

// Get the month language
var loopMonth = lang_ts_Spanish[(parseInt(tsMonth,0) - 1)];

// Build our string
var loopSpanish = loopMonth + " " + tsDay + " de " + tsYear + " " + tsHour + ":" + tsMinute;

// Replace the dates
$(this).text(loopSpanish);

}
});

// Replace the "in" text with the new language (under the post-meta)
// This function may need additional testing!!!
$('.post-meta').each(function() {

// Get the HTML because we have mixed content
var metaValue = $(this).html();

// Replace the text
metaValue = metaValue.replace(' in ', ' en ');

// Replace now
$(this).html(metaValue);

});

// Replace read more
$('.read-more').text('leer más');

});
