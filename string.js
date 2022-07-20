// .length

var str = "                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. =>                                                                                                                                  ";
a = str.length;
document.write("this is .length property of string " + a);
// LowwerCase
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.toLowerCase();
document.write("this is toLowerCase method => " + a);

//uperCase
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.toUpperCase();
document.write("this is toUpperCase method => " + a);


//includes
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.includes("150s");
document.write("this is includes method => " + a);

//startWith
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.startsWith("Lorem");
b = str.startsWith("lorem");
document.write("this is startWith method => " + a);
document.write("<br>")
document.write("this is startWith method => " + b);

//endsWith
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.endsWith("Ipsum.");
b = str.endsWith("Ipsum");
document.write("this is endsWith method => " + a);
document.write("<br>")
document.write("this is startWith method => " + b);

//search
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.search("it");
document.write("this is search method => " + a);

//match
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.match("123");
document.write("this is match method => " + a);
document.write("<br>")
b = str.match("versions");
document.write("this is match method => " + b);

// indexOf
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.indexOf("1500s");
document.write("this is indexOf method => " + a);

// lastIndexOf
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.lastIndexOf(".");
document.write("this is lastIndexOf method => " + a);

// replace
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.replace(".","?");
b = str.replace("simply","?");
document.write("this is replace method => " + a);
document.write("<br>")
document.write("<br>")
document.write("this is replace method => " + b);

// trim
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.trim();
document.write("this is trim method => " + a);

// charAt
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.charAt("265");
document.write("this is charAt method => " + a);

// concate

var str1 = "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of RY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING";
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.concat(str1);
document.write("this is concat method => " + a);

//split
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.split(".");
document.write("this is split method => " + a);

// repeat
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.repeat(2);
document.write("this is repeat method => " + a);

//slice
document.write("<br>")
document.write("<br>")
document.write("<br>")
a = str.slice(100,110);
document.write("this is slice method => " + a);

//toString
document.write("<br>")
document.write("<br>")
document.write("<br>")
let test = 532342;
a = test.toString()
document.write("this is toString method => " + a)
document.write("<br>");
document.write(typeof a)




