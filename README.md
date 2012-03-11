A jQuery plugin to disable certain elements on a page from being searched. Check out the demo to see it in action.

### How to use:
Include jQuery and disableFind.js.
<pre>
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="disableFind.js"&gt;&lt;/script&gt;
</pre>

Call the disableFind() function on the element(s) you want to make unsearchable.
<pre>
$('p').disableFind();               // make all paragraphs unsearchable

$('.unsearchable').disableFind();   // make all elements with class "unsearchable" unsearchable

$(body).disableFind();			    // make all text on page unsearchable
</pre>