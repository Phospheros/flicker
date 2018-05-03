var flicker;

function setup() {
	createCanvas(windowWidth, windowHeight);
	flicker = color(0);
	frameRate(2);	// Frames per second. The parameter should be twice the target frequency, ie one full cycle of on/off.
}

function draw() {
	background(flicker);
	flicker = (frameCount % 2 == 0) ? color(0) : color(255);
}

var toggleLoop = true;

function mousePressed() {
	if (!toggleLoop) noLoop();
	else loop();
	toggleLoop = !toggleLoop;
}

/*
    Delta wave – (0.5 – 3 Hz)			associated with the deep stage 3 of NREM sleep
    Theta wave – (4 – 7 Hz)				meditative, drowsy, hypnotic or sleeping states, but not during the deepest stages of sleep
    Alpha wave – (8 – 13 Hz)			wakeful relaxation with closed eyes
    Mu wave – (7.5 – 12.5 Hz)			present [...] before and after the execution of a motor task and its accompanying desynchronization
    SMR wave – (12.5 – 15.5 Hz)		stronger [in] amplitude when the corresponding sensorimotor areas are idle, e.g. during states of immobility
    Beta wave – (16 – 31 Hz)			associated with normal waking consciousness [note there are three sections of Beta]
    Gamma wave – (32 – 100 Hz)		may be implicated in creating the unity of conscious perception [concentrated in the range of 25 - 40Hz]

		Reference starts with
		https://en.wikipedia.org/wiki/Alpha_wave
		and individual articles linked therefrom.
*/
