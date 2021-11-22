//CLOCK LIBRABRY
//Clock Function by Christian Swinehart 


//var now = clock()

// numerical values for elements of current time
//now.hours // hour in 0–23 'military' time
//now.hour  // hour in 1–12 'am/pm' time
//now.min   // minute
//now.sec   // seconds
//now.ms    // milliseconds
//now.am    // true for hours 0-11
//now.pm    // true for hours 12-23
//
//// numerical values for elements of current date
//now.year    // the full 4-digit year
//now.month   // month number 1–12
//now.moon    // the fullness of the moon 0–1.0
//now.day     // the day 1–{28,29,30,31}
//now.weekday // the day of the week 1-7
//now.season  // the current season 1-4 (starting with spring)

// a string-based representation that can be used as an argument to clockStart
//now.timestamp // "2001/12/31 23:45:56"

// values between 0.0 and 1.0 measuring the current time's %-completion of various cycles
//now.progress.year
//now.progress.season
//now.progress.month
//now.progress.moon
//now.progress.week
//now.progress.day
//now.progress.halfday
//now.progress.hour
//now.progress.min
//now.progress.sec

// string versions of the date & time (in case you want to print it out)
//now.text.time    // "11:45:56 P.M."
//now.text.hour    // "11"
//now.text.hours   // "23"
//now.text.min     // "45"
//now.text.sec     // "56"
//now.text.ampm    // "P.M."
//now.text.date    // "31 Dec 2001"
//now.text.year    // "2001"
//now.text.season  // "Winter"
//now.text.month   // "December"
//now.text.mon     // "Dec"
//now.text.day     // "31"
//now.text.weekday // "Monday"


function setup() {
  createCanvas(800, 800);
  stroke(255);  

}


function draw() {
  var now = clock()


  background('pink');
  var s = now.sec
  var m = now.min
  var h = now.hours
  console.log(m)
 

  let orangerect = color(220, 100, 10);
noStroke()
fill(orangerect);
rect(0, 0, 800, m);

let yellowrect = color(255, 204, 0);
noStroke()
fill(yellowrect);
rect(50, 50, 50, s);

let bluerect = color(10, 20, 70);
noStroke()
fill(bluerect);
rect(100, 50, 50, s*10);

let greenrect = color(10, 80, 50);
noStroke()
fill(greenrect);
rect(150, 50, 50, s*20);

let whiterecteins = color(255, 255, 255);
noFill()
stroke(whiterecteins);
strokeWeight(1)
rect(200, 50, s, s);

let whiterectzwei = color(255, 255, 255);
noFill()
stroke(whiterectzwei);
rect(700, 750, -m*8, -m*8);

ellipse(200, 200, 200, 200)
noStroke(ellipse)

let weißerkreiseins = color(255, 255, 255)
noStroke()
fill(weißerkreiseins)
ellipse(500, 70+5*s, 20, 20)

let weißerkreiszwei = color(255, 255, 255)
noStroke()
fill(weißerkreiszwei)
ellipse(550, 30+10*s, 20, 20)

let weißerkreisdrei = color(255, 255, 255)
noStroke()
fill(weißerkreisdrei)
ellipse(450, 30+15*s, 20, 20)

let weißerkreisvier = color(255, 255, 255)
noStroke()
fill(weißerkreisvier)
ellipse(650, 30+13*s, 20, 20)

let weißerkreisfünf = color(255, 255, 255)
noStroke()
fill(weißerkreisfünf)
ellipse(625, 730-3*s, 20, 20)

let weißerkreissechs = color(255, 255, 255)
noStroke()
fill(weißerkreissechs)
ellipse(550, 730-8*s, 20, 20)

let grünerkreiseins = color(10, 80, 50)
noFill()
stroke(grünerkreiseins)
strokeWeight(10)
ellipse(550, 730-5*s, 20, 20)



}