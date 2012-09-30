/*
 * Disable CTRL+F jQuery plugin
 * A jQuery plugin to disable certain elements on a page from being searched.
 * 
 * https://github.com/seangransee/Disable-CTRL-F-jQuery-plugin
 *
 * Copyright (c) 2012 Sean Gransee (http://www.seangransee.com)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * Example usage:
 * 
 * $('p').disableFind();               // make all paragraphs unsearchable
 * $('.unsearchable').disableFind();   // make all elements with "unsearchable" class unsearchable
 * $(body).disableFind();              // make all text on page unsearchable
 * 
 */


// disableFind() takes an element and injects a random character after each letter
jQuery.fn.disableFind = function(){
    return this.each(function (){
		newHTML = "";                                 // create a new blank string
		stop = false;                                 // boolean to toggle whether we're in a tag or not
		currentElement = $(this);                     // variable to hold the current element
		html = currentElement.html();                 // get html from current element
		for (var i = 0; i < html.length; i++)         // iterate through each character of the html
		{
			newHTML += html[i];                       // insert current character into newHTML
			if (html[i] == '<') { stop = true };      // stop when entering a tag
			if (html[i] == '>') { stop = false };     // continue when exiting a tag
			if (stop == false) {                      // inject dot into newHTML
				newHTML += '<span style="position:absolute; left:-9999px;">'+ '.' +'</span>';
			}
			if (html[i] == ' ') { newHTML += ' '; }   // insert a space if the current character is a space
		}
		currentElement.html(newHTML);                 // replace current element with newHTML
	});
};
