$(document).ready(function() {
	"use strict";
	var quotes = [
	["Life is very interesting... in the end, some of your greatest pains, become your greatest strengths.",
	"Drew Barrymore"],
	["Determine that the thing can and shall be done, and then we shall find the way.",
	"Abraham Lincoln"],
	["I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to what light I have.",
	"Abraham Lincoln"],
	["Always bear in mind that your own resolution to success is more important than any other one thing.",
	"Abraham Lincoln"],
	["In the middle of difficulty lies opportunity.",
	"Albert Einstein"],
	["One doesn't discover new lands without consenting to lose sight of the shore for a very long time.",
	"Andre Gide"],
	["When everything seems like an uphill struggle, just think of the view from the top.",
	"Unknown"],
	["Champions in any field have made a habit of doing what others find boring or uncomfortable.",
	"Unknown"],
	["No one's happiness but my own is in my power to achieve or to destroy.",
	"Ayn Rand"],
	["Happiness is that state of consciousness which proceeds from the achievement of one's values.",
	"Ayn Rand"],
	["No man or woman is uniformly successful… we must all expect a rather high percentage of failure in the things we attempt.",
	"Barnaby Keeney"],
	["Well done is better than well said.",
	"Benjamin Franklin"],
	["The man who makes no mistakes does not usually make anything.",
	"Bishop W.C. Magee"],
	["We must learn our limits. We are all something, but none of us are everything.",
	"Blaise Pascal"],
	["It's not the situation... it's your reaction to the situation.",
	"Bob Conklin"],
	["The important thing is this: To be able at any moment to sacrifice what we are for what we could become.",
	"Charles du Bois"],
	["Better to light one small candle than to curse the darkness.",
	"Chinese Proverb"],
	["Life is just a blank slate, what matters most is what you write on it.",
	"Christine Frankland"],
	["It's the constant and determined effort that breaks down all resistance, sweeps away all obstacles.",
	"Claude M. Bristol"],
	["There are no secrets to success. It is the result of preparation, hard work, learning from failure.",
	"Colin Powell"],
	["Remember, today is the tomorrow you worried about yesterday.",
	"Dale Carnegie"],
	["The successful man will profit from his mistakes and try again in a different way.",
	"Dale Carnegie"],
	["The only limits on human achievement are self-imposed.",
	"Dr. Denis Waitley"],
	["There are two kinds of failures: those who thought and never did, and those who did and never thought.",
	"Dr. Laurence J. Peter"],
	["He that wrestles with us strengthens our nerves and sharpens our skill. Our antagonist is our helper.",
	"Edmund Burke"]
	].sort(function() {
		return 0.5 - Math.random();
	}),
	quotesHTML = "";

	for (var i = 24; i < quotes.length; i++) {
		quotesHTML += "<p class='quote'>&ldquo;" + quotes[i][0] + "&rdquo; <br/> &mdash; <a target='_blank' class='quote-source' href='https://www.google.com/search?q=" + quotes[i][1] + "'>" + quotes[i][1] + "</a></p>";
	}
	document.getElementById("quote").innerHTML = quotesHTML;

}());